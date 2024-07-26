// components/CustomButton.js
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SocialButton = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3191D7",
    padding: wp(2),
    marginVertical: wp(1),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SocialButton;
