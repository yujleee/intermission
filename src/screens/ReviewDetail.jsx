import styled from '@emotion/native';
import { Feather } from '@expo/vector-icons';
import { shadowStyle } from '../util/shadow';
import { Id, Text } from '../components/Reviews/ReviewCard';
import { useColorScheme } from 'react-native';
import { AddReview, AddReviewText } from '../components/Reviews/ReviewsPart';
import { authService } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ReviewDetail({
  navigation: { navigate },
  route: {
    params: { review, from },
  },
}) {
  const [isUser, setUser] = useState(false);

  const goToReviewEdit = () => {
    navigate('ReviewEdit', { review, from });
  };
  const isDark = useColorScheme();
  const currentUser = authService.currentUser.uid;

  const checkUser = () => {
    console.log('review?.userId', review?.userId);
    console.log('currentUser?.userId', currentUser);
    if (review?.userId === currentUser) {
      setUser(true);
      console.log('isUser', isUser);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Container>
      {/* 정보 */}
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
      </Row>
      <ReviewBox style={shadowStyle.blue}>
        <Text>{review?.contents}</Text>
        <Id>{review?.writer}</Id>
      </ReviewBox>
      {isUser && (
        <ButtonWrapper>
          <EditBtn onPress={goToReviewEdit}>
            <EditBtnText>수정하기</EditBtnText>
          </EditBtn>
        </ButtonWrapper>
      )}
    </Container>
  );
}
const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.bgColor};
`;

const Row = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  margin-top: 20px;
  padding-right: 10px;
`;

const Rating = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  margin-right: auto;
  padding: 10px 20px;
`;

const ButtonWrapper = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

const EditBtn = styled(AddReview)`
  width: 100px;
  margin-left: auto;
`;

const EditBtnText = styled(AddReviewText)``;

const ReviewBox = styled.View`
  width: 90%;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  padding: 15px 15px;
  margin: 20px;
`;
