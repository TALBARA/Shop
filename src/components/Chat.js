import React, { useState } from 'react';

function Chat() {

    const initialText = [
        { mensaje : "Hola estas apunto de inciar un nuevo chat..." },
        { mensaje : "En unos segundos seras antendido por un agente" }
    ]

    const [message, changeMessage] = useState(initialText);
    const [text, setText] = useState("");

    const handledAdd = () => {
        const newText = { mensaje : text}
        changeMessage([...message, newText])
    }

    return (
        <>
           <div className="chatContainer">
                <div className="chat">
                    <ul>
                    {message.map(i => (
                        <li>{i.mensaje}</li>
                    ))}
                    </ul>
                </div>
                <div className="chatButtons">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    <button onClick={handledAdd}>Send</button>
                </div>
            </div>
        </>
    );
}

export default Chat;