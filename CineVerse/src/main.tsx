import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routing/routes";
import axios from "axios";
import apiClient from "./services/api-client";

const queryClient = new QueryClient();
const ax = axios.create({
  baseURL: "http://localhost:3900",
});
const getEvents = async () => {
  const res = await ax.get("/api/event/getEvents/", {
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3ZDlmZTM2OGFlMTAxMjk0MTdjY2QiLCJuYW1lIjoiZ2VyaW11am8xIiwiZW1haWwiOiJnZXJpMTIubXVqb0Bzb2Z0dXAuY28iLCJyb2xlIjoiVXNlciIsImlhdCI6MTcyMzQ0NzM5MywiZXhwIjoxNzIzNDgzMzkzfQ.YbIYGGkKXrCwXI2jtar9RRDJqnzzHVAY9r0dk1Q8grM",
    },
  });
  console.log(res.data);
  return res.data;
};
console.log(getEvents());
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
