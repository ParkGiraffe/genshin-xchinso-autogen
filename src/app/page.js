"use client";

import { useState, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

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

const CheckboxGroup = styled.div`
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-right: 1rem;
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
  const [twitterId, setTwitterId] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    Asia: false,
    America: false,
    Europe: false,
  });
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  const handleCheckboxChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
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
          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="Asia"
                checked={selectedOptions.Asia}
                onChange={handleCheckboxChange}
              />
              Asia
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="America"
                checked={selectedOptions.America}
                onChange={handleCheckboxChange}
              />
              America
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="Europe"
                checked={selectedOptions.Europe}
                onChange={handleCheckboxChange}
              />
              Europe
            </CheckboxLabel>
          </CheckboxGroup>
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
