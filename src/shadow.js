import { StyleSheet } from 'react-native';

export const shadowStyle = StyleSheet.create({
  grey: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  blue: {
    ...Platform.select({
      ios: {
        shadowColor: '#219BB6',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
