import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
});

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
