import MP from "../assets/PirateSeas.webp"

function Egito() {
  return (
    <section className="justify-center w-3/4 border-8 mt-14 p-14 pl-20 border-purple-950 rounded-2xl ml-28 bg-yellow-400">
      <h2 className="text-3xl font-bold text-blue-950">Mar dos Piratas</h2>
      
      <section className="flex items-center">
      <img className="w-48 my-14" src={MP} alt="" />

      <p className="w-7/12 ml-24 border-4 p-10 border-white rounded-2xl text-white bg-purple-700">O Mar dos piratas é o segundo mundo em Plants vs. Zombies 2 . É baseado em um antigo navio pirata em mar aberto. É o lar de zumbis piratas e de algumas plantas . É desbloqueado usando uma Chave Mundial , que só pode ser obtida após completar o Egito Antigo - Dia 6 (anteriormente era o Egito Antigo - Dia 8 antes da atualização 7.1)</p>
      </section>

      <a className="text-blue-500  font-medium p-5 bg-white border-4 border-white rounded-3xl hover:bg-purple-700 hover:text-white" href="https://plantsvszombies.fandom.com/wiki/Pirate_Seas" target="_blank">Mar dos Piratas Wiki</a>
    </section>
  )
}

export default Egito