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

const WorkoutPrefrence = () => {
  const radioData = [{title: 'Intense'}, {title: 'Slow Burn'}];
  const focusData = [
    'Abductors',
    'Neck',
    'Back',
    'Biceps',
    'Calves',
    'Chest',
    'Core',
    'Forearms',
    'Gluteus',
    'Hamstrings',
    'Lower Back',
    'Quadriceps',
    'Shoulders',
    'Traps',
    'Triceps',
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonPress = index => {
    setSelectedButtons(prevSelectedButtons => {
      if (prevSelectedButtons.includes(index)) {
        return prevSelectedButtons.filter(item => item !== index);
      } else {
        return [...prevSelectedButtons, index];
      }
    });
  };

  return (
    <View style={styles.whole}>
      <RadioButtonList
        styleContainer={{marginHorizontal: wp(4)}}
        topic="Workout Preference:"
        topicStyle={{marginHorizontal: wp(1)}}
        data={radioData}
        style={{flexDirection: 'row'}}
        styleradioButtonContainer={{
          flex: 1,
          marginLeft: wp(1),
          marginRight: wp(1),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.topic}>
          What body part do you want to focus on?
        </Text>
        <View style={styles.buttonRow}>
          {focusData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedButtons.includes(index) && styles.buttonSelected,
              ]}
              onPress={() => handleButtonPress(index)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    marginBottom: hp(20),
  },
  container: {
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  topic: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp(2),
    marginBottom: wp(2),
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#092441',
    padding: wp(3),
    borderRadius: wp(2),
    marginBottom: wp(2),
    width: '32%',
    alignItems: 'center',
  },
  buttonSelected: {
    backgroundColor: '#3191D7',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WorkoutPrefrence;
