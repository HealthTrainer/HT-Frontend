import { DrawerLayoutAndroidBase } from 'react-native';
import { API } from './API';

const signUpURL = '/auth/sign-up';
const emailCheckURL = '/auth/email';

// 회원가입 요청 함수
export const requestSignUp = async data => {
  const body = new FormData();

  body.append('email', data.email);
  body.append('password', data.password);
  body.append('name', data.name);
  body.append('age', data.age);
  body.append('sex', data.sex);
  body.append('height', data.height);
  body.append('weight', data.weight);

  const image = {
    uri: data.image?.uri,
    type: data.image?.type,
    name: data.image?.fileName,
  };
  body.append('file', image);

  const response = await API.post(signUpURL, body, {
    headers: { 'content-type': 'multipart/form-data' },
    transformRequest: (_data, headers) => {
      return _data;
    },
  });
  console.log(response);
  return response;
};

export const checkEmail = async data => {
  const response = await API.get(emailCheckURL);
  return response;
};
