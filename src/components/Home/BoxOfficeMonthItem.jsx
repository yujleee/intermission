import styled from '@emotion/native';
import Poster from './Poster';
import { shadowStyle } from '../../util/shadow';
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
      style={shadowStyle.grey}
    >
      <Poster url={perf.poster} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  width: 200px;
  height: 300px;
  margin: 70px auto 0;
`;
