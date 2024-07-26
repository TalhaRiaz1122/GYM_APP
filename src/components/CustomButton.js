// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({ onPress, title, style, textStyle, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3191D7',
    padding: wp(2),
    marginVertical: wp(1),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: wp(4),
  },
});

export default CustomButton;
