import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact/Contact";
import Categorydetail from "./pages/Categorydetail/Categorydetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Categorydetail/:slug" element={<Categorydetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
