import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.css";
import { useEffect, useRef, useState } from "react";

function Search() {
  const [serach, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

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
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
