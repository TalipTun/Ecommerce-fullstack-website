function Navbar() {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 w-full border-b border-green-400 h-24 flex flex-row items-center justify-between px-36 gap-16">
            <div>
                <h1 className="flex items-center justify-center bg-gradient-to-r from-green-400 to-green-900 text-gray-150 
        text-2xl font-bold shadow-lg rounded-xl hover:scale-105 transition-transform duration-300
                w-32 h-16 text-center align-middle">Talipify</h1>
            </div>
            <div className="w-full">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full p-2 border border-black-800 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <p className="text-green-800">cart</p>
            </div>
        </nav>
      </>
    )
  }

export default Navbar
