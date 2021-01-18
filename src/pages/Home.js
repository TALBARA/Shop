import React from 'react';
import * as FaIcons from 'react-icons/fa';


function Home(){
    return(
        <div className="home">
            <div className="explication">
                <h1>White Point</h1> 
                <i><FaIcons.FaGlobeEurope /></i><br/> 
                <p>The best point of view you can find</p>
            </div>
            <div className="homeContainer">
                <h3>Sign Up</h3>
                <h3>Login</h3>
            </div>
            <div className="homeForm">
                <form>
                    <input type="" />
                    <input type="" />
                    <input type="" />
                </form>
            </div>
        </div>
    );
}

export default Home;