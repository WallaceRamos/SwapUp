import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, Image, View } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';
import TopNavigator from '../../components/topNavigtor';

export default function SwapTabs() {
  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }


  useEffect(() => {
    LoadNome();
  }, []);

 
  return (
    <>
      
      <View style={styles.container} >

        <View style={styles.header}>
          <View style={styles.headerContainerLogo}>
            <Image source={logo} style={styles.headerLogo} />
            <Text style={styles.headerTitulo}>Swaps</Text>
          </View>

          <View >

            <Text style={styles.headerText}>
              Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
            </Text>



          </View>

        </View>
        <TopNavigator />

      </View>
    </>
  );
}
