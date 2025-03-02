import { Repo as RepoType } from "../../types/repo.types";
import { FaRegStar } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

import styles from "./Repo.module.css";
import { Link } from "react-router-dom";

function Repo({
  description,
  html_url,
  name,
  language,
  stargazers_count,
}: RepoType) {
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
          <p className={styles.stars}>
            Stars:
            <span>
              {stargazers_count}<FaRegStar />
            </span>
          </p>
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
