import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

export const getYesterdayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const yesterday = today.getDate() - 1;
  const day = ('0' + yesterday).slice(-2);

  return `${year}${month}${day}`;
};
