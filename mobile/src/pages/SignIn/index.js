import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, AsyncStorage, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigation = useNavigation();
  
  useEffect(() => {
    AsyncStorage.getItem('userId').then(userId =>{
        if(userId){
            navigation.navigate('Tabs');
        }
    })

},[]);

async function handleSubmitRegister(){
  navigation.navigate('SignUp')
}

  async function handleSubmit() {
    try {
      const response = await api.post('authentications', { 
        email,
        password
       });
      const { _id, name} = response.data;     
      AsyncStorage.setItem('userId', _id);
      AsyncStorage.setItem('userName', name);
      
      navigation.navigate('Tabs',)
    } catch (err) {
      Alert.alert('Usuario não encontrado');
    }



  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <ScrollView>
      <View style={styles.logoContainer} >
        <Image source={logo} />
      </View>
      <View style={styles.form} >
        <Text style={styles.label}>Qual é o seu e-mail?</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir o e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Qual é a sua senha?</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir a senha"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.ConteinerButton}>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
          <Text style={styles.buttonTextSignIn}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmitRegister} style={styles.buttonSignUp}>
          <Text style={styles.buttonTexSignUp}>CADASTRE-SE GRÁTIS</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  );
}
