import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL_FOR_IMG } from '../../api';

export default function MusicalCard({ data }) {
  const { navigate } = useNavigation();
  

  return (
    <WrapView>
      {data?.map((item) => (
        <Wrapper
          key={item?.mt20id}
          onPress={() => navigate('Stacks', { 
            screen: 'MusicalDetail',
            params: { musicalId: item?.mt20id},
            })
          }
        >
          <Poster source={{ uri: `${BASE_URL_FOR_IMG}${item?.poster}` }} />
          <Column>
            <Rating>⭐️8.5/10</Rating>
            <Title>{item?.cate}</Title>
          </Column>
        </Wrapper>
      ))}
    </WrapView>
  );
}

const WrapView = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Wrapper = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 5px;
  margin: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const Poster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const Column = styled.View`
  padding: 10px;
`;
const Rating = styled.Text`
  color: ${(props) => props.theme.fontColor};
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Title = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;
