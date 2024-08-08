import React from 'react';
import {Alert} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import SocialButton from '../components/SocialButton';
import Facebook from '../asserts/svgs/Facebook';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FacebookSignInButton = () => {
  const navigation = useNavigation();

  const handleFacebookSignIn = async () => {
    try {
      const currentAccessToken = await AccessToken.getCurrentAccessToken();

      console.log('Current Access Token:', currentAccessToken);

      if (!currentAccessToken || !currentAccessToken.accessToken) {
        const result = await LoginManager.logInWithPermissions([
          'public_profile',
          'email',
        ]);

        if (result.isCancelled) {
          Alert.alert('User cancelled the login process');
          return;
        }
      }

      const data = await AccessToken.getCurrentAccessToken();
      console.log('Access Token Data:', data);

      if (!data || !data.accessToken) {
        Alert.alert('Something went wrong obtaining access token');
        return;
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      console.log('Facebook Credential:', facebookCredential);

      await auth().signInWithCredential(facebookCredential);
      Alert.alert('Facebook Sign-In Successful!');
      navigation.navigate('Subscription1');
    } catch (error) {
      console.log('Error:', error);

      if (error.code === 'auth/account-exists-with-different-credential') {
        const {email, credential} = error;
        const providers = await auth().fetchSignInMethodsForEmail(email);
        if (
          providers.includes(
            auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
          )
        ) {
          Alert.alert(
            'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
          );
        } else {
          const existingProvider = providers[0];
          Alert.alert(
            `Sign in using ${existingProvider} and then link this account.`,
          );
        }
      } else {
        console.error('Authentication Error:', error.message);
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SocialButton onPress={handleFacebookSignIn}>
      <Facebook width={wp(8)} height={hp(4)} />
    </SocialButton>
  );
};

export default FacebookSignInButton;
