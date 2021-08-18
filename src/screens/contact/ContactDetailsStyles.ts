import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    marginTop: 50,
    alignSelf: 'center',
  },
  box: {
    borderRadius: 23,
    backgroundColor: '#f0f',
    borderColor: `${colors.primary}`,
    borderWidth: 1,
    textAlign: 'center',
    alignSelf: 'center',
    height: '35%',
    width: '195%',
    marginTop: '50%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },

  textBoxName: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600',
    marginTop: '5%',
  },
  textBoxEmail: {
    color: '#000',
    fontSize: 20,
    fontWeight: '100',
    marginTop: '5%',
  },

  btnTransfer: {
    // backgroundColor: 'blue',
    // width: '70%',
    // height: '25%',
    // alignSelf: 'center',
    // borderRadius: 20,
    // marginTop: '20%',
  },

  gradientButton: {
    width: '70%',
    height: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    // backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },

  textTransfer: {
    fontSize: 21,
    color: '#fff',
    fontWeight: '500',
    marginRight: '-20%',
  },

  icon: {
    marginLeft: '-70%',
    marginTop: '-3%',
    position: 'absolute',
  },
});
