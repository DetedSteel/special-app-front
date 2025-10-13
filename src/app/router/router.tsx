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
        children: [
          {
            path: "orders",
            element: <OrdersListPage />,
            children: [{ path: ":id", element: <OrderPage /> }],
          },
          {
            path: "events",
            element: <UserEventsListPage />,
            children: [{ path: ":id", element: <UserEventPage /> }],
          },
        ],
      },
      {
        path: "products",
        element: <ProductsListPage />,
        children: [{ path: ":id", element: <ProductPage /> }],
      },
      {
        path: "events",
        element: <EventsListPage />,
        children: [{ path: ":id", element: <EventPage /> }],
      },
    ],
  },
]);
