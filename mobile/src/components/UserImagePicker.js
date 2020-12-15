import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker';

export default class UserImagePicker extends React.Component {
  state = {
    image: null,
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    await AsyncStorage.setItem('uri', result.uri);
  };

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <TouchableOpacity onPress={this._pickImage} style={styles.button}>
          <Text style={styles.textButton}>SELECIONAR IMAGEM</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginTop: 20
  },
  button: {
    width: 300,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#1196C8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
