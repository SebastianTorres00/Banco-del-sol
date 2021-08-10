import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: 55,
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  h2: {
    fontSize: 21,
    fontWeight: 'normal',
    color: 'white',
  },
  block: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageAndButton: {
    flex: 1,
    flexDirection: 'row',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
