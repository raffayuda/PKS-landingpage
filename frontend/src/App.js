import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisiMisi from "./components/VisiMisi";
import Profil from "./components/Profil";
import Programs from "./components/Programs";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VisiMisi />
      <Profil />
      <Programs />
      <News />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
