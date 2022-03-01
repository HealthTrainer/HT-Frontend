import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import Calendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import { StyleSheet } from 'react-native';
import AddButton from '../components/AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getWorkout, getWorkoutList } from '../lib/workoutAPI';
import AddWorkoutModal from '../components/AddWorkoutModal';
import ShowWorkoutModal from '../components/ShowWorkoutModal';
import produce from 'immer';

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
  const [isVisibleAW, setIsVisibleAW] = useState(false);
  const [isVisibleSW, setIsVisibleSW] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [calendarWorkout, setCalendarWorkout] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [workoutList, setWorkoutList] = useState(null);
  const [workoutItems, setWorkoutItems] = useState(null);
  const [markedDates, setMarkedDates] = useState(null);

  const [isRunning, setIsRunning] = useState(false);
  const [runningId, setRunningId] = useState(null);
  const timerId = useRef();
  const tickFunc = useRef();

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

  useEffect(() => {
    if (calendar) {
      setCalendarWorkout(calendar[selectedDate]);
    }
  }, [calendar, selectedDate]);

  useEffect(() => {
    const getMarkedDates = () => {
      const markedDates = {};
      const calendarArray = Object.entries(calendar);
      for (let day of calendarArray) {
        if ('{}' === JSON.stringify(day[1])) {
          continue;
        }
        const dayArray = Object.entries(day[1]);
        const myArray = [];
        //myArray[day[0]] = [];
        console.log(day);

        for (let workout of dayArray) {
          myArray.push(workout[1].done);
        }

        const includeT = myArray.includes(true);
        const includeF = myArray.includes(false);
        let color;

        if (includeF) {
          color = 'red';
        } else {
          color = 'green';
        }
        markedDates[day[0]] = { marked: true, dotColor: color };
      }
      return markedDates;
    };

    if (calendar) {
      const md = getMarkedDates();
      setMarkedDates(md);
    }
  }, [calendar]);

  useEffect(() => {
    tickFunc.current = tick;
  });

  const onPressAddButton = async () => {
    const response = await getWorkoutList(32);
    setWorkoutList(response.data.data);
    setIsVisibleAW(true);
  };

  const changeDay = day => {
    setSelectedDate(day.dateString);
  };

  const onBackdropPressAW = () => {
    setIsVisibleAW(false);
  };

  const onBackdropPressSW = () => {
    setIsVisibleSW(false);
  };

  const onPressWorkoutList = async title => {
    setIsVisibleAW(false);

    const response = await getWorkout(32, title);
    setWorkoutItems(response.data.data);
    setIsVisibleSW(true);
  };

  const onPressWorkoutItem = name => {
    setIsVisibleSW(false);

    const workout = findByName(name);
    addWorkout(selectedDate, workout);
  };

  const onPressDelete = id => {
    const nextState = produce(calendar, draft => {
      delete draft[selectedDate][id];
    });
    setCalendar(nextState);
  };

  const onPressCheck = id => {
    const nextState = produce(calendar, draft => {
      draft[selectedDate][id].done = !draft[selectedDate][id].done;
    });
    setCalendar(nextState);
  };

  const onPressTimer = id => {
    if (isRunning) {
      clearInterval(timerId.current);
      setIsRunning(false);
    } else {
      timerId.current = setInterval(() => {
        const tick = tickFunc.current;
        tick(id);
      }, 1000);
      setIsRunning(true);
      setRunningId(id);
    }
  };

  const tick = id => {
    const nextState = produce(calendar, draft => {
      draft[selectedDate][id].time = draft[selectedDate][id].time + 1;
    });
    setCalendar(nextState);
  };

  const saveCalendar = () => {
    AsyncStorage.setItem('calendar', JSON.stringify(calendar));
  };

  const addWorkout = (date, workout) => {
    const newWorkout = {
      name: workout.name,
      part: workout.type,
      set: workout.set,
      count: workout.count,
      time: 0,
      done: false,
    };

    let count;
    if (JSON.stringify(calendar[date]) === '{}') {
      count = 0;
    } else if (calendar[date]) {
      console.log(calendar[date]);
      count = Math.max(...Object.keys(calendar[date]));
      console.log(count);
    } else {
      count = 0;
    }

    const nextState = produce(calendar, draft => {
      if (!draft[date]) {
        draft[date] = {};
      }
      draft[date][count + 1] = newWorkout;
    });
    setCalendar(nextState);
  };

  const findByName = name => {
    for (let workout of workoutItems) {
      if (workout.name === name) {
        return workout;
      }
    }
    return null;
  };

  return (
    <>
      <AddWorkoutModal
        isVisible={isVisibleAW}
        onBackdropPress={onBackdropPressAW}
        workoutList={workoutList}
        onPress={onPressWorkoutList}
      />
      <ShowWorkoutModal
        isVisible={isVisibleSW}
        onBackdropPress={onBackdropPressSW}
        workoutItems={workoutItems}
        onPress={onPressWorkoutItem}
      />
      <View style={styles.block}>
        <Calendar
          onDayPress={changeDay}
          selectedDate={selectedDate}
          markedDates={markedDates}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <TodoList
          workout={calendarWorkout}
          onPressDelete={onPressDelete}
          onPressCheck={onPressCheck}
          onPressTimer={onPressTimer}
          isRunning={isRunning}
          runningId={runningId}
        />
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
