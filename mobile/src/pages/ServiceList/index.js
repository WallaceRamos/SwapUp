import React, { useState, useEffect } from 'react';
import { FlatList, AsyncStorage, TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

function ServiceList({ isFocused }) {
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
    const response = await api.get('/services');// chamada da api
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


    await loadService()
    await LoadNome();

    setRefreshing(false);
  }

  function navigateToDetail(service) {
    navigation.navigate('DetailService', { service });
  }
  return (
    <>
    
    <View style={styles.container} >

      <View style={styles.header}>
        <View style={styles.headerContainerLogo}>       
           <Image source={logo} style={styles.headerLogo} />
          <Text style={styles.headerTitulo}>Home</Text>
        </View>

        <View >

          <Text style={styles.headerText}>
            Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
          </Text>



        </View>

      </View>


      <Text style={styles.title}>Lista de postagem de serviços para serem solicitados. </Text>

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
          <View style={styles.containerList}>
            <View style={styles.containerService}>

              <TouchableOpacity onPress={() => navigateToDetail(service)}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: service.serviceImage_url }} style={styles.imageService} />
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.titleService}>{service.title}</Text>
                  <Text style={styles.descriptionService}>{service.category}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

    </View>
    </>
  );
}
export default withNavigationFocus(ServiceList);