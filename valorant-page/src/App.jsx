import "./assets/css/app.css"
import NavBar from "./components/navBar"

function App() {
  return (
    <div className="app">
        <div>
          <NavBar links={[
            {url: "https://playvalorant.com/pt-br/maps/", desc: "Informações"},
            {url: "https://playvalorant.com/pt-br/media/", desc: "Mídia"},
            {url: "https://support-valorant.riotgames.com/hc/pt-br/", desc: "Suporte"}
          ]}/>
          teste
        </div>
        <div>
        </div>
    </div>
  )
}

export default App
