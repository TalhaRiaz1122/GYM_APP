import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SocialButton from '../components/SocialButton';
import Facebook from '../asserts/svgs/Facebook';
import Google from '../asserts/svgs/Google';
import Apple from '../asserts/svgs/Apple';
import Or from '../asserts/svgs/Or';
import CustomTextInput from '../components/CustomTextInput';
import Logo from '../asserts/svgs/Logo';
import SideMenu from '../asserts/svgs/SideMenu';
import Email from '../asserts/svgs/Email';
import Password from '../asserts/svgs/Password';
import { useNavigation } from '@react-navigation/native';
import Eye from '../asserts/svgs/Eye';
import EyeOff from '../asserts/svgs/EyeOff';
import CustomButton from '../components/CustomButton';
import Name from '../asserts/svgs/Name';
import HeaderText from '../components/HeaderText';
const SignUpScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderText
        logo={<Logo width={wp(20)} height={hp(10)} />}
        EndIcon={<SideMenu />}
      />
      <View style={styles.footer}>
        <View style={styles.iconview}>
          <View style={styles.icon}>
            <SocialButton>
              <Facebook width={wp(8)} height={hp(4)} />
            </SocialButton>
          </View>
          <View style={styles.icon}>
            <SocialButton style={{ backgroundColor: 'white' }}>
              <Google width={wp(8)} height={hp(4)} />
            </SocialButton>
          </View>
          <View style={styles.icon}>
            <SocialButton style={{ backgroundColor: 'black' }}>
              <Apple width={wp(8)} height={hp(4)} />
            </SocialButton>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginVertical: hp(1) }}>
          <Or fill="#051A30" />
        </View>
        <View>
          <CustomTextInput placeholder={'First Name'} Icon={<Name />} />
          <CustomTextInput placeholder={'Last Name'} Icon={<Name />} />
          <CustomTextInput placeholder={'Email Address'} Icon={<Email />} />
          <CustomTextInput
            placeholder={'Password'}
            Icon={<Password />}
            Eye={<Eye />}
            EyeOff={<EyeOff style={{ top: hp(-0.5) }} />}
            isPassword={true}
          />
          <CustomTextInput
            placeholder={'Confirm Password'}
            Icon={<Password />}
            Eye={<Eye />}
            EyeOff={<EyeOff style={{ top: hp(-0.5) }} />}
            isPassword={true}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                {
                  backgroundColor: rememberMe ? 'transparent' : 'transparent',
                  borderColor: rememberMe ? '#3191D7' : '#707070',
                },
              ]}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && (
                <MaterialIcons name="check" size={hp(2)} color="#3191D7" />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              By clicking here I agree to the
              <Text style={{ color: '#3191D7', fontSize: wp(3.5) }}>
                "Terms and Conditions"
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <CustomButton
            title="Login"
            onPress={() => {
              navigation.navigate('VerificationCode');
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(17),
            }}
          >
            <Text style={{ color: 'white', fontSize: wp(4) }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            >
              <Text style={{ color: '#3191D7', fontSize: wp(4) }}>
                SIGN IN!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  header: {
    marginHorizontal: wp(5),
    flex: 1,
  },
  footer: {
    flex: 6,
    marginHorizontal: wp(5),
  },
  iconview: {
    marginVertical: wp(1),
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    marginHorizontal: wp(1),
  },

  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  checkbox: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(1),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  forgotpass: {
    position: 'absolute',
    right: wp(0),
    top: hp(1.5),
  },
});

export default SignUpScreen;
