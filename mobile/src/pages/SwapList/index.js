import React, { useState, useEffect } from 'react';
import {  FlatList, AsyncStorage, TouchableOpacity,  Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';

import api from '../../services/api';

import styles from './styles';

 function SwapList({ isFocused }) {

  const [swaping, setSwaping] = useState([]);

  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  async function loadSwap() {

    setLoading(true);// metodo para atualizar a pagina
    const userId = await AsyncStorage.getItem('userId');
    const response = await api.get(`/${userId}/swappings`);
    setSwaping(response.data);
    setLoading(false);// espera
  }

  useEffect(() => {
  if(isFocused){
    LoadNome();
    loadSwap();
  }

  }, [isFocused]);

  async function refresList() {
    setRefreshing(true);


    await loadSwap();
    await LoadNome();


    setRefreshing(false);
  }

  async function handleAcept(id){
    await api.post(`/swappings/${id}/approvals`);
    
  }
  return (
    <>
 
    <View style={styles.container} >

     


      <Text style={styles.title}>Lista de Postagem de trocas concluidas. </Text>

      <FlatList
        data={swaping}
        style={styles.deliveryList}
        keyExtractor={swaping => String(swaping._id)}
        
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadSwap()}
        onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: swaping }) => (
          <TouchableOpacity onPress={() => handleAcept(swaping._id)}>
          <View style={styles.Conteiner} >

             <Image source={{ uri: swaping.serviceImage }} style={styles.avatar} /> 
            <View style={styles.ConteinerText}>
              <Text style={styles.Title}>{swaping.title}   </Text>
              <Text style={styles.subtitle}>{swaping.status ? 'FINALIZADO' : 'EM ANDAMENTO'}</Text>
            </View>

          </View>

        </TouchableOpacity>
        )}
      />

    </View>
    </>
  );
}
export default withNavigationFocus(SwapList);
