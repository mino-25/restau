import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black/97 text-white p-7">
        <div className="flex justify-between items-center">
            <nav className=" text-xl flex flex-col font-brand">
            <Link to="/" className="mx-4 hover:text-gray-400">Home</Link>
            <Link to="/about" className="mx-4 hover:text-gray-400">About</Link>
            <Link to="/menu" className="mx-4 hover:text-gray-400">Menu</Link>
            <Link to="/contact" className="mx-4 hover:text-gray-400">Reservation</Link>
        </nav>
        <h2 className="text-3xl font-amoria text-gray-900 filter invert">Amoura</h2>
        </div>
        
      <p className="text-center font-brand mt-10">&copy; 2026 Amoura. All rights reserved.</p>
    </footer>
  );
}