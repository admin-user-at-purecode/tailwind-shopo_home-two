import { useState } from "react";
import DiscountBanner from "./Home/DiscountBanner";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Headers";

export default function LayoutHomeTwo({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <Header drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        <DiscountBanner />
        <Footer />
        <Footer />
      </div>
    </>
  );
}
