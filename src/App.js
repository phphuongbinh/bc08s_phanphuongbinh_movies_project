import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Main from "./layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
