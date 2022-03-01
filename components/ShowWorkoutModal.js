import React from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ShowWorkoutModal = ({
  isVisible,
  onBackdropPress,
  workoutItems,
  onPress,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.modal}>
        <Text style={styles.titleText}>운동을 선택해주세요</Text>
        {workoutItems?.map((item, index) => (
          <Pressable
            key={item.exerciseHistoryId}
            style={styles.block}
            onPress={() => onPress(item.name)}>
            <Text style={styles.itemText} key={item.id}>
              {item.name}
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

export default ShowWorkoutModal;
