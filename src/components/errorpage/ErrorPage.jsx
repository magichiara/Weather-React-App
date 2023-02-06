import styles from "./styles.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.main}>
      <h1>Oh no... An error occurred!</h1>
      <button onClick={() => (document.location.href = "/")}>TRY AGAIN</button>
    </div>
  );
};

export default ErrorPage;
