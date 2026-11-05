import { useState } from 'react';

import Navbar from './Navbar'
import Sidebar from './Sidebar';

import Dashboard from "./Dashboard";

import  "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((previousState) => !previousState);
  }


  return (
    <div className='app'>

      <Navbar onMenuClick={toggleSidebar} />

      <div className="app-body">

        {sidebarOpen && <Sidebar />}

        <Dashboard />

      </div>
    </div>
  );
}

export default App;


