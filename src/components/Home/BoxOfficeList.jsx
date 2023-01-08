import styled from '@emotion/native';
import BoxOfficeItem from './BoxOfficeItem';
import { SectionTitle } from './SectionList';

export default function BoxOfficeList() {
  return (
    <>
      <BoxOfficeTitle>박스오피스</BoxOfficeTitle>
      <BoxOfficeListWrapper horizontal showsHorizontalScrollIndicator={false}>
        <RankWrapper page={1}>
          <BoxOfficeItem />
          <BoxOfficeItem />
          <BoxOfficeItem />
        </RankWrapper>
        <RankWrapper>
          <BoxOfficeItem />
          <BoxOfficeItem />
          <BoxOfficeItem />
        </RankWrapper>
        <RankWrapper>
          <BoxOfficeItem />
          <BoxOfficeItem />
          <BoxOfficeItem />
        </RankWrapper>
      </BoxOfficeListWrapper>
    </>
  );
}

const BoxOfficeListWrapper = styled.ScrollView`
  height: 480px;
  margin-bottom: 50px;
`;

const BoxOfficeTitle = styled(SectionTitle)``;

const RankWrapper = styled.View``;
