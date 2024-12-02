
import React from "react";
import Link from "next/link";
import Image from "next/image";
import lion from '../../public/assets/lion-leao-logo-png_seeklogo-344756.png'
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
         
            <Image src={lion} alt="Logo" width={50} height={50} />
         
        </div>

        {/* Search Box */}
        <div className="search-box">
          <form action="">
          <input type="text" placeholder="Search..." size={12} className="search lg:size-10 lg:w-52" />
          <button className="text-blue-500 bg-green-100 hover:bg-blue-300 p-2 m-2">Search</button>
          </form>
        </div>

        {/* Hamburger Menu for Mobile */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-button">
          ☰
        </label>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
           <button className="button p-2 bg-blue-400 "> <Link href="/">Home</Link></button> 
          </li>
          <li>
            <button className="button p-2 bg-blue-200"><Link href="/about">About</Link></button>
          </li>
          <li>
            <button className="button p-2 bg-blue-200"><Link href="/services">Services </Link></button>
          </li>
          <li>
            <button className="button p-2 bg-blue-200"><Link href="/contact">Contact </Link></button>
          </li>
          <li>
            <button className="button p-2 bg-blue-200"><Link href="/contact">Messaging </Link></button>
          </li>
        </ul>
      </div>

      {/* Styles */}
      <style>{`
        .navbar {
          background-color: #333;
          color: white;
          padding: 0.5rem 1rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .button {
          border-radius:12px;
          }

        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .search-box input {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .menu-toggle {
          display: none;
        }

        .menu-button {
          display: none;
          background: none;
          color: white;
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
        }

        .nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
        }

        .nav-links li {
          margin-left: 1rem;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
        }

        /* Responsive styles */
        @media screen and (max-width: 768px) {
          .search-box {
         
            margin: 0.5rem 0;
          }

        .search-box input {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
          .menu-button {
            display: block;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            left: 4;
          }

          .menu-toggle:checked + .menu-button + .nav-links {
            display: flex;
          }

          .nav-links li {
            margin: 0.5rem 0;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
