import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Head>
        <title>portfolio</title>
        <meta
          name="description"
          content="Portfolio of Kehinde Babalola - Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.header__nav}>
        <Link href="/">
          <span>Kehinde Babalola</span>
        </Link>

        <Link href="/contact">
          <span>Contact me</span>
        </Link>
      </nav>
    </div>
  );
}
