import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const toggleWidgets = () => {
    setIsWidgetsOpen(!isWidgetsOpen);
  }
  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} toggleWidgets={toggleWidgets}/>
      <div className='app__body'>
        <Sidebar isOpen={isSidebarOpen}/>
        <Feed/>
        <Widgets isOpen={isWidgetsOpen}/>
      </div>
    </div>
  );
}

export default App; 