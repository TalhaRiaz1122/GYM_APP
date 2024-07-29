import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
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
import {Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const UserRegistration = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [selectedCard, setSelectedCard] = useState('Male');
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
            }}>
            <Calender />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#fff"
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

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: wp(0),
              top: wp(13),
              marginHorizontal: wp(4),
              zIndex: 1,
              borderLeftWidth: 2,
              borderColor: '#1B3654',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginHorizontal: wp(2),
                color: 'white',
                fontSize: wp(3),
              }}>
              KG
            </Text>
            <DropDownIcon width={wp(3)} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="00.00"
            placeholderTextColor="#fff"
          />
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: wp(0),
              top: wp(13),
              marginHorizontal: wp(4),
              zIndex: 1,
              borderLeftWidth: 2,
              borderColor: '#1B3654',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: wp(3),
                marginHorizontal: wp(2),
                color: 'white',
              }}>
              Feet
            </Text>
            <DropDownIcon width={wp(3)} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="00.00"
            placeholderTextColor="#fff"
          />
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
      <View style={{marginTop: hp(10)}}>
        <CustomNextButton
          title={'Continue'}
          style={{marginHorizontal: wp(5)}}
          onPress={() => {
            navigation.navigate('Goals');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
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
    backgroundColor: '#3191D7', // Change to desired selected color
  },
  pickerContainer: {
    //marginVertical: hp(1),
  },
});

export default UserRegistration;
