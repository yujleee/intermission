import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import DropShadow from 'react-native-drop-shadow';
import { parseString } from 'react-native-xml2js';
import { BASE_URL, API_KEY } from '../../api';

export default function ReviewCard() {
  return (
    <DropShadow
      style={{
        shadowColor: '#219BB6',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    >
      <ReviewContent
        onPress={() => navigate('Stacks', { screen: 'ReviewDetail' })}
      >
        {/* 글자수 자르기 해야함~!
            {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."} */}
        <Text>
          누가 죄인인가~! 이거 보고 국사 시험 잘 봤습니다. 감사합니다. 이번 공연
          놓치지 말고 보세요. 캐스팅 쩐다. 내용이 많아지면 닉네임에 겹쳐질것
          같아서 실험중입니다. 우려한 대로 약간 그렇습니다. 패딩을 주겠습니다.
          그래도 해결되지 않았습니다. 울고있습니다. padding-bottom을 따로 주기
          위해서 하나하나 패딩을 달리 주었습니다. 이래도 엉망인지 보겠습니다. 오
          이젠 해결 된 것 같습니다. 다행입니다. 울음을 멈췄습니다. 정말 잘
          되는지 다시 확인... 되었습니다. 감사합니다.
        </Text>
        <Id>닉네임1</Id>
      </ReviewContent>
    </DropShadow>
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
