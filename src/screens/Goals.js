import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../asserts/svgs/Logo';
import SideMenu from '../asserts/svgs/SideMenu';
import HeaderText from '../components/HeaderText';
import Slider from '../components/Slider';
import RadioButtonList from '../components/RadioButtonList';
import NextArrow from '../asserts/svgs/NextArrow';
import CustomNextButton from '../components/CustomNextButton';
import BackIcon from '../asserts/svgs/BackIcon';
import { useNavigation } from '@react-navigation/native';
import WorkoutPrefrence from '../components/WorkoutPrefrence';
import EquipmentPreference from '../components/ EquipmentPreference';
import GettingStarted from '../components/GettingStarted';

const Goals = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const views = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
  const radioData = [
    { title: 'I’m pretty new to working out' },
    { title: 'I work out from time to time' },
    { title: 'I work out frequently' },
  ];
  const radioData1 = [
    { title: 'Get Strong', subtitle: 'Build mass & gain strength' },
    { title: 'Loose Weight', subtitle: 'Burn fat & get lean' },
    { title: 'Build Mass', subtitle: 'Gain muscle & strength' },
    {
      title: 'Train Specific Part',
      subtitle: 'Train specific area of your body',
    },
    { title: 'Build Endurance', subtitle: 'Exert and remain active' },
  ];

  const handleNext = () => {
    if (activeIndex < 3) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) setActiveIndex((prevIndex) => prevIndex - 1);
    else {
      navigation.navigate('UserRegistration');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderText
        logo={<Logo width={wp(20)} height={hp(10)} />}
        EndIcon={<SideMenu />}
      />
      <Slider activeIndex={activeIndex} views={views} />
      <ScrollView>
        {activeIndex === 0 && (
          <ScrollView>
            <RadioButtonList topic="Experience Level:" data={radioData} />
            <RadioButtonList
              topic="What is your Primary Goal?"
              data={radioData1}
            />
            <RadioButtonList
              topic="What is your Secondary Goal?"
              data={radioData1}
              styleContainer={{ marginBottom: hp(3) }}
            />
          </ScrollView>
        )}
        {activeIndex === 1 && <WorkoutPrefrence />}
        {activeIndex === 2 && <EquipmentPreference />}
        {activeIndex === 3 && <GettingStarted />}
        <View
          style={{
            marginBottom: wp(4),
            flexDirection: 'row',
            marginHorizontal: wp(5),
            marginVertical: hp(2),
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <CustomNextButton
              title={'Back'}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'white',
              }}
              onPress={handleBack}
            >
              <BackIcon />
            </CustomNextButton>
          </View>
          <View style={{ flex: 1, marginLeft: wp(2) }}>
            <CustomNextButton
              title={'Next'}
              style={{ width: '100%' }}
              onPress={handleNext}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
});

export default Goals;
