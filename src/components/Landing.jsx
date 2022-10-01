import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Romania's most awarded online library!</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>{" "}
            </h2>
            <Link to="#features">
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
