import { useState } from "react";
import "./styles.css";

let genres = {
  Thriller: [
    {
      name: "Parasite",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/A1UTpJzoPBL._RI_.jpg",
      Director: "Bong Joon-ho",
      Description:
        "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
      Rating: "4/5"
    },
    {
      name: "1917",
      Image: "https://i.ytimg.com/vi/VzvdoLeXClg/movieposter_en.jpg",
      Director: "Sam Mendes",
      Description:
        "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
      Rating: "4/5"
    },
    {
      name: "Joker",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
      Director: "Todd Phillips",
      Description:
        "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
      Rating: "4/5"
    },
    {
      name: "Joji",
      Image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/joji-et00311373-25-05-2021-05-06-49.jpg",
      Director: "Dileesh Pothan",
      Description:
        "Joji, an engineering dropout, dreams of becoming rich without his family's help. However, things take a turn after an unexpected event in the family.",
      Rating: "4/5"
    }
  ],
  "Science Fiction": [
    {
      name: "Ready Player One",
      Image:
        "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
      Director: "Steven Spielberg",
      Description:
        "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
      Rating: "4/5"
    },
    {
      name: "2001: A Space Odyssey",
      Image: "https://flxt.tmsimg.com/assets/p6252_p_v8_ai.jpg",
      Director: "Stanley Kubrick",
      Description:
        "After discovering a monolith on the lunar surface, the Discovery One and its revolutionary supercomputer set out to unravel its mysterious origin.",
      Rating: "4/5"
    },
    {
      name: "Interstellar",
      Image:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      Director: "Christopher Nolan",
      Description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      Rating: "4/5"
    }
  ],
  Mystery: [
    {
      name: "Shutter Island",
      Image:
        "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      Director: "Martin Scorsese",
      Description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      Rating: "4/5"
    },
    {
      name: "Drishyam 2",
      Image:
        "https://m.media-amazon.com/images/M/MV5BM2RiZDVjYWEtZGNhYy00ZGU0LTgwZjMtZTJmNmMyNGQ5NGYyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
      Director: "Jeethu Joseph",
      Description:
        "Georgekutty, a cinema hall owner, thrives in life but is a changed man. However, when his family gets entangled in a criminal investigation, he must protect them from the legal institution yet again.",
      Rating: "4/5"
    },
    {
      name: "Zodiac",
      Image: "https://flxt.tmsimg.com/assets/p162782_p_v8_au.jpg",
      Director: "David Fincher",
      Description:
        "Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.",
      Rating: "4/5"
    },
    {
      name: "Knives Out",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/91OK7xWuRKL._RI_.jpg",
      Director: "Rian Johnson",
      Description:
        "Harlan Thrombey, a reputable crime novelist, is found dead after his 85th birthday celebrations. However, as detective Benoit Blanc investigates the case, it unravels a ploy of sinister intentions.",
      Rating: "4/5"
    }
  ],
  Comedy: [
    {
      name: "The Wolf Of Wall Street",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
      Director: "Martin Scorsese",
      Description:
        "Introduced to life in fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
      Rating: "4/5"
    },
    {
      name: "Khatta Meetha",
      Image: "https://m.media-amazon.com/images/I/81Hl+1tuaBL._SL1182_.jpg",
      Director: "Priyadarshan",
      Description:
        "Sachin Tichkule is an ambitious contractor who faces opposition from everyone, both at home and at work. But he continues to struggle while his family members continue to pocket ill-gained money.",
      Rating: "4/5"
    },
    {
      name: "Phir Hera Pheri",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNzgzYjZjYzMtNjcyYy00NWI3LTg1NDItOTMzMzdhMjhjNWExXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg",
      Director: "Neeraj Vora",
      Description:
        "A twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster. They must now find another way to repay the loan taken from a dreaded gangster.",
      Rating: "4/5"
    },
    {
      name: "The Hangover",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      Director: "Todd Phillips",
      Description:
        "Doug and his three best men go to Las Vegas to celebrate his bachelor party. However, the three best men wake up the next day with a hangover and realise that Doug is missing.",
      Rating: "4/5"
    }
  ]
};

// console.log(moviesGenre); // returns array of only keys
// console.log(genres.Comedy[0].name); // returns properties from object

export default function App() {
  let [currentGenre, setCurrentGenre] = useState("Thriller");

  function genreChangeHandler(currentGenre) {
    setCurrentGenre(currentGenre);
  }

  let moviesGenre = Object.keys(genres);

  // console.log(genres["Science Fiction"]); //returns array of objects

  return (
    <div className="App">
      <header className="header">
        <h2 className="heading">
          <span>🎦</span> Movies App <span>🍿</span>
        </h2>
        <p className="nav-text">
          Checkout some of my favorite Movies. Select a genre that you like.
        </p>

        <nav className="genre-names">
          {moviesGenre.map((item, index) => {
            return (
              <button
                key={index}
                onClick={genreChangeHandler.bind(this, item)}
                className="nav-buttons"
              >
                {item}
              </button>
            );
          })}
        </nav>
      </header>

      <ul>
        {genres[currentGenre].map((item, index) => {
          return (
            <>
              <div className="movies">
                <div className="movie-card">
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="movie-image"
                  ></img>
                  <div className="movie-content">
                    <h1 className="movie-name">{item.name}</h1>
                    <p className="movie-director">by {item.Director}</p>
                    <p className="movie-rating">IMdb Rating: {item.Rating}</p>
                    <p className="movie-description">{item.Description}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </ul>

      <footer class="footer">
        <div class="footer-header">Say Hi to me!👋</div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a class="link" href="https://github.com/rushikesh1799">
              github
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/rushi1799">
              twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="">
              linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
