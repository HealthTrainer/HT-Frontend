import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Calendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import { StyleSheet } from 'react-native';
import AddButton from '../components/AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getWorkout, getWorkoutList } from '../lib/workoutAPI';
import AddWorkoutModal from '../components/AddWorkoutModal';

const _calendar = {
  '2022-02-02': {
    1: {
      name: '팔굽혀펴기',
      part: '상체',
      count: '10',
      set: '2',
      time: 0,
      done: false,
    },
    2: {
      name: '덤벨프레스',
      part: '상체',
      count: '15',
      set: '4',
      time: 0,
      done: false,
    },
  },
  '2022-02-03': {
    1: {
      name: '팔굽혀펴기',
      part: '상체',
      count: '10',
      set: '2',
      time: 0,
      done: false,
    },
    2: {
      name: '덤벨프레스',
      part: '상체',
      count: '15',
      set: '4',
      time: 0,
      done: false,
    },
    3: {
      name: '스쿼트',
      part: '하체',
      count: '20',
      set: '3',
      time: 0,
      done: false,
    },
  },
  '2022-02-04': {
    1: {
      name: '팔굽혀펴기',
      part: '상체',
      count: '10',
      set: '2',
      time: 0,
      done: false,
    },
    2: {
      name: '덤벨프레스',
      part: '상체',
      count: '15',
      set: '4',
      time: 0,
      done: false,
    },
    3: {
      name: '스쿼트',
      part: '하체',
      count: '20',
      set: '3',
      time: 0,
      done: false,
    },
    4: {
      name: '스쿼트',
      part: '하체',
      count: '20',
      set: '3',
      time: 0,
      done: false,
    },
  },
};

const CalendarScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    //AsyncStorage.setItem('calendar', JSON.stringify(_calendar));
    AsyncStorage.getItem('calendar', (err, result) => {
      if (err) {
        console.log('AsyncStorage Error:', err);
      } else {
        setCalendar(JSON.parse(result));
      }
    });
  }, []);

  const onPressAddButton = async () => {
    setIsVisible(true);
    const response = await getWorkout(32, 'list1');
    console.log(response.data);
  };

  const changeDay = day => {
    const date = day.dateString;
    setWorkout(calendar[date]);
  };

  const onBackdropPress = () => {
    setIsVisible(false);
  };

  return (
    <>
      <AddWorkoutModal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
      />
      <View style={styles.block}>
        <Calendar onDayPress={changeDay} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <TodoList workout={workout} />
        <AddButton onPress={onPressAddButton} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10, alignItems: 'center' },
  block: {
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
  },
});

export default CalendarScreen;
