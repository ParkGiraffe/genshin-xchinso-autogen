import styled from "styled-components";

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DownloadButton = styled(Button)`
  background-color: #28a745;
`;

export { Button, DownloadButton };
