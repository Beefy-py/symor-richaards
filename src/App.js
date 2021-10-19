import React from "react";
import Header from "./components/content/header";
import Body from "./components/content/body";
import Footer from "./components/content/footer";
import LandingSection from "./components/content/landingSection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingSection />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
