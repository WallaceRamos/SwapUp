import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';




//Paginas para o service
import ServiceList from './pages/ServiceList';
import DetailService from './pages/DetailService';

//Paginas para Tabs Swaps e solicitações
import SwapTabs from './pages/SwapTabs';

import DetailSolicitation from './pages/DetailSolicitation';

import CreatePost from './pages/CreatePost';
import DetailPost from './pages/DetailPost';


import Notification from './pages/Notification';

import Perfil from './pages/Perfil';
import PerfilUpdate from './pages/PerfilUpdate';





export default function Routes() {

  const TabsScreen = () => (
    <Tab.Navigator

      initialRouteName="SolicitationList"
      activeColor="#FB8200"
      inactiveColor="#1193C8"
      
      barStyle={{ backgroundColor: '#FFF', paddingBottom: 12 }}
    >
      <Tab.Screen name="ServiceList" component={ServiceList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="SwapTabs" component={SwapTabs}
        options={{
          tabBarLabel: 'Swaps',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exchange-alt" color={color} size={19} />
          ),
        }}
      />

      <Tab.Screen name="Cadastro" component={CreatePost}
        options={{
          tabBarLabel: 'New Post',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="plus-circle" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="SignIn" component={SignIn} />
        <HomeStack.Screen name="SignUp" component={SignUp} />


        <HomeStack.Screen name="Tabs" component={TabsScreen} />


       
     
        <HomeStack.Screen name="DetailService" component={DetailService} />
        <HomeStack.Screen name="DetailSolicitation" component={DetailSolicitation} />
        <HomeStack.Screen name="DetailPost" component={DetailPost} />

        <HomeStack.Screen name="PerfilUpdate" component={PerfilUpdate} />
        
  
      </HomeStack.Navigator>
    </NavigationContainer>
  );

}