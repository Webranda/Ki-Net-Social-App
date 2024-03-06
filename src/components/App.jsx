import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets';

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
