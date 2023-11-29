import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" style={{ marginTop: '50px' }}>
      <header>
        <h1>Rocologos</h1>
      </header>
      <section className="background-section">
        <div className="background-image"></div>
        <div className="overlay"></div>
        <div className="content">
          <p>Bienvenido a nuestra página de inicio temática de geología. Explora el fascinante mundo de las rocas y minerales.</p>
          <a href="#explorar" className="explore-button">Explorar</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
