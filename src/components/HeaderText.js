import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SingleArrow from '../asserts/svgs/SingleArrow';
import {useNavigation} from '@react-navigation/native';

const HeaderText = ({logo, EndIcon, style, statusBarColor, Arrowstyle}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, style]}>
      <StatusBar
        backgroundColor={statusBarColor || '#051A30'}
        barStyle="light-content"
      />

      <View style={[{flex: 1}, Arrowstyle]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <SingleArrow />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <TouchableOpacity>{logo}</TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          {EndIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },

  header: {
    marginHorizontal: wp(5),
    alignItems: 'center',
    marginVertical: hp(1),
    flexDirection: 'row',
  },
  footer: {
    flex: 6,
    marginHorizontal: wp(5),
  },
  iconview: {
    marginVertical: wp(1),
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    marginHorizontal: wp(1),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  checkboxLabel: {
    color: 'white',
    fontSize: wp(4),
    marginLeft: wp(1),
  },
  forgotpass: {
    position: 'absolute',
    right: wp(0),
    top: hp(1.5),
  },
});

export default HeaderText;
