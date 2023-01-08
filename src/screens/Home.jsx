import styled from '@emotion/native';
import SwiperItem from '../components/Home/SwiperItem';
import BoxOfficeList from '../components/Home/BoxOfficeList';

export default function Home() {
  return (
    <HomeWrapper>
      <SliderWrapper>
        <SwiperItem />
      </SliderWrapper>
      <BoxOfficeList />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.ScrollView``;

const SliderWrapper = styled.View`
  width: 100%;
  height: 220px;
  background-color: #101010;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
