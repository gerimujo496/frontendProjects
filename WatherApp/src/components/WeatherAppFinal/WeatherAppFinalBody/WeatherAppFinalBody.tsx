import React from "react";
import styles from "./WeatherAppFinalStyle.module.css";
import { WeatherData } from "../MockData";
import { IconType } from "react-icons";
interface Props {
  icon: JSX.Element;
  temperature: number;
  description: string;
  color: string;
}
export const WeatherAppFinalBody = (item: Props) => {
  const ramdomNumber = Math.floor(Math.random() * 3);

  return (
    <div className={styles.WeatherAppFinalBodyContainer}>
      <div className={styles.weatherBody}>
        <div className={styles.bigIcon}>{item.icon}</div>
        <div className={styles.temperatureAndDescription}>
          <div className={styles.temperature}>
            {item.temperature}
            <sup>o</sup>
          </div>
          <div className={styles.weatherDescription}>{item.description}</div>
        </div>
      </div>
    </div>
  );
};
