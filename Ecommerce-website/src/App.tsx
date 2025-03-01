import './css/App.css'
import {getItems} from "./components/api.ts"
import { useEffect } from "react";  // Import React and useEffect
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx"; // Your main page
import LoginSignup from "./pages/auth/loginSignup.tsx"; // Your Sign Up page

function App() {
  useEffect(() => {
    async function fetchData() {
      const item = await getItems();  
      console.log(item);  
    }
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home/" element={<Home />} />
          <Route path="/home/signup" element={<LoginSignup />} />
        </Routes>
      </Router>
    </>
  );
}


export default App
