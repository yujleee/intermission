import styled from '@emotion/native';
import Poster from './Poster';

export default function BoxOfficeMonthItem({ perf }) {
  return (
    <ItemWrapper>
      <Poster url={perf.poster} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  width: 200px;
  height: 300px;
  margin: 70px auto 0;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.15);
`;
