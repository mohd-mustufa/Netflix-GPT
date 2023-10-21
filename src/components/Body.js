import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Player from "./Player";

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
      path: "/browse/movies",
      element: <Browse />,
    },
    {
      path: "/browse/tv",
      element: <Browse />,
    },
    {
      path: "/player",
      element: <Player />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
