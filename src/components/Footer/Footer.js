import React from "react";
import DesktopFooter from "./DesktopFooter";
import TabletFooter from "./TabletFooter";
import MobileFooter from "./MobileFooter";
import { Desktop, Mobile, Tablet } from "../../layout/responsive";

const Footer = () => {
  return (
    <>
      <Desktop>
        <DesktopFooter />
      </Desktop>
      <Tablet>
        <TabletFooter />
      </Tablet>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
};

export default Footer;
