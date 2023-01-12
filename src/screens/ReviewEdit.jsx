import { useState } from 'react';
import styled from '@emotion/native';
import { dbService } from '../firebase';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { Rating } from 'react-native-ratings';
import { Alert, useColorScheme } from 'react-native';
import { useMutation } from 'react-query';
import { SectionTitle } from '../components/Home/BoxOfficeList';
import { DARK_BACKGROUND, LIGHT_BACKGROUND } from '../colors';

export default function ReviewEdit({
  navigation,
  route: {
    params: { review, from },
  },
}) {
  const [newratings, setNewratings] = useState(0);
  const [newContents, setNewContents] = useState('');
  const isDark = useColorScheme();

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

  const placeholderColor = isDark ? '#fff' : '#292929';

  return (
    <Container>
      <EditTitle>평점</EditTitle>
      <Rating
        startingValue={review.rating}
        style={{ alignItems: 'flex-start', marginBottom: 30 }}
        onFinishRating={(rating) => {
          setNewratings(rating);
        }}
        ratingCount={5}
        imageSize={30}
        tintColor={isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND}
      />
      <EditTitle>내용</EditTitle>
      <ContentEdit
        textAlignVertical="top"
        value={newContents}
        onChangeText={(text) => setNewContents(text)}
        multiline
        maxLength={300}
        placeholderTextColor={placeholderColor}
        placeholder={review.contents}
      />
      <EditButton disabled={!newContents && !newratings} onPress={onEdit}>
        <BtnTitle disabled={!newContents && !newratings}>수정하기</BtnTitle>
      </EditButton>
      <DeleteBtn onPress={onDelete}>
        <DeleteBtnTitle>삭제하기</DeleteBtnTitle>
      </DeleteBtn>
    </Container>
  );
}
const Container = styled.ScrollView`
  padding: 30px 20px;
  background-color: ${(props) => props.theme.bgColor};
`;
const ContentEdit = styled.TextInput`
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 16px;
  min-height: 150px;
  margin-bottom: 50px;
  font-size: 18px;
  border-radius: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const EditTitle = styled(SectionTitle)`
  padding: 0;
`;

const EditButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 10px;
  margin-bottom: 20px;
`;
const BtnTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.buttonTextColor};
`;

const DeleteBtn = styled(EditButton)`
  background-color: none;
  border-width: 1px;
  border-color: ${(props) => props.theme.buttonColor};
`;

const DeleteBtnTitle = styled(BtnTitle)`
  color: ${(props) => props.theme.buttonColor};
`;
