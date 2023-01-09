import { useQuery, useQueryClient } from 'react-query';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';
import SwiperItem from '../components/Home/SwiperItem';
import BoxOfficeList from '../components/Home/BoxOfficeList';
import SectionList from '../components/Home/SectionList';
import { getBoxOffice } from '../api';

export default function Home() {
  const { data: boxOfficeData, isLoading: isLoadingBO } = useQuery(
    ['Musicals', 'BoxOffice'],
    getBoxOffice
  );

  if (isLoadingBO) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <HomeWrapper
      ListHeaderComponent={
        <>
          <SliderWrapper>
            <SwiperItem />
          </SliderWrapper>
          <BoxOfficeList data={boxOfficeData.boxofs.boxof} />
          <SectionList title={'공연 예정'} />
          <SectionList title={'서울에서 공연중'} />
        </>
      }
    />
  );
}

const HomeWrapper = styled.FlatList``;

const SliderWrapper = styled.View`
  width: 100%;
  height: 280px;
  background-color: #101010;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
