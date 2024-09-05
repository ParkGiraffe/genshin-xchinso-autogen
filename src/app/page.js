"use client";

import { useState, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import ThreeCheckBox from "@/components/ThreeCheckBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-color: #f0f0f0; */
`;

const FormContainer = styled.div`
  background-color: cyan;
  /* border-radius: 10px; */
  padding: 20px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 80%;
`;

const Form = styled.form`
  /* background-color: pink; */
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  /* background-color: pink; */
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DownloadButton = styled(Button)`
  margin-top: 1rem;
  background-color: #28a745;
`;

const TitleText = styled.h3`
  font-size: 19px;
`;

export default function Home() {
  const [twitterId, setTwitterId] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [selectedServer, setSelectedServer] = useState({
    Asia: false,
    America: false,
    Europe: false,
  });
  const [selectedGender, setSelectedGender] = useState({
    male: false,
    female: false,
    hide: false,
  });
  const [selectedAge, setSelectedAge] = useState({
    adult: false,
    nonAdult: false,
    hide: false,
  });
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  const handleServerChange = (e) => {
    setSelectedServer({
      ...selectedServer,
      [e.target.name]: e.target.checked,
    });
  };

  const handleGenderChange = (e) => {
    setSelectedGender({
      ...selectedGender,
      [e.target.name]: e.target.checked,
    });
  };
  const handleAgeChange = (e) => {
    setSelectedAge({
      ...selectedAge,
      [e.target.name]: e.target.checked,
    });
  };

  const handleDownload = async () => {
    if (tableRef.current) {
      const canvas = await html2canvas(tableRef.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "twitter-profile.png";
      link.click();
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>트친소 표 생성기</h1>
        <TitleText>작성자 정보</TitleText>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이름"
            value={twitterId}
            onChange={(e) => setTwitterId(e.target.value)}
            required
          />
          <TextArea
            placeholder="자기소개"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            required
          />
          <Input
            type="text"
            placeholder="관심사 (쉼표로 구분)"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="취미 (쉼표로 구분)"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            required
          />
          <ThreeCheckBox
            checked1={selectedServer.Asia}
            checked1Name={"Asia"}
            checked2={selectedServer.America}
            checked2Name={"America"}
            checked3={selectedServer.Europe}
            checked3Name={"Europe"}
            onClickBox={handleServerChange}
          />
          <ThreeCheckBox
            checked1={selectedGender.male}
            checked1Name={"남자"}
            checked2={selectedGender.female}
            checked2Name={"여자"}
            checked3={selectedGender.hide}
            checked3Name={"비공개"}
            onClickBox={handleGenderChange}
          />
          <ThreeCheckBox
            checked1={selectedAge.adult}
            checked1Name={"성인"}
            checked2={selectedAge.nonAdult}
            checked2Name={"미성년자"}
            checked3={selectedAge.hide}
            checked3Name={"비공개"}
            onClickBox={handleAgeChange}
          />
          <Button type="submit">표 생성</Button>
        </Form>

        {showTable && (
          <>
            <div ref={tableRef}>
              <Table>
                <tbody>
                  <tr>
                    <TableHeader>트위터 아이디</TableHeader>
                    <TableCell>@{twitterId}</TableCell>
                  </tr>
                  <tr>
                    <TableHeader>자기소개</TableHeader>
                    <TableCell>{bio}</TableCell>
                  </tr>
                  <tr>
                    <TableHeader>관심사</TableHeader>
                    <TableCell>{interests.split(",").join(", ")}</TableCell>
                  </tr>
                  <tr>
                    <TableHeader>취미</TableHeader>
                    <TableCell>{hobbies.split(",").join(", ")}</TableCell>
                  </tr>
                </tbody>
              </Table>
            </div>
            <DownloadButton onClick={handleDownload}>
              이미지로 저장
            </DownloadButton>
          </>
        )}
      </FormContainer>
    </Container>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 6rem; */
  min-height: 100vh;
  background-color: white;
`;
