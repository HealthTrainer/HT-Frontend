// 프로필 이미지 컴포넌트입니다.

import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { setImage } from '../redux_modules/profileImage';
import { useDispatch } from 'react-redux';

const ProfileImage = ({ style }) => {
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();

  const onPress = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        //includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
        //console.log(res.assets[0]);
        dispatch(setImage(res.assets[0]));
      },
    );
  };

  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        {response === null ? (
          <View style={styles.block}>
            <Icon style={styles.icon} name="camera-enhance" size={30} />
          </View>
        ) : (
          <Image
            style={styles.block}
            source={{ uri: response?.assets[0]?.uri }}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    backgroundColor: '#cccccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: { padding: 0 },
});

export default ProfileImage;
