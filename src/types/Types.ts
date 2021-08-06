import { StackNavigationProp } from '@react-navigation/stack';

export type loginStackParamList = {
  List: undefined;
  Start: undefined;
  Login: undefined;
  RegisterStep1: undefined;
  RegisterStep2: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
};

export type loginScreenNavigationProp = StackNavigationProp<
  loginStackParamList,
  'Start'
>;

export type loginProps = { navigation: loginScreenNavigationProp };

export type mainStackParamList = {
  List: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  History: undefined;
};

export type mainScreenNavigationProp = StackNavigationProp<
  mainStackParamList,
  'Home'
>;

export type MainProps = { navigation: mainScreenNavigationProp };

export type address = {
  street: string;
  number: number;
  zipCode: number;
  city: string;
  province: string;
  country: string;
};

export type userType = {
  email: string;
  dni: number;
  name: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  address: address;
};

export type resFromBack = {
  user: userType;
  account: Object;
};
