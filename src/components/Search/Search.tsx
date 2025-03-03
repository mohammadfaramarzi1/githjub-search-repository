import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepo } from "../../redux/repo/repo";
import { AppDispatch } from "../../redux/store";

function Search() {
  const [serach, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    inputRef.current?.focus();
  });

  const clickHandler = () => {
    if (!Search) return;
    dispatch(fetchRepo(serach.toLowerCase()));
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Repo Name..."
        value={serach}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <button onClick={clickHandler}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
