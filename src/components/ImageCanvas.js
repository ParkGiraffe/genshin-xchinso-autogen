import { useEffect, useRef } from "react";

const ImageCanvas = ({
  backImage,
  bio,
  nick,
  xId,
  gender,
  age,
  uid,
  server,
  bias,
  comment,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = backImage;

    const bioImg = new Image();
    bioImg.src = bio;

    img.onload = () => {
      // 캔버스 크기 설정 (1920 x 1080)
      canvas.width = 1920;
      canvas.height = 1080;

      // 가로로 꽉 차게, 세로는 비율에 맞춰 자동 조정
      const ratio = canvas.width / img.width;
      const newHeight = img.height * ratio; // 이미지의 세로 길이를 가로 비율에 맞춰 조정

      // 이미지 그리기 (가로로 꽉 채우고 세로는 잘리게)
      ctx.drawImage(
        img,
        0,
        (canvas.height - newHeight) / 2,
        canvas.width,
        newHeight
      );

      ctx.drawImage(bioImg, 90, 80, 350, 350);
      // 텍스트 스타일 설정
      const scaleFactor = canvas.width / 1920;
      const fontDefaultSize = 45;
      ctx.font = `${fontDefaultSize * scaleFactor}px Arial`; // 기본 텍스트 크기를 비율에 맞춤
      ctx.fillStyle = "#FFFFFF"; // 텍스트 색상
      ctx.textAlign = "left"; // 텍스트 정렬

      // 텍스트 출력 위치 (이미지 위의 특정 위치에 텍스트 추가)
      const firstColStartXPoint = 90;
      const firstColStartYPoint = 560;
      const margin = 150;
      // ctx.fillText(`닉네임 (X id)`, firstColStartXPoint, firstColStartYPoint);
      // ctx.fillText(
      //   `${nick} (@${xId})`,
      //   firstColStartXPoint,
      //   firstColStartYPoint + margin
      // );

      drawTextBox(
        ctx,
        `닉네임 (X id)\n${nick} (@${xId})`,
        firstColStartXPoint,
        firstColStartYPoint
      );

      drawTextBox(
        ctx,
        `성별\n${gender}`,
        firstColStartXPoint,
        firstColStartYPoint + margin
      );

      drawTextBox(
        ctx,
        `연령대\n${age}`,
        firstColStartXPoint,
        firstColStartYPoint + margin * 2
      );

      function drawTextBox(ctx, text, x, y, fieldWidth = 500, spacing = 1) {
        let count = 0;
        let line = "";
        let fontSize = parseFloat(ctx.font);
        let currentY = y;
        ctx.textBaseline = "top";
        for (let i = 0; i < text.length; i++) {
          let tempLine = line + text[i];
          let tempWidth = ctx.measureText(tempLine).width;

          if (tempWidth < fieldWidth && text[i] != "\n") {
            line = tempLine;
          } else {
            if (count === 0) {
              ctx.font = `bold ${fontDefaultSize * scaleFactor}px Arial`;
              ctx.fillText(line, x, currentY);
              ctx.font = `${fontDefaultSize * scaleFactor}px Arial`;
            } else {
              ctx.fillText(line, x, currentY);
            }
            if (text[i] != "\n") line = text[i];
            else line = "";
            currentY += fontSize * spacing;
          }
        }
        ctx.fillText(line, x, currentY);
        ctx.rect(x, y, fieldWidth, currentY - y + fontSize * spacing);
        // ctx.stroke();
      }
    };
  }, [backImage, bio, nick, xId, uid, server, bias, comment]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%", // 화면 크기에 맞게 조정
          maxWidth: "1920px", // 최대 크기 제한
          height: "auto", // 비율 유지하며 높이 조정
        }}
      />
    </div>
  );
};

export default ImageCanvas;
