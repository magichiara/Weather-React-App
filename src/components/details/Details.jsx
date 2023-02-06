import styles from "./styles.module.scss";

export const Details = ({ data }) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Weather Details</p>
      <div className={styles.details}>
        <div>
          <p>Wind</p>
          <p>{data?.current?.wind_kph} km/h</p>
        </div>
        <div>
          <p>Cloud</p>
          <p>{data?.current?.cloud}%</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{data?.current?.humidity}%</p>
        </div>
      </div>
    </div>
  );
};
