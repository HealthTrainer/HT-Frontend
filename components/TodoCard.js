import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import CardButton from './CardButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoCard = ({
  style,
  id,
  name,
  count,
  set,
  time,
  done,
  onPressDelete,
  onPressCheck,
  onPressTimer,
  isRunning,
  runningId,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={styles.check}
        onPress={() => {
          onPressCheck(id);
        }}>
        <Icon name="check" color={done ? '#3CE73C' : '#888888'} size={28} />
      </Pressable>
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.countText}>{count + '회'}</Text>
          <Text style={styles.setText}>{set + '세트'}</Text>
        </View>
      </View>
      <Text style={styles.timeText}>{time + '초'}</Text>
      {isRunning === true && runningId === id ? (
        <CardButton
          style={styles.button}
          onPress={() => {
            onPressTimer(id);
          }}
          text="중지"
          color="#E74C3C"
        />
      ) : (
        <CardButton
          style={styles.button}
          onPress={() => {
            onPressTimer(id);
          }}
          text="시작"
          color="#6495ED"
        />
      )}
      <Pressable
        style={styles.delete}
        onPress={() => {
          onPressDelete(id);
        }}>
        <Icon name="delete" color="#888888" size={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },
  block: {},
  nameText: { fontSize: 18, paddingLeft: 10 },
  countText: { paddingLeft: 10 },
  setText: { paddingLeft: 10 },
  timeText: { fontSize: 15, marginLeft: 'auto' },
  button: { marginLeft: 10, marginRight: 10 },
  delete: { marginRight: 15 },
  check: { marginLeft: 10 },
});

export default TodoCard;
