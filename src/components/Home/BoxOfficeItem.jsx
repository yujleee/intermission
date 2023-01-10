import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';

export default function BoxOfficeItem({ musical, index }) {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper
      onPress={() =>
        navigate('Stacks', {
          screen: 'MusicalDetail',
          params: {
            musicalId: musical.mt20id[0],
          },
        })
      }
    >
      <PosterWrapper>
        <Poster url={musical.poster} />
      </PosterWrapper>
      <InfoWrapper>
        <Rank>{index + 1}</Rank>
        <Title numberOfLines={1}>{musical.prfnm}</Title>
        <PrfPeriod>{musical.prfpd}</PrfPeriod>
      </InfoWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 20px;
  margin: 10px 0;
`;

const PosterWrapper = styled.View`
  width: 100px;
  height: 140px;
`;

const InfoWrapper = styled.View`
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
`;

const Rank = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Title = styled(Rank)`
  width: 200px;
  font-weight: 700;
  color: #333;
`;

const PrfPeriod = styled.Text`
  font-size: 14px;
  color: #777;
`;
