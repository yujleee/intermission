import styled from '@emotion/native';
import SwiperItem from '../components/Home/SwiperItem';

export default function Home() {
  return (
    <HomeWrapper>
      <SliderWrapper>
        <SwiperItem />
      </SliderWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.ScrollView``;

const SliderWrapper = styled.ScrollView`
  width: 100%;
  height: 220px;
  background-color: #101010;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
