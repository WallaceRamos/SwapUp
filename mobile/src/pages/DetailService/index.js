import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions, AsyncStorage, Alert } from 'react-native';

import styles from './styles';


import api from '../../services/api';

export default function DetailService() {

  const SCREEN_WIDTH = Dimensions.get('screen').width

  const navigation = useNavigation();
  const route = useRoute();

  const service = route.params.service;
  const url = `${global.IP_ADDRESS}/images`;

  const [dado, setDado] = useState('');
  const [dadoUser, setDadoUser] = useState('');
  const [serviceId, setServiceId] = useState(service._id);

  const [status, setStatus] = useState('Em Andamento');
  

  useEffect(() => {
    async function loadDetalhe() {
      const response = await api.get(`services/${serviceId}`);
      setDado(response.data);
      setDadoUser(response.data.user);

    }

    loadDetalhe();

  }, []);

  const [serviceImage, setserviceImage] = useState(`${url}/${service.serviceImage}`);
  const [title, setTitle] = useState(service.title);
  const [category, setCategory] = useState(service.category);
  const [description, setDescription] = useState(service.description);


  function navigateBack() {
    navigation.goBack()
  }

  async function handleSolicitar() {
 
const dados = {
  status,
  serviceImage,
  title,
  category,
  description
}

    const userId = await AsyncStorage.getItem('userId')
    const response = await api.post(`${userId}/services/${serviceId}/solicitations`, dados )
   
   
    const userNotify = dadoUser.id
    await api.post(`/${userNotify}/notifications/${serviceId}/${userId}`, dados)
    Alert.alert('Solicitação Enviada com sucesso.')
    navigation.navigate('ServiceList')
    
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

          <View data={dado} key={post => String(post._id)}>
            <View style={styles.ConteinerDatalhe}>
              <Image
                source={{ uri: dado.serviceImage_url }}
                style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
              />

              <Text style={styles.TituloDetalhe}>{dado.title}</Text>

              <Text style={styles.SubTituloDetailhe}>Categoria</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{dado.category}</Text>

              <Text style={styles.SubTituloDetailhe}>Descrição</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{dado.description}</Text>
            </View>

            <View data={dadoUser} key={post => String(post._id)}>
              <TouchableOpacity>
                <View style={styles.ConteinerAvatarTitle}>
                  <Text style={styles.SubTituloDetailhe}>Propietario</Text>
                </View>
                <View style={styles.ConteinerAvatar}>

                  <Image source={{ uri: dadoUser.userImage_url }}
                    style={styles.avatar}

                  />

                  <Text style={styles.name}>{dadoUser.name}  /  </Text>
                  <Text style={styles.email}>{dadoUser.email}</Text>


                </View>
              </TouchableOpacity>


            </View>

            <TouchableOpacity
              onPress={() => handleSolicitar()}
              style={styles.swap}>
              <Text style={styles.swapText}>Solicitar Troca</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </>
  );
}