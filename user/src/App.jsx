import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import Event from "./pages/Event";
import EventNavbar from "./components/EventNavbar";
import Club from "./pages/Club";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/events" element={<EventNavbar />}>
          <Route index element={<Event />} />
        </Route>
        <Route path="/clubs" element={<EventNavbar />}>
          <Route index element={<Club />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
