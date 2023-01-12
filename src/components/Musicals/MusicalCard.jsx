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
            params: { musicalId: item?.mt20id[0]},
            })
          }
        >
          <Poster source={{ uri: `${BASE_URL_FOR_IMG}${item?.poster}` }} />
          <Column>
            <Title numberOfLines={1}>{item?.prfnm}</Title>
            <Theater numberOfLines={1}>{item?.prfplcnm}</Theater>
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
  width: 120px;
  height: 230px;
`;

const Poster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const Column = styled.View`
  padding: 5px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;
const Theater = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-size: 12px;
`;
