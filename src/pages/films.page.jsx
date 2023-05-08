import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";
import "./style.css";

export default function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log("Fetch failed");
        console.error(err);
      });
  }

  //An empty dependency array means that the callback function
  //will only get called back (aka invoked) once
  useEffect(() => {
    getFilms();
  }, []);

  //Derived State
  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");
  const { avg_score, total, latest } = getFilmStats(list);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Studio Ghibli Films</h1>
      <div className="form-group">
        <label htmlFor="directorSelect">Pick a Director</label>
        <select
          name="directorSelect"
          id="directorSelect"
          value={searchDirector}
          onChange={(ev) => {
            setSearchDirector(ev.target.value);
          }}
        >
          <option value="">All Directors</option>
          {directors.map((director, index) => {
            return (
              <option key={director + index} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </div>
      <div className="aggregateInfo">
        <div>
          <span># Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li className="film-container" key={film.id}>
              <Link to={`/film/${film.id}`}>{film.title}</Link>
              <div className="flex-container">
                <img src={film.image} alt="Film Poster" />
                <p className="film-text">
                  {film.description}{" "}
                  <span style={{ color: "red" }}>{film.running_time}min</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
