import { createGlobalStyle } from 'styled-components';

export const color = {
  gray: '#424242',
  red: '#C62828',
  blue: '#1976D2',
  yellow: '#F9A825',
  green: '#2E7D32',
};

export const statusColor = {
  default: color.gray,
  delayed: color.red,
  current: color.blue,
  expected: color.yellow,
  done: color.green,
};

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body{
   font: 14px 'Roboto', sans-serif;
   background:#ECECEC;
 }

 button {
   cursor: pointer;
   border: 0;
 }

 #root {
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   align-content: flex-start;
 }


`;
