import { StyleSheet } from 'react-native';

export const shadowStyle = StyleSheet.create({
  grey: {
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 5,
  },
  blue: {
    shadowColor: '#219BB6',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 5,
  },
});
