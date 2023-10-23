import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Main from "./layout/Main";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import CineTicket from "./pages/CineTicket/CineTicket";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:maPhim" element={<DetailMovie />}></Route>
          <Route path="/cine-ticket" element={<CineTicket />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
