import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: 80,
    marginBottom: 5,
    paddingHorizontal: 16,
    borderTopWidth: 2,
    borderTopColor: 'blue',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: 12,
    lineHeight: 35,
  },
  rowCustomer: {
    fontSize: 14,
    lineHeight: 35,
  },
  rowTitle: {
    fontWeight: 'bold',
  },
  section: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customerId: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
