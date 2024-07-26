import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import Calender from '../asserts/svgs/Calender';
import CircleIcon from '../asserts/svgs/CircleIcon';
import RestLineIcon from '../asserts/svgs/RestLineIcon';

const WorkoutPreview = () => {
  const navigation = useNavigation();
  const events = [
    { key: '1', time: '30 Sec', activity: 'Jumping Jacks' },
    { key: '2', time: '60 Sec', activity: 'High Knees' },
    { key: '3', time: '20 Sec', activity: 'Push Ups' },
  ];
  const events1 = [
    { key: '5', time: '15 Reps', activity: 'Squats' },
    { key: '6', time: '10 Reps', activity: 'Curls' },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.line} />
      <View style={styles.content}>
        <Text style={styles.time}>{item.time}</Text>
        <CircleIcon
          outerColor="white"
          style={{ marginLeft: wp(2), marginRight: wp(2) }}
        />

        <Text style={styles.activity}>{item.activity}</Text>
      </View>
    </View>
  );

  const renderItem1 = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.line} />
      <View style={styles.content1}>
        <Text style={styles.time}>{item.time}</Text>
        <CircleIcon
          outerColor="white"
          style={{ marginLeft: wp(2), marginRight: wp(2) }}
        />

        <Text style={styles.activity}>{item.activity}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ backgroundColor: '#092441' }}>
        <HeaderText
          style={{ marginVertical: hp(3) }}
          logo={
            <Text style={{ color: 'white', fontSize: wp(5) }}>
              Workout Preview
            </Text>
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(5),
          marginVertical: hp(2),
        }}
      >
        <Text style={{ color: 'white', fontSize: wp(4), flex: 1 }}>
          Workout
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Calender color="#3191D7" width={wp(4)} height={18} top={wp(0.5)} />
          <Text style={{ color: 'white', fontSize: wp(4), marginLeft: wp(2) }}>
            Add to Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: wp(5) }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(13.5),
          }}
        >
          <View style={styles.dot} />
          <Text style={styles.startText}>Start</Text>
        </View>

        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(3),
          }}
        >
          <Text style={styles.time}>60 Sec</Text>
          <View style={styles.dot} />
          <Text style={styles.startText}>Rest</Text>
          <RestLineIcon width={wp(60)} />
        </View>
        <View>
          <FlatList
            data={events1}
            renderItem={renderItem1}
            keyExtractor={(item) => item.key}
          />
        </View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(13.5),
          }}
        >
          <View style={styles.dot} />
          <Text style={styles.finishText}>Finish</Text>
        </View>
        <View style={{ marginTop: hp(18) }}>
          <CustomButton
            title="Start Workout"
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  itemContainer: {},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3191D7',
    marginRight: 10,
    marginLeft: wp(2),
    //backgroundColor: 'red',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#707070',
    marginBottom: wp(1),
    opacity: 0.3,
    marginRight: wp(3),
    marginLeft: wp(16.5),
  },
  content1: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    marginLeft: wp(2),
  },
  time: {
    color: '#707070',
    fontSize: wp(3.5),
  },
  activity: {
    color: '#fff',
    fontSize: wp(4),
  },
  startText: {
    marginRight: wp(2),
    color: 'white',
    fontSize: wp(4),
    //marginBottom: 20,
  },
  finishText: {
    color: 'white',
    fontSize: wp(4),
    //marginTop: 20,
  },
});
export default WorkoutPreview;
