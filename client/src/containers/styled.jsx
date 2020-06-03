import styled, { css } from "styled-components";
import {blue} from '../store.js';
import {useRecoilState} from 'recoil';
import React from 'react';

const myCSS = css`
  background: ${({ myColor }) => myColor || `black`};
`;

const MyComponent = styled("div")`
  ${myCSS};
`;


const Button = ()=>{
  const [bgcolor, setBgColor] = useRecoilState(blue);

  let styles = {
    'background': bgcolor,
    'color': ({ color }) => color || `black`,
    'fontSize': '1em',
    'margin': '1em',
    'padding': '0.25em 1em',
    'border': '2px solid palevioletred',
    'borderRadius': '3px'
  }

  return (
    <button style={styles} onClick={()=>setBgColor('blue')} />
  )


}

export { MyComponent, Button };
