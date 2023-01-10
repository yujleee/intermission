import { getDateString, xmlToJson } from './util';

export const BASE_URL_FOR_IMG = 'http://www.kopis.or.kr';
export const BASE_URL = 'http://www.kopis.or.kr/openApi/restful';
const API_KEY = 'c0d0ca2648c24b128f2aff20f3d1d22d';

/**
 * 박스오피스
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
    .then((data) => xmlToJson(data))
    .catch((error) => console.log(error));

/**
 * 상단 슬라이더
 * 이번 달 박스오피스 데이터(xml)를 xml2js 라이브러리를 통해 JSON 데이터로 변환합니다.
 * 최초 작업: 2023.01.09
 * @returns JSON 데이터
 */
export const getBoxOfficeMonth = () =>
  fetch(
    `${BASE_URL}/boxoffice?service=${API_KEY}&ststype=month&date=${getDateString()}&catecode=GGGA&area=11`
  )
    .then((res) => res.text())
    .then((data) => xmlToJson(data))
    .catch((error) => console.log(error));
