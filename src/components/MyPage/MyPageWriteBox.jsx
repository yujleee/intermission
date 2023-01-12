import { View, FlatList } from 'react-native';
import styled from '@emotion/native';
import {
  Id,
  ReviewContent,
  ReviewDate,
  Rating,
  Row,
  Text,
} from '../Reviews/ReviewCard';
import { collection, query, where } from '@firebase/firestore';
import { dbService, authService } from '../../firebase';
import { onSnapshot } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { shadowStyle } from '../../shadow';

export default function myPageWriteBox() {
  const { navigate } = useNavigation();
  const [reviews, setReviews] = useState('');
  
  

  useEffect(() => {
    const q = query(
      collection(dbService, 'reviews'),
      where('userId', '==', authService.currentUser.uid)
    );

    onSnapshot(q, (snapshot) => {
      const reviews = snapshot.docs.map((doc) => {
        const review = {
          id: doc.id,
          ...doc.data(),
        };
        return review;
      });
      setReviews(reviews);
    });
  }, []);

  const goToReview = (review) => {
    navigate('Stacks', {
      screen: 'ReviewDetail',
      params: { review: review, from: 'MyPage' },
    });
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View>
            <ReviewText>작성한 리뷰</ReviewText>
          </View>
        </>
      }
      keyExtractor={(item) => item.id}
      data={reviews}
      renderItem={({ item }) => (
        <ReviewContent
          style={shadowStyle.blue}
          onPress={() => goToReview(item)}
        >
          <Row>
            <Rating>⭐️{item?.rating}/5</Rating>
            <ReviewDate>
              {new Date(item?.createdAt).toLocaleDateString('kr')}
            </ReviewDate>
          </Row>
          <Text numberOfLines={2}>{item?.contents}</Text>
          <Id>{item?.writer}</Id>
        </ReviewContent>
      )}
    />
  );
}

const ReviewText = styled.Text`
  color: ${(props) => props.theme.fontColor};
  margin-top: 80px;
  margin-bottom: 30px;
  margin-left: 16px;
  font-size: 20px;
`;
const TestView = styled.View`
`
const Wrapper = styled.TouchableOpacity`
  background-color: red;
`

const Title = styled.Text`
  font-size: 16px;
`
