import { TextInput } from "@/styles/Inputs";
import { FormText, FormTextContainer } from "@/styles/Texts";
import { OneLineContainer } from "@/styles/Containers";

const OneLineTextInput = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <OneLineContainer>
      <FormTextContainer>
        <FormText>{placeholder}</FormText>
      </FormTextContainer>
      {/* <Spacer /> */}
      <TextInput
        type="text"
        // placeholder='입력하세요'
        value={value}
        onChange={onChange}
        required
      />
    </OneLineContainer>
  );
};

export default OneLineTextInput;
