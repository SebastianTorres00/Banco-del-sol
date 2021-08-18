import { StackNavigationProp } from '@react-navigation/stack';

export type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export type loginStackParamList = {
  List: undefined;
  Start: undefined;
  StartView: undefined;
  Login: undefined;
  Register: undefined;
  RegisterV2: undefined;
  HomeTab: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  Transactions: undefined;
  ForgotPassword: undefined;
  LoadingFull: undefined;
  ContactAdd: undefined;
  Contact: undefined;
  ContactDetails: undefined;
};

export type burgerStackParamList = {
  screen1: undefined;
  screen2: undefined;
  screen3: undefined;
};

export type burgerDrawerParamList = {
  home: loginStackParamList;
  contacts: undefined;
};

export type mainStackParamList = {
  List: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  History: undefined;
  Transactions: undefined;
};

export type mainScreenNavigationProp = StackNavigationProp<
  mainStackParamList,
  'Home'
>;

export type MainProps = { navigation: mainScreenNavigationProp };

export type addressType = {
  street: string;
  number: string;
  zipCode: string;
  city: string;
  province: string;
};

export type userType = {
  email: string;
  dni: string;
  name: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  address: addressType;
};

export interface accountType {
  email: string;
  balance: balanceType;
  cvu: string;
}

interface balanceType {
  amount: number;
  history: Array<transactionType>;
}

export type transactionType = {
  sender_email: string;
  receiver_email: string;
  type: string;
  value: number;
  date: Date;
};

/* OJO que toque el account */
export type resFromBack = {
  user: userType;
  account: accountType;
};

export interface RootState {
  account: accountType;
  user: userType;
  token: string;
}
