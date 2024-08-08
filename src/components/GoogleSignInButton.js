import React, {useEffect} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import SocialButton from './SocialButton';
import Google from '../asserts/svgs/Google';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GoogleSignInButton = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '937152968500-m2pjvpqaibfnbuo8351rlb5le85rrvfg.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Google Sign-In Successful!');
      navigation.navigate('Subscription1');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play services not available or outdated');
      } else {
        console.error(error.message);
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SocialButton
      style={{backgroundColor: 'white'}}
      onPress={handleGoogleSignIn}>
      <Google width={wp(9)} height={wp(9)} style={{}} />
    </SocialButton>
  );
};

export default GoogleSignInButton;
