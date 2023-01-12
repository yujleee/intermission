import { useQuery, useQueryClient } from 'react-query';
import styled from '@emotion/native';
import BoxOfficeList from '../components/Home/BoxOfficeList';
import { getBoxOfficeDay, getBoxOfficeMonth } from '../api';
import BoxOfficeMonthList from '../components/Home/BoxOfficeMonthList';
import LocalMusical from '../components/Home/LocalMusical/LocalMusicalList';
import { filterOnlyMusicals } from '../util';
import TicketLinkList from '../components/Home/TicketLinkList';
import Loading from './Loading';
import { useState } from 'react';

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const queryClinet = useQueryClient();
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
  const filteredBoxOfficeDay = filterOnlyMusicals(
    boxOfficeDayData?.boxofs?.boxof
  );

  const filteredBoxOfficeMonth = filterOnlyMusicals(
    boxOfficeMonthData?.boxofs?.boxof
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClinet.refetchQueries(['Musicals']);
    setRefreshing(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeWrapper
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>
          <BoxOfficeMonthList data={filteredBoxOfficeMonth} />
          <BoxOfficeList data={filteredBoxOfficeDay} />
          <LocalMusical />
          <TicketLinkList />
        </>
      }
    />
  );
}

const HomeWrapper = styled.FlatList`
  background-color: ${(props) => props.theme.bgColor};
`;