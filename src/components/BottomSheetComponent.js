//import 'react-native-reanimated';
//import 'react-native-gesture-handler';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useMemo, useRef, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
// import { SP_KEY } from '@env';
import CustomButton from '../components/CustomButton';
import Apple from '../asserts/svgs/Apple';
import OrPayUsing from '../asserts/svgs/OrPayUsing';
import MasterCard from '../asserts/svgs/MasterCard';
import Visa from '../asserts/svgs/Visa';
import Stripe from '../asserts/svgs/Stripe';
import Card from '../asserts/svgs/Card';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';

const BottomSheetComponent = ({
  isVisible,
  onClose,
  setIsSheetVisible,
  backgroundColor,
}) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [hp('67')], []); // Open to 67% of screen height
  const index = useSharedValue(-1); // Initial index is -1 (closed)
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedCard, setSelectedCard] = useState('Master Card'); // State to track selected card option
  // const stripe = useStripe();

  const handleSheetChanges = useCallback(
    newIndex => {
      console.log('Index inside handle sheet', newIndex);

      if (newIndex == 0) {
        setIsSheetVisible(true);
      } else {
        setIsSheetVisible(false);
      }
    },
    [onClose, index],
  );

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.snapToIndex(0); // Open the sheet
    } else {
      bottomSheetRef.current?.close(); // Close the sheet
    }
  }, [isVisible]);

  const handlePayment = async () => {
    // const {error, paymentIntent} = await stripe.confirmPayment({
    //   paymentIntentClientSecret: 'your_payment_intent_client_secret', // Fetch this from your backend
    //   paymentMethodType: 'Card',
    //   paymentMethodData: {
    //     billingDetails: {
    //       name: 'Test User',
    //     },
    //   },
    // });
    // if (error) {
    //   console.log('Payment confirmation error', error);
    //   alert('Payment failed');
    // } else {
    //   alert('Payment successful');
    // }
  };
  //console.log(SP_KEY);
  return (
    // <View>
    <StripeProvider publishableKey="pk_test_51PfJxpRo5Ols8TLixC5dUr7cAWRQihQ89dnwyWUXJFJwnWLi4zvjtmxbMCGltRBLXX8SGb6JrCJBVwBz0I1l2jkk00kE4ZfBCD">
      {isVisible && (
        <BlurView
          style={styles.absolute}
          blurType="mediumlight"
          blurAmount={1}
        />
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={index.value}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={[styles.bottomSheet, {backgroundColor: backgroundColor}]}
        backgroundStyle={{backgroundColor: '#051A30'}}
        enablePanDownToClose
        handleComponent={() => (
          <View
            style={{
              backgroundColor: 'white',
              width: wp(18),
              height: hp(0.5),
              marginTop: hp(2),
              opacity: 0.3,
              alignSelf: 'center',
              borderRadius: widthPercentageToDP(2),
            }}
          />
        )}>
        <View style={styles.sheetContent}>
          <View style={styles.paymentContainer}>
            <CustomButton
              title="Apple Pay"
              style={{
                backgroundColor: 'black',
                height: hp(5),
                width: '100%',
                flexDirection: 'row',
              }}>
              <Apple style={{marginHorizontal: wp(2)}} width={wp(4)} />
            </CustomButton>
            <View style={{marginVertical: hp(1)}}>
              <OrPayUsing />
            </View>
            <View style={styles.cardOptions}>
              <CustomButton
                title="Master Card"
                textStyle={{alignSelf: 'flex-start'}}
                style={[
                  styles.cardButton,
                  selectedCard === 'Master Card' && styles.selectedCardButton,
                ]}
                onPress={() => setSelectedCard('Master Card')}>
                <MasterCard
                  style={{alignSelf: 'flex-start', marginBottom: hp(1)}}
                />
              </CustomButton>
              <CustomButton
                title="VISA"
                textStyle={{
                  alignSelf: 'flex-start',
                  marginHorizontal: wp(1),
                }}
                style={[
                  styles.cardButton,
                  selectedCard === 'VISA' && styles.selectedCardButton,
                ]}
                onPress={() => setSelectedCard('VISA')}>
                <Visa style={{alignSelf: 'flex-start', marginBottom: hp(1)}} />
              </CustomButton>
              <CustomButton
                title="Stripe"
                textStyle={{
                  alignSelf: 'flex-start',
                  marginHorizontal: wp(1),
                }}
                style={[
                  styles.cardButton,
                  selectedCard === 'Stripe' && styles.selectedCardButton,
                ]}
                onPress={() => setSelectedCard('Stripe')}>
                <Stripe
                  style={{alignSelf: 'flex-start', marginBottom: hp(1)}}
                />
              </CustomButton>
            </View>

            <View style={styles.cardInformation}>
              <Text
                style={{
                  fontSize: wp(4),
                  color: 'white',
                  marginVertical: wp(2),
                }}>
                Card Information
              </Text>
              <Card
                style={{
                  position: 'absolute',
                  right: wp(0),
                  top: wp(14),
                  marginHorizontal: wp(4),
                  zIndex: 1,
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                placeholderTextColor="white"
              />
              <View style={styles.inputRow}>
                <TextInput
                  style={[
                    styles.inputHalf,
                    {
                      borderColor: '#5E5E5E',
                      borderRightWidth: 1,
                      borderBottomLeftRadius: wp(2),
                    },
                  ]}
                  placeholder="MM/YY"
                  placeholderTextColor="white"
                />
                <TextInput
                  style={[
                    styles.inputHalf,
                    {
                      borderBottomRightRadius: wp(2),
                    },
                  ]}
                  placeholder="CVC"
                  placeholderTextColor="white"
                />
              </View>
              <Text
                style={{
                  fontSize: wp(4),
                  color: 'white',
                  marginVertical: wp(2),
                }}>
                Card Information
              </Text>
              <View style={styles.picker}>
                <Picker
                  dropdownIconColor="white"
                  selectedValue={selectedCountry}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedCountry(itemValue);
                  }}
                  style={{color: 'white'}}>
                  <Picker.Item label="United States" value="US" />
                  <Picker.Item label="Pakistan" value="PK" />
                </Picker>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#092441',
                  padding: 10,
                  borderBottomLeftRadius: wp(2),
                  borderBottomRightRadius: wp(2),
                }}
                placeholder="ZIP"
                placeholderTextColor="white"
              />
            </View>

            <CustomButton
              title="Pay $80.00"
              style={{width: '100%', marginVertical: hp(2)}}
              onPress={() => {
                navigation.navigate('UserRegistration');
                setIsSheetVisible(false);
              }}
            />
          </View>
        </View>
      </BottomSheet>
      {/* </View> */}
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // zIndex: 10,
  },
  sheetContent: {
    padding: 16,
    paddingBottom: 24,
  },
  paymentContainer: {
    alignItems: 'center',
  },
  paymentButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    color: 'white',
    marginVertical: 10,
  },
  cardOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardButton: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(2),
    backgroundColor: '#012743',
  },
  selectedCardButton: {
    backgroundColor: '#3191D7', // Change to desired selected color
  },
  cardInformation: {
    marginVertical: hp(1),
    width: '100%',
  },
  input: {
    backgroundColor: '#092441',
    padding: 10,
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    borderBottomWidth: 1,
    borderColor: '#5E5E5E',

    color: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    backgroundColor: '#092441',
    padding: 10,

    color: 'white',
    width: '50%',
  },
  picker: {
    backgroundColor: '#092441',
    color: 'white',
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    borderBottomWidth: 1,
    borderColor: '#5E5E5E',
  },
  payButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '35%',
  },
});

export default BottomSheetComponent;
