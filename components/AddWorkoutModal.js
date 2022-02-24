import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet } from 'react-native';

const AddWorkoutModal = ({ isVisible, onBackdropPress }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.modal}>
        <Text>운동루틴</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default AddWorkoutModal;
