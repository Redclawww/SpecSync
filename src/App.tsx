import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Login } from "./screens/Login";
import { RecoilRoot } from "recoil";
import { History } from "./screens/History";
import SignUpPage from "./components/Sign-up";
import SignInPage from "./components/Sign-in";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />     
        </Routes>       
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
