import styles from "./styles.module.scss";
import { WeatherAssets } from "../../utils/WeatherAssets";
import { getIndex } from "../../utils/utils";

export const Weather = ({ data }) => {
  const switchIcon = data?.current?.is_day === 0 ? "nighticon" : "icon";

  return (
    <div
      className={
        switchIcon === "nighticon"
          ? `${styles.main} ${styles.night}`
          : `${styles.main}`
      }
    >
      {" "}
      <div className={styles.date}>
        <h3>{data?.location?.localtime}</h3>
      </div>
      <div className={styles.container}>
        <p className={styles.temp}>{data?.current.temp_c}°</p>
        <div className={styles.details}>
          <div className={styles.city}>
            <p className={styles.name}>{data?.location?.name}</p>
            <p>{`${data?.location?.region} ${data?.location?.country}`}</p>
          </div>
          <div className={styles.weather}>
            <img
              src={
                WeatherAssets[getIndex(data?.current.condition.text)][
                  switchIcon
                ] || WeatherAssets[getIndex(data?.current.condition.text)].icon
              }
              alt={data?.current.condition.text}
            />
            <p>{data?.current.condition.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
