import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

export default function Poster() {
  const { navigate } = useNavigation();

  return (
    <PosterWrapper onPress={() => navigate('MusicalDetail')}>
      <PosterImg
        source={{
          uri: 'https://ticketimage.interpark.com/Play/image/large/22/22013271_p.gif',
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
  // display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
