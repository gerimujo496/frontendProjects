import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";

export const WeatherData = [
  {
    icon: <TiWeatherDownpour />,
    temperature: 10,
    description: "Mostly raining",
    color: "#1E90FF",
  },
  {
    icon: <TiWeatherPartlySunny />,
    temperature: 22,
    description: "Mostly sunny",
    color: "#FFD700",
  },
  {
    icon: <TiWeatherSunny />,
    temperature: 30,
    description: "Sunny",
    color: "#FFA500",
  },
];
