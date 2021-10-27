import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Brain Stay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Navbar />
      <Banner />
    </div>
  );
}
