import styled, { css } from "styled-components";

const myCSS = css`
  background: ${({ myColor }) => myColor || `black`};
`;

const MyComponent = styled("div")`
  ${myCSS};
`;
const Button = styled.button`
  background: ${({ bgColor }) => bgColor || `white`};
  color: ${({ color }) => color || `black`};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export { MyComponent, Button };
