import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import SkipArrow from '../asserts/svgs/SkipArrow';
import SecondStepSlider from '../asserts/svgs/SecondStepSlider';
import FullButton from '../asserts/svgs/FullButton';
import { useNavigation } from '@react-navigation/native';

const SecondOnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.mainContainer}>
      <StatusBar backgroundColor="#051A30" barStyle="light-content" />
      <ImageBackground
        resizeMode="cover"
        style={Style.imgBackground}
        source={require('../asserts/images/SecondOnboardingScreen.png')}
      >
        <View style={Style.header}>
          <Logo
            width={wp(20)}
            height={hp(10)}
            style={{ alignSelf: 'center' }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WelcomeScreen');
            }}
          >
            <SkipArrow style={{ alignSelf: 'flex-end', top: hp(-7) }} />
          </TouchableOpacity>
        </View>
        <View style={Style.footer}>
          <View style={Style.textview}>
            <Text
              style={{ fontSize: hp(2.3), color: 'white', alignSelf: 'center' }}
            >
              Find your diverse classes
            </Text>
            <Text
              style={{
                fontSize: hp(2),
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',
                marginTop: hp(3),
              }}
            >
              <Text style={{ fontSize: hp(2), color: '#3191D7' }}>Tip#: </Text>
              It is a long established fact that the reader will be distracted
            </Text>
            <SecondStepSlider
              style={{ alignSelf: 'center', marginTop: hp(3) }}
            />
          </View>
          <TouchableOpacity style={{ alignItems: 'center', marginTop: hp(5) }}>
            <FullButton
              onPress={() => {
                navigation.navigate('WelcomeScreen');
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgBackground: {
    width: wp('100%'),
    height: hp('100%'),

    flex: 1,
  },
  header: {
    marginHorizontal: wp(5),
    padding: hp(1),
    flex: 1.4,
  },
  footer: {
    marginHorizontal: wp(5),
    flex: 1,
  },
  textview: {
    marginHorizontal: wp(5),
  },
});

export default SecondOnboardingScreen;
