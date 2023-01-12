import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';

export default function SectionItem({ musical }) {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper
      onPress={() =>
        navigate('Stacks', {
          screen: 'MusicalDetail',
          params: { musicalId: musical?.mt20id[0] },
        })
      }
    >
      <Poster url={musical?.poster} musicalId={musical?.mt20id[0]} />
      <MusicalTitle numberOfLines={1}>{musical?.prfnm}</MusicalTitle>
      <MusicalTheater numberOfLines={1}>{musical?.prfplcnm}</MusicalTheater>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.TouchableOpacity`
  width: 120px;
  height: 160px;
  margin-right: 20px;
`;

const MusicalTitle = styled.Text`
  height: 22px;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};

  margin: 8px 0;
  font-weight: 600;
  text-align: center;
`;

const MusicalTheater = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.smallFontColor};

  text-align: center;
  margin: -4px 0;
`;
