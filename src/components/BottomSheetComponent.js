import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../components/CustomButton';
import Apple from '../asserts/svgs/Apple';
import OrPayUsing from '../asserts/svgs/OrPayUsing';
import MasterCard from '../asserts/svgs/MasterCard';
import Visa from '../asserts/svgs/Visa';
import Stripe from '../asserts/svgs/Stripe';
import Card from '../asserts/svgs/Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import CalendarCurrentIcon from '../asserts/svgs/CalendarCurrentIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomSheetComponent = ({isVisible, setIsVisible}) => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [selectedCard, setSelectedCard] = useState('Master Card');
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%'], []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{backgroundColor: '#051A30'}}
      handleComponent={() => (
        <View
          style={{
            backgroundColor: 'white',
            width: wp(18),
            height: hp(0.5),
            marginTop: hp(2),
            opacity: 0.3,
            alignSelf: 'center',
            borderRadius: wp(2),
          }}
        />
      )}
      enablePanDownToClose
      onClose={() => setIsVisible(false)}>
      <ScrollView>
        <SafeAreaView style={styles.contentContainer}>
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
                  <Visa
                    style={{alignSelf: 'flex-start', marginBottom: hp(1)}}
                  />
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
                    top: Platform.OS == 'android' ? hp(7) : hp(5.5),
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
              </View>
              <View
                style={{
                  width: '100%',
                }}>
                <View style={styles.pickerContainer}>
                  <RNPickerSelect
                    onValueChange={value => setSelectedCountry(value)}
                    value={selectedCountry}
                    items={[
                      {label: 'United States', value: 'US'},
                      {label: 'Pakistan', value: 'PK'},
                    ]}
                    style={{
                      inputIOS: {
                        backgroundColor: '#092441',
                        color: 'white',
                        padding: wp(3),
                        borderTopLeftRadius: wp(2),
                        borderTopRightRadius: wp(2),
                      },
                      inputAndroid: {
                        color: 'white',
                        padding: wp(3),
                      },
                      viewContainer: {
                        borderTopLeftRadius: wp(2),
                        borderTopRightRadius: wp(2),
                        backgroundColor: '#092441',
                      },

                      placeholder: {
                        color: 'white',
                      },
                    }}
                    placeholder={{label: 'Select a country...', value: null}}
                    pickerProps={{dropdownIconColor: 'white'}}
                  />
                </View>
                <TextInput
                  style={{
                    backgroundColor: '#092441',
                    padding: wp(3),
                    borderTopWidth: 1,
                    borderTopColor: '#5E5E5E',
                    borderBottomLeftRadius: wp(2),
                    borderBottomRightRadius: wp(2),
                  }}
                  placeholder="ZIP"
                  placeholderTextColor="white"
                />
              </View>

              <CustomButton
                title="Pay $80.00"
                style={{
                  width: '100%',
                  marginVertical: Platform.OS == 'android' ? hp(2) : hp(5),
                }}
                onPress={() => {
                  navigation.navigate('UserRegistration');
                  setIsVisible(false);
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  sheetContent: {
    padding: wp(4),
  },
  paymentContainer: {
    alignItems: 'center',
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
    backgroundColor: '#3191D7',
  },
  cardInformation: {
    marginVertical: hp(1),
    width: '100%',
  },
  input: {
    backgroundColor: '#092441',
    padding: wp(3),
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
  pickerContainer: {
    //marginVertical: hp(1),
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
  },
  iconContainer: {
    position: 'absolute',
    top: hp(3),
    right: wp(3),
    transform: [{translateY: -hp(1)}], // Center the icon vertically
  },
});

export default BottomSheetComponent;
