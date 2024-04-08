import NozO from "../assets/PVZ_Noz.webp"

function Noz() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400 mb-28">
        <h2 className="text-3xl font-bold text-blue-950">Noz-Obstáculo</h2>

        <section className="flex items-center">
          <img className="my-20 w-64" src={NozO} alt="" />

          <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">A Noz-Obstáculo é a quarta planta do jogo, você consegue ela após vencer o nível 1-3. Diferente de outas plantas que não tem uma resistência muito grande, a Noz tem uma grande resistência em comparação a outras plantas.</p>
        </section>

        <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantas-vs-zumbis-brasil.fandom.com/pt-br/wiki/Noz-Obst%C3%A1culo?so=search" target="_blank">Noz-Obstáculo Wiki</a>
    </section>
  )
}

export default Noz
