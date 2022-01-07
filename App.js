import React from 'react';
import SignUpScreen from './screens/SignUpScreen';
import SignUpScreen2 from './screens/SignUpScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Sign Up-Next" component={SignUpScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
