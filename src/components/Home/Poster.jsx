import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL_FOR_IMG } from '../../api';

export default function Poster({ url }) {
  const { navigate } = useNavigation();

  return (
    <PosterWrapper
      onPress={() => navigate('Stacks', { screen: 'MusicalDetail' })}
    >
      <PosterImg
        source={{
          uri: `${BASE_URL_FOR_IMG}/${url}`,
        }}
      />
    </PosterWrapper>
  );
}

const PosterWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

const PosterImg = styled.Image`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
