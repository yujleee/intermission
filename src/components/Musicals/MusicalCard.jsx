import React from 'react';
import styled from '@emotion/native';
import SectionItem from '../Home/SectionItem';

export default function MusicalCard({ data }) {

  return (
    <WrapView>
      {data?.map((item) => {
        return (
          <Wrapper>
            <SectionItem key={item.mt20id} musical={item} />
          </Wrapper>
        );
      })}
    </WrapView>
  );
}

const WrapView = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Wrapper = styled.View`
  height: 200px;
  margin: 20px 0;
`;
