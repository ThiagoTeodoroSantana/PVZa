import WildWest from "../assets/WildWest.webp"

function Egito() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400">
      <h2 className="text-3xl font-bold text-blue-950">Velho Oeste</h2>
      
      <section className="flex items-center">
      <img className="w-48 my-14" src={WildWest}/>
      <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">O Velho Oeste é o terceiro mundo em Plants vs. Zombies 2 e estava disponível desde o lançamento do jogo. Neste mundo, existem trilhos e carrinhos de minecart em seu gramado em diferentes locais e posições, dependendo do nível. Embora nada possa ser colocado no trilho do minecart, as plantas podem ser colocadas em um minecart e movidas ao longo do trilho à vontade.</p>
      </section>

      <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantsvszombies.fandom.com/wiki/Wild_West" target="_blank">Velho Oeste Wiki</a>
    </section>
  )
}

export default Egito