import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';

export default function SectionItem() {
  const { navigate } = useNavigation();

  return (
    <ItemWrapper onPress={() => navigate('MusicalDetail')}>
      <Poster />
      <MusicalTitle numberOfLines={1}>스위니토드</MusicalTitle>
      <MusicalTheater numberOfLines={1}>샤롯데시어터</MusicalTheater>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.TouchableOpacity`
  width: 120px;
  height: 160px;
  margin-right: 20px;
`;

const MusicalTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 8px 0;
  font-weight: 600;
  text-align: center;
`;

const MusicalTheater = styled.Text`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin: -4px 0;
`;
