import { FormText } from "@/styles/Texts";
import { useState, useRef, useEffect } from "react";
import {
  AddPhotoBox,
  AddPhotoInput,
  WatchPhotoBox,
  PhotoImage,
} from "@/styles/BioBox";

const Bio = (props) => {
  const { imageUpload, onUpload, placeholder = "프로필 사진 첨부하기" } = props;
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileRef = useRef(null);
  const handleClick = () => {
    fileRef?.current?.click();
  };

  useEffect(() => {
    if (imageUpload) {
      // const url = URL.createObjectURL(imageUpload);
      setPreviewUrl(imageUpload);
      // onUpload(url);
      return () => URL.revokeObjectURL(imageUpload);
    }
  }, [imageUpload]);

  return (
    <AddPhotoBox onClick={handleClick}>
      <AddPhotoInput ref={fileRef} type="file" onChange={onUpload} />
      {!imageUpload ? (
        <FormText>{placeholder}</FormText>
      ) : (
        <WatchPhotoBox>
          <PhotoImage src={previewUrl} alt="미리보기 이미지" />
        </WatchPhotoBox>
      )}
    </AddPhotoBox>
  );
};

export default Bio;
