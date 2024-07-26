// components/Slider.js

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Slider = ({ activeIndex, views }) => {
  return (
    <View style={styles.slider}>
      {views.map((view, index) => (
        <View
          key={view.id}
          style={[
            styles.view,
            { backgroundColor: activeIndex === index ? 'white' : '#707070' },
          ]}
        ></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(3),
  },
  view: {
    width: wp(7),
    height: 3,
    marginRight: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
    marginBottom: wp(3),
  },
});

export default Slider;
