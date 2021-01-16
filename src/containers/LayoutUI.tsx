import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToastrMessage from "../components/ToastrMessage";

const LayoutUI: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="container mx-auto mb-auto my-5 pb-10">{children}</main>
      <Footer />
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default LayoutUI;
