import { FormText, FormTextContainer } from "@/styles/Texts";
import { OneLineContainer } from "@/styles/Containers";
import styled from "styled-components";
import { useState } from "react";
import { Select, SelectContainer } from "@/styles/Inputs";

const OneLineDropdown = (props) => {
  const {
    placeholder,
    value,
    value1Name,
    value2Name,
    value3Name,
    onChange,
  } = props;

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
          <option value={value1Name}>{value1Name}</option>
          <option value={value2Name}>{value2Name}</option>
          <option value={value3Name}>{value3Name}</option>
        </Select>
        <Arrow>▼</Arrow>
      </SelectContainer>
    </OneLineContainer>
  );
};

export default OneLineDropdown;

const Spacer = styled.div`
  width: 2px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;
