import React from 'react';
import firebase from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { firebaseConfig } from '../constants/firebase.config';
import { loginStackParamList } from '../types/Types';
import { config } from '../screens/index';
import { HomeTab } from '../screens/homeTab/HomeTab';

firebase.initializeApp(firebaseConfig);

const {
  StartView,
  Login,
  Register,
  Transfer,
  AddFunds,
  Account,
  Transactions,
  ForgotPassword,
  LoadingFull,
  ContactAdd,
  Contact,
  ContactDetails,
} = config;

const LoginStack = createStackNavigator<loginStackParamList>();

export const Main = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="StartView"
      component={StartView}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{ headerTitle: 'Ingresar' }}
    />

    <LoginStack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        headerTitle: 'Inicio',
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="Account"
      component={Account}
      options={{
        headerTitle: 'Inicio',
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
    <LoginStack.Screen
      name="AddFunds"
      component={AddFunds}
      options={{
        headerTitle: 'Inicio',
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
    <LoginStack.Screen
      name="Transfer"
      component={Transfer}
      options={{
        headerTitle: 'Inicio',
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
    <LoginStack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerTitle: 'Hola {Name}',
        headerShown: true,

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
    <LoginStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerTitle: 'Cambia tu contraseña' }}
    />

    <LoginStack.Screen
      name="LoadingFull"
      component={LoadingFull}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="ContactAdd"
      component={ContactAdd}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="Contact"
      component={Contact}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={{ headerShown: true }}
    />
  </LoginStack.Navigator>
);
