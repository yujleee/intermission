import styled from '@emotion/native';
import ReviewsCard from '../components/Musicals/ReviewsCard';

// 모든 공연 페이지
export default function Reviews() {

  return (
    <Container>
       <ReviewsCard />
    </Container>
  );
}

const Container = styled.ScrollView`
`