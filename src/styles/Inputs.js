import styled from "styled-components";

const TextInput = styled.input`
  width: 225px;
  height: 35px;
  border: none;
  padding-block: 0px; // input 자체 padding 제거
  padding-inline: 0px; // input 자체 padding 제거
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

export { TextInput, Select, SelectContainer };
