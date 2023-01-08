import styled from '@emotion/native';
import Poster from './Poster';

export default function BoxOfficeItem() {
  return (
    <ItemWrapper>
      <PosterWrapper>
        <Poster />
      </PosterWrapper>
      <InfoWrapper>
        <Rank>1</Rank>
        <Title numberOfLines={1}>스위니토드</Title>
        <PrfPeriod>2022.12.01 ~ 2023.03.05</PrfPeriod>
      </InfoWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
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
  font-weight: 700;
  color: #333;
`;

const PrfPeriod = styled.Text`
  font-size: 14px;
  color: #777;
`;
