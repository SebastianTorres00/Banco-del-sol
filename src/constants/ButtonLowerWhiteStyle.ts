import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const ButtonLowerWhiteStyle = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 140,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  text: {
    justifyContent: 'space-evenly',
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    justifyContent: 'space-evenly',
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
  },
});
