import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Routes";
import GlobalStyle from "./styles/global";
import { Slide } from 'react-toastify';
import { themes } from "./styles/global";
import { useContext } from "react";
import { ThemeContext } from "./Providers/theme";
import { ThemeProvider } from "styled-components";
import { StyledToastContainer } from "./pages/Dashboard/style";

function App() {
  
  const { currentTheme } = useContext(ThemeContext);
  
  return (
    <ThemeProvider theme={themes[currentTheme]} >
      <div>
        <GlobalStyle />
        <Router />
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
