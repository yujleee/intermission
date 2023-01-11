import styled from '@emotion/native';

/**
 * 지역별 버튼 리스트
 * LocalMusicalList로부터 받아온 category, setCategory 지정
 * @param {category, setCategory}
 * @returns 버튼들
 * 최초수정: 2023.01.11
 */
export default function LocalButtons({ category, setCategory }) {
  const localKeys = [
    { name: '서울', code: 11 },
    { name: '경기', code: 41 },
    { name: '대전', code: 30 },
    { name: '세종', code: 36 },
    { name: '광주', code: 29 },
    { name: '대구', code: 27 },
    { name: '부산', code: 26 },
    { name: '울산', code: 31 },
    { name: '강원', code: 42 },
    { name: '제주', code: 50 },
  ];

  const handleLocalButton = (code) => {
    setCategory(code);
  };

  return (
    <ButtonWrapper horizontal showsHorizontalScrollIndicator={false}>
      {localKeys?.map((local) => (
        <LocalButton
          key={local?.code}
          code={local?.code}
          isActive={category === local?.code ? true : false}
          onPress={() => handleLocalButton(local?.code)}
        >
          <ButtonText isActive={category === local?.code ? true : false}>
            {local.name}
          </ButtonText>
        </LocalButton>
      ))}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.ScrollView`
  height: 50px;
  padding: 0 10px;
  margin: 10px 0;
`;

const LocalButton = styled.TouchableOpacity`
  padding: 14px 20px;
  height: 48px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isActive ? '#22affc' : 'transparent')};
  border: ${(props) => (props.isActive ? '' : '1px solid #22affc')};
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.isActive ? '#fff' : '#22affc')};
  font-weight: 700;
  font-size: 16px;
`;
