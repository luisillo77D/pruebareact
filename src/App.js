import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Users from './components/Users';
import Muestras from './components/Muestras';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Menú lateral persistente */}
        <Sidebar />
        

        {/* Contenido principal */}
        <div style={{ flex: 1, padding: '5px', marginLeft: 0, position: 'relative' }}>
        <Topbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Form />} />
            <Route path="/panel" element={<Dashboard />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/muestras" element={<Muestras />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
