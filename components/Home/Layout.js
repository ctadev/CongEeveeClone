import React, { useEffect } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import s from "./layout.module.scss";
import Overlay from "./Overlay";
import Cart from "./Cart.jsx";
import { useSelector } from "react-redux";
import Head from "next/head";

const Layout = ({ children }) => {
  const modal = useSelector((state) => state.modalSlice);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className={s.layout}>
      <Head>
        <title>Cong&apos;s Eevee&apos;s Ecommerces Clone</title>
        <meta name="description" content="PEV Ecommerce Clone by Cong Ta" />
        <link rel="icon" href="/letter-c.png" />
      </Head>
      <Navbar />
      <Cart />
      <Overlay />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
