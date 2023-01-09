import { Modal } from "react-native"
import styled from "@emotion/native"
import { useState } from "react"

export default function ReviewModal({isOpenModal, setIsOpenModal}) {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    return(
        <Modal visible={isOpenModal} transparent animationType='slide'>
            <Backdrop>
                <ModalBackImg>
                    <ModalTitle>제목</ModalTitle>
                    <TitleInput value={modalTitle} onChangeText={(text) => setModalTitle(text)} />
                    <ModalTitle>내용</ModalTitle>
                    <ContentInput value={modalContent} onChangeText={(text) => setModalContent(text)} />
                    <ModalBtn onPress={()=>setIsOpenModal(false)} title='취소'>
                        <CancleBtn>취소</CancleBtn>
                    </ModalBtn>
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
    background-color: #22AFFC;
    width: 80%;
    height: 70%;
    padding: 20px;
    justify-content: space-between;
    border-radius: 5px;
`
const ModalTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-top: 20px;
`
const TitleInput = styled.TextInput`
    background-color: white;
    border-radius: 5px;
    padding: 10px;
`
const ContentInput = styled(TitleInput)`
    min-height: 100px;
`
const ModalBtn = styled.TouchableOpacity`
`
const CancleBtn = styled.Text`
    font-size: 20px;
    color: red;
`