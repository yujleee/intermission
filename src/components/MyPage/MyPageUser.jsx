import * as ImagePicker from 'expo-image-picker';
import { storage } from '../common/firebase';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// 이미지 피커
const [pickedImg, setPickedImg] = useState('');
const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

const pickImage = async () => {
  if (!status?.granted) {
    const permissions = await requestPermission();
    if (!permissions.granted) {
      return null;
    }
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    aspect: [4, 3],
    quality: 1,
  });
  const [{ uri }] = result.assets;
  setPickedImg(uri);
};

//이미지 파이어베이스 업로드
const uploadImage = async () => {
  if (pickedImg) {
    const response = await fetch(pickedImg);
    const blobFile = await response.blob();
    const imageRef = ref(storage, `image/${uuidv4()}`);
    if (blobFile) {
      const imageResponse = await uploadBytes(imageRef, blobFile);
      const downloadUrl = await getDownloadURL(imageResponse.ref);
      setPickedImg('');
      return downloadUrl;
    }
  }
};
