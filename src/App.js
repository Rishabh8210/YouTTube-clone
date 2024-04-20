import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import SidebarContext from './utils/SidebarContext';
import { useContext, useState } from 'react';

const App = () => {
  return (
      <div className="h-screen">
          <Head />
          <Body />
      </div>
  );
}

export default App;
