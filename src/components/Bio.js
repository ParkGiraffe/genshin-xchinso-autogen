import { FormText } from "@/styles/Texts";
import { useState, useRef, useEffect } from "react";
import {
  AddPhotoBox,
  AddPhotoInput,
  WatchPhotoBox,
  PhotoImage,
} from "@/styles/BioBox";

const Bio = (props) => {
  const { imageUpload, onUpload } = props;
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileRef = useRef(null);
  const handleClick = () => {
    fileRef?.current?.click();
  };

  useEffect(() => {
    if (imageUpload) {
      const url = URL.createObjectURL(imageUpload);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageUpload]);

  return (
    <AddPhotoBox onClick={handleClick}>
      <AddPhotoInput ref={fileRef} type="file" onChange={onUpload} />
      {!imageUpload ? (
        <FormText>프로필 사진 첨부하기</FormText>
      ) : (
        <WatchPhotoBox>
          <PhotoImage src={previewUrl} alt="미리보기 이미지" />
        </WatchPhotoBox>
      )}
    </AddPhotoBox>
  );
};

export default Bio;