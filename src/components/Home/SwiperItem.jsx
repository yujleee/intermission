import styled from '@emotion/native';
import Poster from './Poster';

export default function SwiperItem() {
  return (
    <ItemWrapper>
      <Poster />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  width: 180px;
  height: 240px;
  margin-top: 70px;
`;
