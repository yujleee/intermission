import { useCallback, useEffect } from 'react';
import styled from '@emotion/native';
import { SectionTitle } from './SectionList';
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
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ alignSelf: 'flex-start' }}
        ListHeaderComponent={
          <>
            <BoxOfficeTitle>박스오피스</BoxOfficeTitle>
          </>
        }
        data={data}
        ItemSeparatorComponent={<RankWrapper />}
        // numColumns={Math.ceil(data.length / 3)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={3}
        maxToRenderPerBatch={6}
      />
    </BoxOfficeListWrapper>
  );
}

const BoxOfficeListWrapper = styled.ScrollView`
  height: 510px;
  margin-bottom: 50px;
`;

const BoxOfficeTitle = styled(SectionTitle)``;

const RankWrapper = styled.View`
  width: 80%;
`;
