import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1193C8',
    padding: 15,
    paddingTop: 30,
  },
//   headerContainerLogo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerLogo:{
//     maxWidth: 65,
//    height: 65,
   
//    borderWidth: 1,
//   borderColor: '#fff',
//    borderRadius: 32
//  },
 headerTitulo: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 25,
  paddingRight: 16,

 },
  ConteinerDatalhe:{
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 20,
    paddingBottom: 20,

  },
  TituloDetalhe: {
    padding:10,
    fontSize:20,
    fontWeight: 'bold',
},
  SubTituloDetailhe:{
    padding:10,
    fontWeight: 'bold',
    fontSize:18,
  },
ConteinerAvatarTitle: {
  alignItems: 'center',
  backgroundColor: '#FFF',
  borderRadius: 3,
  borderBottomWidth: 1,
  borderColor: '#C0C0C0',
},
  ConteinerAvatar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 3,
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
  },

avatar:{
  width: 42,
  height: 42,
  borderRadius: 8,
  marginRight: 10,
},

swap:{
  marginTop: 15,
  borderRadius: 8,
  padding: 10,
  marginRight: 10,
  marginBottom: 30,
  backgroundColor: '#1193C8',
  alignItems:'center',
},

swapText: {
  fontSize: 16,
  color: '#FFF',
},

});