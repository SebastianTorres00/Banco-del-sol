/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React from 'react';
import { LogBox } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Transactions } from '../transacciones/Transactions';
import { Account } from '../account/Account';
import { Statistics } from '../statistics/Statistics';
import { Home } from './homeScreens/Home';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

const screensOptions = (route: any, color: string) => {
  let iconName;
  switch (route.name) {
    case 'Inicio':
      iconName = 'home';
      break;
    case 'Transacciones':
      iconName = 'swap-horizontal-bold';
      break;
    case 'Estadisticas':
      iconName = 'trending-up';
      break;
    case 'Mi Cuenta':
      iconName = 'bank';
      break;
    default:
      iconName = '';
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={27} color={color} />
  );
};

export const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screensOptions(route, color),
        tabBarActiveTintColor: '#ff4b6e',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'white',
        tabBarBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transacciones"
        component={Transactions}
        options={{
          headerTintColor: 'white',
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Estadisticas"
        component={Statistics}
        options={{
          headerTintColor: 'white',
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mi Cuenta"
        component={Account}
        options={{
          headerTintColor: 'white',
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
