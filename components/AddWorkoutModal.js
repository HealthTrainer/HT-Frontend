import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const AddWorkoutModal = ({
  isVisible,
  onBackdropPress,
  workoutList,
  onPress,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.modal}>
        <Text style={styles.titleText}>운동루틴을 선택해주세요</Text>
        {workoutList?.map((item, index) => (
          <Pressable
            key={item.id}
            style={styles.block}
            onPress={() => {
              onPress(item.title);
            }}>
            <Text key={item.id} style={styles.itemText}>
              {item.title}
            </Text>
          </Pressable>
        ))}
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
    padding: 10,
  },
  block: {
    width: '100%',
    padding: 10,
    backgroundColor: '#85E1FF',
    borderRadius: 10,
    marginTop: 10,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  titleText: {
    color: '#3498DB',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#84E1FF',
    paddingBottom: 10,
    marginBottom: 10,
  },
});

export default AddWorkoutModal;
