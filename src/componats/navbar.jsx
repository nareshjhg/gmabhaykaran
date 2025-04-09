import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-500">
          Abhaykaran
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-gray-200">
          <li>
            <Link to="/" className="hover:text-cyan-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-cyan-400">Services</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-cyan-400">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-gray-200">
          {isOpen ? (
            <X onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 px-4 pb-6 pt-2 space-y-3 text-center text-gray-200 shadow-md">
          <Link to="/" onClick={closeMenu} className="block hover:text-cyan-400">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-cyan-400">About</Link>
          <Link to="/services" onClick={closeMenu} className="block hover:text-cyan-400">Services</Link>
          <Link to="/gallery" onClick={closeMenu} className="block hover:text-cyan-400">Gallery</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-cyan-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
