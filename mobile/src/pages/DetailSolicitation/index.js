import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions, AsyncStorage, Alert } from 'react-native';

import styles from './styles';


import api from '../../services/api';

export default function DetailSolicitation() {

  const SCREEN_WIDTH = Dimensions.get('screen').width

  const navigation = useNavigation();
  const route = useRoute();

  const dado = route.params.service;
  const [solicitationId,  setSolicitation] = useState(dado._id);

  function navigateBack() {
    navigation.goBack()
  }

  async function handleDelete(){
    const userId = await AsyncStorage.getItem('userId')
    await api.delete(`${userId}/solicitations/${solicitationId}`)
    
    Alert.alert('Solicitção cancelada com sucesso!')
    navigation.navigate('SwapTabs')
  }
   
  return (
    <>
     
      <View style={styles.header}>


        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={38} color="#fff" />
        </TouchableOpacity>
       
        <Text style={styles.headerTitulo}>Detalhes</Text>


      </View>
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <View>
            <View style={styles.ConteinerDatalhe}>
              <Image
                source={{ uri: dado.serviceImage }}
                style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
              />

              <Text style={styles.TituloDetalhe}>{dado.title}</Text>

              <Text style={styles.SubTituloDetailhe}>Categoria</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{dado.category}</Text>

              <Text style={styles.SubTituloDetailhe}>Descrição</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{dado.description}</Text>
            </View>

            <View >
             
            </View>

             <TouchableOpacity
              onPress={handleDelete}
              style={styles.swap}>
              <Text style={styles.swapText}>Cancelar Solicitação</Text>
            </TouchableOpacity> 

          </View>

        </ScrollView>
      </View>
    </>
  );
}