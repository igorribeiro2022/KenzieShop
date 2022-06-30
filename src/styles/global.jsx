import  {createGlobalStyle}  from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  :root {
   

    --gray-9: #868e96ac;
    --gray-4: #000000;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;

    --sucess: #3FE864;
    --negative: #e53838;
  }

  body {
    background-image: url("https://static.vecteezy.com/system/resources/previews/001/985/825/non_2x/light-gray-gradient-blur-template-vector.jpg");
    background-size: 120vw;
    background-attachment: fixed;
    background-position: center;
    color: var(--gray-4);
  }

  body::-webkit-scrollbar {
    width: 0px;
  }

  body, input, button, h1, h2, h3, h4, h5, h6, p {
    font-family: 'Lato', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media (max-width:1100px) {
    body {
      background-size: 200vw;
    }
  }
`;
export default GlobalStyle;