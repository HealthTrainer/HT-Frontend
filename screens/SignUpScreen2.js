/* 1월 7일 허준서
회원가입 두번째 화면입니다.
react-native-keyboard-aware-scroll-view 라이브러리가 사용되었습니다. */

import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import MaterialInput from '../components/MaterialInput';
import ProfileImage from '../components/ProfileImage';
import { SignUpContext } from '../components/SignUpContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen2 = () => {
  const navigation = useNavigation();
  const {
    signUpInfo,
    setContextNickname,
    setContextAge,
    setContextWeight,
    setContextHeight,
  } = useContext(SignUpContext);

  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const onPress = () => {
    console.log(signUpInfo);

    setContextNickname(nickname);
    setContextAge(age);
    setContextWeight(weight);
    setContextHeight(height);

    navigation.navigate('FollowTopTab');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.block}>
      <ProfileImage />
      <MaterialInput
        label="닉네임"
        placeholder="닉네임을 입력해주세요."
        caption="중복된 닉네임입니다."
        value={nickname}
        onChangeText={setNickname}
      />
      <MaterialInput
        label="나이"
        placeholder="나이를 입력해주세요."
        value={age}
        onChangeText={setAge}
      />
      <MaterialInput
        label="체중"
        placeholder="체중을 입력해주세요."
        value={weight}
        onChangeText={setWeight}
      />
      <MaterialInput
        label="신장"
        placeholder="신장을 입력해주세요."
        value={height}
        onChangeText={setHeight}
      />
      <MaterialButton onPress={onPress}>회원가입 완료</MaterialButton>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 600,
  },
});

export default SignUpScreen2;
