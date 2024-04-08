import G from "../assets/PVZ_Girassol.webp"

function Girassol() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400">
        <h2 className="text-3xl font-bold text-blue-950">Girassol</h2>

        <section className="flex items-center">
          <img className="my-20 w-64" src={G} alt="" />

          <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">O Girassol é o primeiro e o principal produtor de sol que o jogador receberá. Ter Girassóis suficientes permitirá ao jogador obter sol suficiente e, como resultado, comprar plantas ofensivas adicionais para afastar a horda mais facilmente.</p>
        </section>

        <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantas-vs-zumbis-brasil.fandom.com/pt-br/wiki/Girassol" target="_blank">Girassol Wiki</a>
    </section>
  )
}

export default Girassol
