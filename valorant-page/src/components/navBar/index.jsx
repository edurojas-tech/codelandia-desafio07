/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./style.css"
import logo from "../../assets/images/logo.svg"
import share from "../../assets/images/share.png"

export default function NavBar(props) {
    return (
        <div className="navBar">
            <a href="https://playvalorant.com/pt-br/" target="_blank" rel="noreferrer">
                <img src={logo} alt="Valorant Game" />
            </a>
            {props.links.map((link, i) => (
                <a 
                    className="navBar__links" 
                    key={i} href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    {link.desc}
                </a>
            ))}
            <img src={share} alt="Compartilhar link" />
        </div>
    )
}