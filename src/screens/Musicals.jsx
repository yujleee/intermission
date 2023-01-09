import styled from '@emotion/native';
import MusicalCard from '../components/Musicals/MusicalCard';

// 모든 공연 페이지
export default function Musicals() {
  return (
    <Container>
      <MusicalCard />
    </Container>
  );
}

const Container = styled.ScrollView``;
