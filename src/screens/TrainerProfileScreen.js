import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderText from '../components/HeaderText';
import Question from '../asserts/svgs/Question';
import HeartIcon from '../asserts/svgs/HeartIcon';
import SmsIcon from '../asserts/svgs/SmsIcon';
import ShareIcon from '../asserts/svgs/ShareIcon';
import ThirdTrainer from '../asserts/svgs/ThirdTrainer';
import Share from 'react-native-share';

const TrainerProfileScreen = () => {
  const handleShare = async item => {
    const shareOptions = {
      title: 'Share via',
      message: item.subtitle,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const data = [
    {
      id: '1',
      title: 'What is the best way to improve life?',
      subtitle:
        '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout". The point...',
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
    },
    {
      id: '2',
      title: 'What is the best way to improve life?',
      subtitle:
        '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout". The point...',
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
    },
    {
      id: '3',
      title: 'What is the best way to improve life?',
      subtitle:
        '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout". The point...',
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
    },
    {
      id: '4',
      title: 'What is the best way to improve life?',
      subtitle:
        '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout". The point...',
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
    },
  ];

  const renderItem = ({item}) => (
    <View style={{marginHorizontal: wp(5)}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <View
        style={{
          paddingVertical: hp(1),
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {item.hearticon}
          <Text style={{fontSize: hp(1.5), color: 'white', marginLeft: wp(2)}}>
            {item.headbottomtitle}
          </Text>
          <View style={styles.dot} />
          <Text style={{fontSize: hp(1.5), color: 'white'}}>
            {item.headbottomsubtitle}
          </Text>
        </View>
        <View
          style={{
            marginLeft: wp(10),
            flexDirection: 'row',
            flex: 1,
          }}>
          {item.messgicon}
          <Text style={{color: 'white', marginHorizontal: wp(2)}}>
            {item.messgtext}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleShare(item)}>
          {item.Shareicon}
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: wp(0.4),
          borderColor: '#707070',
          opacity: 0.3,
          marginVertical: wp(3),
          marginBottom: wp(5),
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginHorizontal: wp(1)}}>
        <HeaderText
          style={{marginVertical: hp(3), marginTop: wp(9)}}
          logo={
            <Text style={{color: 'white', fontSize: wp(4.5)}}>
              Trainer's Profile
            </Text>
          }
          EndIcon={<Question />}
        />
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
          backgroundColor: '#061F38',
          padding: wp(4),
          borderRadius: wp(4),
        }}>
        <View style={styles.card}>
          <ThirdTrainer
            style={{backgroundColor: '#4A80C1', borderRadius: wp(2)}}
            width={wp(13)}
            height={wp(13)}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Charles Peprah</Text>
            <View style={styles.borderButton}>
              <Text style={styles.borderButtonText}>@PenzilCharlie</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{position: 'absolute', right: wp(2), alignSelf: 'center'}}>
            <Question />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', marginHorizontal: wp(1)}}>
            <View style={styles.borderButton}>
              <Text style={styles.borderButtonText}>Ratings</Text>
            </View>
            <Text style={styles.cardTitle}>4.95</Text>
          </View>
          <View
            style={{alignItems: 'center', marginHorizontal: hp(6), flex: 1}}>
            <View style={styles.borderButton}>
              <Text style={styles.borderButtonText}>Posts</Text>
            </View>
            <Text style={styles.cardTitle}>23</Text>
          </View>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.titleButton}>Give Ratings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: wp(4),
          fontWeight: '500',
          marginVertical: hp(3),
          marginBottom: hp(2),
          marginHorizontal: wp(5),
        }}>
        Recent Posts
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  temButton: {
    padding: wp(2),
    marginHorizontal: wp(1.5),
    borderRadius: wp(2),
  },
  titleButton: {
    fontSize: 16,
    color: 'white',
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
  },
  card: {
    flexDirection: 'row',
    marginBottom: wp(2),
  },
  cardContent: {
    marginHorizontal: wp(3),
  },
  cardTitle: {
    color: 'white',
    fontSize: hp(2),
    marginTop: wp(0.5),
  },
  borderButton: {
    marginTop: wp(0.5),
  },
  borderButtonText: {
    color: '#707070',
    fontSize: hp(1.5),
  },
  dot: {
    width: wp(0.5),
    height: wp(0.5),
    borderRadius: wp(5),
    backgroundColor: 'white',
    marginHorizontal: wp(1),
  },
  itemButton: {
    padding: wp(2),
    //marginHorizontal: wp(1.5),
    borderRadius: wp(2),
    backgroundColor: '#3191D7',
  },
  titleButton: {
    fontSize: 16,
    color: 'white',
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
  },
  title: {
    fontSize: wp(5.5),
    fontWeight: '500',
    color: 'white',
    marginBottom: hp(1),
    width: '70%',
  },
  subtitle: {
    fontSize: wp(3.8),
    color: '#FFFFFF',
    fontWeight: '400',
  },
});

export default TrainerProfileScreen;
