'use client'
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
    </>
  );
}
