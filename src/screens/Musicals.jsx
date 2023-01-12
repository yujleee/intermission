import styled from '@emotion/native';
import { useQuery } from 'react-query';
import MusicalCard from '../components/Musicals/MusicalCard';
import { ActivityIndicator } from 'react-native';
import { getBoxOfficeWeek } from '../api';
import { filterOnlyMusicals } from '../util';

// 모든 공연 페이지
export default function Musicals() {
  const {data: boxOfficeWeekData, isLoading} = useQuery('AllMusical', getBoxOfficeWeek)

  const filteredBoxOfficeMonth = filterOnlyMusicals(
    boxOfficeWeekData?.boxofs?.boxof
  );

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color={'#22AFFC'} />
      </Loader>
    );
  }

  return (
    <Container>
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
