import React, { useEffect, useState, useRef } from 'react';
import TodoCard from './TodoCard';
import { View, StyleSheet, Button } from 'react-native';

const TodoList = ({ workout }) => {
  if (!workout) {
    return null;
  }

  const workoutArray = Object.entries(workout);

  return (
    <View style={styles.container}>
      {workoutArray.map((item, index) => (
        <TodoCard
          style={styles.card}
          key={item[0]}
          name={item[1].name}
          count={item[1].count}
          set={item[1].set}
          time={item[1].time}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  card: { marginBottom: 10 },
});

export default TodoList;
