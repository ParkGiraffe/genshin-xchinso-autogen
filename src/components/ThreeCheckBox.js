import styled from "styled-components";

const CheckboxGroup = styled.div`
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-right: 1rem;
`;

const ThreeCheckBox = (props) => {
  const {
    checked1,
    checked1Name,
    checked2,
    checked2Name,
    checked3,
    checked3Name,
    onClickBox,
  } = props;

  return (
    <CheckboxGroup>
      <CheckboxLabel>
        <input
          type="checkbox"
          name={checked1Name}
          checked={checked1}
          onChange={onClickBox}
        />
        {checked1Name}
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          name={checked2Name}
          checked={checked2}
          onChange={onClickBox}
        />
        {checked2Name}
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          name={checked3Name}
          checked={checked3}
          onChange={onClickBox}
        />
        {checked3Name}
      </CheckboxLabel>
    </CheckboxGroup>
  );
};

export default ThreeCheckBox;
