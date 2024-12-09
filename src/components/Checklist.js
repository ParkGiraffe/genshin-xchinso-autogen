import { FormTextContainer, FormText, ChecklistText } from "@/styles/Texts";
import {
  CheckboxInput,
  CheckboxLabel,
  ChecklistSpacer,
} from "@/styles/CheckBox";
import { ChecklistContainer } from "@/styles/Containers";
import React, { useState } from "react";

export default function Checklist(props) {
  const { elements, onChecked, placeholder } = props;
  const [checkedList, setCheckedList] = useState(
    new Array(elements.length).fill(false)
  );

  const handleChange = (e, idx) => {
    const { checked } = e.target;
    const newCheckedList = [...checkedList];
    newCheckedList[idx] = checked;
    setCheckedList(newCheckedList);
    let newStr = "";

    elements.forEach((e, idx) => {
      if (newCheckedList[idx] === true) {
        newStr += e + " | ";
      }
    });

    onChecked(newStr.slice(0, -3));
  };

  return (
    <ChecklistContainer>
      <FormTextContainer>
        <FormText>{placeholder}</FormText>
      </FormTextContainer>
      <ChecklistSpacer />
      {elements.map((element, idx) => (
        <CheckboxLabel key={idx}>
          <CheckboxInput
            type="checkbox"
            checked={checkedList[idx]}
            onChange={(e) => handleChange(e, idx)}
          />
          <ChecklistText>{element}</ChecklistText>
        </CheckboxLabel>
      ))}
    </ChecklistContainer>
  );
}
