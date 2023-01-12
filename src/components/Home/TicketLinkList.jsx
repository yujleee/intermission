import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import styled from '@emotion/native';
import { Linking } from 'react-native';
import { SectionTitle } from './BoxOfficeList';
import { dbService } from '../../firebase';
import { useEffect, useState } from 'react';

export default function TicketLinkList() {
  const [links, setLinks] = useState([]);

  // 파이어베이스에서 예매 사이트 가져오는 함수
  const getTicketLinks = async () => {
    let linksObjList = [];
    const q = query(
      collection(dbService, 'ticketLinks'),
      orderBy('name', 'asc')
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const linksObj = {
        id: doc.id,
        ...doc.data(),
      };
      linksObjList.push(linksObj);
    });
    setLinks(linksObjList);
  };

  useEffect(() => {
    getTicketLinks();
  }, []);

  const openUrl = async (url) => {
    await Linking.openURL(url);
  };

  return (
    <Wrapper>
      <SectionTitle>예매 사이트</SectionTitle>
      <TicketLinkListWrapper horizontal showsHorizontalScrollIndicator={false}>
        {links?.map((link) => {
          return (
            <LinkWrapper key={link.id} onPress={() => openUrl(link.url)}>
              <ImgWrapper>
                <Img
                  source={{
                    url: `${link.img}`,
                  }}
                />
              </ImgWrapper>
              <TicketText numberOfLines={1}>{link.name}</TicketText>
            </LinkWrapper>
          );
        })}
      </TicketLinkListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View``;

const TicketLinkListWrapper = styled.ScrollView`
  padding: 0 20px;
  margin: 10px 0 30px;
`;

const LinkWrapper = styled.TouchableOpacity`
  flex-direction: column;
  margin-right: 20px;
`;

const ImgWrapper = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TicketText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.smallFontColor};
  margin: 6px 0;
  font-weight: 500;
  text-align: center;
`;
