import React from 'react';
import * as FaIcons from 'react-icons/fa';

function Home(){

    const [logIn,setLogin] = React.useState(false);
    const [singUp,setSingUp] = React.useState(false);

    const selectLogin = () => {
        setLogin(true);
        setSingUp(false);
    }
    
    const selectSingUp = () => {
        setSingUp(true);
        setLogin(false);
    }

    return(
        <>
        <div className="home">
            <div className="explication">
                <div className="title">
                    <h1>White Point</h1> 
                    <i><FaIcons.FaGlobeEurope /></i>
                </div>
                <div className="slogan">
                    <p>The best point of view you can find</p>
                </div>
            </div>
            <div className="homeContainer">
                <h3 onClick={selectSingUp}>Sign Up</h3>
                <h3 onClick={selectLogin}>Login</h3>
            </div>
        </div>
        <div className="formHome">
            {logIn ?
            <form>
                <div className="inputForm">
                    <label>Nombre de Usuario</label>
                    <input type="text" />
                </div>
                <div className="inputForm">
                    <label>Correo electronico</label>
                    <input type="text" />
                </div>
                <div className="inputForm">
                    <label>Nueva contraseña</label>
                    <input type="text" />
                </div>
                <div className="inputForm">
                    <label>Repetir contraseña</label>
                    <input type="text" />
                </div>
                <div className="buttonForm">
                    <button>Registrarse</button>
                </div>
            </form>
            : ""}
            {singUp ?
            <form>
                <div className="inputForm">
                    <label>Nombre de Usuario</label>
                    <input type="text" />
                </div>
                <div className="inputForm">
                    <label>Contraseña de Usuario</label>
                    <input type="text" />
                </div>
                
                <div className="buttonForm">
                        <button>Registrarse</button>
                </div> 
            </form>
            : ""}
        </div>
        </>
    );
}

export default Home;