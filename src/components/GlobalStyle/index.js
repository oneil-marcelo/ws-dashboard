import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body{
   background:#fafafa;
   font: 14px 'Roboto', sans-serif;
 }

 button {
   cursor: pointer;
   border: 0;
 }

 #root {
   width: 100%;
   height: 100%;
 }


`;
