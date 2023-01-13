import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000000',
    marginTop: 20,
    padding: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  headerTitleMini: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  contactButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
    width: 60,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  contactTitle: {
    color: '#000000',
    fontSize: 12,
  },
});
