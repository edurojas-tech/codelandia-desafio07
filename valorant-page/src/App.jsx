import "./assets/css/app.css"
import NavBar from "./components/navBar"
import TitlePage from "./components/titlePage"

function App() {
  return (
    <div className="app">
        <div className="app__itens">
          <NavBar links={[
            {url: "https://playvalorant.com/pt-br/maps/", desc: "Informações"},
            {url: "https://playvalorant.com/pt-br/media/", desc: "Mídia"},
            {url: "https://support-valorant.riotgames.com/hc/pt-br/", desc: "Suporte"}
          ]}/>
          <TitlePage />
        </div>
        <></>
    </div>
  )
}

export default App
