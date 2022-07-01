import  {createGlobalStyle}  from "styled-components";

const lightTheme = {
  color: "#0e14e",
  backgroundColor: "rgb(0,0,0,0.2)",
  backgroundColor2: "rgb(255,255,255)",
  button: {
    textColor: "#D3D4E6",
    borderColor: "#151A69",
    backgroundColor: "#151A69",
  },
};

const darkTheme = {
  color: "#D3D4E6",
  backgroundColor: "rgb(0,0,0,0.9)",
  backgroundColor2: "rgb(255,255,255,0.1)",
  button: {
    textColor: "white",
    borderColor: "#151A69",
    backgroundColor: "#151A69",
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background-color 0.2s linear, color 0.2s linear;
    color: ${(props) => props.theme.color};
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
/*     background: url("https://static.vecteezy.com/system/resources/previews/001/985/825/non_2x/light-gray-gradient-blur-template-vector.jpg");
    background-size: 120vw;
    background-attachment: fixed;
    background-position: center;
 */    
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