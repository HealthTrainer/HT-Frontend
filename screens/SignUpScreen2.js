// 회원가입 두번째 화면입니다.

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import ProfileImage from '../components/ProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { FilledTextField } from 'rn-material-ui-textfield';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { requestSignUp } from '../redux_modules/signUpAPI';
import {
  setName,
  setSex,
  setWeight,
  setHeight,
  setAge,
  setImage,
} from '../redux_modules/signUp';

const SignUpScreen2 = () => {
  const navigation = useNavigation();

  const [name, setLocalName] = useState('');
  const [age, setLocalAge] = useState('');
  const [weight, setLocalWeight] = useState('');
  const [height, setLocalHeight] = useState('');
  const [sex, setLocalSex] = useState('M');
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
  });

  const nameField = useRef();
  const ageField = useRef();
  const sexField = useRef();
  const heightField = useRef();
  const weightField = useRef();
  const refs = [nameField, ageField, heightField, weightField];

  const { response, loading, error } = useSelector(state => state.signUpAPI);
  const signUpState = useSelector(state => state.signUp);
  const image = useSelector(state => state.profileImage.image);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setImage(image));
  }, [image, dispatch]);

  useEffect(() => {
    // console.log('In useEffect (config):', response.config.data);
    // console.log('In useEffect (file):', response.config.data._parts);
    // console.log('In useEffect (result):', response.data);
    if (response?.data.result === 'SUCCESS') {
      console.log('성공');
      navigation.navigate('SplashStack');
    }
  }, [response, navigation]);

  const NAMEERROR = '이름을 입력해주세요.';
  const AGEERROR = '나이를 입력해주세요.';
  const HEIGHTERROR = '키를 입력해주세요.';
  const WEIGHTERROR = '체중을 입력해주세요.';

  const checkFields = () => {
    if (!name) {
      const e = { ...errors, name: NAMEERROR };
      setErrors(e);
    } else if (!age) {
      const e = { ...errors, age: AGEERROR };
      setErrors(e);
    } else if (!height) {
      const e = { ...errors, height: HEIGHTERROR };
      setErrors(e);
    } else if (!weight) {
      const e = { ...errors, weight: WEIGHTERROR };
      setErrors(e);
    } else {
      return true;
    }
  };

  const dispatchAll = () => {
    dispatch(setName(name));
    dispatch(setAge(age));
    dispatch(setSex(sex));
    dispatch(setHeight(height));
    dispatch(setWeight(weight));
    dispatch(setImage(image));
    dispatch(requestSignUp(signUpState));
  };

  const onPress = () => {
    if (checkFields()) {
      dispatchAll();
    }
  };

  const onChangeSex = (value, index) => {
    setLocalSex(value);
  };

  const onFocus = () => {
    refs.forEach(ref => {
      if (ref.current.isFocused()) {
        switch (ref) {
          case nameField:
            setErrors({ ...errors, name: '' });
            break;
          case ageField:
            setErrors({ ...errors, age: '' });
            break;
          case heightField:
            setErrors({ ...errors, height: '' });
            break;
          case weightField:
            setErrors({ ...errors, weight: '' });
        }
      }
    });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ProfileImage style={styles.profile} />
      <View style={styles.input}>
        <FilledTextField
          ref={nameField}
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Name"
          onChangeText={setLocalName}
          value={name}
          onFocus={onFocus}
          error={errors.name}
        />
      </View>
      <View style={styles.input}>
        <FilledTextField
          ref={ageField}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Age"
          onChangeText={setLocalAge}
          value={age}
          onFocus={onFocus}
          error={errors.age}
        />
      </View>
      <View style={[styles.input, styles.border]}>
        <Picker selectedValue={sex} onValueChange={onChangeSex} ref={sexField}>
          <Picker.Item label="남자" value="M" />
          <Picker.Item label="여자" value="F" />
        </Picker>
      </View>
      <View style={styles.input}>
        <FilledTextField
          ref={heightField}
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Height"
          value={height}
          onChangeText={setLocalHeight}
          onFocus={onFocus}
          error={errors.height}
        />
      </View>
      <View style={styles.input}>
        <FilledTextField
          ref={weightField}
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Weight"
          value={weight}
          onChangeText={setLocalWeight}
          onFocus={onFocus}
          error={errors.weight}
        />
      </View>
      <MaterialButton style={styles.button} onPress={onPress}>
        회원가입 완료
      </MaterialButton>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    height: 600,
  },
  profile: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
  input: {
    marginTop: 20,
  },
  border: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SignUpScreen2;
