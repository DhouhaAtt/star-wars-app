import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Logo from '../../assets/logo.png'

const SplashPage = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('../../assets/star-war.jpeg')} style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.logo} resizeMode='contain' source={Logo} />

      </View>

      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Star Wars Universe</Text>
        <TouchableOpacity style={styles.button} onPress={handleStartPress}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};



export default SplashPage;
