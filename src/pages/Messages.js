import React from 'react';
import Chat from '../components/Chat';
import Chats from '../components/Chats.json';

function Messages(){

    /*const[title, setTitle] = React.useState(true);
    const[chatNew, setChatNew] = React.useState(false);
    const[chatRecent, setChatRecent] = React.useState(false);
    const[chatAll, setChatAll] = React.useState(false);
    const[chatDel, setChatDel] = React.useState(false);
    const[list, setList] = React.useState(false);
    const [send, setSend] = React.useState(false);

    function showTitle() {
        setTitle(true);
        setChatNew(false);
        setChatRecent(false);
        setChatAll(false);
        setChatDel(false);
        setList(false);
    }

    function showNew() {
        setChatNew(!chatNew);
        setTitle(!title);
        setChatRecent(false);
        setChatAll(false);
        setChatDel(false);
        setList(false);
    }

    function showRecent() {
        setChatNew(false);
        setTitle(!title);
        setList(!list);
        setChatRecent(!chatRecent);
        setChatAll(false);
        setChatDel(false);
    }

    function showAll() {
        setChatNew(false);
        setTitle(!title);
        setChatRecent(false);
        setChatAll(!chatAll);
        setChatDel(false);
        setList(false);
    }

    function showDel() {
        setChatNew(false);
        setTitle(!title);
        setChatRecent(false);
        setChatAll(false);
        setChatDel(!chatDel);
        setList(false);
    }

    function showList() {
        setList(true);
        setTitle(false);
        setChatNew(false);
        setChatRecent(false);
        setChatAll(false);
        setChatDel(false);
    }
    function sendMessage() {
        setSend(true);
        console.log(send);
    }
*/
    const [title, changeTitle] = React.useState(true);
    const recent = [
        { mensajes : "No tienes mensajes recientes"}
    ]
    const allMessages = [
        { nombre : "Adidas", mensaje : "Gracias por su compra"},
        { nombre : "Pull and Bear",  mensaje : "Hemos recibido su peticion de devolucion, lamentamos lo ocurrido"},
        { nombre : "Puma" , mensaje : "No tenemos stock actualmente"}
    ]

    const showNew = () => {
        changeTitle(!title);
    }

    const showRecent = () =>{
        changeTitle(false);
        recent.map(i => (
            alert(i.mensajes)
        ))
    }

    const showAll = () =>{
        changeTitle(false);
        allMessages.map(i => (
            <div className="showAllContainer">
                <ul>
                    <li>Marca {i.nombre} , Mensaje : {i.mensaje}</li>
                    Esto lo suyo seria crear un componente externo para mostrar una lista
                    completa de todos los mensajes de las empresas.
                </ul>
            </div>
        ))
    }

    const showDel = () => {
    // Se le esta buscando una funcionalidad aun, pero pronto estara disponible
    }
    
    return(
        <div className="messages">
            { title ? <Chat /> : ""}
            <div className="messagesInputs">
                <input type="submit" value="Nuevo Chat" onClick={showNew}/>
                <input type="submit" value="Chats Recientes" onClick={showRecent}/>
                <input type="submit" value="Todos los Chats" onClick={showAll}/>
                <input type="submit" value="Chats elminiados" onClick={showDel}/>
            </div>
        </div> 
    );
}

export default Messages;