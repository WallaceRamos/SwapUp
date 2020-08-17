import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, AsyncStorage, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';


import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

function SolicitationList({ isFocused }) {
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
    const userId = await AsyncStorage.getItem('userId');
    const response = await api.get(`/${userId}/solicitations`);
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


    setRefreshing(false);
  }

  function navigateToDetail(service) {
    navigation.navigate('DetailSolicitation', { service });
  }
  return (
    <>
 
    <View style={styles.container} >

      <Text style={styles.title}>Lista de Solicitações de serviços feitas. </Text>

      <FlatList
        data={service}
        style={styles.deliveryList}
        keyExtractor={service => String(service._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadService()}
        onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: service }) => (
          <TouchableOpacity onPress={() => navigateToDetail(service)}>
              
          <View style={styles.Conteiner} >

        <Image source={{ uri: service.serviceImage }} style={styles.avatar} />
        <View style={styles.ConteinerText}>
          <Text style={styles.Title}>Solicitação de:  </Text>
          <Text style={styles.description}>{service.title}   </Text>
          <Text style={styles.category}>{service.category}</Text>
        </View>

      </View>
       
      </TouchableOpacity>
        )}
      />

    </View>
    </>
  );
}
export default withNavigationFocus(SolicitationList);
