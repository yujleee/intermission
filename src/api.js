import { getDateString } from './util';

export const BASE_URL_FOR_IMG = 'http://www.kopis.or.kr';
export const BASE_URL = 'http://www.kopis.or.kr/openApi/restful';
const API_KEY = 'c0d0ca2648c24b128f2aff20f3d1d22d';
const parseString = require('react-native-xml2js').parseString;

/**
 * 박스오피스 API (get)
 * 박스오피스 데이터(xml)를 xml2js 라이브러리를 통해 JSON 데이터로 변환합니다.
 * 최초 작업: 2023.01.09
 * @returns JSON 데이터
 */
export const getBoxOfficeDay = () =>
  fetch(
    `${BASE_URL}/boxoffice?service=${API_KEY}&ststype=day&date=${getDateString(
      'yesterday'
    )}&catecode=GGGA&area=11`
  )
    .then((res) => res.text())
    .then((data) => {
      const cleanedString = data.replace('\ufeff', '');
      let boxOfficeData;
      parseString(cleanedString, (err, result) => {
        if (err !== null) {
          console.log('error: ', err);
          return;
        }
        boxOfficeData = JSON.parse(JSON.stringify(result));
      });
      return boxOfficeData;
    })
    .catch((error) => console.log(error));

<<<<<<< HEAD
/**
 * 선택한 작품의 상세정보 API (get)
 * 상세 데이터를 xml2js 라이브러리를 통해 JSON 데이터로 변환합니다.
 * 최초 작업: 2023.01.10
 * @returns JSON 데이터
 */
export const getMusicalData = fetch(
  `${BASE_URL}/pblprfr/${musicalId}?service=${API_KEY}`
)
  .then((res) => res.text())
  .then((data) => {
    const cleanedString = data.replace('\ufeff', '');
    let boxOfficeData;
    parseString(cleanedString, (err, result) => {
      if (err !== null) {
        console.log('error: ', err);
        return;
      }
      boxOfficeData = JSON.parse(JSON.stringify(result));
    });
    // return boxOfficeData;
    console.log('db:', db);
  })
  .catch((error) => console.log(error));
// 선택한 작품의 공연ID값을 알아야 함
=======
export const getBoxOfficeMonth = () =>
  fetch(
    `${BASE_URL}/boxoffice?service=${API_KEY}&ststype=month&date=${getDateString()}&catecode=GGGA&area=11`
  )
    .then((res) => res.text())
    .then((data) => {
      const cleanedString = data.replace('\ufeff', '');
      let boxOfficeData;
      parseString(cleanedString, (err, result) => {
        if (err !== null) {
          console.log('error: ', err);
          return;
        }
        boxOfficeData = JSON.parse(JSON.stringify(result));
      });
      return boxOfficeData;
    })
    .catch((error) => console.log(error));
>>>>>>> 0372572890f68b51cf92f301dd9907a6ccede3f5
