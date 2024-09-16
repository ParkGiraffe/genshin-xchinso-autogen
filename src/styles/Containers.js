import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OneLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  margin-bottom: 0.7em;

  /* background-color: pink; */
`;

const MultiLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 300px;
  margin-bottom: 9px;

  /* background-color: pink; */
`;

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-left: 2em;
  margin-top: 1em;
  margin-bottom: 1.3em;
  /* background-color: pink; */
`;

const SectionDivder = styled.div`
  height: 80px;
`;

export {
  Main,
  OneLineContainer,
  ChecklistContainer,
  SectionDivder,
  MultiLineContainer,
};
