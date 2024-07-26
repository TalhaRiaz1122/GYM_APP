import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import Question from '../asserts/svgs/Question';
import NextArrow from '../asserts/svgs/NextArrow';
import SaladIcon from '../asserts/svgs/SaladIcon';
import FishIcon from '../asserts/svgs/FishIcon';
import Vegetable from '../asserts/svgs/Vegetable';
import Sandwich from '../asserts/svgs/Sandwich';
import { useNavigation } from '@react-navigation/native';

const Meals = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      title: 'Salad',
      subtitle: '112 Kcal',
      iconLeft: <SaladIcon />,
      iconRight: <NextArrow />,
    },
    {
      id: '2',
      title: 'Fish',
      subtitle: '240 Kcal',
      iconLeft: <FishIcon />,
      iconRight: <NextArrow />,
    },
    {
      id: '3',
      title: 'Vegetables',
      subtitle: '80 Kcal',
      iconLeft: <Vegetable />,
      iconRight: <NextArrow />,
    },
    {
      id: '4',
      title: 'Chicken Sandwich',
      subtitle: '180 Kcal',
      iconLeft: <Sandwich />,
      iconRight: <NextArrow />,
    },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.card, index === data.length - 1 ? styles.lastCard : null]}
      onPress={() => {
        navigation.navigate('MealPreview');
      }}
    >
      {item.iconLeft}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.borderButton}>
          <Text style={styles.borderButtonText}>{item.subtitle}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{ position: 'absolute', right: wp(5), alignSelf: 'center' }}
        onPress={() => {
          navigation.navigate('MealPreview');
        }}
      >
        {item.iconRight}
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <HeaderText
          style={{ marginVertical: hp(4) }}
          logo={<Text style={{ color: 'white', fontSize: wp(5) }}>Meals</Text>}
          EndIcon={<Question />}
        />
      </View>
      <View style={styles.FlatWork}>
        <Text style={{ color: 'white', fontSize: wp(4.5) }}>
          Assigned Meals
        </Text>
        <View style={{ marginTop: hp(1) }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
  FlatWork: {
    marginHorizontal: wp(5),
  },
  card: {
    flexDirection: 'row',
    borderColor: '#707070',
    borderBottomWidth: wp(0.25),
    paddingVertical: wp(4),
    marginBottom: wp(2),
  },
  lastCard: {
    borderBottomWidth: 0,
  },
  cardContent: {
    marginHorizontal: wp(4),
  },
  cardTitle: {
    color: 'white',
    fontSize: hp(2),
    marginTop: hp(1),
  },
  borderButton: {
    marginTop: wp(1),
    borderRadius: wp(1),
  },
  borderButtonText: {
    color: '#707070',
    fontSize: hp(1.5),
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
});

export default Meals;
