import { useEffect, useRef, forwardRef } from "react";

const ImageCanvas = forwardRef(
  (
    {
      bio,
      nick,
      xId,
      gender,
      age,
      uid,
      server,
      gameName,
      englishName,
      bias,
      comment,
      xType,
      tendency,
      genre,
      farewell,
      trap,
      color,
      isFhd,
    },
    ref // forwardRef로 전달된 ref
  ) => {
    const canvasRef = ref || useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = "/image1.png";

      const bioImg = new Image();
      bioImg.src = bio || "/bio.png";

      img.onload = () => {
        // 캔버스 크기 설정 (1920 x 1080)
        canvas.width = 1920;
        canvas.height = 1080;

        // 배경 이미지 비율 조정 (가로로 꽉 채우고, 세로는 잘리게)
        const ratio = canvas.width / img.width;
        const newHeight = img.height * ratio;

        // ctx.drawImage(
        //   img,
        //   0,
        //   (canvas.height - newHeight) / 2,
        //   canvas.width,
        //   newHeight
        // );

        // bio 이미지 비율 유지하며 자르기
        bioImg.onload = () => {
          const imgWidth = bioImg.width;
          const imgHeight = bioImg.height;

          const imgRatio = imgWidth / imgHeight;
          const boxSize = canvas.height; // 최종적으로 출력할 크기

          let newWidth, newHeight, cropX, cropY;

          if (imgRatio > 1) {
            // 이미지가 가로로 긴 경우
            newHeight = boxSize;
            newWidth = imgRatio * boxSize;
            cropX = (imgWidth - imgHeight) / imgRatio;
            cropY = 0;
          } else {
            // 이미지가 세로로 긴 경우
            newWidth = boxSize;
            newHeight = boxSize / imgRatio;
            cropX = 0;
            cropY = (imgHeight - imgWidth) / 2;
          }

          // bio 이미지를 동그랗게 그리기
          // const centerX = 90 + boxSize / 2;
          // const centerY = 80 + boxSize / 2;
          // ctx.save();
          // ctx.beginPath();
          // ctx.arc(centerX, centerY, boxSize / 2, 0, Math.PI * 2);
          // ctx.clip();
          ctx.drawImage(
            bioImg,
            cropX,
            cropY,
            imgWidth - cropX * 2,
            imgHeight - cropY * 2,
            -140,
            0,
            boxSize,
            boxSize
          );
          ctx.restore();

          // 불투명도 80%인 흰색 사각형 그리기
          let leftPadding = 800;
          ctx.fillStyle = "rgba(255, 255, 255, 1)";
          ctx.fillRect(leftPadding, 0, canvas.width, canvas.height);

          // 텍스트 스타일 설정
          const scaleFactor = canvas.width / 1920;
          const fontDefaultSize = 35;
          ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;
          ctx.fillStyle = color; // 텍스트 색상
          ctx.textAlign = "left"; // 텍스트 정렬

          // 텍스트 출력 위치
          const firstColStartXPoint = 850;
          const firstColStartYPoint = 320;
          const secondColStartXPoint = 1350;
          const secondColStartYPoint = 320;
          const thirdColStartXPoint = 1290;
          const thirdColStartYPoint = 80;
          const titleMargin = 120;

          const margin = 130;

          const firstColDraw = () => {
            drawTextBox(
              ctx,
              `✧ 닉네임 (X id)\n    ${nick}\n    @${xId}`,
              firstColStartXPoint,
              firstColStartYPoint
            );

            drawTextBox(
              ctx,
              `✧ 성별\n    ${gender}`,
              firstColStartXPoint,
              firstColStartYPoint + margin
            );

            drawTextBox(
              ctx,
              `✧ 연령대\n    ${age}`,
              firstColStartXPoint,
              firstColStartYPoint + margin * 2
            );

            drawTextBox(
              ctx,
              `✧ 트위터 활동\n    ${xType}`,
              firstColStartXPoint,
              firstColStartYPoint + margin * 3
            );

            drawTextBox(
              ctx,
              `✧ 덕질 성향\n    ${tendency}`,
              firstColStartXPoint,
              firstColStartYPoint + margin * 4
            );
            drawTextBox(
              ctx,
              `✧ 이별\n    ${farewell}`,
              firstColStartXPoint,
              firstColStartYPoint + margin * 5
            );
          };

          const secondColDraw = () => {
            drawTextBox(
              ctx,
              `✧ UID / 서버\n    ${uid}/${server}`,
              secondColStartXPoint,
              secondColStartYPoint
            );
            drawTextBox(
              ctx,
              `✧ 최애캐\n    ${bias}`,
              secondColStartXPoint,
              secondColStartYPoint + margin
            );

            drawTextBox(
              ctx,
              `✧ 타장르\n    ${genre}`,
              secondColStartXPoint,
              secondColStartYPoint + margin * 2
            );

            drawTextBox(
              ctx,
              `✧ 지뢰\n    ${trap}`,
              secondColStartXPoint,
              secondColStartYPoint + margin * 3
            );

            ctx.font = `bold ${fontDefaultSize * scaleFactor}px Pretendard`;
            ctx.fillText(
              "✧ 코멘트",
              secondColStartXPoint,
              secondColStartYPoint + margin * 4
            );
            ctx.font = `${fontDefaultSize * scaleFactor}px Pretendard`;

            drawTextBox(
              ctx,
              `${comment}`,
              secondColStartXPoint,
              secondColStartYPoint + margin * 4.3,
              510,
              1,
              false
            );
          };

          firstColDraw();
          secondColDraw();
          // thirdColDraw();

          ctx.fillStyle = "rgba(195, 195, 195, 1)";
          ctx.fillRect(leftPadding, 0, canvas.width, 265);

          ctx.fillStyle = "white"; // 텍스트 색상
          const gameNameStartYPoint = 90;
          ctx.font = `bold ${fontDefaultSize * scaleFactor}px Pretendard`;

          drawTextBox(
            ctx,
            `${gameName}`,
            firstColStartXPoint,
            gameNameStartYPoint
          );

          ctx.font = `bold ${120 * scaleFactor}px Pretendard`;
          ctx.fillText(`✧`, 1790, gameNameStartYPoint - 55);
          ctx.font = `bold ${80 * scaleFactor}px Pretendard`;
          ctx.fillText(`✧`, 1730, gameNameStartYPoint - 65);
          ctx.font = `bold ${115 * scaleFactor}px MaruBuriBold`;
          ctx.fillStyle = "#3e3e3e"; // 텍스트 색상
          ctx.fillText(
            `${englishName}`,
            firstColStartXPoint,
            gameNameStartYPoint + fontDefaultSize
          );
          console.log(ctx.font);

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
                  ctx.font = `bold ${
                    fontDefaultSize * scaleFactor
                  }px Pretendard`;
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
        };
      };
    }, [
      bio,
      nick,
      xId,
      gender,
      age,
      uid,
      server,
      bias,
      comment,
      xType,
      tendency,
      genre,
      farewell,
      trap,
      color,
      gameName,
      englishName,
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
          style={
            isFhd
              ? {
                  width: "1920px", // 화면 크기에 맞게 조정
                  maxWidth: "1920px", // 최대 크기 제한
                  height: "auto", // 비율 유지하며 높이 조정
                }
              : {
                  width: "100%", // 화면에 맞춰 유연하게 조정
                  height: "auto", // 비율 유지
                  maxWidth: "100%", // 모바일에서도 화면 크기에 맞게 조정
                }
          }
        />
      </div>
    );
  }
);

export default ImageCanvas;
