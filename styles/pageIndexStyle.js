import {StyleSheet} from 'react-native';

export const pageIndexStyle = StyleSheet.create({
  pageIndexListContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  pageIndexContainer: {
    flex: 1,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  pageIndexNumber: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  pageIndexClicked: {
    color: 'red',
  },
});
