import "./style.css"
import logoValorant from "../../assets/images/valorant-logo.svg"

export default function TitlePage() {
    return (
        <div className="TitlePage">
            <div className="TitlePage__itens">
                <h2>Um jogo de tiro tático baseado em personagem 5v5</h2>
                <img src={logoValorant} alt="Valorant" className="logoVALORANT"/>
            </div>
            <div className="TitlePage__itens">
                <p>
                    Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro
                    em primeira pessoa desenvolvido e publicado pela Riot Games.
                </p>
                <h1 className="title">Baixe e jogue VALORANT hoje</h1>
                <button>BAIXAR AGORA</button>
            </div>
            <div className="TitlePage__itens">
                © 2021 Riot Games, Inc. Riot Games, VALORANT e quaisquer logotipos associados são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.
            </div>
        </div>
    )
}