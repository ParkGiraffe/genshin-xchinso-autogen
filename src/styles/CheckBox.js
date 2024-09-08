import styled from "styled-components";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  cursor: pointer;
`;

const ChecklistSpacer = styled.div`
  height: 10px;
`

const CheckboxInput = styled.input`
  margin-left: 0px; // 기본으로 설정된 마진 제거
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export { CheckboxInput, CheckboxLabel,ChecklistSpacer };
