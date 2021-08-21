import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 50,
  },

  header: {
    height: 70,
    width: '100%',
    marginTop: '-3%',
  },

  headerOne: { backgroundColor: '#000', marginTop: '-10%' },
  back: {
    position: 'absolute',
    height: 70,
    width: 70,
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: { marginTop: '-30%' },
  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    marginTop: '-1%',
    width: '30%',
  },

  textTitle: {
    position: 'absolute',
    left: 5,
    top: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    width: '180%',
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

  inputTwo: {
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
    marginTop: '50%',
    marginBottom: 10,
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    zIndex: 80,
    width: '40%',
    height: '5%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  },
  buttondisabled: {
    zIndex: 80,
    width: '40%',
    height: '5%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
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

    marginLeft: 'auto',
    marginRight: 'auto',
  },

  TextAdd: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '-2.5%',
  },

  search: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '-10%',
  },

  searchDisable: {
    color: '#9a788ccf',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '-10%',
  },
  ellipse: {
    position: 'absolute',
    zIndex: 20,
    // bottom: '-35%',
    marginTop: '110%',
    // marginBottom: '-1111111111111150%',
    left: '20%',
    width: '60%',
    height: '60%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },
  buttonAdd: {
    zIndex: 80,
    width: '70%',
    height: '8%',
    alignItems: 'center',
    marginTop: '90%',
    borderRadius: 20,
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
  },
  buttonAddDisable: {
    zIndex: 80,

    width: '70%',
    height: '8%',
    alignItems: 'center',
    marginTop: '90%',
    // marginBottom: '-90%',
    borderRadius: 20,
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

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  msgText: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '80%',
  },
  msgTextUser: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '80%',
  },
});
