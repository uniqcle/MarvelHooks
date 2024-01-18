import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// import App from "./components/app/App";
import { MainPage, ComicsPage } from "./components/pages";
import "./style/style.scss";

// const marvelService = new MarvelService();
// marvelService.getAllCharacters().then((res) => res.data.results.forEach(item => console.log(item.name)));
//marvelService.getCharacter(1011052).then((res) => console.log(res));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "comics",
    element: <ComicsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 