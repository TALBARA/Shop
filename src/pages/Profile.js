import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

function Profile(){
    return(
        <div className="profile">
            <div className="profile_user">
                <div className="user-img">
                    <FaIcons.FaUserCircle id="user-imgIcon"/>
                </div>
                <div className="user-data">
                    <h1>Nombre</h1>
                    <h1>Datos</h1>
                </div>
            </div>
            <div className="profile_help"> 
                <ul>
                    <li><FaIcons.FaCartArrowDown  className="profile_helpItem"/></li>
                    <li><BiIcons.BiSupport className="profile_helpItem"/></li>
                    <li><RiIcons.RiFilePaperLine className="profile_helpItem"/></li>
                    <li><AiIcons.AiFillInfoCircle className="profile_helpItem"/></li>
                </ul>
                <div className="profile_helpBox">
                    Esto se oculta
                </div>
            </div>
        </div>
    );
}

export default Profile;