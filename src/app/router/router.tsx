import { createBrowserRouter } from "react-router";
import { App } from "../main/App";
import { MainPage, ProfilePage } from "../pages";
import { ProductPage } from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: ":id", element: <ProductPage /> },
    ],
  },
]);
