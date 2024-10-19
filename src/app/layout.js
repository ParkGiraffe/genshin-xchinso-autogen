import StyledComponentsRegistry from "../../lib/registry";
import "./global.css";

export const metadata = {
  title: "원신 자기소개 표 생성기",
  description:
    "원신 유저들의 트친소, x친소 자기소개 표로 사용되는 이미지를 자동으로 생성해주는 사이트입니다.",
  verification: {
    google: "wGojUcGGwbwxOatwNRWiei1Bg6Xtq_f68Tc9XPAHLe0",
  }
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
