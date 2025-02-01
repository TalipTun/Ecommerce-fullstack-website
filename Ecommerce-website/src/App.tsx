import './App.css'
import Navbar from './Navbar.tsx'
import {getItems} from "./api.ts"
import { useEffect } from "react";  // Import React and useEffect

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
      <Navbar />
    </>
  );
}


export default App
