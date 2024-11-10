import { useState } from "react";
import "./nav-bar.css";

// images imports
import logo from "../../assets/images/LogoDoceria.avif";
import DrippingTopping from "../../assets/images/CoberturaEscorrendo.avif"

// compoenents import
import { SideBar } from "../SideBar/SideBar";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <img src={DrippingTopping} alt="Cobertura Escorrendo" className="topping" />
            <div className="logo">
                <img src={logo} alt="Docini Logo" />
            </div>
            <ul className="nav-options">
                <li><a href='#Home'>Home</a></li>
                <li><a href='#HighLights'>Destaques</a></li>
                <li><a href='#Our Chef'>Nosso Chefe</a></li>
                <li><a href='#Testimonials'>Recomendações</a></li>
            </ul>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span class="material-symbols-outlined hamburguer-toggler">
                    menu
                </span>
            </button>

            {isOpen && <SideBar />}
        </nav>
    )
};
