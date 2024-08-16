import React from "react";
import styles from "./WeatherAppFinalHeaderStyles.module.css";

export const WeatherAppFinalHeader = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayDate = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className={styles.headerSection}>
      <p>Tirana, AL</p>
      <p>
        {weekday[todayDate.getDay()] +
          "  " +
          todayDate.getDate() +
          "  " +
          month[todayDate.getMonth()]}
      </p>
    </section>
  );
};
