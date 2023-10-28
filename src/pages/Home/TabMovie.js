import { Desktop, Tablet, Mobile } from "../../layout/responsive";
import DesktopTabMovie from "./TabMovie/DesktopTabMovie";
import MobileTabMovie from "./TabMovie/MobileTabMovie";
import TabletTabMovie from "./TabMovie/TabletTabMovie";

const TabMovie = () => {
  return (
    <>
      <Desktop>
        <DesktopTabMovie />
      </Desktop>
      <Tablet>
        <TabletTabMovie />
      </Tablet>
      <Mobile>
        <MobileTabMovie />
      </Mobile>
    </>
  );
};

export default TabMovie;
