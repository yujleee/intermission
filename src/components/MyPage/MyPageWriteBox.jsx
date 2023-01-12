import { View, FlatList } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from '../Reviews/ReviewCard';
import { collection, query, QuerySnapshot, where } from '@firebase/firestore';
import { dbService, authService } from '../../firebase';
import { onSnapshot } from '@firebase/firestore';
import { useState, useEffect } from 'react';

export default function myPageWriteBox() {
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

  console.log(reviews);
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
      renderItem={({ item }) => <ReviewCard review={item} />}
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
