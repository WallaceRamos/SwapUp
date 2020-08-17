import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  paddingLeft: 10,

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

 
containerList: {
  padding: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  
},


imageContainer: {
  padding: 15,
},

imageService: {
  width: '100%',
  height: 100,
  resizeMode: 'contain',
  borderRadius: 8,
},

infoContainer: {
  padding: 15,
  borderTopWidth: 1,
  borderColor: '#eee',
},

titleService: {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#111',
},

descriptionService: {
  textAlign: 'center',
  color: '#333',
  fontSize: 11,
},
ConteinerList: {
  
  marginLeft: 15,
  marginRight: 15,
  flexDirection: 'row',
  padding: 15,
  width: '100%',
  backgroundColor: '#FFF',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#C0C0C0',
},
ConteinerTextList: {
  paddingRight: 15,
  flexDirection: 'column',
  backgroundColor: '#FFF',

},

TitleList: {
  fontWeight: 'bold',
  fontSize: 18,

},


buttonContainerList: {
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},

BotaoAceitarList: {
  marginTop: 10,
  borderRadius: 8,
  padding: 10,
  marginRight: 20,
  backgroundColor: '#44AF47',

},
BotaoAceitarTextList: {
  color: '#fff',
  fontWeight: 'bold'
},

BotaoRecusarList: {
  marginTop: 10,
  borderRadius: 8,
  padding: 10,
  backgroundColor: '#F91515',
},
BotaoRecusarTextList: {
  color: '#FFF',
  fontWeight: 'bold'
},

avatarList: {
  width: 80,
  height: 80,
  borderRadius: 11,
  marginRight: 10,
},

});