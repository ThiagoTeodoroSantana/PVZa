import Egito from "../components/Egito"
import M from "../assets/PVZ_Mundos.webp"
import MarPirata from "../components/MarDosPiratas"
import VelhoEste from "../components/VelhoOeste"

function Mundos() {
  return (
    <div>
      <section className="flex bg-purple-700 py-4 border-y-4 border-white">
        <h2 className="text-5xl font-bold mr-10 text-white ml-28 mt-2">Linhas do tempo Originais</h2>
        <img className ="w-20" src={M} alt="" />
      </section>

      <Egito />

      <MarPirata />

      <VelhoEste />

    </div>
  )
}

export default Mundos
