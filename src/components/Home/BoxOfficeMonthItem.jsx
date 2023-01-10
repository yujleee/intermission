import styled from '@emotion/native';
import Poster from './Poster';
import DropShadow from 'react-native-drop-shadow';

export default function BoxOfficeMonthItem({ perf }) {
  return (
    <ItemWrapper>
      <DropShadow
        style={{
          shadowColor: '#303030',
          shadowOffset: {
            width: 7,
            height: 7,
          },
          shadowOpacity: 0.15,
        }}
      >
        <Poster url={perf.poster} />
      </DropShadow>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  width: 200px;
  height: 300px;
  margin: 70px auto 0;
`;
