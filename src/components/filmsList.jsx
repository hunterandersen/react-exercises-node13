import { useState, useEffect } from "react";
import "./style.css";

export default function FilmsList(props) {
  const [list, setList] = useState([]);

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
  useEffect(()=>{
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((film) => {
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
  );
}
