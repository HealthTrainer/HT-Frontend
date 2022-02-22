import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowTopTab from './FollowTopTab';
import TestScreen from '../screens/TestScreen';
import CalendarScreen from '../screens/CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatisticsScreen from '../screens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: '캘린더',
          tabBarIcon: ({ color, size }) => (
            <Icon name="assignment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          title: '통계',
          tabBarIcon: ({ color, size }) => (
            <Icon name="stacked-bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FollowTopTab"
        component={FollowTopTab}
        options={{
          title: '팔로워/팔로잉',
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite-border" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          title: '테스트용 화면',
          tabBarIcon: ({ color, size }) => (
            <Icon name="api" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
