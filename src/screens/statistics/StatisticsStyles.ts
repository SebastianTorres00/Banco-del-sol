import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const ButtonPrimaryStyle = StyleSheet.create({
  button: {
    flex: 1,
    height: 0.05 * height,
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  buttoncolor1: {
    backgroundColor: '#ffffff',
  },
  buttoncolor2: {
    backgroundColor: '#ffffff',
  },

  input: {
    width: '90%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export const styles = StyleSheet.create({
  containerall: {
    width,
    height,
    backgroundColor: colors.white,
  },
  container: {
    width: 0.9 * width,
    height: 0.4 * height,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  container2: {
    height: 0.2 * height,
    marginTop: 0.1 * height,
    marginBottom: 0.2 * height,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ejey: {
    width: 20,
    marginRight: 5,
    marginLeft: 0,
  },
  ejeyconbar: {
    height: 0.3 * height,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 0.03 * height,
  },
  bar: {
    width: 0.7 * width,
  },
  ejex: {
    width: 0.7 * width,
    alignSelf: 'center',
  },
  text: {
    height: 25,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
  },
  ejexbtn: {
    alignSelf: 'center',
    width: 0.7 * width,
    height: 0.04 * height,
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonejex: {
    flex: 1,
    height: 0.04 * height,
    alignItems: 'center',
    margin: 1.5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 2,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  textejex: {
    fontSize: 11.5,
    fontWeight: '700',
    alignSelf: 'center',
    color: colors.primary,
  },
});
