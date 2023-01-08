import styled from '@emotion/native';
import SectionItem from './SectionItem';

export default function SectionList({ title }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <SectionListWrapper horizontal showsHorizontalScrollIndicator={false}>
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </SectionListWrapper>
    </>
  );
}

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #101010;
  margin: 10px 0;
  padding: 0 20px;
`;

const SectionListWrapper = styled.ScrollView`
  width: 100%;
  height: 220px;
  padding: 0 20px;
  margin-bottom: 40px;
`;
