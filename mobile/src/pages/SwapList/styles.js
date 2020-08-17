import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
     padding: 15,
  },
 
  title: {
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 16,
    marginTop: 38,
    lineHeight: 24,
    color: '#737380' 
  },
 
 
  deliveryList: {
   marginTop: 32,
 },

 Conteiner: {
  flexDirection: 'row',
  marginTop: 20,
  padding: 15,
  backgroundColor: '#FFF',
  borderRadius: 3,
  borderBottomWidth: 1,
  borderColor: '#C0C0C0',
},
ConteinerText: {
  padding: 15,
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#FFF',

},
Title: {
  fontWeight: 'bold',
  fontSize: 18,

},
avatar: {
  width: 80,
  height: 80,
  borderRadius: 11,
  marginRight: 10,
},

swap: {
  marginTop: 15,
  borderRadius: 30,
  padding: 10,
  marginRight: 10,
  marginBottom: 30,
  backgroundColor: '#1193C8',
  alignItems: 'center',
},

swapText: {
  fontSize: 16,
  color: '#FFF',
},
});