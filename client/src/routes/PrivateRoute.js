import React from "react";
import { useCookies } from "react-cookie";
import Auth from "../components/Auth";
const PrivateRoute = ({ children }) => {
  const [cookies, _] = useCookies(["access_token"]);
  if (!cookies) {
    return <Auth />;
  }

  return children;
};

export default PrivateRoute;
