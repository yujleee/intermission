import styled from '@emotion/native';
import { useQuery, useQueryClient } from 'react-query';
import MusicalCard from '../components/Musicals/MusicalCard';
import Loading from './Loading';
import { useState } from 'react';
import { RefreshControl } from 'react-native'
import { getBoxOfficeWeek } from '../api';
import { filterOnlyMusicals } from '../util';

// 모든 공연 페이지
export default function Musicals() {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const {data: boxOfficeWeekData, isLoading} = useQuery('WeeklyMusical', getBoxOfficeWeek);
  const filteredBoxOfficeMonth = filterOnlyMusicals(
    boxOfficeWeekData?.boxofs?.boxof
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(['WeeklyMusical']);
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <Container
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh} 
        />}
    >
      <MusicalCard data={filteredBoxOfficeMonth} />
    </Container>
  );
}

const Container = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
