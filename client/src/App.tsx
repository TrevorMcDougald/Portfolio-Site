import React, { FunctionComponent } from "react";
import "twin.macro";
import Header from "./components/layout/Header/Header";
import Resume from "./components/Resume/Resume";
import "tailwindcss/dist/base.min.css";
import "./App.css";
import registerFaIcons from "./services/registerFaIcons";

registerFaIcons();

const App: FunctionComponent = () => {
  return (
    <div tw='bg-gray-100 min-h-screen max-w-full overflow-hidden flex flex-col'>
      <div tw='flex flex-grow min-h-screen flex-row justify-start'>
        <Header siteTitle='Trevor McDougald' />
        <Resume />
      </div>
      <div tw='flex-col flex-none bg-gray-600 w-full text-right'>
        <h2 tw='text-gray-100 pr-8'>TM</h2>
      </div>
    </div>
  );
};

export default App;
