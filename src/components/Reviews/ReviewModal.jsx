import { Modal } from "react-native"
import styled from "@emotion/native"
import { useState } from "react"
import { Rating } from "react-native-ratings"
import { collection, addDoc } from "firebase/firestore"
import { authService, dbService } from "../../firebase"

export default function ReviewModal({isOpenModal, setIsOpenModal }) {
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
            // musicalId,
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
                    startingValue={0}
                    style={{alignItems: 'flex-start' }}
                    onFinishRating={getRatings}
                    ratingCount={5}
                    imageSize={30}
                    tintColor='#dd99f0' 
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
                <ModalBtn onPress={()=>setIsOpenModal(false)} title='취소'>
                <CancleBtn>취소</CancleBtn>
                </ModalBtn>
                <ModalBtn
                disabled={!ratings || !modalContent}
                onPress={addReview} title="추가"
                >
                <AddBtn>추가</AddBtn>
                </ModalBtn>
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
`
const ModalBackImg = styled.View`
    background-color: #dd99f0;
    width: 80%;
    height: 70%;
    padding: 20px;
    justify-content: space-between;
    border-radius: 5px;
`
const ModalView = styled.View`
`
const ModalTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-top: 20px;
    margin-bottom: 10px;
`
const ContentInput = styled.TextInput`
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    min-height: 200px;
`
const Row = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: flex-start;
`;
const ModalBtn = styled.TouchableOpacity`
`
const CancleBtn = styled.Text`
    font-size: 20px;
    color: red;
`
const AddBtn = styled.Text`
    font-size: 20px;
    color: black;
`