import styled from '@emotion/native';
import { BASE_URL_FOR_IMG } from '../../api';

/**
 * 포스터 이미지
 * 아이템으로부터 url을 params로 받아옴
 * @param {url} param0
 * @returns
 */
export default function Poster({ url }) {
  return (
    <PosterWrapper>
      <PosterImg
        source={{
          uri: `${BASE_URL_FOR_IMG}${url}`,
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
