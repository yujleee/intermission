import { useCallback, useEffect } from 'react';
import styled from '@emotion/native';
import BoxOfficeItem from './BoxOfficeItem';
import { FlatList } from 'react-native';

export default function BoxOfficeList({ data }) {
  const renderItem = useCallback(
    ({ item, index }) => <BoxOfficeItem musical={item} index={index} />,
    []
  );
  const keyExtractor = useCallback((item) => item.mt20id, []);

  return (
    <BoxOfficeListWrapper horizontal>
      {data.length === 0 ? (
        <Error>
          <ErrorText>어제의 박스오피스 순위를 집계중 입니다.</ErrorText>
        </Error>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ alignSelf: 'flex-start' }}
          ListHeaderComponent={
            <>
              <SectionTitle>박스오피스</SectionTitle>
            </>
          }
          data={data}
          ItemSeparatorComponent={<RankWrapper />}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={3}
          maxToRenderPerBatch={6}
        />
      )}
    </BoxOfficeListWrapper>
  );
}

const BoxOfficeListWrapper = styled.ScrollView`
  height: 530px;
  margin-bottom: 50px;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};

  margin: 10px 0;
  padding: 0 20px;
`;

const RankWrapper = styled.View`
  width: 80%;
`;

const Error = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.smallFontColor};
`;
