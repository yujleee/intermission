import { Modal } from 'react-native';
import styled from '@emotion/native';
import { useState } from 'react';
import { Rating } from 'react-native-ratings';
import { collection, addDoc } from 'firebase/firestore';
import { authService, dbService } from '../../firebase';

export default function ReviewModal({isOpenModal, setIsOpenModal, musicalId }) {
    const [modalContent, setModalContent] = useState('');
    const [ratings, setRatings] = useState(0);
    const getRatings = (rating) => { setRatings(rating) };
    const addReview = async () => {
        //addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가
        await addDoc(collection(dbService, 'reviews'), {
            contents: modalContent,
            createdAt: Date.now(),
            rating: ratings,
            userId: authService.currentUser?.uid,
            writer: authService.currentUser?.displayName ?? '닉네임없음',
            musicalId,
        });
        setIsOpenModal(false);
        setModalContent('');
        setRatings(0);
    };
    
    
    return(
        <Modal visible={isOpenModal} transparent animationType='slide'>
            <Backdrop>
            <ModalBackImg>
            <ModalView>
                <ModalTitle>평가</ModalTitle>
                <Rating 
                    startingValue={3}
                    style={{ alignItems: 'flex-start', marginBottom: 20 }}
                    onFinishRating={getRatings}
                    ratingCount={5}
                    imageSize={30}
                    type="custom"
                    ratingBackgroundColor="#ddd"
                    tintColor="#f5f5f5"
                />
                <ModalTitle>내용</ModalTitle>
                <ContentInput 
                    value={modalContent} 
                    onChangeText={(text) => setModalContent(text)}
                    multiline
                    maxLength={300} 
                />
            </ModalView>
                <Row>
                <ModalCancelBtn onPress={()=>setIsOpenModal(false)} title='취소'>
                <CancleBtn>취소</CancleBtn>
                </ModalCancelBtn>
                <ModalAddBtn
                    style={{opacity: (!ratings || !modalContent) ? 0.1 : 1}}
                    disabled={!ratings || !modalContent}
                    onPress={addReview} title="추가"
                >
                <AddBtn>추가</AddBtn>
                </ModalAddBtn>
                </Row>
            </ModalBackImg>
            </Backdrop>
        </Modal>
    )

}

const Backdrop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBackImg = styled.View`
  background-color: #f5f5f5;
  width: 80%;
  height: 70%;
  padding: 20px;
  justify-content: space-between;
  border-radius: 5px;
`;
const ModalView = styled.View``;
const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const ContentInput = styled.TextInput`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  min-height: 200px;
`;
const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
const ModalCancelBtn = styled.TouchableOpacity`
`
const CancleBtn = styled.Text`
    font-size: 20px;
    color: red;
`
const ModalAddBtn = styled.TouchableOpacity`
`
const AddBtn = styled.Text`
  font-size: 20px;
  color: black;
`;
