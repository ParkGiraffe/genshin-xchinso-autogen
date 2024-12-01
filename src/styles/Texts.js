import styled from "styled-components";

const FormText = styled.text`
  font-size: 19px;
  font-weight: bold;
`;

const TopText = styled.text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const FormTextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ChecklistText = styled.text`
  font-size: 17px;
  font-weight: bold;
`;

const NoticeText = styled.text`
  font-size: 15px;
  color: grey;
  text-align: center;
`;

const NoticeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;

  .red_text {
    /* white-space: pre-line; */
    color: #ff0000;
  }
`;

export {
  FormText,
  FormTextContainer,
  TopText,
  ChecklistText,
  NoticeText,
  NoticeTextContainer,
};
