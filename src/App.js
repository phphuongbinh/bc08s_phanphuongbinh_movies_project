import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Main from "./layout/Main";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import CineTicket from "./pages/CineTicket/CineTicket";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Spinner />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:maPhim" element={<DetailMovie />}></Route>
          <Route
            path="/cine-ticket/:maLichChieu"
            element={<CineTicket />}
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
