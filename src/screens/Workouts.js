import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import Question from '../asserts/svgs/Question';
import NextArrow from '../asserts/svgs/NextArrow';
import UperBodyIcon from '../asserts/svgs/UperBodyIcon';
import LegIcon from '../asserts/svgs/LegIcon';
import HiitIcon from '../asserts/svgs/HiitIcon';
import Chart from '../components/Chart';

const Workouts = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      title: 'Upper Body',
      subtitle: 'Strength',
      iconLeft: <UperBodyIcon />,
      iconRight: <NextArrow />,
    },
    {
      id: '2',
      title: 'Leg Day',
      subtitle: 'Cardio',
      iconLeft: <LegIcon />,
      iconRight: <NextArrow />,
    },
    {
      id: '3',
      title: '15 Minute HIIT Workout',
      subtitle: 'HIIT',
      iconLeft: <HiitIcon />,
      iconRight: <NextArrow />,
    },
  ];

  const weightData = [
    {
      id: '1',
      title: '3 KG',
      subtitle: 'Gain',
      icon: <Question width={wp(4)} />,
      backgroundColor: '#3191D7',
    },
    {
      id: '2',
      title: '56 KG',
      subtitle: 'Previous',
      icon: <Question width={wp(4)} />,
      backgroundColor: '#002D4E',
    },
    {
      id: '3',
      title: '59 KG',
      subtitle: 'Current',
      icon: <Question width={wp(4)} />,
      backgroundColor: '#061F38',
    },
  ];

  const renderItem = ({item, index}) => (
    <View
      style={[styles.card, index === data.length - 1 ? styles.lastCard : null]}>
      {item.iconLeft}

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.borderButton}>
          <TouchableOpacity>
            <Text style={styles.borderButtonText}>{item.subtitle}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{position: 'absolute', right: wp(5), alignSelf: 'center'}}
        onPress={() => {
          navigation.navigate('WorkoutPreview');
        }}>
        {item.iconRight}
      </TouchableOpacity>
    </View>
  );

  const weightRenderItem = ({item}) => (
    <View
      style={[
        styles.cardContainerWeight,
        {backgroundColor: item.backgroundColor},
      ]}>
      <View style={styles.iconTopRightWeight}>{item.icon}</View>
      <View style={styles.textCenterWeight}>
        <Text style={styles.cardTitleWeight}>{item.title}</Text>
        <Text style={styles.cardSubtitleWeight}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <HeaderText
          style={{marginVertical: hp(3)}}
          logo={<Text style={{color: 'white', fontSize: wp(5)}}>Workouts</Text>}
          EndIcon={<Question />}
        />
      </View>

      <View style={styles.FlatWork}>
        <Text style={{color: 'white', fontSize: wp(4.5)}}>
          Assigned Workout
        </Text>
        <View style={{marginTop: hp(1)}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginTop: hp(2)}}>
          <Text
            style={{color: 'white', fontSize: wp(4.5), marginBottom: wp(3)}}>
            My Weight
          </Text>
          <View>
            <FlatList
              data={weightData}
              renderItem={weightRenderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </View>
        <View style={{marginTop: hp(3)}}>
          <Text
            style={{color: 'white', fontSize: wp(4.5), marginBottom: wp(4)}}>
            My Reports:
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: Platform.OS == 'android' ? hp(75) : hp(74),
        }}>
        <Chart />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  FlatWork: {
    marginHorizontal: wp(5),
  },
  card: {
    flexDirection: 'row',
    borderColor: '#707070',
    borderBottomWidth: wp(0.25),
    paddingVertical: wp(4),
    marginBottom: wp(2),
    //alignItems: 'center',
  },

  cardContent: {
    marginHorizontal: wp(4),
  },
  cardTitle: {
    color: 'white',
    fontSize: hp(2),
    marginBottom: hp(1),
  },
  borderButton: {
    position: 'absolute',
    marginTop: hp(3.5),
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: wp(1),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
  },
  borderButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: hp(1.5),
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  cardContainerWeight: {
    width: wp(30),
    height: hp(13),
    justifyContent: 'center',
    alignItems: 'center',

    padding: wp(2),
  },
  iconTopRightWeight: {
    position: 'absolute',
    top: hp(1),
    right: wp(2),
  },
  textCenterWeight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitleWeight: {
    color: 'white',
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginBottom: wp(2),
  },
  cardSubtitleWeight: {
    color: '#707070',
    fontSize: hp(1.8),
  },
  lastCard: {
    borderBottomWidth: 0, // Remove border for the last item
  },
});
export default Workouts;
