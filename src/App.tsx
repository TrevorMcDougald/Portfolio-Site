import React, { FunctionComponent } from 'react';
import logo from './assets/images/logo.svg';
import Header from './components/layout/Header';
import Resume from './components/Resume'
import './styles/tailwind.css'
import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="App bg-gray-300 h-screen max-h-screen w-screen overflow-hidden flex flex-col items-center">
      <Header />
      <Resume />
      <div className="Footer flex-col flex-none bg-gray-800 w-full">
          <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
