import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

export default function ChatMessage() {

  const [messages, setMessages] = useState([]);
    const messageRef = useRef(null);

    useEffect(() => {
        messageRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.elements.message.value;
        if (message.trim() === "") {
            alert("Digite uma mensagem");
            return;
        }
        setMessages([...messages, { text: message, sender: "user" }]);
        event.target.reset();
    };

  return (
    <>
      
    <section id="container">
        <header>Atendimento on-line

            <span className="sair">
                <Link className="btn-sair"
                  to="/">
                  Sair
                </Link>
            </span>
        </header>
        
        <section id="messages">
        <div class="message to">
                <h4 class="name">Atendente diz:</h4>
                <div class="content">Blabla blabla blabla</div>
            </div>
            <div class="message to">
                <h4 class="name">Atendente diz:</h4>
                <div class="content">Blabla blabla blabla</div>
            </div>

            <div class="message from">
                <h4 class="name">Você diz:</h4>
                <div class="content">Blabla blabla blabla</div>
            </div>
            <div class="message from">
                <h4 class="name">Você diz:</h4>
                <div class="content">Blabla blabla blabla</div>
            </div>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.sender === "user" ? "from" : "to"}`}
                >
                    <h4 className="name">{message.sender === "user" ? 'Você' : "Atendente"} diz:</h4>
                    <div className="content">{message.text}</div>
                </div>
            ))}
            <div ref={messageRef}></div>
        </section>

        <form onSubmit={handleSubmit} id="formMessage">
            <textarea
                name="message"
                id="iTextMessage"
                cols="30"
                rows="1"
                placeholder="Digite sua mensagem..."
            ></textarea>
            <button type="submit">ENVIAR</button>
        </form>
    </section>

    </>
  );
}
