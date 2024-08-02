import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import SideMenu from '../asserts/svgs/SideMenu';
import SocialButton from '../components/SocialButton';
import Facebook from '../asserts/svgs/Facebook';
import Google from '../asserts/svgs/Google';
import Apple from '../asserts/svgs/Apple';
import Or from '../asserts/svgs/Or';
import CustomTextInput from '../components/CustomTextInput';
import Email from '../asserts/svgs/Email';
import Password from '../asserts/svgs/Password';
import {useNavigation} from '@react-navigation/native';
import Eye from '../asserts/svgs/Eye';
import EyeOff from '../asserts/svgs/EyeOff';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character',
      ),
  });

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
            <SocialButton style={{backgroundColor: 'white'}}>
              <Google width={wp(8)} height={hp(4)} />
            </SocialButton>
          </View>
          <View style={styles.icon}>
            <SocialButton style={{backgroundColor: 'black'}}>
              <Apple width={wp(8)} height={hp(4)} />
            </SocialButton>
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: hp(1)}}>
          <Or fill="#051A30" />
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('Subscription1');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View>
                <CustomTextInput
                  placeholder="Email Address"
                  Icon={<Email />}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errorMessage={
                    touched.email && errors.email ? errors.email : null
                  }
                />
                <CustomTextInput
                  placeholder="Password"
                  Icon={<Password />}
                  Eye={<Eye />}
                  EyeOff={<EyeOff style={{top: hp(-0.5)}} />}
                  isPassword
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  errorMessage={
                    touched.password && errors.password ? errors.password : null
                  }
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxContainer}>
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: rememberMe
                          ? 'transparent'
                          : 'transparent',
                        borderColor: rememberMe ? '#3191D7' : '#707070',
                      },
                    ]}
                    onPress={() => setRememberMe(!rememberMe)}>
                    {rememberMe && (
                      <MaterialIcons
                        name="check"
                        size={hp(2)}
                        color="#3191D7"
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.checkboxLabel}>Remember me</Text>
                </View>

                <View style={styles.forgotpass}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#3191D7',
                        fontSize: wp(4),
                        textAlign: 'right',
                      }}>
                      Forgotten Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <CustomButton title="Login" onPress={handleSubmit} />
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: hp(6),
                  }}>
                  <Text style={{color: 'white', fontSize: wp(4)}}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignUpScreen');
                    }}>
                    <Text style={{color: '#3191D7', fontSize: wp(4)}}>
                      SIGN UP!
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
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
  checkboxLabel: {
    color: 'white',
    fontSize: wp(4),
    marginLeft: wp(1),
  },
  forgotpass: {
    flex: 1,
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
    fontSize: wp(4),
    marginLeft: wp(2),
  },
});
export default LoginScreen;
