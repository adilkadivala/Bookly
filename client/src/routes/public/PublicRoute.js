import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../../pages/public/home/Index";
import LibraryIndex from "../../pages/public/library/LibraryIndex";
import Error404 from "../../pages/Error404";
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import Logout from "../../pages/auth/Logout";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
        <Route
          path="/library"
          element={
            <>
              <LibraryIndex />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/logout"
          element={
            <>
              <Logout />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Error404 />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default PublicRoute;
