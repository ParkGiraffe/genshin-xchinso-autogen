"use client";
import './global.css';

import { useState, useRef } from "react";

import html2canvas from "html2canvas";
import { NoticeText, TopText } from "@/styles/Texts";
import OneLineTextInput from "@/components/OneLineTextInput";
import OneLineDropdown from "@/components/OneLineDropdwon";
import Bio from "@/components/Bio";
import { Button, DownloadButton } from "@/styles/Buttons";
import { Form, FormContainer, Main, SectionDivder } from "@/styles/Containers";
import MultiLineTextInput from "@/components/MultiLineTextInput";
import YNCheck from "@/components/YNCheck";
import ImageCanvas from "@/components/ImageCanvasGenshin";
import Checklist from "@/components/Checklist";
import BackgroundImage from "@/components/BackgroundImage";
import ImageCanvasFHD from "@/components/ImageCanvasFHD";
import TextColorPicker from "@/components/TextColorPicker";

export default function Home() {
  const [bio, setBio] = useState(null);
  const [nick, setNick] = useState("");
  const [xId, setXId] = useState("");
  const [gender, setGender] = useState("미설정");
  const [age, setAge] = useState("미설정");

  // 원신 정보
  const [uid, setUid] = useState("");
  const [server, setServer] = useState("");
  const [playType, setPlayType] = useState("");
  const [bias, setBias] = useState("");
  const [biasImage, setBiasImage] = useState(null);

  // X 정보
  const [xType, setXType] = useState(""); // 트위터 활동
  const [tendency, setTendency] = useState(""); // 덕질 성향
  const [trap, setTrap] = useState(""); // 지뢰
  const [genre, setGenre] = useState(""); // 타장르
  const [farewell, setFarewell] = useState(""); // 이별
  const [comment, setComment] = useState(""); // 코멘트

  // 이미지
  const [backImage, setBackImage] = useState(null);
  const imageRef = useRef(null);

  const [color, setColor] = useState("#000080"); // 폰트 색상

  const [showFhd, setShowFhd] = useState(false);

  const toggleMake2d = () => {
    setShowFhd(true);
  };

  const handleDownload = () => {
    const element = imageRef.current;
    html2canvas(element, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "profile-overlay.png";
      link.click();
    });
  };

  return (
    <Main>
      <FormContainer>
        <SectionDivder />
        <TopText>작성자 정보</TopText>
        <Bio
          imageUpload={bio}
          onUpload={(event) => {
            setBio(URL.createObjectURL(event.target.files[0]));
          }}
        />
        <Form>
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
          <Bio
            placeholder={"최애캐 사진 넣기"}
            imageUpload={biasImage}
            onUpload={(event) => {
              setBiasImage(URL.createObjectURL(event.target.files[0]));
            }}
          />
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
            placeholder="플레이타입"
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
            }}
          />
          <Checklist
            placeholder="이별"
            elements={["언팔로우", "블언블", "블락", "트정X"]}
            onChecked={(e) => setFarewell(e)}
          />
          <MultiLineTextInput
            placeholder="코멘트"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <SectionDivder />
          <TopText>트친소 표 미리보기</TopText>
          <TextColorPicker color={color} onChange={(e) => setColor(e)} />
          <BackgroundImage
            imageUpload={backImage}
            onUpload={(event) => {
              setBackImage(URL.createObjectURL(event.target.files[0]));
            }}
          />
          <ImageCanvas
            backImage={backImage}
            bio={bio}
            nick={nick}
            xId={xId}
            gender={gender}
            age={age}
            uid={uid}
            server={server}
            bias={bias}
            biasImage={biasImage}
            comment={comment}
            xType={xType}
            tendency={tendency}
            genre={genre}
            farewell={farewell}
            trap={trap}
            playType={playType}
            color={color}
          />
          <NoticeText>
            <br />
            만약 프사와 최애캐 이미지가 안 뜨거나 순서가 반대로 보일 경우,
            <br />
            코멘트 부분을 살짝 수정하시면 이미지가 다시 뜹니다.
            <br />
            <br />
          </NoticeText>
          <Button type="button" onClick={toggleMake2d}>
            고화질 이미지 생성
          </Button>
          <div style={{ height: "30px" }} />
          <NoticeText>
            고화질 이미지 생성 버튼을 누르면 1920x1080 크기의 트친소표가
            출력됩니다. <br />
            그리고 다운로드 버튼이 활성화됩니다. <br />
            다운로드 버튼을 누르시면 트친소표가 다운로드됩니다.
            <br />
            <br />
            폰트는 Pretendard를 사용했습니다.
            <br />
            <br />
          </NoticeText>

          {showFhd && (
            <>
              <div style={{height: '10px'}}/>
              <DownloadButton type="button" onClick={handleDownload}>
                다운로드
              </DownloadButton>
              <NoticeText>
                <br />
                아이폰 Safari는 다운로드 버튼을 지원하지 않습니다.
                밑의 이미지를 꾹 눌러서, '사진 앱에 저장'하시면 됩니다.
              </NoticeText>
              <SectionDivder />
              <ImageCanvasFHD
                ref={imageRef}
                backImage={backImage}
                bio={bio}
                nick={nick}
                xId={xId}
                gender={gender}
                age={age}
                uid={uid}
                server={server}
                bias={bias}
                biasImage={biasImage}
                comment={comment}
                xType={xType}
                tendency={tendency}
                genre={genre}
                farewell={farewell}
                trap={trap}
                playType={playType}
                color={color}
              />
            </>
          )}
        </Form>
      </FormContainer>
    </Main>
  );
}
