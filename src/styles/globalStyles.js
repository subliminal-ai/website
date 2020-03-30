import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    height: 100%;  
    overflow-y: scroll; 
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  body {
    font-size: 12px;
    color: #353167;

     @media (min-width: 600px) {
      font-size: 16px;
    }

     @media (min-width: 900px) {
      font-size: 18px;
    }

      @media (min-width: 1200px) {
      font-size: 20px;
      }
  } 

  h1, h2, h3 ,h4, h5, h6 {
    color: #1f256d;
  }

  h1 { font-size: 1.912em; }
  h2 { font-size: 1.7em; }
  h3 { font-size: 1.471em; }
  h4 { font-size: 1.3em; }
  h5 { font-size: 1.243em; }
  h6 { font-size: 1.132em; }

  
`
