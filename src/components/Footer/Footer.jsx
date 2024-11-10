// style import
import './Footer.css';

// images imports
import logo from "../../assets/images/LogoDoceria.avif";
import FacebookIcon from '../../assets/images/IconeFacebook.png';
import LinkedInIcon from '../../assets/images/IconeLinkedIn.png';
import InstagramIcon from '../../assets/images/IconeInstagram.png';


export function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-content'>
                <img src={logo} alt="Logo Doceria" />
                <h3>Nossas Redes Sociais</h3>

                <ul class='social-medias'>
                    <li><a href='#'><img src={FacebookIcon} alt="Icone do Facebook" /></a></li>
                    <li><a href='#'><img src={LinkedInIcon} alt="Icone do Facebook" /></a></li>
                    <li><a href='#'><img src={InstagramIcon} alt="Icone do Facebook" /></a></li>
                </ul>

            </section>

            <nav className='footer-nav'>
                <ul className='info'>
                    <h3>Informações</h3>
                    <li><a href='#'>Cadastre-se</a></li>
                    <li><a href='#'>Sobre Nós</a></li>
                    <li><a href='#'>Copyright</a></li>
                </ul>
                <ul className='contacts'>
                    <h3>Contatos</h3>
                    <li><a href='#'>docini@gmail.com.br</a></li>
                    <li><a href='#'>(11) 99999-9999</a></li>
                    <li><a href='#'>Rua Carlos II, Joinille</a></li>
                </ul>
                <ul className='menu'>
                    <h3>Cardápio</h3>
                    <li><a href='#'>Cardápio Online</a></li>
                </ul>
            </nav>
        </footer>
    );
}
