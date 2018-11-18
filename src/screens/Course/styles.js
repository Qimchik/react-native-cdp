import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    height: 305,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
  },
  h2: {
    marginTop: 10,
    height: 33,
    lineHeight: 24,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: '800',
  },
  message: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 30,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  wrapperButton: {
    marginHorizontal: 50,
    marginBottom: 50,
  },
  redButton: {
    marginTop: 10,
    backgroundColor: 'rgb(255, 180, 180)'
  },
});
