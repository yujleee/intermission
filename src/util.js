import { Dimensions } from 'react-native';
const parseString = require('react-native-xml2js').parseString;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

// 날짜 스트링 가져오는 함수
export const getDateString = (type) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const yesterday = today.getDate() - 2;
  const day = ('0' + yesterday).slice(-2);

  return type === 'yesterday' ? `${year}${month}${day}` : `${year}${month}01`;
};

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const pwRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// xml to JSON
export const xmlToJson = (xmlData) => {
  const cleanedString = xmlData.replace('\ufeff', '');
  let jsonData;
  parseString(cleanedString, (err, result) => {
    if (err !== null) {
      console.log('error: ', err);
      return;
    }
    jsonData = JSON.parse(JSON.stringify(result));
  });
  return jsonData;
};

// 박스오피스 뮤지컬만 필터링
export const filterOnlyMusicals = (data) =>
  data?.filter((perf) => perf.cate[0] === '뮤지컬');
