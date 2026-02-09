export default function Footer() {
  return (
    <footer className="bg-black/97 text-white p-7">
        <div className="flex justify-between items-center">
            <nav className=" text-xl flex flex-col font-brand">
            <a href="#home" className="mx-4 hover:text-gray-400">Home</a>
            <a href="#about" className="mx-4 hover:text-gray-400">About</a>
            <a href="#projects" className="mx-4 hover:text-gray-400">Menu</a>
            <a href="#contact" className="mx-4 hover:text-gray-400">Reservation</a>
        </nav>
        <h2 className="text-3xl font-amoria text-gray-900 filter invert">Amoura</h2>
        </div>
        
      <p className="text-center font-brand mt-10">&copy; 2026 Amoura. All rights reserved.</p>
    </footer>
  );
}