import React from 'react';
import { View } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const myAxios = axios.create({
  baseURL: 'http://13.209.45.119:8080/',
});

const requestSignUp = async () => {
  const body = new FormData();
  body.append('email', 'test');
  body.append('password', 'test');

  const response = await myAxios.post('/auth/sign-up', body, {
    headers: { 'content-type': 'multipart/form-data' },
    transformRequest: (data, headers) => {
      return data;
    },
  });
  console.log(response.data);
};

const requestSignIn = async () => {
  const body = {
    email: 'hjs',
    password: '123',
  };
  const response = await myAxios.post('/auth/login', body);
  console.log(response.data);
};

const requestProfile = async () => {
  const response = await myAxios.get('/users/1/profile');
  console.log(response.data);
};

const TestScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <MaterialButton marginB={true} onPress={requestSignUp}>
        회원가입 요청 보내기
      </MaterialButton>
      <MaterialButton marginB={true} onPress={requestSignIn}>
        로그인 요청 보내기
      </MaterialButton>
      <MaterialButton marginB={true} onPress={requestProfile}>
        프로필 정보 가져오기
      </MaterialButton>
      <MaterialButton
        marginB={true}
        onPress={() => {
          navigation.navigate('SignUpStack');
        }}>
        회원가입 화면으로
      </MaterialButton>
    </View>
  );
};

export default TestScreen;
