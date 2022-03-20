import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function AuthenticatedGuard(props: any) {
  const { children } = props;
  let location = useLocation();
  const { isAuthenticated } = useSelector((state: any) => state.app);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default AuthenticatedGuard;
