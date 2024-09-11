import { TextArea } from "@/styles/Inputs";
import { FormText, FormTextContainer } from "@/styles/Texts";
import { MultiLineContainer } from "@/styles/Containers";

const MultiLineTextInput = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <MultiLineContainer>
      <FormTextContainer>
        <FormText>{placeholder}</FormText>
      </FormTextContainer>
      <TextArea type="text" value={value} onChange={onChange} required />
    </MultiLineContainer>
  );
};

export default MultiLineTextInput;
