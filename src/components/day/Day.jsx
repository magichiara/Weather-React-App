import styles from "./styles.module.scss";
import { MoreDetails } from "../moredetails/MoreDetails";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import { getIndex } from "../../utils/utils";
import { WeatherAssets } from "../../utils/WeatherAssets";

export const Day = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const moreHandler = () => {
    setShowMore((prevstate) => !prevstate);
  };

  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <p className={styles.day}>{data.date.slice(5)}</p>
        <img src={WeatherAssets[getIndex(data?.day.condition.text)].icon} />
        <div className={styles.temp}>
          <p>{data?.day.mintemp_c}°</p>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg"
            alt={data?.day.mintemp_c}
          />
        </div>
        <div className={styles.temp}>
          <p>{data?.day.maxtemp_c}°</p>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg"
            alt={data?.day.maxtemp_c}
          />
        </div>

        <i onClick={() => moreHandler()}>
          {showMore ? <BiChevronUp /> : <BiChevronDown />}
        </i>
      </div>

      {showMore && <MoreDetails data={data} />}
    </div>
  );
};
