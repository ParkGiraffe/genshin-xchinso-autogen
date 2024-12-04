import { FormText, FormTextContainer } from "@/styles/Texts";
import { OneLineContainer } from "@/styles/Containers";
import styled from "styled-components";
import { Select, SelectContainer } from "@/styles/Inputs";

const OneLineDropdown = (props) => {
  const { placeholder, value, pickList, onChange } = props;
  return (
    <OneLineContainer>
      <FormTextContainer>
        <FormText>{placeholder}</FormText>
      </FormTextContainer>
      <SelectContainer>
        <Select value={value} onChange={onChange}>
          <option value="" disabled>
            선택하세요
          </option>
          {pickList.map((element, idx) => (
            <option key={idx} value={element}>
              {element}
            </option>
          ))}
        </Select>
        <Arrow>▼</Arrow>
      </SelectContainer>
    </OneLineContainer>
  );
};

export default OneLineDropdown;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;
