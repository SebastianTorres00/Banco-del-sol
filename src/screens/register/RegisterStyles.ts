import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { deviceWidth, deviceHeight, size2 } from './Register';

export const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  container2: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    justifyContent: 'space-around',
  },
  containerOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inputEmail: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
  },
  prueba: {
    backgroundColor: '#000',
  },
  backSEBAASK: {
    height: '7.5%',
    zIndex: 30,
  },
  headerSEBAASK: {
    position: 'relative',
    zIndex: 20,
    marginTop: '-20%',
    left: '20%',
    width: '60%',
    height: '10%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },
  header: {
    height: 70,
    width: '100%',
  },
  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    marginTop: '1.3%',
  },
  textTitle: {
    position: 'absolute',
    left: 5,
    top: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  back: {
    position: 'absolute',
    height: 70,
    width: 70,
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineas: {
    flex: 1,
    flexDirection: 'row',
  },
  linea1: {
    borderWidth: 2,
    borderColor: colors.primary,
    width: '50%',
    position: 'absolute',
    left: 0,
    top: 69,
    zIndex: 1,
  },
  linea2: {
    borderWidth: 2,
    borderColor: colors.gray,
    width: '50%',
    position: 'absolute',
    right: 0,
    top: 69,
    zIndex: 1,
  },
  linea2s: {
    borderWidth: 2,
    borderColor: colors.primary,
    width: '50%',
    position: 'absolute',
    right: 0,
    top: 69,
    zIndex: 1,
  },
  inputPassword: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 30,
  },
  inputRegister: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
  btn: {
    backgroundColor: 'blue',
  },
  img: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  registertwo: {
    width: 0,
    height: 0,
  },

  textError: {
    color: 'red',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: size2,
    borderRadius: 25,
    borderColor: '#fb6583',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
  birthdateButtonText: { color: 'grey' },

  buttonRegisterTwo: {
    borderColor: colors.primary,
    backgroundColor: '#fff',
    width: '120%',
    alignItems: 'center',
    height: '50%',
    marginTop: '70%',
    marginLeft: '-11%',
    // marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
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

  setpOne: {
    marginTop: '20%',
  },

  ellipse: {
    position: 'relative',
    zIndex: 20,
    bottom: '-25%',
    marginTop: '-50%',
    left: '20%',
    width: '60%',
    height: '60%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },
  btns: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  button: {
    borderColor: colors.primary,
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    borderRadius: 25,
    borderWidth: 2,
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
  buttonDisable: {
    borderColor: colors.primary,
    backgroundColor: '#deac98de',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    borderRadius: 25,
    borderWidth: 2,
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
  textButton: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    marginTop: '-3%',
  },

  ellipseTwo: {
    position: 'relative',
    zIndex: 20,
    bottom: '-25%',
    marginTop: '-50%',
    left: '20%',
    width: '60%',
    height: '60%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },

  buttontwo: {
    width: '120%',
    alignItems: 'center',
    height: '50%',
    marginTop: '70%',
    marginLeft: '-11%',
    // marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#deac98de',
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

  textTwo: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginTop: '-3%',
  },
  view: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  picker: {
    color: 'grey',
    border: 'none',
    width: '100%',
  },
  pickerSelectStyles: {
    width: '10%',
    color: 'red',
  },

  footer: {
    height: 150,
    width: 200,
    borderTopEndRadius: 999,
    borderTopStartRadius: 999,
    transform: [{ scaleX: 3 }],
  },
});
