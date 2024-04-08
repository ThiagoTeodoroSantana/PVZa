import GirassolM from "./components/GirassolM"
import Header from "./components/Header"
import DisparE from "./components/DisparE"
import BatataM from "./components/BatataM"
import Noz from "./components/Noz"
import Mundos from "./components/Mundos"


function App() {
  return (
    <div className=" pt-10 pb-16 bg-lime-400">

      <Header />
    
      <main>
        <GirassolM />

        <DisparE />

        <BatataM />

        <Noz />

        <Mundos />
      </main>

    </div>
    
  )
}

export default App
