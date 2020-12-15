import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { mask } from 'remask';

import api from '../../services/api';

import UserImagePicker from '../../components/UserImagePicker';

import styles from './styles';

export default function PerfilUpdate() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');

  async function handleSubmit() {


    const uri = await AsyncStorage.getItem('uri');
    const formData = new FormData();
    formData.append('userImage', {
      type: 'image/jpeg',
      uri: uri,
      name: 'user.jpg',
    });
    formData.append('name', name);
    formData.append('email', email);
    formData.append('birthdate', birthdate);
    formData.append('address', address);
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await api.put(`users/${userId}`, formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      const { _id, name } = response.data;
      AsyncStorage.setItem('userId', _id);
      AsyncStorage.setItem('userName', name);
      
      navigation.navigate('Perfil',)
    } catch (err) {
      Alert.alert('Usuario não encontrado');
    }

  };


  function navigateBack() {
    navigation.goBack()
  }
  return (
    <>
     
      <View style={styles.header}>


        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={38} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitulo}>Atualização</Text>


      </View>
      <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
      <View style={styles.container} >

        <Text style={styles.title}>Lista de Postagem de serviços para serem solicitados. </Text>

       
        <ScrollView style={styles.container}>


          <View style={styles.form}>
            {(<UserImagePicker />)}


            <Text style={styles.label}>NOME DE USUARIO*</Text>

            <TextInput
              style={styles.input}
              placeholder="Qual é o seu nome?"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={name}
              onChangeText={setName}

            />

            <Text style={styles.label}>EMAIL*</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: swapup@mail.com"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}

            />
            <Text style={styles.label}>DATA DE NACIMENTO*</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: 00/00/0000"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              value={mask(birthdate, ['99/99/9999'])}
              onChangeText={setBirthdate}

            />
            <Text style={styles.label}>ENDEREÇO*</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: Rua, Bairro, Cidade e Estado"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={address}
              onChangeText={setAddress}

            />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonLogin}>
              <Text style={styles.buttonTextLogin}>CONFIRMAR</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>


      </View>
      </KeyboardAvoidingView>
    </>
  );
}
