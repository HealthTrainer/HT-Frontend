// FollowingList에서 참조하는 팔로잉리스트 아이템입니다.

import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import FollowButton from './FollowButton';

const FollowingListItem = ({ user }) => {
  return (
    <View style={styles.block}>
      <View style={styles.profileBlock}>
        <Image style={styles.image} source={user.image} />
        <View style={styles.nameBlock}>
          <Text style={styles.id}>{user.id}</Text>
          <Text style={styles.nickname}>{user.nickname}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  nameBlock: {
    marginLeft: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#cccccc',
  },
  id: { fontWeight: 'bold' },
  nickname: {},
  button: { marginRight: 20 },
});

export default FollowingListItem;
