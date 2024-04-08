import BM from "../assets/PVZ_BatataMina.webp"

function BatataM() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400">
        <h2 className="text-3xl font-bold text-blue-950">Batatamina</h2>
        
        <section className="flex items-center">
          <img className="my-20 w-64" src={BM} alt="" />

          <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">A batatamina é uma planta explosiva, adquirida nas primeiras fases. Ela é muito utilizada em fases difíceis, devido seu poder explosivo.</p>
        </section>          

        <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantas-vs-zumbis-brasil.fandom.com/pt-br/wiki/Batatamina?so=search" target="_blank">Batatamina Wiki</a>
    </section>
  )
}

export default BatataM
