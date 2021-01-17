import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const LayoutUI: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <main className="container mx-auto mb-auto my-5 pb-10">{children}</main>
    <Footer />
  </div>
);

interface Props {
  children: React.ReactNode;
}

export default LayoutUI;
