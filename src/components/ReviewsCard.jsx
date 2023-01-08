import React from "react";
import styled from '@emotion/native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ReviewsCard() {
  const { navigate } = useNavigation();
  const url = "https://file.mk.co.kr/meet/neds/2022/12/image_readtop_2022_1171782_16723494025295178.jpg"

  const [test, setTest] = useState([{id:1000}, {name:"kim"}, {age: 26}, {state: "korea"}, {number: "01000000000"}])

  return (
    <WrapView>
      {test.map((a, index)=>(
        <RWrapper key={index} onPress={() => navigate("Stacks", {screen:"ReviewDetail"})} >
        <Poster source={{uri: url}} />
        <RColumn>
        <Rating>⭐️8.5/10</Rating>
        <RTitle>뮤지컬명</RTitle>
        </RColumn>
      </RWrapper>
      ))}
    </WrapView>
    )
}

const WrapView = styled.View`
    flex: 1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`

const RWrapper = styled.TouchableOpacity`
  background-color: white;
  border-radius: 5px;
  margin: 10px;
`

const Poster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
const RColumn = styled.View`
  padding: 10px;
`;
const Rating = styled.Text`
  color: black;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const RTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: black;
`;