import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Alert, Text, Image, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';


import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

function Notifications({ isFocused }) {
  const navigation = useNavigation();
  const [service, setService] = useState([]);

  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  async function loadService() {

    setLoading(true);// metodo para atualizar a pagina
    const userId = await AsyncStorage.getItem('userId')
    const response = await api.get(`/notifications/${userId}`);
   
    setService(response.data);
    setLoading(false);// espera
  }

  useEffect(() => {
    if(isFocused){
      LoadNome();
      loadService();
  }

  }, [isFocused]);

  async function refresList() {
    setRefreshing(true);


    await loadService();
    await LoadNome();


    setRefreshing(false);
  }

  

  async function handleAcept(service) {
  
    const dados = {
      
      serviceImage: service.serviceImage,
      title: service.title,
      category: service.category,
      description: service.description
    };
    const userId = await AsyncStorage.getItem('userId');
    await api.post(`/${userId}/services/${service.service}/swappings`, dados);
    await api.post(`/${service.userRegister}/services/${service.service}/swappings`, dados);

    await api.delete(`/${userId}/notifications/${service._id}`);
    await api.delete(`/${userId}/services/${service.service}`);

    Alert.alert('Notificação aceita com sucesso!')
    navigation.navigate('SwapTabs');
  }
  async function handleReject(id) {
    const userId = await AsyncStorage.getItem('userId')
    await api.delete(`/${userId}/notifications/${id}`)
    Alert.alert('Notificação regeitada com sucesso!')
    navigation.navigate('ServiceList');
  }
  return (
    <>
      
      <View style={styles.container} >

        <View style={styles.header}>
          <View style={styles.headerContainerLogo}>
            <Image source={logo} style={styles.headerLogo} />
            <Text style={styles.headerTitulo}>Notificação</Text>
          </View>

          <View >

            <Text style={styles.headerText}>
              Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
            </Text>



          </View>

        </View>


        <Text style={styles.title}>Lista de notificações de solicitação de serviços. </Text>

        <FlatList
          data={service}
          style={styles.deliveryList}
          keyExtractor={service => String(service._id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReached={() => loadService()}
          onEndReachedThreshold={0.2}
          onRefresh={refresList}
          refreshing={refreshing}
          renderItem={({ item: service }) => (
            <TouchableOpacity onPress={() => { }}>
              <View style={styles.ConteinerList} >

                <Image source={{ uri: service.serviceImage }} style={styles.avatarList} />
                <View style={styles.ConteinerTextList}>
                  <Text >Solicitação de Serviço: </Text>
                  <Text style={styles.TitleList}>{service.title}</Text>
                  <View style={styles.buttonContainerList}>

                    <TouchableOpacity
                      onPress={() => handleAcept(service)}
                      style={styles.BotaoAceitarList}>
                      <Text style={styles.BotaoAceitarTextList}>Aceitar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleReject(service._id)}
                      style={styles.BotaoRecusarList}>
                      <Text style={styles.BotaoRecusarTextList}>Recusar</Text>
                    </TouchableOpacity>
                  </View>
                </View>


              </View>
            </TouchableOpacity>
          )}
        />

      </View>
    </>
  );
}
export default withNavigationFocus(Notifications);
