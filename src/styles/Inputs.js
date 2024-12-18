import styled from "styled-components";

const TextInput = styled.input`
  padding-block: 0px; // input 자체 padding 제거
  padding-inline: 0px; // input 자체 padding 제거
  padding-left: 10px; // 텍스트의 왼쪽에 10px 여백 추가
  width: 215px; // padding-left와 총합 225가 되게 끔
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #efecec;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  appearance: none;
  padding-block: 0px; // input 자체 padding 제거
  padding-inline: 0px; // input 자체 padding 제거
  padding-left: 10px; // 텍스트의 왼쪽에 10px 여백 추가
  padding-right: 5px;
  width: 210px; // padding-left와 총합 225가 되게 끔
  height: 75px;
  resize: none;
  border: none;
  border-radius: 5px;
  background-color: #efecec;
  font-size: 15px;
`;

// 드롭다운
const SelectContainer = styled.div`
  position: relative;
  width: 225px;
  height: 35px;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 15px;
  background-color: #efecec;
  border: none;
  border-radius: 5px;
  appearance: none; // 기본 드롭다운 화살표 숨기기
  outline: none;
  cursor: pointer;
`;

export { TextInput, TextArea, Select, SelectContainer };
