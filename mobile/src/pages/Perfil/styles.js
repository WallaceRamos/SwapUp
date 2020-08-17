import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
     
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1193C8',
    padding: 15,
    paddingTop: 30,
  },
  headerContainerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo:{
   maxWidth: 45,
   height: 45,
   
   borderWidth: 1,
  borderColor: '#fff',
   borderRadius: 32
 },
 headerTitulo: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 22,
  paddingLeft: 16,

 },
  headerText: {
    fontSize: 15,
    color: '#fff',
  },
  headerTextBold: {
    color: '#fff',
    fontWeight: 'bold'
  },
  signoutContainer:{
    alignItems:'flex-end',
  },
  signout:{
    margin: 15,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: '#ff520b',
    alignItems:'center',
  },
  
  signoutText: {
    fontSize: 16,
    color: '#FFF',
  },

  ConteinerImage: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 3,
    alignItems:'center',
    justifyContent: 'center',
  },
  ConteinerText: {
    padding: 15,
    backgroundColor: '#FFF',
  },

ImagePerfil:{
  width: 200,
  height: 200,
  borderRadius: 20,
  marginRight: 10,
},

Title:{
  padding:10,
  fontWeight: 'bold',
  fontSize:20,
  borderTopWidth: 1,
  borderColor: '#C0C0C0',
},
TitleImage:{
  padding:10,
  fontWeight: 'bold',
  fontSize:20,
},

TextPerfil: {
  padding:10,
  fontSize:15,
},

swap:{
  margin: 15,
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