import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
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

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Studio Ghibli Films</h1>
      <div className="form-group">
        <label htmlFor="directorSelect">Pick a Director</label>
        <select 
          name="directorSelect" 
          id="directorSelect"
          value={searchDirector}
          onChange={(ev)=>{setSearchDirector(ev.target.value)}}
        >
          <option value="">All Directors</option>
          {directors.map((director) => {
            return <option value={director}>{director}</option>
          })}
        </select>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li className="film-container" key={film.id}>
              <h2>{film.title}</h2>
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
