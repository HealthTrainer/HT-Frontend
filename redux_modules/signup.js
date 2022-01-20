// 회원가입 상태 관리를 위한 리덕스 모듈입니다.

// 액션 타입
const SET_EMAIL = 'signup/SET_EMAIL';
const SET_PASSWORD = 'signup/SET_PASSWORD';
const SET_NAME = 'signup/SET_NAME';
const SET_GENDER = 'signup/SET_GENDER';
const SET_WEIGHT = 'signup/SET_WEIGHT';
const SET_HEIGHT = 'signup/SET_HEIGHT';

// 액션 생성 함수
export const setEmail = (email) => ({ type: SET_EMAIL, email });
export const setPassword = (password) => ({ type: SET_PASSWORD, password });
export const setNAME = (name) => ({ type: SET_NAME, name });
export const setGender = (gender) => ({ type: SET_GENDER, gender });
export const setWeight = (weight) => ({ type: SET_WEIGHT, weight });
export const setHeight = (height) => ({ type: SET_HEIGHT, height });

// 초기 상태
const initialState = {
  email: undefined,
  password: undefined,
  name: undefined,
  gender: undefined,
  weight: undefined,
  height: undefined,
};

// 리듀서
const signup = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD:
      return {
        ...state,
        email: action.password,
      };
    case SET_NAME:
      return {
        ...state,
        email: action.name,
      };
    case SET_GENDER:
      return {
        ...state,
        email: action.gender,
      };
    case SET_WEIGHT:
      return {
        ...state,
        email: action.weight,
      };
    case SET_HEIGHT:
      return {
        ...state,
        email: action.height,
      };
  }
};

export default signup;