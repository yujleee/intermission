import styled from '@emotion/native';
import SwiperItem from '../components/Home/SwiperItem';
import BoxOfficeList from '../components/Home/BoxOfficeList';
import SectionList from '../components/Home/SectionList';

export default function Home() {
  return (
    <HomeWrapper>
      <SliderWrapper>
        <SwiperItem />
      </SliderWrapper>
      <BoxOfficeList />
      <SectionList title={'공연 예정'} />
      <SectionList title={'서울에서 공연중'} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.ScrollView``;

const SliderWrapper = styled.View`
  width: 100%;
  height: 280px;
  background-color: #101010;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
