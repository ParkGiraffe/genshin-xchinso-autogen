import styled from "styled-components";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  cursor: pointer;
  /* background-color: blue; */
`;

const ChecklistSpacer = styled.div`
  height: 10px;
`;

const CheckboxInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none; // 기본 체크박스 스타일 제거
  margin-left: 0px; // 기본으로 설정된 마진 제거
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #efecec;
  border-radius: 2px;
  border: none; // 테두리 색도 파란색으로

  // 체크박스가 선택되었을 때의 스타일
  &:checked {
    background-color: blue; // 배경색을 파란색으로
    /* border: 2px solid blue; // 테두리 색도 파란색으로 */
  }

  &:checked:after {
    content: "✔"; // 체크 표시를 추가
    color: white;
    display: block;
    text-align: center;
    font-size: 18px;
  }
`;

export { CheckboxInput, CheckboxLabel, ChecklistSpacer };
