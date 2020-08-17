import { StyleSheet } from 'react-native';

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
   maxWidth: 65,
   height: 65,
   
   borderWidth: 1,
  borderColor: '#fff',
   borderRadius: 32
 },
 headerTitulo: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 25,
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
  
  title: {
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 16,
    marginTop: 38,
    lineHeight: 24,
    color: '#737380' 
  },
 
 

form:{
    alignSelf:'stretch',
    paddingHorizontal: 30,
    paddingBottom: 20,
    
},
label:{
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 8,
},
input:{
    borderWidth: 1,
    borderColor: '#1193C8',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius:8, 
},
buttonLogin:{
    height: 42,
    backgroundColor: '#1193C8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
},
buttonTextLogin:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
},
});