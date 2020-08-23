import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';
import colors from '../constants/colors';
import ConversionInput from '../components/ConversionInput';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoBackground}
          source={require('../assets/images/background.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert('todo!')}
        keyboardType="numeric"
        onChangeText={(text) => console.log('text', text)}
      />
      <ConversionInput
        text="GBP"
        value="123"
        keyboardType="numeric"
        onButtonPress={() => alert('todo!')}
      />
    </View>
  );
};

export default Home;
