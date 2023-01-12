import { useState } from 'react';
import styled from '@emotion/native';
import { dbService } from '../firebase';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { Rating } from 'react-native-ratings';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';

export default function ReviewEdit({
  navigation,
  route: {
    params: { review, from },
  },
}) {
  const [newratings, setNewratings] = useState(0);
  const [newContents, setNewContents] = useState('');

  const deleteReview = async (id) => {
    await deleteDoc(doc(dbService, 'reviews', id));
  };
  
  const editReview = async (id) => {
    await updateDoc(doc(dbService, 'reviews', id), {
      rating: newratings,
      contents: newContents,
    });
  };

  const { mutate: removeReview } = useMutation(
    ['deleteReview', review.id],
    (body) => deleteReview(body),
    {
      onSuccess: () => {
        console.log('삭제성공');
      },
      onError: () => {
        console.log('err in delete:', err);
      },
    }
  );
  const { mutate: reviseReview } = useMutation(
    ['editReview', review.id],
    (body) => editReview(body),
    {
      onSuccess: () => {
        console.log('수정성공');
      },
      onError: () => {
        console.log('err in edit:', err);
      },
    }
  );

  const onDelete = async () => {
    Alert.alert('리뷰 삭제', '정말 삭제하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
        style: 'destructive',
        onPress: async () => {
          try {
            await removeReview(review.id);
            if (from === 'MusicalDetail') {
              navigation.navigate('MusicalDetail', { musicalId: review.musicalId });
            } else if (from === 'Mypage') {
              navigation.navigate('Tabs', { screen: 'Mypage' });
            }
          } catch (err) {
            console.log('err:', err);
          }
        },
      },
    ]);
  };
  const onEdit = () => {
    if (!newratings && !newContents) {
      alert('수정한 부분이 없습니다.');
      return;
    }

    let editObj = {};
    if (newratings) {
      Object.assign(editObj, { rating: newratings });
    }
    if (newContents) {
      Object.assign(editObj, { contents: newContents });
    }
    Alert.alert('리뷰 수정', '이대로 리뷰 수정하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '수정',
        style: 'default',
        onPress: async () => {
          try {
            await reviseReview({ id: review.id, editObj });
            setNewContents('');
            setNewratings(0);
            if (from === 'MusicalDetail') {
              navigation.reset({
                index: 1,
                routes: [
                  { name: 'MusicalDetail', params: { musicalId: review.musicalId } },
                  {
                    name: 'ReviewDetail',
                    params: { review: { ...review, ...editObj }, from },
                  },
                ],
              });
            } else if (from === 'MyPage') {
              navigation.reset({
                routes: [
                  {
                    name: 'Tabs',
                    params: { screen: 'MyPage' },
                  },
                ],
              });
            }
          } catch (err) {
            console.log('err:', err);
          }
        },
      },
    ]);
  };

  return (
    <Container>
      <EditButton 
        style={{opacity: (!newContents && !newratings) ? 0.1 : 1}}
        disabled={!newContents && !newratings} 
        onPress={onEdit}>
        <BtnTitle disabled={!newContents && !newratings}>수정하기</BtnTitle>
      </EditButton>
      <DeleteButton onPress={onDelete}>
        <BtnTitle>삭제하기</BtnTitle>
      </DeleteButton>
      <SectionTitle>평점</SectionTitle>
      <Rating
        startingValue={review.rating}
        style={{ alignItems: 'flex-start', marginBottom: 20 }}
        onFinishRating={(rating) => {
          setNewratings(rating);
        }}
        ratingCount={5}
        imageSize={30}
        tintColor="#dd99f0"
      />
      <SectionTitle>내용</SectionTitle>
      <ContentEdit
        textAlignVertical="top"
        value={newContents}
        onChangeText={(text) => setNewContents(text)}
        multiline
        maxLength={300}
        placeholderTextColor="#292d31"
        placeholder={review.contents}
      />
    </Container>
  );
}
const Container = styled.ScrollView`
  padding: 20px;
`;
const ContentEdit = styled.TextInput`
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  padding: 10px 15px;
  min-height: 150px;
  margin-bottom: 50px;
  font-size: 20px;
  border-radius: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const EditButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  background-color: #48b356;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  background-color: #48b356;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const BtnTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
