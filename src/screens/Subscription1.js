import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BottomSheetComponent from '../components/BottomSheetComponent';
import {BlurView} from '@react-native-community/blur';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import HeaderText from '../components/HeaderText';
import Question from '../asserts/svgs/Question';
import DropDownIcon from '../asserts/svgs/DropDownIcon';
import Tick from '../asserts/svgs/Tick';
import CustomNextButton from '../components/CustomNextButton';
import {Platform} from 'react-native';

const Subscription1 = () => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const navigation = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState(2);

  return (
    <View style={styles.container}>
      {isSheetVisible && (
        <BlurView style={styles.absolute} blurType="light" blurAmount={0.5} />
      )}
      <View style={{position: 'relative'}}>
        <HeaderText
          style={{
            marginVertical: Platform.OS == 'android' ? hp(2) : hp(4),
            marginBottom: Platform.OS == 'android' ? hp(2) : hp(6),
            top: Platform.OS == 'android' ? hp(0) : hp(4),
            zIndex: Platform.OS == 'android' ? -1 : 1,
          }}
          logo={
            <Text style={{color: 'white', fontSize: wp(5)}}>
              Class Membership
            </Text>
          }
          EndIcon={<Question />}
        />

        <View
          style={{
            marginHorizontal: wp(5),
            marginVertical: hp(2),
            zIndex: Platform.OS == 'android' ? -1 : 1,
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#3191D7',
              paddingVertical: hp(3),
              borderTopLeftRadius: wp(4),
              borderTopRightRadius: wp(4),
            }}>
            <Text style={{fontSize: wp(4), color: 'white'}}>
              CHOOSE SUBSCRIPTION
            </Text>
          </View>
          <View
            style={{
              borderColor: 'white',
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
            }}>
            <View
              style={{
                marginHorizontal: wp(4),
                marginVertical: hp(1),
              }}>
              <View
                style={{
                  marginVertical: hp(2),
                  backgroundColor: '#012743',
                  paddingVertical: hp(2),
                  paddingHorizontal: wp(4),
                  flexDirection: 'row',
                  borderRadius: wp(2),
                }}>
                <Text
                  style={{
                    flex: 1,
                    color: 'white',
                    fontSize: wp(4),
                  }}>
                  SUBSCRIPTION - II
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <DropDownIcon width={wp(3)} height={hp(3)} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#012743',
                  borderRadius: wp(2),
                  marginBottom: hp(1),
                }}>
                <TouchableOpacity
                  onPress={() => setSelectedRadio(1)}
                  style={{
                    backgroundColor: '#002D4E',
                    paddingVertical: hp(2),
                    paddingHorizontal: wp(4),
                    flexDirection: 'row',
                    borderTopLeftRadius: wp(2),
                    borderTopRightRadius: wp(2),
                  }}>
                  <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                    <View>
                      {selectedRadio == 1 ? (
                        <View
                          style={{
                            marginVertical: wp(1),
                            marginRight: wp(2),
                            width: wp(4),
                            height: wp(4),
                            borderColor: '#3191D7',
                            borderRadius: wp(15),
                            borderWidth: 3,
                          }}></View>
                      ) : (
                        <View
                          style={{
                            marginVertical: wp(1),
                            marginRight: wp(2),
                            width: wp(4),
                            height: wp(4),
                            borderColor: '#ccc',
                            borderRadius: wp(15),
                            borderWidth: 3,
                          }}></View>
                      )}
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      flex: 1,
                      color: 'white',
                      fontSize: wp(4),
                    }}>
                    SUBSCRIPTION - II
                  </Text>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text
                      style={{
                        flex: 1,
                        color: 'white',
                      }}>
                      USD 80
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{paddingVertical: hp(2), paddingHorizontal: wp(4)}}>
                  <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
                    <Tick style={{marginRight: wp(2)}} />
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      All of the benefits of Tier I
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
                    <Tick style={{marginRight: wp(2)}} />
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      Super-Slim Smoothies Cookbook
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
                    <Tick style={{marginRight: wp(2)}} />
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      90-day Abs Routines
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
                    <Tick style={{marginRight: wp(2)}} />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: wp(4),
                      }}>
                      2 personal feedback discussions per month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setSelectedRadio(2)}
            style={{
              marginVertical: hp(2),
              backgroundColor: '#002D4E',
              paddingVertical: hp(2),
              paddingHorizontal: wp(5),
              flexDirection: 'row',
              borderRadius: wp(2),
            }}>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
              <View>
                {selectedRadio == 2 ? (
                  <View
                    style={{
                      marginVertical: wp(1),
                      marginRight: wp(2),
                      width: wp(4),
                      height: wp(4),
                      borderColor: '#3191D7',
                      borderRadius: wp(15),
                      borderWidth: 3,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      marginVertical: wp(1),
                      marginRight: wp(2),
                      width: wp(4),
                      height: wp(4),
                      borderColor: '#ccc',
                      borderRadius: wp(15),
                      borderWidth: 3,
                    }}></View>
                )}
              </View>
            </TouchableOpacity>
            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: wp(4.5),
              }}>
              One Time Purchase
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  flex: 1,
                  color: 'white',
                  fontSize: wp(4.5),
                }}>
                $80.00
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: Platform.OS == 'android' ? hp(13) : hp(10),
        }}>
        <CustomNextButton
          title={'Purchase'}
          style={{marginHorizontal: wp(5)}}
          onPress={() => setIsSheetVisible(true)}
        />
      </View>
      <BottomSheetComponent
        isVisible={isSheetVisible}
        setIsVisible={setIsSheetVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'red',
    height: '30%',
    zIndex: Platform.OS == 'android' ? 0 : 1,
  },
});

export default Subscription1;
