import { createBrowserRouter } from "react-router";
import { App } from "../main/App";
import {
  EventPage,
  EventsListPage,
  MainPage,
  OrderPage,
  OrdersListPage,
  ProductPage,
  ProductsListPage,
  ProfilePage,
  UserEventPage,
  UserEventsListPage,
  CartPage,
} from "../pages";

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
      },
      { path: "profile/orders/:id", element: <OrderPage /> },
      {
        path: "profile/events",
        element: <UserEventsListPage />,
      },
      { path: "profile/events/:id", element: <UserEventPage /> },
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
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
