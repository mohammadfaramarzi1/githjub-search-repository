import { RootState } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { useSelector } from "react-redux";
import Repo from "../components/Repo/Repo";
import { Repo as RepoType } from "../types/repo.types";

import styles from "./FavoritePage.module.css";

function FavoritesPage() {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <div className={styles.favorites}>
      <h2>Favorite Repos</h2>
      <div className={styles.favoriterepos}>
        {[favorites].length
          ? favorites.map((favoriteRepo: RepoType) => (
              <Repo key={favoriteRepo.id} {...favoriteRepo} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default FavoritesPage;
