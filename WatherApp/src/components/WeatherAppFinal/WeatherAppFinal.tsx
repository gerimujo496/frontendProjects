import React from "react";
import styles from "./WeatherAppFinalStyle.module.css";
import { WeatherAppFinalHeader } from "./WeatherAppFinalHeader/WeatherAppFinalHeader";
import { WeatherAppFinalBody } from "./WeatherAppFinalBody/WeatherAppFinalBody";
import { WeatherData } from "./MockData";
export const WeatherAppFinal = () => {
  const ramdomNumber = Math.floor(Math.random() * 3);
  return (
    <div
      style={{
        backgroundColor: WeatherData[ramdomNumber].color,
        margin: 0,
        height: "100vh",
        width: "100vw",
      }}
      className={styles.weatherContainer}
    >
      <WeatherAppFinalHeader />
      <WeatherAppFinalBody
        icon={WeatherData[ramdomNumber].icon}
        temperature={WeatherData[ramdomNumber].temperature}
        description={WeatherData[ramdomNumber].description}
        color={WeatherData[ramdomNumber].color}
      />
    </div>
  );
};
