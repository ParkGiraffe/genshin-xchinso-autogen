import { useState } from "react";
import { ChromePicker } from "react-color";
import { FormText, FormTextContainer } from "@/styles/Texts";
import { OneLineContainer } from "@/styles/Containers";

const TextColorPicker = (props) => {
  const { color, onChange } = props;
  const [showPicker, setShowPicker] = useState(false); // ChromePicker 활성화 여부

  const togglePicker = () => {
    setShowPicker(!showPicker); // ChromePicker 활성화/비활성화 토글
  };

  return (
    <OneLineContainer>
      <FormTextContainer>
        <FormText>텍스트 색상 바꾸기</FormText>
      </FormTextContainer>
      <div>
        <div
          onClick={togglePicker} // 클릭하면 ChromePicker 토글
          style={{
            backgroundColor: color,
            width: "80px",
            height: "40px",
            border: "2px solid #636363", // 바깥 테두리
            boxShadow: "inset 0 0 0 4px #EBEBEB", // 내부 테두리
            borderRadius: "8px", // 테두리 둥글게 처리 (원하는 경우)
            cursor: "pointer",
          }}
        ></div>
        {showPicker && (
          <div style={{ position: "absolute" }}>
            <ChromePicker color={color} onChange={(e) => onChange(e.hex)} />
          </div>
        )}
      </div>
    </OneLineContainer>
  );
};

export default TextColorPicker;
