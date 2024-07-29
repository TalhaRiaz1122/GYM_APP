import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EquipmentPreference = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const focusData = [
    'AB Roller',
    'Ball',
    'Bar Bell',
    'Ropes',
    'T-Bar',
    'Gym Ball',
    'Dumbbells',
    'Bosu Ball',
    'TRX',
    'EZ Band',
    'Kettle Bell',
    'Trap Bar',
    'Pulley',
    'Sled',
    'squat rack',
    'bike',
    'bench',
    'pull up bar',
    'treadmill',
    'stair climber',
    'pull up bar',
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
      <View style={styles.container}>
        <Text style={styles.topic}>Equipment Preference:</Text>
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
      <View style={styles.containercheck}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              {
                backgroundColor: rememberMe ? 'transparent' : 'transparent',
                borderColor: rememberMe ? '#3191D7' : '#707070',
              },
            ]}
            onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe && (
              <MaterialIcons name="check" size={hp(2)} color="#3191D7" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I have access to almost any equipment
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  whole: {
    //marginBottom: hp(15),
  },
  container: {
    marginBottom: hp(20),
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  topic: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp(2),
    marginBottom: wp(3),
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
  containercheck: {
    flex: 1,
    marginHorizontal: wp(5),
    backgroundColor: '#051A30',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(1),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: wp(4),
    marginLeft: wp(2),
  },
});

export default EquipmentPreference;
