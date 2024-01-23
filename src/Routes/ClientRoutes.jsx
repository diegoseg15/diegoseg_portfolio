import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { ClientLayouts } from "../Layouts/ClientLayout";
// import LeerDocumento from "../Components/LeerDocumsento/LeerDocumento";

export default function ClientRoutes() {
  const loadLayout = (Layout, Page) => {
    return <Layout>{Page}</Layout>;
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayouts, <Home />)} />
      <Route
        path="/documento"
        // element={loadLayout(ClientLayouts, <LeerDocumento />)}
      />
    </Routes>
  );
}
