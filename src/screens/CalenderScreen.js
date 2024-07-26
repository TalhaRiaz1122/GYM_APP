import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderText from '../components/HeaderText';
import moment from 'moment';
import CalendarBackIcon from '../asserts/svgs/CalendarBackIcon';
import CalendarNextIcon from '../asserts/svgs/CalendarNextIcon';
import CalendarCurrentIcon from '../asserts/svgs/CalendarCurrentIcon';
import ObjectiveCheckIcon from '../asserts/svgs/ObjectiveCheckIcon';
import ObjectiveCancelIcon from '../asserts/svgs/ObjectiveCancelIcon';

const data = [
  { id: '1', title: 'Chicken Sandwich', subtitle: '11:00 - 12:30' },
  { id: '2', title: 'Take a walk', subtitle: '11:00 - 12:30' },
  { id: '3', title: 'Energy Drink', subtitle: '11:00 - 12:30' },
  { id: '4', title: '20 Pushups', subtitle: '11:00 - 12:30' },
];

const months = moment.months();

const CustomCalendarStrip = ({ selectedDate, onDateSelected }) => {
  const [currentDate, setCurrentDate] = useState(moment(selectedDate));
  const [dates, setDates] = useState([]);
  const [isMonthModalVisible, setMonthModalVisible] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    generateDatesForMonth(currentDate);
  }, [currentDate]);

  useEffect(() => {
    const selectedDateIndex = dates.findIndex((date) =>
      date.isSame(selectedDate, 'day')
    );
    if (scrollViewRef.current && selectedDateIndex >= 0) {
      const scrollX = selectedDateIndex * wp(20);
      scrollViewRef.current.scrollTo({
        x: scrollX,
        animated: true,
      });
    }
  }, [dates, selectedDate]);

  const generateDatesForMonth = (date) => {
    const startOfMonth = date.clone().startOf('month');
    const endOfMonth = date.clone().endOf('month');
    const datesArray = [];
    for (
      let m = startOfMonth;
      m.isBefore(endOfMonth) || m.isSame(endOfMonth, 'day');
      m.add(1, 'day')
    ) {
      datesArray.push(m.clone());
    }
    setDates(datesArray);
  };

  const handleDatePress = (date, index) => {
    onDateSelected(date);
    const scrollX = index * wp(20);
    scrollViewRef.current.scrollTo({ x: scrollX, animated: true });
  };

  const renderDates = () => {
    return dates.map((date, index) => {
      const isSelected = date.isSame(selectedDate, 'day');
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateContainer,
            isSelected && styles.selectedDateContainer,
          ]}
          onPress={() => handleDatePress(date, index)}
        >
          <Text
            style={[styles.dateText, isSelected && styles.selectedDateText]}
          >
            {date.format('D')}
          </Text>
          <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
            {date.format('ddd')}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const handleMonthSelect = (month) => {
    const newDate = currentDate.clone().month(months.indexOf(month));
    setCurrentDate(newDate);
    setMonthModalVisible(false);
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          onPress={() =>
            setCurrentDate(currentDate.clone().subtract(1, 'month'))
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CalendarBackIcon style={{ marginHorizontal: wp(2) }} />
          <Text style={styles.navText}>
            {currentDate.clone().subtract(1, 'month').format('MMM')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMonthModalVisible(true)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={styles.monthText}>{currentDate.format('MMMM')}</Text>
          <CalendarCurrentIcon style={{ marginHorizontal: wp(1) }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentDate(currentDate.clone().add(1, 'month'))}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={styles.navText}>
            {currentDate.clone().add(1, 'month').format('MMM')}
          </Text>
          <CalendarNextIcon style={{ marginHorizontal: wp(2) }} />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.datesContainer}
      >
        {renderDates()}
      </ScrollView>
      <Modal
        transparent={true}
        visible={isMonthModalVisible}
        animationType="slide"
        onRequestClose={() => setMonthModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              {months.map((month, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.monthItem}
                  onPress={() => handleMonthSelect(month)}
                >
                  <Text style={styles.monthText}>{month}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const CalendarScreen = () => {
  const ListItem = ({ title, subtitle }) => (
    <View
      style={{
        flexDirection: 'row',
        padding: hp(2),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
        backgroundColor: '#092441',
        marginVertical: hp(1),
        borderRadius: wp(3),
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: wp(4), color: 'white', marginBottom: wp(2) }}>
          {title}
        </Text>
        <Text style={{ fontSize: wp(3), color: '#C7C7C7' }}>{subtitle}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginHorizontal: wp(2) }}
          onPress={() => console.log('Pressed 1')}
        >
          <ObjectiveCheckIcon width={wp(10)} height={wp(10)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed 2')}>
          <ObjectiveCancelIcon width={wp(10)} height={wp(10)} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{ backgroundColor: '#092441', borderBottomLeftRadius: hp(8) }}
      >
        <HeaderText
          style={{ marginVertical: hp(2), marginTop: hp(4) }}
          logo={
            <Text style={{ color: 'white', fontSize: wp(5) }}>Calendar</Text>
          }
        />
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: wp(13),
            color: 'white',
            marginBottom: hp(2),
          }}
        >
          Your Planned Objectives on Calendar to achieve the dream of the best
          version of yourself
        </Text>
        <View style={{ marginBottom: wp(4) }}>
          <CustomCalendarStrip
            selectedDate={selectedDate}
            onDateSelected={setSelectedDate}
          />
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: wp(5),
          fontWeight: '900',
          marginVertical: wp(4),
          marginBottom: wp(2),
          marginHorizontal: wp(5),
        }}
      >
        Today Objectives
      </Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem title={item.title} subtitle={item.subtitle} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#051A30',
  },
  calendarContainer: {
    marginLeft: wp(5),
    backgroundColor: 'transparent',
    paddingVertical: hp(3),
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(3),
    marginRight: wp(5),
  },
  navText: {
    color: 'white',
    fontSize: wp(3.5),
  },
  monthText: {
    color: 'white',
    fontSize: wp(5),
    fontWeight: '900',
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centering horizontally
  },
  dateContainer: {
    alignItems: 'center',
    marginHorizontal: wp(2.5),
    paddingVertical: hp(2.5),
    backgroundColor: '#FFFFFF',
    width: wp(15),
    height: hp(11),
    borderRadius: hp(3.5),
  },
  selectedDateContainer: {
    backgroundColor: '#051A30',
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(3),
    height: hp(11),
    borderRadius: hp(4),
  },
  dateText: {
    color: '#606060',
    fontSize: wp(5),
    marginBottom: wp(2),
  },
  selectedDateText: {
    color: 'white',
  },
  dayText: {
    color: '#606060',
    fontSize: wp(3),
  },
  selectedDayText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#051A30',
    borderRadius: wp(3),
    width: wp(80),
    padding: wp(5),
  },
  monthItem: {
    padding: wp(4),
    alignItems: 'center',
  },
});

export default CalendarScreen;
