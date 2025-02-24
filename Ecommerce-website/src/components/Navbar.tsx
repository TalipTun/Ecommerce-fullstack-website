import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 w-full bg-blue-500 h-24 flex flex-row items-center justify-between px-36 gap-16">
            <div>
              <Link to="/home/">
                <h1 className="flex items-center justify-center bg-gradient-to-r from-green-400 to-green-900 text-gray-150 
        text-2xl font-bold shadow-lg rounded-xl hover:scale-105 transition-transform duration-300
                w-32 h-16 text-center align-middle">Talipify</h1>
              </Link>
            </div>
            <div className="w-full">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full p-2 border border-black-800 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
            <Link to="/home/signup">
              <button className="w-32 h-16 bg-green-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300">
                Sign In
              </button>
            </Link>
            </div>
        </nav>
      </>
    )
  }

export default Navbar