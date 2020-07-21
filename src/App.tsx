import React, { FunctionComponent } from "react";
import "twin.macro";
import Header from "./components/layout/Header";
import Resume from "./components/Resume";
import "tailwindcss/dist/base.min.css";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <div tw="bg-gray-300 min-h-screen max-w-full overflow-hidden flex flex-col items-center">
      <Header />
      <Resume />
      <div className="Footer flex-col flex-none bg-gray-800 w-full">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default App;
