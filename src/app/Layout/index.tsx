import Footer from "../Components/Footer/Footer";
import React, { ReactNode } from "react";

interface LayoutFooterProps {
  children: ReactNode;
}

function LayoutFooter(props: LayoutFooterProps) {
  return (
    <div id="main">
      {props.children}
      <Footer />
    </div>
  );
}

export default LayoutFooter;
