import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

const Profile = () => {

    const [cart, setCart] = useState(false);
    const [button, setButton] = useState(true);

    const handleClickCart = () =>{
        setCart(!cart);
    }

    const handleButton = () =>{ 
        setButton(!button);
    }

    return(
       <div className="section">
          <div className="section-user">
            <div className="data-user">
                    <div className="icon">
                        <i><AiOutlinePlusCircle /></i>
                    </div>
            </div>
            <div className="description-user">
                    <ul>
                        <li>Tus metodos de pago</li>
                        <li>Tus compras mas recientes</li>
                        <li>Datos Personales</li>
                        <li>Direccion de correo</li>
                        <li>Telefono</li>
                    </ul>
            </div>
            <div className="cart">
                    <div className="cart-items">
                        <h1>Aqui es donde va el contenido del carrito</h1>
                    </div>
                    <i onClick={handleClickCart}>{ cart ? <FaCartArrowDown /> : <FaCartPlus /> }</i>
            </div>
            <div className="cart-sugerence">
                <p>Estas son las marcas que pensamos que te pueden gustar</p>
                <div className="sugerence-data">
                    <ul>
                        <li><p>Marca 1</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                        <li><p>Marca 2</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                        <li><p>Marca 3</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                        <li><p>Marca 4</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                        <li><p>Marca 5</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                        <li><p>Marca 6</p><button onClick={handleButton} className={button ? "addCart" : "inCart"}>{ button ? 'Añadir' : 'Añadido' }</button><button className="deleteCart">Eliminar</button></li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Profile;