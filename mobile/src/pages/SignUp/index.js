import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, TextInput, Text, Image, View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { mask } from 'remask';

import api from '../../services/api';

import styles from './styles';

import UserImagePicker from '../../components/UserImagePicker';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
 

  const navigation = useNavigation();

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
    formData.append('password', password);
    try {
      const response = await api.post('users', formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      Alert.alert('Cadastro realizado com sucesso!')     
      navigation.navigate('SignIn',)
    } catch (err) {
      Alert.alert('Erro no cadastro, tente novamente');
    }
    
  };

  async function handleSubmitReturn() {
    navigation.navigate('SignIn');
  };
  
  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.form}>
        <Text style={styles.title}>Criar conta SwapUp</Text>
        {(<UserImagePicker />)}
        <Text style={styles.label}>Qual é o seu nome completo?</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir o nome completo"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />
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
        <Text style={styles.label}>Qual é sua data de nacimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir data de nacimento"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={mask(birthdate, ['99/99/9999'])}
          onChangeText={setBirthdate}
        />
        <Text style={styles.label}>Qual é o Endereço?</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir endereço"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.label}>Crie uma senha</Text>
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
  
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmitReturn} style={styles.buttonReturn}>
          <Text style={styles.buttonTextReturn}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  );
}
