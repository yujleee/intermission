import styled from '@emotion/native';
import Poster from './Poster';
import { shadowStyle } from '../../util/shadow';

export default function BoxOfficeMonthItem({ perf }) {
  return (
    <ItemWrapper style={shadowStyle.grey}>
      <Poster url={perf.poster} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  width: 200px;
  height: 300px;
  margin: 70px auto 0;
`;
