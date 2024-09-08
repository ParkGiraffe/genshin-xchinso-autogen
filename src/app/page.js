"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { TopText } from "@/styles/Texts";
import ThreeCheckBox from "@/components/ThreeCheckBox";
import OneLineTextInput from "@/components/OneLineTextInput";
import OneLineDropdown from "@/components/OneLineDropdwon";
import Bio from "@/components/Bio";

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

export default function Home() {
  const [bio, setBio] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [nick, setNick] = useState("");
  const [xId, setXId] = useState("");
  const [gender, setGender] = useState("미설정");
  const [age, setAge] = useState("미설정");

  // 원신 정보
  const [uid, setUid] = useState("");
  const [server, setServer] = useState("");

  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [selectedServer, setSelectedServer] = useState({
    Asia: false,
    America: false,
    Europe: false,
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
        <TopText>작성자 정보</TopText>
        <Bio
          imageUpload={imageUpload}
          onUpload={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <Form onSubmit={handleSubmit}>
          <OneLineTextInput
            placeholder="닉네임"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
          <OneLineTextInput
            placeholder="X ID"
            value={xId}
            onChange={(e) => setXId(e.target.value)}
          />
          <OneLineDropdown
            placeholder={"성별"}
            value={gender}
            value1Name={"남자"}
            value2Name={"여자"}
            value3Name={"비공개"}
            onChange={(e) => setGender(e.target.value)}
          />
          <OneLineDropdown
            placeholder={"연령대"}
            value={age}
            value1Name={"성인"}
            value2Name={"미성년자"}
            value3Name={"비공개"}
            onChange={(e) => setAge(e.target.value)}
          />
          <TopText>원신 정보</TopText>
          <OneLineTextInput
            placeholder="X ID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
          <OneLineDropdown
            placeholder={"서버"}
            value={server}
            value1Name={"Asia"}
            value2Name={"America"}
            value3Name={"Europe"}
            onChange={(e) => setServer(e.target.value)}
          />

          <TextArea
            placeholder="자기소개"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            required
          />
          {/* <OneLineInput
            type="text"
            placeholder="관심사 (쉼표로 구분)"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
          <OneLineInput
            type="text"
            placeholder="취미 (쉼표로 구분)"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            required
          /> */}
          <ThreeCheckBox
            checked1={selectedServer.Asia}
            checked1Name={"Asia"}
            checked2={selectedServer.America}
            checked2Name={"America"}
            checked3={selectedServer.Europe}
            checked3Name={"Europe"}
            onClickBox={handleServerChange}
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
