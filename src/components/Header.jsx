export default function Header() {
  return (
    <header className=" absolute top-0 left-0 right-0 fixed flex justify-between items-center p-5 z-50 text-white mix-blend-difference">
      <div className="">
        <h1 className="text-2xl font-amoria">Amoura</h1>
      </div>
      <nav className="flex justify-around gap-15 font-code">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#menu" className="hover:text-gray-400">Menu</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </header>
  )
}