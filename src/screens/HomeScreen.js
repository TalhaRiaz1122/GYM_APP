import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeHeaderImage from '../asserts/svgs/HomeHeaderImage';
import Calendar from '../asserts/svgs/Calender';
import SearchIcon from '../asserts/svgs/SearchIcon';
import GymIcon from '../asserts/svgs/JymIcon';
import MealIcon from '../asserts/svgs/MealIcon';
import FeedIcon from '../asserts/svgs/FeedIcon';
import DotMenu from '../asserts/svgs/DotMenu';
import FirstTrainer from '../asserts/svgs/FirstTrainer';
import SecondTrainer from '../asserts/svgs/SecondTrainer';
import ThirdTrainer from '../asserts/svgs/ThirdTrainer';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      text: 'Workouts',
      icon: <GymIcon style={{top: wp(2), marginLeft: wp(2)}} />,
    },
    {
      id: '2',
      text: 'Meals',
      icon: <MealIcon style={{top: wp(2), marginLeft: wp(2)}} />,
    },
    {
      id: '3',
      text: 'Feed',
      icon: <FeedIcon style={{top: wp(2), marginLeft: wp(2)}} />,
    },
    {
      id: '4',
      text: 'Calendar',
      icon: (
        <Calendar
          style={{top: wp(2), marginLeft: wp(2)}}
          width={24}
          height={24}
        />
      ),
    },
  ];

  const trainerData = [
    {
      id: '1',
      icon: (
        <FirstTrainer
          style={{backgroundColor: '#9181F2', borderRadius: wp(2)}}
          width={wp(30)}
          height={wp(28)}
        />
      ),
      title: 'Kelli Hall',
      subtitle: '@KelliHall',
    },

    {
      id: '2',
      icon: (
        <SecondTrainer
          style={{backgroundColor: '#BFE1FF', borderRadius: wp(2)}}
          width={wp(30)}
          height={wp(28)}
        />
      ),
      title: 'Sandy Barnett',
      subtitle: '@SandyB',
    },
    {
      id: '3',
      icon: (
        <ThirdTrainer
          style={{backgroundColor: '#3BADFF', borderRadius: wp(2)}}
          width={wp(30)}
          height={wp(28)}
        />
      ),
      title: 'Trainer 3',
      subtitle: 'Yoga Instructor',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.card,
        {backgroundColor: selectedCard === item.id ? '#3191D7' : '#002D4E'},
      ]}
      onPress={() => {
        setSelectedCard(item.id);
        switch (item.id) {
          case '1':
            navigation.navigate('Workouts');
            break;
          case '2':
            navigation.navigate('Meals');
            break;
          case '3':
            navigation.navigate('MyFeedScreen');
            break;
          case '4':
            navigation.navigate('CalenderScreen');
            break;
          default:
            console.log('Unknown item id');
        }
      }}>
      {item.icon}
      <Text style={styles.cardText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const renderTrainerItem = ({item}) => (
    <View style={styles.trainerCard}>
      <View style={{alignItems: 'center', marginTop: wp(1)}}>{item.icon}</View>
      <View style={styles.trainerCardContent}>
        <View>
          <Text style={styles.trainerTitle}>{item.title}</Text>
          <Text style={styles.trainerSubtitle}>{item.subtitle}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={() => {
            navigation.navigate('TrainerProfileScreen');
          }}>
          <Text style={styles.viewProfileText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.whole}>
      <StatusBar backgroundColor="#051A30" barStyle="light-content" />
      <View style={{flex: 1}}>
        <View style={styles.Header}>
          <View style={styles.headerTextView}>
            <View style={styles.headerText}>
              <Text style={{color: '#7B7B7C'}}>Hello,</Text>
              <Text
                style={{color: 'white', fontSize: wp(5), fontWeight: 'bold'}}>
                Nathan T.
              </Text>
            </View>
            <View style={styles.headerImage}>
              <HomeHeaderImage />
            </View>
          </View>
          <View style={styles.cardInformation}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: wp(0),
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Platform.OS == 'android' ? hp(1) : hp(0.3),
                marginHorizontal: wp(2),
                zIndex: 1,
              }}>
              <SearchIcon width={wp(10)} height={hp(5)} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Schedule an Appointment"
              placeholderTextColor="#7B7B7C"
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1.2}}>
        <View style={styles.cardContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </View>
      <View style={{flex: 1.2}}>
        <View style={{marginHorizontal: wp(5)}}>
          <View
            style={{
              marginVertical: hp(1),
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                flex: 1,
                fontWeight: 'bold',
              }}>
              My Trainers
            </Text>
            <TouchableOpacity>
              <DotMenu style={{alignContent: 'flex-end', marginTop: wp(3)}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: wp(5)}}>
          <FlatList
            data={trainerData}
            renderItem={renderTrainerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalFlatList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  input: {
    backgroundColor: '#002D4E',
    paddingHorizontal: wp(5),
    paddingVertical: wp(4),
    borderRadius: hp(5),
    color: 'white',
  },
  Header: {
    backgroundColor: '#092441',
    padding: wp(1),
    borderBottomLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
  },
  headerTextView: {
    backgroundColor: '#092441',
    marginTop: hp(1),
    padding: hp(2),
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    marginTop: hp(2),
  },
  headerImage: {
    marginTop: hp(2),
    alignItems: 'flex-end',
  },
  cardInformation: {
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
  cardContainer: {
    backgroundColor: '#051A30',
    //marginTop: hp(5),
    marginHorizontal: wp(3),
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    height: hp(15),
    margin: wp(2),
    borderRadius: wp(2),
    padding: hp(1),
    justifyContent: 'space-between',
  },
  cardText: {
    color: 'white',
    fontSize: wp(4),
    marginLeft: wp(2),
  },
  horizontalFlatList: {
    marginTop: hp(1),
  },
  trainerCard: {
    width: wp(37),
    height: hp(27),
    backgroundColor: '#092441',
    borderRadius: wp(2),
    padding: wp(2),
    marginRight: wp(3),
  },
  trainerCardContent: {
    marginHorizontal: wp(1),
    marginVertical: hp(1),
  },
  trainerTitle: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  trainerSubtitle: {
    color: '#7B7B7C',
    fontSize: wp(3),
    marginBottom: hp(1),
  },
  viewProfileButton: {
    backgroundColor: '#3191D7',
    padding: wp(2),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  viewProfileText: {
    color: 'white',
    fontSize: hp(2),
  },
});

export default HomeScreen;
