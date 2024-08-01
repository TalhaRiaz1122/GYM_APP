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
import FirstTrainer from '../asserts/svgs/FirstTrainer';
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePickerIcon from '../asserts/svgs/ImagePicker';
import HeartIcon from '../asserts/svgs/HeartIcon';
import SmsIcon from '../asserts/svgs/SmsIcon';
import ShareIcon from '../asserts/svgs/ShareIcon';
import SecondTrainer from '../asserts/svgs/SecondTrainer';
import VerticalDotMenu from '../asserts/svgs/VerticalDotMenu';
import PostedIcon from '../asserts/svgs/PostedIcon';
import Share from 'react-native-share';

const MyFeedScreen = () => {
  const [imageUris, setImageUris] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [imageUri, setImageUri] = useState(null); // Image URI state
  const [showButton, setShowButton] = useState(false);

  const handleShare = async item => {
    const shareOptions = {
      title: 'Share via',
      message: item.description,
      url: item.imageUri ? item.imageUri : '', // Include the image URL if present
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const data1 = [
    {
      id: '1',
      title: 'Kelli Hall',
      subtitle: '@KelliHall',
      subtitledot: '3 mins ago',
      description:
        'It is a long established fact that a reader will be dis- tracted by the readable content...',
      iconLeft: (
        <FirstTrainer
          style={{backgroundColor: '#9181F2', borderRadius: wp(2)}}
          width={wp(15)}
          height={wp(15)}
        />
      ),
      iconRight: <Question />,
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
      bottomlefticon: (
        <SecondTrainer
          style={{backgroundColor: '#BFE1FF', borderRadius: wp(2)}}
          width={wp(12)}
          height={wp(12)}
        />
      ),
      bottomtitle: 'Sandy Barnett',
      bottomsubtitle: '@SandyB',
      bottomiconRight: <VerticalDotMenu />,
      bottomText: 'It is a long established fact that a reader will be...',
    },
    {
      id: '2',
      title: 'Kelli Hall',
      subtitle: '@KelliHall',
      subtitledot: '3 mins ago',
      description:
        'It is a long established fact that a reader will be dis- tracted by the readable content...',
      iconLeft: (
        <PostedIcon
          style={{backgroundColor: '#9181F2', borderRadius: wp(2)}}
          width={wp(15)}
          height={wp(15)}
        />
      ),
      iconRight: <Question />,
      hearticon: <HeartIcon />,
      headbottomtitle: 'Upvoted',
      headbottomsubtitle: '5K',
      messgicon: <SmsIcon />,
      messgtext: '397',
      Shareicon: <ShareIcon />,
      bottomlefticon: (
        <SecondTrainer
          style={{backgroundColor: '#BFE1FF', borderRadius: wp(2)}}
          width={wp(12)}
          height={wp(12)}
        />
      ),
      bottomtitle: 'Sandy Barnett',
      bottomsubtitle: '@SandyB',
      bottomiconRight: <VerticalDotMenu />,
      bottomText: 'It is a long established fact that a reader will be...',
    },
  ];

  const data = [
    {id: '1', title: 'Top'},
    {id: '2', title: 'Recently Posted'},
    {id: '3', title: 'For Me'},
    {id: '4', title: 'Hot Post'},
    {id: '5', title: 'Average'},
  ];

  const handlePress = id => {
    setSelectedId(id);
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#3191D7' : '#092441';

    return (
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        style={[styles.itemButton, {backgroundColor}]}>
        <Text style={styles.titleButton}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item}) => {
    const imageUri = imageUris[item.id];

    return (
      <View
        elevation={5}
        style={{
          padding: hp(2),
          backgroundColor: '#092441',
          borderRadius: wp(4),
          shadowColor: 'white',
          shadowOpacity: 0.2,
          shadowRadius: wp(2),
          shadowOffset: {width: 0, height: 2},
          elevation: 5,
          marginTop: wp(4),
          marginBottom: wp(1),
          marginHorizontal: wp(5),
        }}>
        <View style={styles.card}>
          {item.iconLeft}
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.borderButton}>
              <Text style={styles.borderButtonText}>{item.subtitle}</Text>
              <View style={styles.dot} />
              <Text style={styles.borderButtonText}>{item.subtitledot}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            {item.iconRight}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: 'white', marginVertical: 16}}>
            {item.description}
          </Text>
        </View>
        <View>
          {imageUri ? (
            <View style={{position: 'relative'}}>
              <Image source={{uri: imageUri}} style={styles.selectedImage} />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                }}
                onPress={() => {
                  launchImageLibrary({mediaType: 'photo'}, response => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else {
                      const source = {uri: response.assets[0].uri};
                      setImageUris(prevImageUris => ({
                        ...prevImageUris,
                        [item.id]: source.uri,
                      }));
                    }
                  });
                }}
                onMouseEnter={() => {
                  setShowButton(true);
                }}
                onMouseLeave={() => {
                  setShowButton(false);
                }}>
                {showButton}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                launchImageLibrary({mediaType: 'photo'}, response => {
                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else {
                    const source = {uri: response.assets[0].uri};
                    setImageUris(prevImageUris => ({
                      ...prevImageUris,
                      [item.id]: source.uri,
                    }));
                  }
                });
              }}
              style={styles.imagePicker}>
              <ImagePickerIcon style={styles.imageIcon} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            paddingVertical: wp(4),
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.hearticon}
            <Text
              style={{fontSize: hp(1.5), color: 'white', marginLeft: wp(2)}}>
              {item.headbottomtitle}
            </Text>
            <View style={styles.dot} />
            <Text style={{fontSize: hp(1.5), color: 'white'}}>
              {item.headbottomsubtitle}
            </Text>
          </View>
          <View
            style={{
              marginLeft: wp(6),
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
          }}
        />
        <View style={{flexDirection: 'row', marginVertical: wp(4)}}>
          {item.bottomlefticon}
          <View style={styles.cardContent}>
            <Text style={{color: 'white', fontSize: hp(1.7)}}>
              {item.bottomtitle}
            </Text>
            <View style={styles.borderButton}>
              <Text style={{color: 'white'}}>{item.bottomsubtitle}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            {item.bottomiconRight}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: 'white'}}>{item.bottomText}</Text>
          <TouchableOpacity>
            <Text style={{color: '#3191D7', marginVertical: wp(1)}}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // const renderItem1 = ({ item }) => {
  //   const imageUri = imageUris[item.id];

  //   return (
  //     <View
  //       elevation={5}
  //       style={{
  //         padding: hp(2),
  //         backgroundColor: '#092441',
  //         borderRadius: wp(4),
  //         shadowColor: 'white',
  //         shadowOpacity: 0.2,
  //         shadowRadius: wp(2),
  //         shadowOffset: { width: 0, height: 2 },
  //         elevation: 5,
  //         marginTop: wp(4),
  //         marginBottom: wp(1),
  //         marginHorizontal: wp(5),
  //       }}
  //     >
  //       <View style={styles.card}>
  //         {item.iconLeft}
  //         <View style={styles.cardContent}>
  //           <Text style={styles.cardTitle}>{item.title}</Text>
  //           <View style={styles.borderButton}>
  //             <Text style={styles.borderButtonText}>{item.subtitle}</Text>
  //             <View style={styles.dot} />
  //             <Text style={styles.borderButtonText}>{item.subtitledot}</Text>
  //           </View>
  //         </View>

  //         <TouchableOpacity
  //           style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
  //         >
  //           {item.iconRight}
  //         </TouchableOpacity>
  //       </View>
  //       <View>
  //         <Text style={{ color: 'white', marginVertical: 16 }}>
  //           {item.description}
  //         </Text>
  //       </View>
  //       <View>
  //         {imageUri ? (
  //           <View style={{ position: 'relative' }}>
  //             <Image source={{ uri: imageUri }} style={styles.selectedImage} />
  //             <TouchableOpacity
  //               style={{
  //                 position: 'absolute',
  //                 top: 0,
  //                 left: 0,
  //                 right: 0,
  //                 bottom: 0,
  //                 justifyContent: 'center',
  //                 alignItems: 'center',
  //                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //                 opacity: 0,
  //               }}
  //               onPress={() => {
  //                 launchImageLibrary({ mediaType: 'photo' }, (response) => {
  //                   if (response.didCancel) {
  //                     console.log('User cancelled image picker');
  //                   } else if (response.error) {
  //                     console.log('ImagePicker Error: ', response.error);
  //                   } else {
  //                     const source = { uri: response.assets[0].uri };
  //                     setImageUris((prevImageUris) => ({
  //                       ...prevImageUris,
  //                       [item.id]: source.uri,
  //                     }));
  //                   }
  //                 });
  //               }}
  //               onMouseEnter={() => {
  //                 setShowButton(true);
  //               }}
  //               onMouseLeave={() => {
  //                 setShowButton(false);
  //               }}
  //             >
  //               {showButton}
  //             </TouchableOpacity>
  //           </View>
  //         ) : (
  //           <TouchableOpacity
  //             onPress={() => {
  //               launchImageLibrary({ mediaType: 'photo' }, (response) => {
  //                 if (response.didCancel) {
  //                   console.log('User cancelled image picker');
  //                 } else if (response.error) {
  //                   console.log('ImagePicker Error: ', response.error);
  //                 } else {
  //                   const source = { uri: response.assets[0].uri };
  //                   setImageUris((prevImageUris) => ({
  //                     ...prevImageUris,
  //                     [item.id]: source.uri,
  //                   }));
  //                 }
  //               });
  //             }}
  //             style={styles.imagePicker}
  //           >
  //             <ImagePickerIcon style={styles.imageIcon} />
  //           </TouchableOpacity>
  //         )}
  //       </View>
  //       <View
  //         style={{
  //           paddingVertical: wp(4),
  //           flexDirection: 'row',
  //         }}
  //       >
  //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //           {item.hearticon}
  //           <Text
  //             style={{ fontSize: hp(1.5), color: 'white', marginLeft: wp(2) }}
  //           >
  //             {item.headbottomtitle}
  //           </Text>
  //           <View style={styles.dot} />
  //           <Text style={{ fontSize: hp(1.5), color: 'white' }}>
  //             {item.headbottomsubtitle}
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             marginLeft: wp(6),
  //             flexDirection: 'row',
  //             flex: 1,
  //           }}
  //         >
  //           {item.messgicon}
  //           <Text style={{ color: 'white', marginHorizontal: wp(2) }}>
  //             {item.messgtext}
  //           </Text>
  //         </View>
  //         {item.Shareicon}
  //       </View>
  //       <View
  //         style={{
  //           borderBottomWidth: wp(0.4),
  //           borderColor: '#707070',
  //           opacity: 0.3,
  //         }}
  //       />
  //       <View style={{ flexDirection: 'row', marginVertical: wp(4) }}>
  //         {item.bottomlefticon}
  //         <View style={styles.cardContent}>
  //           <Text style={{ color: 'white', fontSize: hp(1.7) }}>
  //             {item.bottomtitle}
  //           </Text>
  //           <View style={styles.borderButton}>
  //             <Text style={styles.borderButtonText}>{item.bottomsubtitle}</Text>
  //           </View>
  //         </View>
  //         <TouchableOpacity
  //           style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
  //         >
  //           {item.bottomiconRight}
  //         </TouchableOpacity>
  //       </View>
  //       <View>
  //         <Text style={{ color: 'white' }}>{item.bottomText}</Text>
  //         <TouchableOpacity>
  //           <Text style={{ color: '#3191D7', marginVertical: wp(1) }}>
  //             Reply
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginHorizontal: wp(1)}}>
        <HeaderText
          style={{marginVertical: hp(3), marginTop: wp(9)}}
          logo={<Text style={{color: 'white', fontSize: wp(5)}}>My Feed</Text>}
          EndIcon={<Question />}
        />
      </View>
      <View style={{marginLeft: wp(4)}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={data1}
        renderItem={renderItem1}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  itemButton: {
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
    flexDirection: 'row',
    alignItems: 'center',
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
  imagePicker: {
    backgroundColor: '#002D4E',
    padding: wp(3),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(25),
  },
  imagePickerText: {
    textAlign: 'center',
    color: 'white',
  },
  imageIcon: {
    alignSelf: 'center',
  },
  selectedImage: {
    width: '100%',
    height: hp(25),
    borderRadius: wp(2),
  },
});

export default MyFeedScreen;
