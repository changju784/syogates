import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Director from "./components/Director";
import Location from "./components/Location";


const App: React.FC = () => {
  return (
    <div id="wrapper" className="is-preload">
      <Header />
      <Nav />
      <main id="main">
        <About />
        <Director />
        <Location />
        {/* <FirstSection />
        <SecondSection />
        <CtaSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;