import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { shadowStyle } from '../../util/shadow';

// import React, { useEffect } from 'react';
// import DropShadow from 'react-native-drop-shadow';
// import { parseString } from 'react-native-xml2js';
// import { BASE_URL, API_KEY } from '../../api';

export default function ReviewCard() {
  return (
    <ReviewContent
      style={shadowStyle.blue}
      onPress={() => navigate('Stacks', { screen: 'ReviewDetail' })}
    >
      {/* 글자수 자르기 해야함~!
            {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."} */}
      <Text>
        누가 죄인인가~! 이거 보고 국사 시험 잘 봤습니다. 감사합니다. 이번 공연
        놓치지 말고 보세요. 캐스팅 쩐다.
      </Text>
      <Id>닉네임1</Id>
    </ReviewContent>
  );
}

//
export const ReviewContent = styled.TouchableOpacity`
  width: 100%;
  background: #f4fdff;
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const Id = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  font-size: 17px;
`;

// 전체 글자
export const Text = styled.Text`
  font-size: 20px;
`;

//ㅓ갸ㅐ러ㅚ라둥ㅎ펴ㅓㄷㄱ루
