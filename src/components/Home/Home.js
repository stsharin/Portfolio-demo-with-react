import React from 'react';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className="text-center" style={{ background: '#2e3643', color: 'white', height: '100vh' }}>
                <div>
                    <h1>Hello, I'm <span>Saraban Tasnim Sharin</span>.</h1>
                    <h1>I'm a full-stack web developer</h1>
                    <button className="btn btn-primary">View my work</button>
                </div>
            </div>
            <Navbar />
            <About/>
        </div>
    );
};

export default Home;