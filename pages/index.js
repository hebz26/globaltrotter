import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import SmoothieList from "../components/SmoothieList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Globaltrotter Smoothies</title>
        <meta name="description" content="Best smoothies in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <SmoothieList />
    </div>
  );
}
