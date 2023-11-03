import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Main from "./layout/Main";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import CineTicket from "./pages/CineTicket/CineTicket";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivateRoute from "./layout/PrivateRoute";
import Admin from "./layout/Admin";
import UserPage from "./pages/UserPage/UserPage";
import MovieAdmin from "./pages/MovieAdmin/MovieAdmin";
import Register from "./pages/Register/Register";

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
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path="" element={<UserPage />}></Route>
          <Route path="/admin/movies" element={<MovieAdmin />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
