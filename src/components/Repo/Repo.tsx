import { Repo as RepoType } from "../../types/repo.types";
import { FaRegStar } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import styles from "./Repo.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../../redux/favorites/favorites";
import { useEffect, useState } from "react";
import { RootState } from "@reduxjs/toolkit/dist/query";
import { isInFavorite } from "../../utils/repo";

function Repo({
  description,
  html_url,
  name,
  language,
  stargazers_count,
  id,
}: RepoType) {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const { favorites } = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const repo = {
    id,
    description,
    html_url,
    name,
    language,
    stargazers_count,
  };

  useEffect(() => {
    const checkFavoriteRepoStatus = isInFavorite({
      favoriteRepos: favorites,
      repo,
    });
    if (checkFavoriteRepoStatus) {
      setIsInFavorites(false);
    } else {
      setIsInFavorites(true);
    }
  }, [isInFavorites, favorites]);

  const addToFavoriveHandler = () => {
    dispatch(addFavorites(repo));
    setIsInFavorites(true);
  };

  const removeFromFavoritesHandler = () => {
    dispatch(removeFavorites(repo));
    setIsInFavorites(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.repo}>
        <div className={styles.info}>
          <p>
            Repo: <span>{name}</span>
          </p>
          <p>
            Language: <span>{language}</span>
          </p>
        </div>
        <div className={styles.desc}>
          <p>
            Description: <span>{description}</span>
          </p>
          <div className={styles.favorite}>
            <p className={styles.stars}>
              Stars:
              <span>
                {stargazers_count}
                <FaRegStar />
              </span>
            </p>
            {isInFavorites ? (
              <button onClick={addToFavoriveHandler}>
                Add to Favorite
                <MdFavorite />
              </button>
            ) : (
              <button onClick={removeFromFavoritesHandler}>
                Remove From Favorites
                <MdFavorite />
              </button>
            )}
          </div>
        </div>
        <Link to={`${html_url}`} className={styles.link}>
          See Details
          <MdDoubleArrow />
        </Link>
      </div>
    </div>
  );
}

export default Repo;
