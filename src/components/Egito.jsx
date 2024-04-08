import Egypt from "../assets/AncientEgypt.webp"

function Egito() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400">
      <h2 className="text-3xl font-bold text-blue-950">Egito Antigo</h2>
      
      <section className="flex items-center">
      <img className="w-48 my-14" src={Egypt} alt="" />

      <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">O Egito Antigo é o primeiro mundo em Plants vs. Zombies 2 . A verdadeira jornada do jogador começa aqui e o próprio mundo é o lar de uma variedade de múmias zumbis. Existem 25 níveis (10 níveis de "Expansão" que são muito mais difíceis também existem para este mundo, mas são níveis de tempo limitado acessados ​​​​apenas no Travel Log desde a atualização 7.4) neste mundo, 6 plantas a serem obtidas e 15 zumbis para lutar contra.</p>
      </section>

      <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantsvszombies.fandom.com/wiki/Ancient_Egypt" target="_blank">Egito Wiki</a>
    </section>
  )
}

export default Egito