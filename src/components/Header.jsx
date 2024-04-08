import logo from "../assets/PVZ_Logo.webp"

function Header() {
  return (
    <header className="flex  bg-purple-700 py-4 border-y-4 border-white">
        <h1 className="text-5xl font-bold mr-8 text-white ml-28 mt-1">As Quatro Plantas básicas</h1>
        <img className="w-28" src={logo} alt="" />
    </header>
  )
}

export default Header
