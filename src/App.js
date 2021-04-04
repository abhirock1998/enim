import React from "react";
import "./App.css";
import {
  Header,
  DashBoard,
  WheelCarousel,
  Contact,
  JumboSection,
  Footer,
} from "./components/components";
function App() {
  return (
    <div className="app">
      <Header />
      <DashBoard />
      <WheelCarousel />
      {/* <Feature /> */}
      <JumboSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
