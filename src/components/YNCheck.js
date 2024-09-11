import { FormTextContainer, FormText, ChecklistText } from "@/styles/Texts";
import { TextInput } from "@/styles/Inputs";
import {
  CheckboxInput,
  CheckboxLabel,
  ChecklistSpacer,
} from "@/styles/CheckBox";
import { ChecklistContainer } from "@/styles/Containers";
import React, { useState } from "react";
import styled from "styled-components";

// Styled Components 정의

export default function YNCheck(props) {
  const { onChange, placeholder } = props;
  const [bool, setBool] = useState(false);
  const [plusInfo, setPlusInfo] = useState("");
  const [title, setTitle] = useState("No");

  // let plusInfo = "";

  const handleClick = (bool, clickedText) => {
    setBool(bool);

    setTitle(clickedText);
    if (plusInfo.trim() !== "") {
      onChange(`${clickedText} (${plusInfo.trim()})`);
    } else {
      onChange(`${clickedText}`);
    }
  };

  const handleTyping = (e) => {
    const curText = e.target.value;
    setPlusInfo(curText);
    if (plusInfo.trim() !== "") {
      onChange(`${title} (${curText})`);
    } else {
      onChange(`${title}`);
    }
  };

  return (
    <ChecklistContainer>
      <FormTextContainer>
        <FormText>{placeholder}</FormText>
      </FormTextContainer>
      <ChecklistSpacer />

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={!bool}
          onChange={(_) => handleClick(false, "No")}
        />
        <ChecklistText>No</ChecklistText>
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={bool}
          onChange={(_) => handleClick(true, "Yes")}
        />
        <ChecklistText>Yes</ChecklistText>
      </CheckboxLabel>
      <CustomTextInput type="text" value={plusInfo} onChange={handleTyping} />
    </ChecklistContainer>
  );
}
const CustomTextInput = styled(TextInput)`
  width: 275px;
  /* padding-left: ; */
`;
