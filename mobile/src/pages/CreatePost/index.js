import React, { useState, useEffect } from 'react';
import { Alert, StatusBar, KeyboardAvoidingView, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ServiceImagePicker from '../../components/ServiceImagePicker';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function CreatePost() {
  const navigation = useNavigation();

  const[title, setTitle] = useState('');
  const[category, setCategory] = useState('');
  const[description, setDescription] = useState('');

  
  
  const [nome, setNome] = useState();
  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  useEffect(() => {
    LoadNome();
  }, []);

  async function handleSubmit() {
    const uri = await AsyncStorage.getItem('uri');
    const formData = new FormData();
    formData.append('serviceImage', {
      type: 'image/jpeg',
      uri: uri,
      name: 'user.jpg',
    });
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await api.post(`${userId}/services`, formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      Alert.alert('Cadastro realizado com sucesso!')     
      navigation.navigate('ServiceList',)
    } catch (err) {
      Alert.alert('Erro no cadastro, tente novamente');
    }
   };
  return (
    <>
     <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
    

      <View style={styles.header}>
        <View style={styles.headerContainerLogo}>       
           <Image source={logo} style={styles.headerLogo} />
          <Text style={styles.headerTitulo}>Postagem</Text>
        </View>

        <View >

          <Text style={styles.headerText}>
            Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
          </Text>



        </View>

      </View>


      <Text style={styles.title}>Cadastre um novo serviço para ser solicitado. </Text>

      
        <ScrollView style={styles.container}>
       
        
        <View style={styles.form}>
      
          {(<ServiceImagePicker />)}
            <Text style={styles.label}>TÍTULO*</Text>
           
            <TextInput 
            style={styles.input} 
            placeholder="Titulo do anuncio"
             placeholderTextColor="#999"  
             autoCapitalize="words" 
             autoCorrect={false}
             value = {title}
             onChangeText={setTitle}
            
             />

            <Text style={styles.label}>CATEGORIA*</Text>
            <TextInput 
            style={styles.input} 
            placeholder="categoria do serviço"
             placeholderTextColor="#999" 
             autoCapitalize="words" 
             autoCorrect={false}
             value = {category}
             onChangeText={setCategory}
            
             />

            <Text style={styles.label}>DESCRIÇÃO*</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Descrição do serviço"
             placeholderTextColor="#999" 
             autoCapitalize="words" 
             autoCorrect={false}
             value = {description}
             onChangeText={setDescription}
            
             />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonLogin}>
                <Text style={styles.buttonTextLogin}>CONFIRMAR</Text>
            </TouchableOpacity>

            
        </View>
        </ScrollView>
  

    </KeyboardAvoidingView>
    </>
  );
}
