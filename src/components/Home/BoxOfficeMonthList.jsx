import styled from '@emotion/native';
import BoxOfficeMonthItem from './BoxOfficeMonthItem';

import Swiper from 'react-native-swiper';

/**
 * Home 컴포넌트 최상단 슬라이더
 * @param data : 이번달 뮤지컬 박스오피스
 * @returns 슬라이더
 * 최초 수정: 2023.01.10
 */
export default function BoxOfficeMonthList({ data }) {
  return (
    <ListWrapper>
      <Swiper height={'100%'} showsPagination={false} autoplay loop>
        {data?.map((item) => (
          <BoxOfficeMonthItem key={item.mt20id} perf={item} />
        ))}
      </Swiper>
    </ListWrapper>
  );
}

const ListWrapper = styled.View`
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
`;
