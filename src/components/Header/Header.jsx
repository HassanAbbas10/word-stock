import { useState } from "react";
import { Link } from "react-router-dom";
import book from "../../assets/book.png";
import { red } from "@mui/material/colors";
import { ShoppingCart } from "@mui/icons-material";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white rounded-b-md border-b border-solid border-violet-500 backdrop-filter backdrop-blur-lg bg-opacity-30 p-2">
        <div className=" container mx-auto flex justify-between items-center sticky">
          <div className="text-custom-red text-xl font-bold flex">
            <img src={book} height={52} width={52} />
            <p className="pt-4">Word-Stock</p>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-600 focus:outline-none "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <Link
              to="/"
              className="block lg:inline-block text-red-700 px-4 py-2 underline-offset-4 hover:underline rounded "
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block lg:inline-block text-red-700 px-4 py-2 underline-offset-4 hover:underline rounded "
            >
              Categories
            </Link>
            <Link
              to="/contact"
              className="block lg:inline-block text-red-700 px-4 py-2  underline-offset-4 hover:underline rounded "
            >
              Contact
            </Link>
          
              <Link
                to="/cart"
                className="relative italic flex items-center"
              >
                <ShoppingCart sx={{ color: red[700] }} className=" sm:ml-4" />
                <span className="bg-red-600 text-white absolute lg:top-0 lg:right-0 transform translate-x-1/2 -translate-y-1/2 py-0.5 px-1.5 border-custom-red rounded-full text-xs sm:ml-7">
                  0
                </span>
              </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
