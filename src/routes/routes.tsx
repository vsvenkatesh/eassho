import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { PATH } from "../constants/paths";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
const Home = lazy(() => import('../components/Home'));
const Login = lazy(() => import('../components/Login'));

export default function MainRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route
          path={PATH.HOME}
          element={
            <AuthenticatedGuard>
              <Home />
            </AuthenticatedGuard>
          }
        />
      </Routes>
    </Suspense>
  )
}
