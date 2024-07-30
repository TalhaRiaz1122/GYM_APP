import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import Question from '../asserts/svgs/Question';
import SingleArrow from '../asserts/svgs/SingleArrow';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import Facebook from '../asserts/svgs/Facebook';
import Google from '../asserts/svgs/Google';
import Apple from '../asserts/svgs/Apple';
import Or from '../asserts/svgs/Or';
import {useNavigation} from '@react-navigation/native';
import HeaderText from '../components/HeaderText';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.mainContainer}>
      <ImageBackground
        resizeMode="stretch"
        style={Style.imgBackground}
        source={require('../asserts/images/Welcome.png')}>
        <View style={Style.header}>
          <HeaderText
            logo={<Logo width={wp(20)} height={hp(10)} />}
            EndIcon={<Question />}
          />
        </View>
        <View style={Style.footer}>
          <View style={Style.textview}>
            <Text style={{fontSize: hp(2.3), color: 'white'}}>
              Welcome to FitSynth
            </Text>
            <Text
              style={{
                fontSize: hp(2),
                color: 'white',
              }}>
              Please Login/Sign Up to continue
            </Text>
            <View style={Style.buttonview}>
              <CustomButton
                title="Login"
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              />
              <CustomButton
                title="Sign Up"
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  borderColor: '#ffff',
                }}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Or fill="#092441" />
            </View>
            <View style={Style.iconview}>
              <View style={Style.icon}>
                <SocialButton>
                  <Facebook />
                </SocialButton>
              </View>
              <View style={Style.icon}>
                <SocialButton style={{backgroundColor: 'white'}}>
                  <Google />
                </SocialButton>
              </View>
              <View style={Style.icon}>
                <SocialButton style={{backgroundColor: 'black'}}>
                  <Apple />
                </SocialButton>
              </View>
            </View>
          </View>
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
    marginTop: Platform.OS == 'android' ? hp(0) : hp(4),
    flex: 1.4,
  },
  footer: {
    marginHorizontal: wp(5),
    marginVertical: wp(6),
    flex: 1,
    backgroundColor: '#092441',
    borderRadius: wp(5),
  },
  textview: {
    marginHorizontal: wp(5),
    marginVertical: hp(3),
    flex: 1,
  },
  buttonview: {
    marginVertical: wp(3),
  },
  iconview: {
    flex: 1,
    marginVertical: wp(2),
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    marginHorizontal: wp(1),
  },
});

export default WelcomeScreen;
