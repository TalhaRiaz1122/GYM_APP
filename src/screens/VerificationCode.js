import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import Question from '../asserts/svgs/Question';
import OTPInput from '../components/OTPInput';
const VerificationCode = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState(39);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResendCode = () => {
    setTimer(39);
    setIsResendDisabled(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderText
        style={{ marginVertical: hp(3) }}
        logo={
          <Text style={{ color: 'white', fontSize: wp(5) }}>
            Verify Email Address
          </Text>
        }
        EndIcon={<Question />}
      />
      <View style={{ alignItems: 'center', marginVertical: hp(2) }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: wp(4) }}>
          Enter the verification code that we've sent to
        </Text>
        <Text
          style={{ color: '#3191D7', textAlign: 'center', fontSize: wp(4) }}
        >
          "abc@mail.com"
        </Text>
      </View>
      <OTPInput code={code} setCode={setCode} />
      <View style={styles.resendContainer}>
        <TouchableOpacity
          onPress={handleResendCode}
          disabled={isResendDisabled}
        >
          <Text
            style={[
              styles.resendText,
              { color: isResendDisabled ? '#ccc' : '#3191D7' },
            ]}
          >
            RESEND CODE!
          </Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>(00:{timer})</Text>
      </View>
      <View style={{ marginTop: hp(20) }}>
        <CustomButton
          title="Verify"
          onPress={() => {
            navigation.navigate('Subscription1');
          }}
          style={{ marginHorizontal: wp(5) }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(3),
          }}
        >
          <Text style={{ color: 'white', fontSize: wp(4) }}>
            Not your Email?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
          >
            <Text style={{ color: '#3191D7', fontSize: wp(4) }}>
              CHANGE HERE!
            </Text>
          </TouchableOpacity>
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
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
  resendText: {
    fontSize: wp(4),
    marginRight: wp(2),
  },
  timerText: {
    fontSize: wp(4),
    color: 'white',
  },
});

export default VerificationCode;
