import Navbar from "../components/Navbar"
import "../css/home.css"

function Home() {
    return (
      <>
        <Navbar />
        <div className="pt-32 bg-amber-400 h-screen">
          <h1 className="text-center text-6xl font-bold">Welcome to Talipify!</h1>
        </div>
      </>
    )
  }

export default Home
