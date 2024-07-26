// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NextArrow from '../asserts/svgs/NextArrow';

const CustomNextButton = ({ onPress, title, style, textStyle, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
      <View style={{ flex: 1 }}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
      {!children && <NextArrow style={{}} />}
      {/* <NextArrow style={{}} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    backgroundColor: '#3191D7',
    padding: wp(2),
    marginVertical: wp(1),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: wp(4),
  },
});

export default CustomNextButton;
