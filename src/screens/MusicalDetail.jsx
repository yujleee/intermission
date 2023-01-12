import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../util';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { BASE_URL, getMusicalData } from '../api';
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
            <InfoImgPart
              style={
                {
                  // width: SCREEN_WIDTH,
                  // height: SCREEN_HEIGHT / 2,
                  // justifyContent: 'flex-end',
                }
              }
            >
              <BackdropImg
                style={StyleSheet.absoluteFill}
                source={{
                  uri: `${musical.poster}`,
                }}
              />
              <LinearGradient
                style={StyleSheet.absoluteFill}
                colors={['transparent', 'black']}
              />
              <Title>{musical.prfnm}</Title>
            </InfoImgPart>
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
            {/* 상세보기 버튼 누르면 상세 이미지 나옴 */}
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
            {isMoreButton && (
              <MoreDetail>
                <DetailImg
                  style={{ resizeMode: 'stretch' }}
                  source={{
                    uri: `${musical?.styurls[0].styurl[0]}`,
                  }}
                />
              </MoreDetail>
            )}
          </InfoPart>
        ))}
      </InfoTotalPart>
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
  /* 불러올 사진이 사이즈가 다 다르면 똑같이 적용안될 것 같다 */
  /* height: ${SCREEN_HEIGHT / 1.5 + 'px'}; */
  /* justify-content: flex-end; */
  flex: 1;
`;
const InfoImgPart = styled.View`
  flex: 1;
`;
const BackdropImg = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;
const Title = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-size: 50px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`;

// 공연 정보
const Information = styled.View`
  margin: 30px;
  /* flex-direction: row; */
`;
// const DataName = styled.View``;
// const Data = styled.View`
//   padding-left: 15px;
// `;
const Info = styled.Text`
  font-size: 20px;
  padding-bottom: 4px;
  color: ${(props) => props.theme.fontColor};
`;
const MoreButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: ${(props) => props.theme.buttonColor};
`;

// 상세보기 버튼 누르면 나타나는
const MoreDetail = styled.View`
  width: 100%;
  height: 100%;
`;
const DetailImg = styled.Image`
  flex: 1;
  object-fit: cover;
`;
const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
