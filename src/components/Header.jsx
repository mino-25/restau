import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className=" absolute top-0 left-0 right-0 fixed flex justify-between items-center p-5 z-50 text-white mix-blend-difference">
      <div className="">
        <h1 className="text-2xl font-amoria">Amoura</h1>
      </div>
      <nav className="flex justify-around gap-15 font-code">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/menu" className="hover:text-gray-400">Menu</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
    </header>
  )
}