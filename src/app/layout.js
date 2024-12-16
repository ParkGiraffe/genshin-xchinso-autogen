import StyledComponentsRegistry from "../../lib/registry";

export const metadata = {
  title: "공용 X친소 제작기",
  description:
    "호요버스 게임(원신, 붕괴)과 명조, 니케를 비롯한 다양한 게임의 X친소 제작 사이트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
