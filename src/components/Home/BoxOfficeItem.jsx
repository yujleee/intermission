import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';

/**
 * 박스오피스 리스트 아이템
 * BoxOfficeList로부터 각각의 뮤지컬 정보를 param으로 받아옴
 * @param {musical}
 * @returns
 * 최초수정: 2023.01.11
 */
export default function BoxOfficeItem({ musical }) {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper
      onPress={() =>
        navigate('Stacks', {
          screen: 'MusicalDetail',
          params: { musicalId: musical?.mt20id[0] },
        })
      }
    >
      <PosterWrapper>
        <Poster url={musical?.poster} musicalId={musical?.mt20id[0]} />
      </PosterWrapper>
      <InfoWrapper>
        <Rank>{musical?.rnum}</Rank>
        <Title numberOfLines={1}>{musical?.prfnm}</Title>
        <PrfPeriod>{musical?.prfpd}</PrfPeriod>
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
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
`;

const Title = styled(Rank)`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  color: ${(props) => props.theme.fontColor};
`;

const PrfPeriod = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.smallFontColor};
`;
