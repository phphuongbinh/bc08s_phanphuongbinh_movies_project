import { userLocalStorage } from "../services/localServices";

const PrivateRoute = ({ children }) => {
  let user = userLocalStorage.get();
  console.log(user);
  if (user?.maLoaiNguoiDung === "QuanTri") {
    return children;
  }
  window.location.href = "/login";
};

export default PrivateRoute;
