"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Providers from "./components/Providers";
import DownloadDiv from "./components/DownloadDiv";
import Testimonials from "./components/Testimonials";
import Bottom from "./components/Bottom";


export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Hero />
      <Services />
      <Providers />
      <DownloadDiv />
      <Testimonials />
      <Bottom />
    </div>
  );
}
