import styled from '@emotion/native';
import Poster from './Poster';
import DropShadow from 'react-native-drop-shadow';
import { useNavigation } from '@react-navigation/native';

export default function BoxOfficeMonthItem({ perf, musical }) {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper
      onPress={() =>
        navigate('Stacks', {
          screen: 'MusicalDetail',
          params: {
            musicalId: musical.mt20id[0],
          },
        })
      }
    >
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
