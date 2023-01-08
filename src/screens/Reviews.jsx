import { Text, View, FlatList, ScrollView } from 'react-native';
import styled from '@emotion/native';
import ReviewsCard from '../components/ReviewsCard';
// import { useState } from 'react';

export default function Reviews() {

  // const [test, setTest] = useState([1, 2, 3, 4, 5, 6])
 
  return (
    <Container>
       <ReviewsCard />
    </Container>
  );
}

const Container = styled.ScrollView`
`