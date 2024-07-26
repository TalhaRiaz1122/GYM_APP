// components/OTPInput.js

import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OTPInput = ({ code, setCode }) => {
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length > 1) {
      text = text.slice(0, 1);
    }
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };
  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <View style={styles.container}>
      {code.map((value, index) => (
        <TextInput
          key={index}
          ref={(input) => (inputs.current[index] = input)}
          style={[
            styles.input,
            { backgroundColor: value ? "#3191D7" : "#092441" },
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(2),
  },
  input: {
    width: wp(14),
    height: hp(7),
    backgroundColor: "#092441",
    borderColor: "#092441",
    borderWidth: 2,
    borderRadius: wp(2),
    textAlign: "center",
    fontSize: wp(6),
    color: "white",
  },
});
export default OTPInput;
