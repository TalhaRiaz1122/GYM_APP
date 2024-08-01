import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  Modal,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import SideMenu from '../asserts/svgs/SideMenu';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import Calender from '../asserts/svgs/Calender';
import MaleIcon from '../asserts/svgs/MaleIcon';
import FemaleIcon from '../asserts/svgs/FemaleIcon';
import OthersIcon from '../asserts/svgs/OthersIcon';
import LocationIcon from '../asserts/svgs/LocationIcon';
import CustomNextButton from '../components/CustomNextButton';
import DropDownIcon from '../asserts/svgs/DropDownIcon';
import RNPickerSelect from 'react-native-picker-select';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const UserRegistration = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState('Male');
  const [date, setDate] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [weightUnit, setWeightUnit] = useState('KG');
  const [heightUnit, setHeightUnit] = useState('Feet');

  const onDateChange = date => {
    setDate(moment(date).format('DD/MM/YYYY'));
    setCalendarVisible(false);
  };

  const weightData = [
    {label: 'KG', value: 'KG'},
    {label: 'GM', value: 'GM'},
  ];

  const heightData = [
    {label: 'Feet', value: 'Feet'},
    {label: 'Cm', value: 'Cm'},
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderText
        logo={<Logo width={wp(20)} height={hp(10)} />}
        EndIcon={<SideMenu />}
      />
      <View style={{alignItems: 'center', marginHorizontal: wp(5)}}>
        <Text style={{fontSize: wp(3), color: 'white'}}>
          Let us know more about yourself
        </Text>

        <View style={styles.cardInformation}>
          <Text
            style={{
              fontSize: wp(4),
              color: 'white',
              marginVertical: wp(2),
            }}>
            Date of Birth:
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: wp(0),
              top: Platform.OS == 'android' ? hp(6.5) : hp(5.5),
              marginHorizontal: wp(4),
              zIndex: 1,
            }}
            onPress={() => setCalendarVisible(true)}>
            <Calender />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#fff"
            value={date}
            editable={false}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: hp(1),
          }}>
          <Text style={{flex: 1, color: 'white', fontSize: wp(4)}}>
            Select Gender:
          </Text>
          <Text style={{flex: 1, textAlign: 'right', color: '#7B7B7C'}}>
            Optional
          </Text>
        </View>
        <View style={styles.cardOptions}>
          <CustomButton
            title="Male"
            style={[
              styles.cardButton,
              selectedCard === 'Male' && styles.selectedCardButton,
            ]}
            onPress={() => setSelectedCard('Male')}>
            <MaleIcon style={{marginBottom: hp(1)}} />
          </CustomButton>
          <CustomButton
            title="Female"
            textStyle={{
              marginHorizontal: wp(1),
            }}
            style={[
              styles.cardButton,
              selectedCard === 'Female' && styles.selectedCardButton,
            ]}
            onPress={() => setSelectedCard('Female')}>
            <FemaleIcon style={{marginBottom: hp(1)}} />
          </CustomButton>
          <CustomButton
            title="Others"
            textStyle={{
              marginHorizontal: wp(1),
            }}
            style={[
              styles.cardButton,
              selectedCard === 'Others' && styles.selectedCardButton,
            ]}
            onPress={() => setSelectedCard('Others')}>
            <OthersIcon style={{marginBottom: hp(1)}} />
          </CustomButton>
        </View>
        <View style={styles.cardInformation}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: hp(1),
            }}>
            <Text style={{flex: 1, color: 'white', fontSize: wp(4)}}>
              Your Weight:
            </Text>
            <Text style={{flex: 1, textAlign: 'right', color: '#7B7B7C'}}>
              Optional
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#092441',
              borderRadius: wp(2),
            }}>
            <TextInput
              style={{
                backgroundColor: '#092441',
                paddingHorizontal: wp(5),
                paddingVertical: Platform.OS == 'android' ? hp(1) : hp(1.5),
                color: 'white',
                flex: 1,
                borderBottomLeftRadius: wp(2),
                borderTopLeftRadius: wp(2),
              }}
              placeholder="00.00"
              placeholderTextColor="#fff"
            />
            <View style={styles.line} />

            <View style={styles.pickerContainer}>
              {Platform.OS === 'android' && (
                <Text
                  style={[
                    styles.pickerText,
                    {
                      position: 'absolute',
                      right: wp(8),
                      top: hp(2),
                      zIndex: 1,
                    },
                  ]}>
                  {weightUnit}
                </Text>
              )}

              <RNPickerSelect
                placeholder={{label: 'Select Weight Unit', value: null}}
                items={weightData}
                onValueChange={value => setWeightUnit(value)}
                value={weightUnit}
                style={pickerSelectStyles}
                pickerProps={{
                  dropdownIconColor: '#092441',
                }}
                Icon={() => {
                  return <DropDownIcon width={wp(2)} />;
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardInformation}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: hp(1),
            }}>
            <Text style={{flex: 1, color: 'white', fontSize: wp(4)}}>
              Your Height:
            </Text>
            <Text style={{flex: 1, textAlign: 'right', color: '#7B7B7C'}}>
              Optional
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#092441',
              borderRadius: wp(2),
            }}>
            <TextInput
              style={{
                backgroundColor: '#092441',
                paddingHorizontal: wp(5),
                paddingVertical: Platform.OS == 'android' ? hp(1) : hp(1.5),
                color: 'white',
                flex: 1,
                borderBottomLeftRadius: wp(2),
                borderTopLeftRadius: wp(2),
              }}
              placeholder="00.00"
              placeholderTextColor="#fff"
            />
            <View style={styles.line} />

            <View style={styles.pickerContainer}>
              {Platform.OS === 'android' && (
                <Text
                  style={[
                    styles.pickerText,
                    {
                      position: 'absolute',
                      right: wp(7),
                      top: hp(2),
                      zIndex: 1,
                    },
                  ]}>
                  {heightUnit}
                </Text>
              )}

              <RNPickerSelect
                placeholder={{label: 'Select Height Unit', value: null}}
                items={heightData}
                onValueChange={value => setHeightUnit(value)}
                value={heightUnit}
                style={pickerSelectStyles}
                pickerProps={{
                  dropdownIconColor: '#092441',
                }}
                Icon={() => {
                  return (
                    <DropDownIcon
                      width={wp(2)}
                      style={{marginHorizontal: wp(1)}}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardInformation}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: hp(1),
            }}>
            <Text style={{flex: 1, color: 'white', fontSize: wp(4)}}>
              Your Address:
            </Text>
            <Text style={{flex: 1, textAlign: 'right', color: '#7B7B7C'}}>
              Optional
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: wp(0),
              top: Platform.OS == 'android' ? hp(6) : hp(5.5),
              marginHorizontal: wp(4),
              zIndex: 1,
            }}>
            <LocationIcon width={wp(3.5)} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter address here"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={{marginTop: Platform.OS == 'android' ? hp(10) : hp(8)}}>
        <CustomNextButton
          title={'Continue'}
          style={{marginHorizontal: wp(5)}}
          onPress={() => {
            navigation.navigate('Goals');
          }}
        />
      </View>
      <Modal visible={calendarVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.calendarContainer}>
            <CalendarPicker onDateChange={onDateChange} />
            <TouchableOpacity
              onPress={() => setCalendarVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: wp(3),
    color: 'white',
    marginVertical: hp(2),
    paddingHorizontal: wp(2),
  },
  inputAndroid: {
    fontSize: wp(3),
    color: 'white',
    paddingHorizontal: wp(3),
  },
  iconContainer: {
    top: Platform.OS === 'ios' ? hp(2) : hp(2), // Adjust the vertical position as needed
    right: wp(1),
    left: Platform.OS === 'ios' ? hp(3.5) : wp(4), // Move the icon to the rightmost position
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  cardInformation: {
    marginVertical: hp(1),
    width: '100%',
  },
  input: {
    backgroundColor: '#092441',
    paddingHorizontal: wp(5),
    paddingVertical: Platform.OS == 'android' ? hp(1) : hp(1.5),

    borderRadius: wp(2),
    color: 'white',
  },
  cardOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardButton: {
    flex: 1,
    paddingVertical: hp(2),
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    backgroundColor: '#012743',
  },
  selectedCardButton: {
    backgroundColor: '#3191D7',
  },
  pickerContainer: {
    flexDirection: 'row',
    borderBottomRightRadius: wp(2),
    borderTopRightRadius: wp(2),
    backgroundColor: '#092441',
    paddingHorizontal: wp(5),
  },
  pickerText: {
    //flex: 1,
    color: 'white',
    fontSize: wp(3),
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  calendarContainer: {
    backgroundColor: '#ffffff',
    borderRadius: wp(5),
    padding: wp(4),
    width: '100%',
  },
  closeButton: {
    marginTop: hp(3),
    backgroundColor: '#3191D7',
    padding: wp(3),
    borderRadius: wp(3),
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
  },
  line: {
    width: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    height: '60%',
    backgroundColor: '#707070',
    opacity: 0.3,
    marginRight: Platform.OS == 'android' ? wp(2) : wp(0),
  },
});

export default UserRegistration;
