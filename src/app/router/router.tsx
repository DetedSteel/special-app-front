import { createBrowserRouter } from "react-router";
import { App } from "../main/App";
import {
  EventPage,
  EventsListPage,
  MainPage,
  OrderPage,
  OrdersListPage,
  ProductsListPage,
  ProfilePage,
  UserEventPage,
  UserEventsListPage,
} from "../pages";
import { ProductPage } from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "profile/orders",
        element: <OrdersListPage />,
        children: [{ path: ":id", element: <OrderPage /> }],
      },
      {
        path: "profile/events",
        element: <UserEventsListPage />,
        children: [{ path: ":id", element: <UserEventPage /> }],
      },
      {
        path: "products",
        element: <ProductsListPage />,
      },
      { path: "products/:id", element: <ProductPage /> },
      {
        path: "events",
        element: <EventsListPage />,
      },
      {
        path: "events/:id",
        element: <EventPage />,
      },
    ],
  },
]);
