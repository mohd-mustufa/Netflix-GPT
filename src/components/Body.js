import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
