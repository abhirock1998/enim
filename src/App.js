import React from "react";
import "./App.css";
import {
  Header,
  DashBoard,
  WheelCarousel,
  Feature,
  JumboSection,
  Faq,
  Footer,
} from "./components/components";
function App() {
  
  return (
    <div className="app">
      <Header />
      <DashBoard />
      <WheelCarousel />
      <Feature />
      <JumboSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
