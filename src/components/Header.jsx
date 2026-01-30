export default function Header() {
  return (
    <header className=" absolute top-0 left-0 right-0 fixed flex justify-between items-center p-5 z-50">
      <div className="">
        <h1 className="text-2xl font-amoria text-gray-900 filter invert">Amoura</h1>
      </div>
      <nav className="flex justify-around gap-15 filter invert">
        <p>Home</p>
        <p>Menu</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </header>
  )
}