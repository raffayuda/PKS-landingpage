import React, { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash && <SplashScreen />}
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
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
    </div>
  );
}

export default App;
