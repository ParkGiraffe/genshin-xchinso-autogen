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
  playType,
  bias,
  biasImage,
  comment,
  xType,
  tendency,
  genre,
  farewell,
  trap,
  color,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = backImage || "/image1.png";

    const bioImg = new Image();
    bioImg.src = bio || "/bio.png";

    const biasImg = new Image();
    biasImg.src = biasImage || '/image2.png';

    img.onload = () => {
      // 캔버스 크기 설정 (1920 x 1080)
      canvas.width = 1920;
      canvas.height = 1080;

      // 배경 이미지 비율 조정 (가로로 꽉 채우고, 세로는 잘리게)
      const ratio = canvas.width / img.width;
      const newHeight = img.height * ratio;

      ctx.drawImage(
        img,
        0,
        (canvas.height - newHeight) / 2,
        canvas.width,
        newHeight
      );

      // 불투명도 80%인 흰색 사각형 그리기
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fillRect(40, 30, canvas.width - 80, canvas.height - 60);

      // 텍스트 스타일 설정
      const scaleFactor = canvas.width / 1920;
      const fontDefaultSize = 35;
      ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;
      ctx.fillStyle = color; // 텍스트 색상
      ctx.textAlign = "left"; // 텍스트 정렬

      // 텍스트 출력 위치
      const firstColStartXPoint = 90;
      const firstColStartYPoint = 550;
      const secondColStartXPoint = 700;
      const secondColStartYPoint = 80;
      const thirdColStartXPoint = 1290;
      // const thirdColStartYPoint = 80;
      const titleMargin = 120;
      const infoStartYPoint = secondColStartYPoint + titleMargin;
      const margin = 175;

      const firstColDraw = () => {
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
      };

      const secondColDraw = () => {
        ctx.font = `bold ${60 * scaleFactor}px Pretendard`;
        ctx.fillText("X 정보", secondColStartXPoint, secondColStartYPoint);
        ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;

        drawTextBox(
          ctx,
          `트위터 활동\n${xType}`,
          secondColStartXPoint,
          infoStartYPoint
        );

        drawTextBox(
          ctx,
          `덕질 성향\n${tendency}`,
          secondColStartXPoint,
          infoStartYPoint + margin
        );

        drawTextBox(
          ctx,
          `타장르\n${genre}`,
          secondColStartXPoint,
          infoStartYPoint + margin * 2
        );

        drawTextBox(
          ctx,
          `이별\n${farewell}`,
          secondColStartXPoint,
          infoStartYPoint + margin * 3
        );

        drawTextBox(
          ctx,
          `지뢰\n${trap}`,
          secondColStartXPoint,
          infoStartYPoint + margin * 4
        );
      };

      const thirdColDraw = () => {
        ctx.font = `bold ${60 * scaleFactor}px Pretendard`;
        ctx.fillText("원신 정보", thirdColStartXPoint, secondColStartYPoint);
        ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;

        drawTextBox(
          ctx,
          `UID / 서버\n${uid}/${server}`,
          thirdColStartXPoint,
          infoStartYPoint
        );

        drawTextBox(
          ctx,
          `플레이타입\n${playType}`,
          thirdColStartXPoint,
          infoStartYPoint + margin
        );

        drawTextBox(
          ctx,
          `최애캐\n${bias}`,
          thirdColStartXPoint,
          infoStartYPoint + margin * 2 + 30
        );

        ctx.font = `bold ${60 * scaleFactor}px Pretendard`;
        ctx.fillText(
          "코멘트",
          thirdColStartXPoint,
          secondColStartYPoint + titleMargin * 5.5
        );
        ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;

        drawTextBox(
          ctx,
          `${comment}`,
          thirdColStartXPoint,
          secondColStartYPoint + titleMargin * 5.5 + margin / 2,
          510,
          1,
          false
        );
      };

      firstColDraw();
      secondColDraw();
      thirdColDraw();

      function drawTextBox(
        ctx,
        text,
        x,
        y,
        fieldWidth = 540,
        spacing = 1.05,
        isBold = true
      ) {
        let count = 0;
        let line = "";
        let fontSize = parseFloat(ctx.font);
        let currentY = y;
        ctx.textBaseline = "top";
        for (let i = 0; i < text.length; i++) {
          let tempLine = line + text[i];
          let tempWidth = ctx.measureText(tempLine).width;

          if (tempWidth < fieldWidth && text[i] !== "\n") {
            line = tempLine;
          } else {
            if (count === 0 && isBold) {
              ctx.font = `bold ${fontDefaultSize * scaleFactor}px Pretendard`;
              ctx.fillText(line, x, currentY);
              ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;
              count++;
            } else {
              ctx.fillText(line, x, currentY);
            }
            if (text[i] !== "\n") line = text[i];
            else line = "";
            currentY += fontSize * spacing;
          }
        }
        ctx.fillText(line, x, currentY);
        ctx.rect(x, y, fieldWidth, currentY - y + fontSize * spacing);
      }

      // bio 이미지 비율 유지하며 자르기
      bioImg.onload = () => {
        const imgWidth = bioImg.width;
        const imgHeight = bioImg.height;

        const imgRatio = imgWidth / imgHeight;
        const boxSize = 420; // 최종적으로 출력할 크기

        let newWidth, newHeight, cropX, cropY;

        if (imgRatio > 1) {
          // 이미지가 가로로 긴 경우
          newHeight = boxSize;
          newWidth = imgRatio * boxSize;
          cropX = (imgWidth - imgHeight) / 2;
          cropY = 0;
        } else {
          // 이미지가 세로로 긴 경우
          newWidth = boxSize;
          newHeight = boxSize / imgRatio;
          cropX = 0;
          cropY = (imgHeight - imgWidth) / 2;
        }

        // bio 이미지를 동그랗게 그리기
        const centerX = 90 + boxSize / 2;
        const centerY = 80 + boxSize / 2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, boxSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(
          bioImg,
          cropX,
          cropY,
          imgWidth - cropX * 2,
          imgHeight - cropY * 2,
          90,
          80,
          boxSize,
          boxSize
        );
        ctx.restore();

        // 3px 테두리 추가
        ctx.beginPath();
        ctx.arc(centerX, centerY, boxSize / 2, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
      };

      // bio 이미지 비율 유지하며 자르기
      biasImg.onload = () => {
        const imgWidth = biasImg.width;
        const imgHeight = biasImg.height;

        const imgRatio = imgWidth / imgHeight;
        const boxSize = 250; // 최종적으로 출력할 크기

        let newWidth, newHeight, cropX, cropY;

        if (imgRatio > 1) {
          // 이미지가 가로로 긴 경우
          newHeight = boxSize;
          newWidth = imgRatio * boxSize;
          cropX = (imgWidth - imgHeight) / 2;
          cropY = 0;
        } else {
          // 이미지가 세로로 긴 경우
          newWidth = boxSize;
          newHeight = boxSize / imgRatio;
          cropX = 0;
          cropY = (imgHeight - imgWidth) / 2;
        }

        // bio 이미지를 동그랗게 그리기
        let x = 360;
        let y = 275;
        const centerX = x + boxSize / 2;
        const centerY = y + boxSize / 2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, boxSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(
          biasImg,
          cropX,
          cropY,
          imgWidth - cropX * 2,
          imgHeight - cropY * 2,
          x,
          y,
          boxSize,
          boxSize
        );
        ctx.restore();

        // 3px 테두리 추가
        ctx.beginPath();
        ctx.arc(centerX, centerY, boxSize / 2, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
      };
    };
  }, [
    backImage,
    bio,
    nick,
    xId,
    gender,
    age,
    uid,
    server,
    playType,
    bias,
    biasImage,
    comment,
    xType,
    tendency,
    genre,
    farewell,
    trap,
    color,
  ]);

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
          width: "100%", // 화면에 맞춰 유연하게 조정
          height: "auto", // 비율 유지
          maxWidth: "100%", // 모바일에서도 화면 크기에 맞게 조정
        }}
      />
    </div>
  );
};

export default ImageCanvas;
