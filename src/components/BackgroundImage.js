import { FormText } from "@/styles/Texts";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const BackgroundImage = (props) => {
  const { imageUpload, onUpload } = props;
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
        <FormText>배경 사진 첨부하기</FormText>
      ) : (
        <WatchPhotoBox>
          <PhotoImage src={previewUrl} alt="미리보기 이미지" />
        </WatchPhotoBox>
      )}
    </AddPhotoBox>
  );
};

export default BackgroundImage;

const AddPhotoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px; // 9
  width: 320px; // 16
  background-color: #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;
`;

const AddPhotoInput = styled.input`
  display: none;
`;

const WatchPhotoBox = styled.div`
  height: 100%;
  width: 100%;
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
