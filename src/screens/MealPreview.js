import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderText from '../components/HeaderText';
import PlusIcon from '../asserts/svgs/PlusIcon';
import DotMenu from '../asserts/svgs/DotMenu';

const data = [
  {
    id: '1',
    title: '41g',
    subtitle: 'Carbs',
    borderColor: '#0D2F50',
    opacity: 0.9,
  },
  {
    id: '2',
    title: '17g',
    subtitle: 'Fat',
    borderColor: '#FF776B',
    opacity: 0.1,
  },
  {
    id: '3',
    title: '29g',
    subtitle: 'Protein',
    borderColor: '#FDC661',
    opacity: 0.1,
  },
];
const data1 = [
  { id: '1', text: '2 Slices of bread, white farmhouse' },
  { id: '2', text: '1 handful of roasted chicken' },
  { id: '3', text: '2 egg yolks, medium' },
  { id: '4', text: 'Lemon juice, freshly squeezed' },
];
const data2 = [
  {
    id: '1',
    title:
      '1. Butter your bread and toast them until golden while you chop the onion and garlic. Take onion to a small bowl and squeeze a bit of ',
    content:
      'while you chop the onion and garlic. Take onion to a small bowl and squeeze a bit of lemon juice. ',
  },
  {
    id: '2',
    title: 'Heat some oil in a pan ',
    content:
      'Add the chopped garlic and onion. Cook until softened. Then add tomatoes and cook until they start to break down. ',
  },
  {
    id: '3',
    title: 'Add spices and cook ',
    content:
      'Add your preferred spices and cook for another 2-3 minutes. Adjust seasoning to taste. ',
  },
];

const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};

const MealPreview = () => {
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.circle,
        { borderColor: hexToRgba(item.borderColor, item.opacity) },
      ]}
    >
      <Text style={styles.title1}>{item.title}</Text>
      <Text style={styles.subtitle1}>{item.subtitle}</Text>
    </View>
  );

  const renderItem1 = ({ item }) => (
    <View style={styles.itemContainer1}>
      <View style={styles.dot} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem2 = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>
        {item.title}
        {expanded[item.id] && (
          <Text style={styles.content}>{item.content}</Text>
        )}
        <TouchableOpacity onPress={() => toggleExpand(item.id)}>
          <Text style={styles.readMore}>
            {expanded[item.id] ? 'Read Less...' : 'Read More...'}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.statusBarOverlay} />
      <ImageBackground
        source={require('../asserts/images/MealImage.png')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.headerOverlay}>
          <HeaderText
            style={{ marginVertical: hp(4), marginTop: hp(6) }}
            logo={
              <Text style={{ color: 'white', fontSize: wp(5) }}>
                Meal Preview
              </Text>
            }
            statusBarColor={'transparent'}
            translucent={true}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(4),
          marginVertical: hp(2),
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: wp(4.5),
            fontWeight: 'bold',
            flex: 1,
          }}
        >
          Chicken Sandwich
        </Text>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <PlusIcon color="#3191D7" width={wp(4.5)} height={18} top={wp(1)} />
          <Text
            style={{
              color: 'white',
              fontSize: wp(3),
              marginLeft: wp(1.5),
              marginTop: hp(1),
            }}
          >
            Add to Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ marginHorizontal: wp(5) }}>
          <View
            style={{
              marginVertical: hp(1),
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                flex: 1,
              }}
            >
              Nutrition:
            </Text>
            <TouchableOpacity>
              <DotMenu style={{ alignContent: 'flex-end', marginTop: wp(3) }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#092441',
              paddingVertical: hp(2),
              borderRadius: wp(3),
            }}
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
              contentContainerStyle={styles.containerCircle}
              scrollEnabled={false}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: wp(5) }}>
          <View
            style={{
              marginVertical: hp(1.5),
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                flex: 1,
              }}
            >
              Ingredients:
            </Text>
            <TouchableOpacity>
              <DotMenu style={{ alignContent: 'flex-end', marginTop: wp(3) }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#092441',
              paddingVertical: hp(2),
              borderRadius: wp(3),
            }}
          >
            <FlatList
              data={data1}
              renderItem={renderItem1}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.containerText1}
              scrollEnabled={false}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: wp(5) }}>
          <View
            style={{
              marginVertical: hp(1.5),
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                flex: 1,
              }}
            >
              Preparation:
            </Text>
            <TouchableOpacity>
              <DotMenu style={{ alignContent: 'flex-end', marginTop: wp(3) }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#092441',
              paddingVertical: hp(2),
              borderRadius: wp(3),
            }}
          >
            <FlatList
              data={data2}
              renderItem={renderItem2}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.container}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  statusBarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: StatusBar.currentHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  imageBackground: {
    width: '100%',
    height: hp(35),
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  containerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(11),
    height: hp(11),
    borderRadius: hp(7),
    borderWidth: wp(2),
    margin: wp(1.5),
  },
  title1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 12,
    color: 'gray',
  },
  containerText1: {
    marginHorizontal: wp(4),
  },
  itemContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    margin: wp(0.5),
  },
  dot: {
    width: wp(1.5),
    height: wp(1.5),
    borderRadius: wp(5),
    backgroundColor: '#3191D7',
    marginRight: 10,
  },
  text: {
    fontSize: wp(3.5),
    color: 'white',
  },
  container: {
    marginHorizontal: wp(4),
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(5),
  },
  title: {
    fontSize: wp(3.7),
    color: 'white',
  },
  content: {
    margin: wp(1),
    fontSize: wp(3.7),
    color: 'white',
  },
  readMore: {
    top: wp(1),
    fontSize: wp(3.5),
    color: '#3191D7',
  },
});

export default MealPreview;
