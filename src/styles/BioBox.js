import styled from "styled-components";

const AddPhotoBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
  background-color: #d9d9d9;
  border-radius: 180px;
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

const AddPhotoButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 250px;
  color: black;
  background-color: #e9dedf;
  border-radius: 15px;
  margin-top: 10px;
`;

export { AddPhotoBox, AddPhotoInput, WatchPhotoBox, PhotoImage };
