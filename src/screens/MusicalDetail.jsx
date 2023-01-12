import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../util';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMusicalData } from '../api';
import ReviewsPart from '../components/Reviews/ReviewsPart';

export default function MusicalDetail({
  navigation: { navigate },
  route: {
    params: { musicalId },
  },
}) {
  const [isMoreButton, setMoreButton] = useState(false);
  const { data: musicalData, isLoading: isLoadingMD } = useQuery(
    ['MusicalData', musicalId],
    getMusicalData
  );

  if (isLoadingMD) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  return (
    <Container>
      <InfoTotalPart>
        {musicalData?.dbs?.db?.map((musical) => (
          <InfoPart key={musicalId}>
            {/* 포스터 이미지 */}
            <InfoImgPart>
              <BackdropImg
                style={{ resizeMode: 'stretch' }}
                source={{
                  uri: `${musical.poster}`,
                }}
              />
            </InfoImgPart>
            <Title>{musical.prfnm}</Title>
            {/* 정보 */}
            <Information>
              <Info>출연 : {musical.prfcast}</Info>
              <Info>제작 : {musical.prfcrew}</Info>
              <Info>
                공연 기간 : {musical.prfpdfrom}~{musical.prfpdto}
              </Info>
              <Info>공연 장소 : {musical.fcltynm}</Info>
              <Info>러닝타임 : {musical.prfruntime}</Info>
              <Info>관람 연령가 : {musical.prfage}</Info>
            </Information>

            <MoreButton
              onPress={() => {
                setMoreButton(!isMoreButton);
              }}
            >
              {isMoreButton ? (
                <TempText>접기</TempText>
              ) : (
                <TempText>상세보기</TempText>
              )}
            </MoreButton>
          </InfoPart>
        ))}
      </InfoTotalPart>

      {isMoreButton && (
        <MoreDetail width={SCREEN_WIDTH}>
          <DetailImg
            style={{ resizeMode: 'stretch' }}
            source={{
              uri: `${musicalData?.dbs?.db[0].styurls[0].styurl[0]}`,
            }}
          />
        </MoreDetail>
      )}

      {/* 리뷰 */}
      <ReviewsPart musicalId={musicalId} />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
`;

const InfoTotalPart = styled.View`
  flex: 1;
`;

const InfoPart = styled.View`
  height: auto;
  margin-bottom: 30px;
`;

const InfoImgPart = styled.View`
  width: 100%;
  height: 460px;
  margin-bottom: 30px;
`;

const BackdropImg = styled.Image`
  flex: 1;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 10px;
`;

// 공연 정보
const Information = styled.View`
  padding: 10px 20px;
`;

const Info = styled.Text`
  font-size: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.middleFontColor};
`;
const MoreButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  height: 46px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonColor};
`;

const MoreDetail = styled.View`
  width: 90%;
  height: ${(props) =>
    props.width <= 375 ? SCREEN_HEIGHT * 8 + 'px' : SCREEN_HEIGHT * 10 + 'px'};
  padding: 10px 0;
  margin: 0 auto;
`;

const DetailImg = styled.Image`
  flex: 1;
  object-fit: cover;
`;

const TempText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.buttonTextColor};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
