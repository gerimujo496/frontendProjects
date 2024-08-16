import React from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";



export const MainMenu = () => {
  return (
    <div>
      <MobileMenu  />
      <DesktopMenu  />
    </div>
  );
};

export default MainMenu;
