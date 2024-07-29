import React, {useState} from 'react';
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
import RadioButtonList from './RadioButtonList';
const GettingStarted = () => {
  const radioData = [
    {title: 'I need help looking for Trainer/GYM'},
    {title: "I don't need a Trainer/GYM"},
  ];
  return (
    <View style={styles.whole}>
      <RadioButtonList topic="Let's get started;" data={radioData} />
    </View>
  );
};
const styles = StyleSheet.create({
  whole: {
    marginBottom: hp(43),
  },
});

export default GettingStarted;
