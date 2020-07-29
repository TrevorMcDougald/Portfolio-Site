import React, { FunctionComponent } from "react";
import "twin.macro";
import { Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import LandingPage from "./components/layout/LandingPage/LandingPage";
import Resume from "./components/Resume/Resume";
import "tailwindcss/dist/base.min.css";
import "./App.css";
import registerFaIcons from "./utils/registerFaIcons";
import ContactForm from "./components/ContactForm/ContactForm";

registerFaIcons();

const backgroundVid = "/Above Clouds.webm";

const App: FunctionComponent = () => {
  return (
    <div tw='bg-sky-blue min-h-screen max-w-full overflow-x-hidden flex flex-col'>
      <div tw='flex flex-grow min-h-screen flex-row justify-start'>
        <Header siteTitle='Trevor McDougald' />
        <Route component={LandingPage} exact path='/' />
        <Route component={Resume} path='/resume' />
        <Route component={ContactForm} path='/contact' />
      </div>
      <Footer />
    </div>
  );
};

export default App;
