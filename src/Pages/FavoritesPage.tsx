import { RootState } from "../redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Repo from "../components/Repo/Repo";
import { Repo as RepoType } from "../types/repo.types";
import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
} from "../utils/localStorage";

import styles from "./FavoritePage.module.css";

function FavoritesPage() {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  const [favoriteItems, setFavoriteItems] = useState<RepoType[]>(() => {
    const localFavorites = getFavoritesFromLocalStorage();
    return localFavorites.length ? localFavorites : favorites;
  });

  useEffect(() => {
    if (favorites.length) {
      setFavoriteItems(favorites);
    }
  }, [favorites]);

  return (
    <div className={styles.favorites}>
      <h2>Favorite Repos</h2>
      <div className={styles.favoriterepos}>
        {favoriteItems.length ? (
          favoriteItems.map((favoriteRepo: RepoType) => (
            <Repo key={favoriteRepo.id} {...favoriteRepo} />
          ))
        ) : (
          <h3 className={styles.empty}>Thre is no favorite items...</h3>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
