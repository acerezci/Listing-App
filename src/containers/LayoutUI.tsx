import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutUI: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="container mx-auto mb-auto mt-5">{props.children}</main>
      <Footer />
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default LayoutUI;
