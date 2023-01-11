import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';
import Poster from './Poster';
import { shadowStyle } from '../../util/shadow';

/**
 * 상단 슬라이더 리스트 아이템
 * 각각의 뮤지컬 정보가 담긴 musical을 받아옴
 * @param {musical} param0
 * @returns
 * 최초수정: 2023.01.11
 */

export default function BoxOfficeMonthItem({ musical }) {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper
      style={shadowStyle.grey}
      onPress={() =>
        navigate('Stacks', {
          screen: 'MusicalDetail',
          params: { musicalId: musical?.mt20id },
        })
      }
    >
      <Poster url={musical?.poster} musicalId={musical?.mt20id} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.TouchableOpacity`
  width: 200px;
  height: 300px;
  margin: 70px auto 0;
`;
