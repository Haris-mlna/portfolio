import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Hero from '../components/Home/Hero'
import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="Author" content="Haris-Maulana" />
        <title>Haris Portfolio</title>  
      </Head>
      <div className='min-h-screen' id="body">
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
    </>
  );
}
