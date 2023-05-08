import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleFilmPage() {
  const [item, setItem] = useState({});
  //Taking only the id off of the params object
  const { id } = useParams();

  async function getFilm() {
    // async/await syntax
    try {
      const response = await fetch(
        `https://studioghibliapi-d6fc8.web.app/films/${id}`
      );
      const filmData = await response.json();
      setItem(filmData);
    } catch (err) {
      console.error(err);
    }
  }

  //if (anything in the dependency array changed since last time)
  //then run this callback function
  useEffect(() => {
    getFilm();
    //Dependecy Array
    //A list of things to depend on
    //A list of things to care about
  }, []);

  return (
    <div>
      <div>
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
