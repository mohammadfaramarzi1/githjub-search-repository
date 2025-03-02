import { Link, useLocation } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import styles from "./Banner.module.css";

function Banner() {
  const location = useLocation();

  return (
    <div className={styles.banner}>
      <h2 className="text-2xl text-center">
        Welcome to <span className="text-red-500 font-bold">Github</span>{" "}
        Respository Search Project
      </h2>
      {location.pathname === "/" && (
        <Link to="/favorites">
          <MdFavorite />
        </Link>
      )}
      {location.pathname === "/favorites" && (
        <Link to="/">
          <FaGithub />
        </Link>
      )}
    </div>
  );
}

export default Banner;
