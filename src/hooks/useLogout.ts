import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router";

const useLogout = (cb?: () => void) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    if (cb) cb();
  };

  return { handleLogout };
};

export default useLogout;
