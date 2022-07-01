import Router from "./Routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/global";
import { Slide } from 'react-toastify';
import { StyledToastContainer } from "./pages/Dashboard/style";

function App() {
  
  const themeLocal = localStorage.getItem("themeSite") || "light"
  const [currentTheme, setCurrentTheme] = useState(themeLocal);
  
  function getOpositeTheme() {

    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    localStorage.setItem("themeSite", currentTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={themes[currentTheme]} >
      <div>
        <GlobalStyle />
        <Router getOpositeTheme={getOpositeTheme}/>
        <StyledToastContainer
          theme={currentTheme}
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
