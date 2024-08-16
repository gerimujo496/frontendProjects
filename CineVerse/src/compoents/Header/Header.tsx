import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { HeaderDesktop } from "../HeaderDesktop/HeaderDesktop";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};
