import styles from "./styles.module.scss";
import { Day } from "../day/Day";

export const NextDays = ({ data }) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Next Days</p>
      <div className={styles.days}>
        {data?.forecastday.map((item, index) => (
          <Day data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
