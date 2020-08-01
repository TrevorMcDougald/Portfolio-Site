import React, { FunctionComponent } from "react";
import "twin.macro";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "tailwindcss/dist/base.min.css";
import "./App.css";
import registerFaIcons from "./utils/registerFaIcons";
import Routes from "./components/layout/Routes/Routes";

registerFaIcons();

const App: FunctionComponent = () => {
  return (
    <div tw='bg-sky-blue min-h-screen max-w-full overflow-x-hidden flex flex-col'>
      <div tw='flex flex-grow min-h-screen flex-row justify-start'>
        <Header siteTitle='Trevor McDougald' />
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
