export default function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="">
        <h1 className="text-2xl font-amoria text-gray-900">Amoura</h1>
      </div>
      <nav className="flex justify-around gap-15">
        <p>Home</p>
        <p>Menu</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </header>
  )
}