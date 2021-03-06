import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const WorkoutListItem = ({ name, id, weight, set, count, onDelete, onFix }) => {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{weight}kg</Text>
        <Text style={styles.name}>{count}회</Text>
        <Text style={styles.name}>{set}세트</Text>
        <TouchableOpacity style={styles.icon} onPress={onDelete}>
          {onFix ? null : <Icon name="delete" size={28} />}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: 320,
    backgroundColor: 'white',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    marginLeft: 9,
  },
});

export default WorkoutListItem;
