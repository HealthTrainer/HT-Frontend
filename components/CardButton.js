import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { API } from '../lib/API';
import axios from 'axios';

const CardButton = ({ style, onPress, text }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    backgroundColor: '#6495ED',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default CardButton;
