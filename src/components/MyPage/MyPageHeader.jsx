import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styled from '@emotion/native';
import ProfileImg from '../../../assets/profile_default.jpg';
import { authService } from '../../firebase';

// 닉네임 수정
// const onSubmit = async (e) => {
//   e.preventDefault();
//   if (userName !== newDisplayName) {
//     await updateProfile(userObj, { displayName: newDisplayName });
//   }
// };

// // 사진 업로드 용 정의
// const [image, setImage] = useState('');
// const [imageUrl, setImageUrl] = useState('');

// // 이미지 변경
// const onImageChange = (event) => {
//   // file
//   const theFile = event.target.files[0];
//   const reader = new FileReader();
//   // file를 브라우저가 읽도록 data URL로 변경
//   reader.readAsDataURL(theFile);
//   reader.onloadend = (finished) => {
//     setImageUrl(finished.currentTarget.result);
//   };
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const imageRef = ref(storage, `image/${uuidv4()}`);
//   let downloadimage;
//   if (imageUrl) {
//     const imageResponse = await uploadString(imageRef, imageUrl, 'data_url');
//     downloadimage = await getDownloadURL(imageResponse.ref);
//   } else {
//     downloadimage = '';
//   }
//   console.log(downloadimage);

//   try {
//     await addDoc(
//       collection(db, 'posting'),
//       {
//         id: uuidv4(),
//         title: title,
//         image: downloadimage,
//         // user: userObj.displayName,
//         // uuid사용필요?
//         // creatorid: currentUser.uid,
//       },
//       previousPageHanlder()
//     );
//   } catch (err) {
//     alert(err);
//   }
// };

// const previousPageHanlder = async () => {
//   if (window.confirm('해당 게시글을 등록하시겠습니까?')) {
//     alert('등록되었습니다.');
//     navigate('/shopGuide');
//   } else {
//     return;
//   }
// };

export default function MyPageHeader() {
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newNickname ? newNickname : null,
        // photoURL: downloadUrl ? downlodaUrl : null,
      });
    }
  };
  console.log(authService);

  return (
    <PageHeader>
      <MyImage>
        <Image
          source={ProfileImg}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
          }}
        />
      </MyImage>
      <MyDb>
        <PageId>
          <MyId>닉네임</MyId>
        </PageId>
        {/* <MyButton> */}
        <IdButton>
          <LoginButtonId>닉네임 수정</LoginButtonId>
        </IdButton>
        <LogoutButton>
          <LoginButtonText>로그아웃</LoginButtonText>
        </LogoutButton>
        {/* </MyButton> */}
      </MyDb>
    </PageHeader>
  );
}

const PageHeader = styled.View`
  flex-wrap: wrap;
  height: 200px;
`;
const MyDb = styled.View`
  margin-top: 60px;
`;
const MyImage = styled.View`
  margin: 40px;
`;

const PageId = styled.Text``;
const MyId = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;
const IdButton = styled.TouchableOpacity`
  justify-content: center;
  width: 110px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #22affc;
  border-radius: 10px;
`;
const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  width: 110px;
  height: 40px;
  margin-top: 10px;
  background-color: #22affc;
  border-radius: 10px;
`;
const LoginButtonId = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
`;
const LoginButtonText = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
`;
