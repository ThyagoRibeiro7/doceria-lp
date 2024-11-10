import "./email-input.css";

export default function EmailInput() {
    return (
        <section className="email-input-section container">
            <h2>Inscreva-se para receber nossas novidades!</h2>
            <div className="email-input">
                <input type="text" placeholder="Seu melhor e-mail" />
                <div className="send-btn">
                    <button>Enviar</button>
                    <span class="material-symbols-outlined">
                        send
                    </span>
                </div>
            </div>
        </section>
    )
};
