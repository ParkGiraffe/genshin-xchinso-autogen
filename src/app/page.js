"use client";

import { useState, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { TopText } from "@/styles/Texts";
import OneLineTextInput from "@/components/OneLineTextInput";
import OneLineDropdown from "@/components/OneLineDropdwon";
import Bio from "@/components/Bio";
import Checklist from "@/components/CheckList";
import { SubmitButton } from "@/styles/Buttons";
import { SectionDivder } from "@/styles/Containers";
import MultiLineTextInput from "@/components/MultiLineTextInput";
import YNCheck from "@/components/YNCheck";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: cyan;
  padding: 20px;
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
  const [playType, setPlayType] = useState("");
  const [bias, setBias] = useState("");

  // X 정보
  const [xType, setXType] = useState(""); // 트위터 활동
  const [tendency, setTendency] = useState(""); // 덕질 성향
  const [trap, setTrap] = useState(""); // 지뢰
  const [genre, setGenre] = useState(""); // 타장르
  const [farewell, setFarewell] = useState(""); // 이별
  const [comment, setComment] = useState(""); // 코멘트

  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
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
        <SectionDivder />
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
            pickList={["남자", "여자", "비공개"]}
            onChange={(e) => setGender(e.target.value)}
          />
          <OneLineDropdown
            placeholder={"연령대"}
            value={age}
            pickList={["성인", "미성년자", "비공개"]}
            onChange={(e) => setAge(e.target.value)}
          />
          <SectionDivder />
          <TopText>원신 정보</TopText>
          <OneLineTextInput
            placeholder="UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
          <OneLineDropdown
            placeholder={"서버"}
            value={server}
            pickList={["Asia", "America", "Europe"]}
            onChange={(e) => setServer(e.target.value)}
          />
          <Checklist
            elements={[
              "스크린샷",
              "나선비경",
              "스토리",
              "다인모드",
              "월드탐색",
              "캐릭육성",
            ]}
            onChecked={(e) => setPlayType(e)}
          />
          <OneLineTextInput
            placeholder="최애캐"
            value={bias}
            onChange={(e) => setBias(e.target.value)}
          />
          <SectionDivder />
          <TopText>X 정보</TopText>
          <Checklist
            placeholder="트위터 활동"
            elements={["RT", "마음", "일상/썰", "그림", "탐라대화", "구독"]}
            onChecked={(e) => setXType(e)}
          />
          <Checklist
            placeholder="덕질 성향"
            elements={["HL", "GL", "BL", "Non-CP", "드림"]}
            onChecked={(e) => setTendency(e)}
          />
          <MultiLineTextInput
            placeholder="지뢰"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
          />
          <YNCheck
            placeholder="타장르"
            onChange={(e) => {
              setGenre(e);
              // console.log(e)
            }}
          />
          <OneLineDropdown
            placeholder={"이별"}
            value={server}
            pickList={["언팔로우", "블언블", "블락", "트정X"]}
            onChange={(e) => setFarewell(e.target.value)}
          />
          <MultiLineTextInput
            placeholder="코멘트"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <SubmitButton type="submit">표 생성</SubmitButton>
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
