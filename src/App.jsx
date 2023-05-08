import { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages/index.js";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "currPath" : null)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="films"
                className={({ isActive }) => (isActive ? "currPath" : null)}
              >
                Films
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path="/" element={<HomePage />} />
          {/* http://localhost:3000/films */}
          <Route path="films" element={<FilmsPage />} />
          {/* http://localhost:3000/film/abc-123-blah-blah */}
          <Route path="film/:id" element={<SingleFilmPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
