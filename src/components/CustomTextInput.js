import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  inputStyle,
  Icon,
  Eye,
  EyeOff,
  isPassword,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State for visibility

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: isFocused ? '#0652DD' : '#092441'},
        ]}>
        <TouchableOpacity>{Icon}</TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <TextInput
          placeholderTextColor="white"
          style={[
            styles.input,
            inputStyle,
            {borderColor: isFocused ? '#0652DD' : '#092441'},
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isPassword ? !isVisible : false}
        />
        {isPassword ? (
          <TouchableOpacity
            style={{position: 'absolute', right: wp(5), top: hp(2)}}
            onPress={() => setIsVisible(!isVisible)}>
            {isVisible ? Eye : EyeOff}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: wp(2),
  },
  input: {
    color: 'white',
    height: hp(6),
    backgroundColor: '#092441',
    borderWidth: 2,
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
  },
});

export default CustomTextInput;
