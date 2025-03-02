import styles from "./Banner.module.css"

function Banner() {
  return (
    <div className={styles.banner}>
      <h2 className="text-2xl text-center">
        Welcome to <span className="text-red-500 font-bold">Github</span>{" "}
        Respository Search Project
      </h2>
    </div>
  );
}

export default Banner;
