import { genres } from "./constants/genres";

export const returnGenreFromMenuClick = (key: number) => {
  const genre = genres.filter((item) => item.id == key);

  return genre[0].label;
};
export const convertToMenu = () => {
  return genres.map((item) => {
    return { key: item.id, icon: item.icon, label: item.label };
  });
};
