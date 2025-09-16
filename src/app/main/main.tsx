import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "../router/router";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      
    },
  },
  queryCache: new QueryCache(),
});

root.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
