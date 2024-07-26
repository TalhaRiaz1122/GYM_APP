import React, { Component, useEffect } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingFirstScreen');
    }, 5000);
  }, []);
  return (
    <View style={Style.mainContainer}>
      <StatusBar backgroundColor="#051A30" barStyle="light-content" />
      <View style={Style.logoView}>
        <Logo
          style={{ top: hp(15) }}
          onPress={() => {
            navigation.navigate('OnboardingFirstScreen');
          }}
        />
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  logoView: {
    alignItems: 'center',
  },
});

export default SplashScreen;
