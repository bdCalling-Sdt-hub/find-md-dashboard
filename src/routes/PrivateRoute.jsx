/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"))

  if (user.userType === "ADMIN" ||  user.userType === "RECRUITER") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;