import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "./Routes/ClientRoutes";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ClientRoutes />
      </BrowserRouter>
    </>
  );
}
