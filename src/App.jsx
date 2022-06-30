import Router from "./Routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router/>
      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
