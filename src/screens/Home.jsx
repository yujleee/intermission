import { useQuery, useQueryClient } from 'react-query';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';
import BoxOfficeList from '../components/Home/BoxOfficeList';
import SectionList from '../components/Home/SectionList';
import { getBoxOfficeDay, getBoxOfficeMonth } from '../api';
import BoxOfficeMonthList from '../components/Home/BoxOfficeMonthList';

export default function Home() {
  const { data: boxOfficeMonthData, isLoading: isLoadingBOM } = useQuery(
    ['Musicals', 'BoxOfficeMonth'],
    getBoxOfficeMonth
  );
  const { data: boxOfficeDayData, isLoading: isLoadingBOD } = useQuery(
    ['Musicals', 'BoxOfficeDay'],
    getBoxOfficeDay
  );

  const isLoading = isLoadingBOM || isLoadingBOD;

  // 뮤지컬 데이터만 필터링. api quueryString 중 catecode=GGGA가 먹통인듯 합니다.
  const filteredBoxOfficeDay = boxOfficeDayData?.boxofs?.boxof?.filter(
    (perf) => perf.cate[0] === '뮤지컬'
  );
  const filteredBoxOfficeMonth = boxOfficeMonthData?.boxofs?.boxof?.filter(
    (perf) => perf.cate[0] === '뮤지컬'
  );

  if (isLoading) {
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
          <BoxOfficeMonthList data={filteredBoxOfficeMonth} />
          <BoxOfficeList data={filteredBoxOfficeDay} />
          <SectionList title={'공연 예정'} />
          <SectionList title={'서울에서 공연중'} />
        </>
      }
    />
  );
}

const HomeWrapper = styled.FlatList``;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
