import { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/native';
import { FlatList, ActivityIndicator } from 'react-native';
import { SectionTitle } from '../BoxOfficeList';
import { getLocalPopular } from '../../../api';
import SectionItem from '../SectionItem';
import LocalButtons from './LocalButtons';
import { filterOnlyMusicals, SCREEN_WIDTH } from '../../../util';

/**
 * 지역 인기 뮤지컬 리스트
 * @returns 지역 인기 뮤지컬
 * 최초 수정: 2023.01.11
 */
export default function LocalMusical() {
  const [category, setCategory] = useState(11);
  const { data, isLoading } = useQuery(['Local', category], getLocalPopular);

  const renderItem = useCallback(
    ({ item }) => <SectionItem musical={item} />,
    []
  );
  const keyExtractor = useCallback((item) => item.mt20id, []);

  const filteredLocal = filterOnlyMusicals(data?.boxofs?.boxof);

  return (
    <LocalWrapper>
      <SectionTitle>지역별 인기 뮤지컬</SectionTitle>
      <LocalButtons category={category} setCategory={setCategory} />

      <FlatList
        horizontal
        listKey="local"
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <Wrapper>
            {isLoading && (
              <Loading>
                <ActivityIndicator color={'#22AFFC'} />
              </Loading>
            )}
            {filteredLocal?.length === 0 && (
              <Empty>
                <EmptyText>데이터가 없습니다</EmptyText>
              </Empty>
            )}
          </Wrapper>
        }
        ListHeaderComponentStyle={{
          justifyContent: 'center',
        }}
        data={filteredLocal}
        contentContainerStyle={{ height: 200, paddingLeft: 20 }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={3}
        maxToRenderPerBatch={5}
      />
    </LocalWrapper>
  );
}

const LocalWrapper = styled.View`
  height: 350px;
  margin-bottom: 50px;
  flex-direction: column;
`;

const Wrapper = styled.View`
  width: 100%;
`;

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${Math.ceil(SCREEN_WIDTH) / 2 - 30 + 'px'};
`;

const Empty = styled.View`
  padding: 0 ${Math.ceil(SCREEN_WIDTH) / 3 - 20 + 'px'};
`;

const EmptyText = styled.Text`
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.theme.smallFontColor};
`;
