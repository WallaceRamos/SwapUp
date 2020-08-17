import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  form: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1193C8',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    borderRadius: 8,
    width: 300,
  },
  button: {
    height: 44,
    backgroundColor: '#1193C8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: 300,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonReturn: {
    height: 44,
    backgroundColor: '#FB8200',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: 300,
  },
  buttonTextReturn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});