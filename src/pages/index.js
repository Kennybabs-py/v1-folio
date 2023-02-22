import Head from "next/head";
import Image from "next/image";
// import { Inter } from '@next/font/google'
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })

import React from "react";
// import { gsap } from "gsap";
import Header from "@/components/Layout/Header";
import Landing from "@/screens/home";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      {/* <Footer /> */}
    </>
  );
}
