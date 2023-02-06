import styles from "./styles.module.scss";
import { useState } from "react";

export const MoreDetails = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.moredetails}>
        <div>
          <p>Wind</p>
          <p>{data?.day.maxwind_kph} km/h</p>
        </div>
        <div>
          <p>Rainfall</p>
          <p>{data?.day.totalprecip_mm} mm</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{data?.day.avghumidity}%</p>
        </div>
      </div>
      <div className={styles.moredetails}>
        <div>
          <p>Sunrise</p>
          <p>{data?.astro.sunrise}</p>
        </div>
        <div>
          <p>Sunset</p>
          <p>{data?.astro.sunset}</p>
        </div>
        <div>
          <p>Illumination</p>
          <p>{data?.astro.moon_illumination}%</p>
        </div>
      </div>
    </div>
  );
};
