import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ruleTypes } from 'gifted-charts-core';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Chart = () => {
  const data = [
    { value: 100, label: 'Mon' },
    { value: 200, label: 'Tue' },
    { value: 150, label: 'Wed' },
    { value: 250, label: 'Thu', dataPointText: '2 hrs' },
    { value: 100, label: 'Fri' },
    { value: 400, label: 'Sat' },
    { value: 200, label: 'Sun' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(5, 26, 48, 1)', 'rgba(5, 26, 48, 4)']}
          style={styles.gradientBackground}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <LineChart
            data={data}
            width={wp('90%')}
            height={hp('15%')} // Adjust height as needed
            isAnimated
            spacing={wp('14%')}
            thickness={2}
            color="#3191D7"
            startFillColor="rgba(0, 91, 234, 0.3)" // Different color with less opacity
            endFillColor="rgba(0, 91, 234, 0.1)" // Different color with even less opacity
            startOpacity={0.5} // Adjust the opacity for the fill color
            endOpacity={0.5} // Use a lower opacity for a softer gradient
            noOfSections={5}
            stepValue={50}
            maxValue={400}
            yAxisColor="transparent"
            hideYAxisText
            xAxisColor="transparent"
            rulesType={ruleTypes.SOLID}
            rulesColor="rgba(255, 255, 255, 0.2)"
            dataPointsHeight={hp('5%')}
            dataPointsWidth={0}
            customDataPoint={(point, index) => (
              <View style={styles.dataPointContainer}>
                {point.dataPointText && (
                  <View style={styles.dataPointTextContainer}>
                    <Text style={styles.dataPointText}>
                      {point.dataPointText}
                    </Text>
                  </View>
                )}
              </View>
            )}
            xAxisLabelTextStyle={styles.labelText}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dataPointContainer: {
    position: 'absolute',
    top: -hp('5%'),
    left: -wp('2%'),
  },
  dataPointTextContainer: {
    backgroundColor: '#3191D7',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  dataPointText: {
    fontSize: 12,
    color: 'white',
  },
  gradientBackground: {
    width: wp('90%'),
    height: hp('40%'), // Adjusted height
  },
  labelText: {
    fontSize: wp('3.5%'),
    color: '#707070',
  },
});

export default Chart;
