// RadioButtonList.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RadioButtonList = ({
  topic,
  data,
  style,
  styleradioButtonContainer,
  topicStyle,
  styleContainer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.topic, topicStyle]}>{topic}</Text>
      <View style={style}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.radioButtonContainer,
              selectedOption === index && styles.selectedRadioButtonContainer,
              styleradioButtonContainer,
            ]}
            onPress={() => setSelectedOption(index)}
          >
            <View
              style={[
                styles.textContainer,
                item.subtitle
                  ? styles.twoTextContainer
                  : styles.oneTextContainer,
              ]}
            >
              <Text
                style={[
                  styles.radioButtonLabel,
                  selectedOption === index && styles.selectedRadioButtonLabel,
                ]}
              >
                {item.title}
              </Text>
              {item.subtitle && (
                <Text
                  style={[
                    styles.radioButtonSubLabel,
                    selectedOption === index &&
                      styles.selectedRadioButtonSubLabel,
                  ]}
                >
                  {item.subtitle}
                </Text>
              )}
            </View>
            <View
              style={[
                styles.radioButton,
                selectedOption === index && styles.selectedRadioButton,
              ]}
            >
              {selectedOption === index && (
                <MaterialIcons name="check" size={hp(1.5)} color="white" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  topic: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp(2),
    marginBottom: wp(1),
  },
  radioButtonContainer: {
    backgroundColor: '#092441',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(1),
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
  },
  selectedRadioButtonContainer: {
    backgroundColor: '#3191D7',
  },
  textContainer: {
    flex: 1,
  },
  oneTextContainer: {
    justifyContent: 'center',
  },
  twoTextContainer: {
    justifyContent: 'space-between',
  },
  radioButton: {
    height: hp(2.5),
    width: hp(2.5),
    borderRadius: hp(1.25),
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#707070',
    justifyContent: 'center',
    marginRight: wp(2),
  },
  selectedRadioButton: {
    borderColor: '#ffff',
    borderWidth: 2,
  },
  radioButtonLabel: {
    fontSize: wp(4),
    color: '#fff',
  },
  selectedRadioButtonLabel: {
    color: '#fff',
  },
  radioButtonSubLabel: {
    fontSize: wp(3.5),
    color: '#7B7B7C',
  },
  selectedRadioButtonSubLabel: {
    color: '#fff',
  },
});

export default RadioButtonList;
