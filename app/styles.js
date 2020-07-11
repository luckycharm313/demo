import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  scrollView: {
    paddingVertical: 20,
  },
  memberListContainer: {
    flex: 1,
  },
  containerCardItem: {
    position: 'relative',
    padding: 15,
  },
  deleteStyle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  iconStyle: {
    width: 12,
    height: 12,
  },
});
