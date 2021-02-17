import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as GoIcons from 'react-icons/go';

function Support(){
    return(
        <>
        <div className="support">
           <div className="metaContainer">
            <div className="supportContainer">
                    <h1>What is the problem?</h1>
                    <div className="supportItems">
                        <ul>
                            <li>
                                <FaIcons.FaTruck className="supportIcon"/>
                                <p>Problems with <br/> delivery</p>
                            </li>
                            <li>
                                <IoIcons.IoAlarmSharp className="supportIcon"/>
                                <p>Im not on time</p>
                            </li>
                            <li>
                                <GoIcons.GoPerson className="supportIcon"/>
                                <p>Problems with <br/>the seller</p>
                            </li>
                            <li>
                                <FaIcons.FaBox className="supportIcon"/>
                                <p>Problems with <br/>your purchase </p>
                            </li>
                            <li>
                                <FaIcons.FaPaypal className="supportIcon"/>
                                <p>Payment method <br/>problems</p>
                            </li>
                            <li>
                                <IoIcons.IoChatboxEllipses className="supportIcon"/>
                                <p>Other problems</p>
                            </li>
                        </ul>
                    </div>
                
            </div>
            </div>
        </div>
        <div className="supportDetails">
            <div className="detailsContainer">
                <div className="detailsIcon">
                    <FaIcons.FaTruck className="supportIcon"/>
                    <p>Problems with <br/> delivery</p>
                    <p>Esta parte esta en proceso, tengo que cargar los datos de un fichero externo y con estados mostrar la informacion segun pinches en los iconos, decirle a Javier que mañana 17/02 esta parte esta terminada</p>
                </div>
                <h1>Ejemplo de seleccion</h1>
            </div>
        </div>
        </>
    );
}

export default Support;