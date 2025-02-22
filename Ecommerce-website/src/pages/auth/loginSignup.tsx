import Navbar from "../../components/Navbar.tsx"
import "../../css/loginSignup.css"
import user_icon from './Assets/person.png' 
import email_icon from './Assets/email.png' 
import password_icon from './Assets/password.png' 
import { useState } from "react"


function LoginSignup() {
    const [action, setAction] = useState("Sign up");

    return (
      <>
        <Navbar />
          <div className="pt-32 flex justify-center h-screen bg-amber-400">
            <div className="flex flex-col bg-white w-125 pl-15 pr-15 pt-5 pb-5 h-150 rounded-2xl">

              <div className="flex flex-col justify-center items-center gap-5 w-100%">
                <div className="text-purple-700 text-6xl font-bold">{action}</div>
                <div className="w-20 h-1 bg-purple-700 rounded-[9px]"></div>
              </div>

              <div className="mt-15 flex flex-col gap-5">
                {action === "Log in" ? <div></div> : <div className="input">
                  <img src={user_icon} alt="" />
                  <input type="text" className="input_text" placeholder="name"/>
                </div>}

                <div className="input">
                  <img src={email_icon} alt="" />
                  <input type="email" className="input_text" placeholder="email"/>
                </div>

                <div className="input">
                  <img src={password_icon} alt="" />
                  <input type="password" className="input_text" placeholder="password"/>
                </div>

                <div className="text-[#797979]">
                  Forgot password? <span className="text-[#4c00b4] cursor-pointer">Click here</span>
                </div>

                <div className="flex flex-row gap-10 justify-center items-center mt-3">
                  <div className={action === "Log in" ? "submit gray" : "submit"} onClick={() => {setAction("Sign up")}}>Sign up</div>
                  <div className={action === "Sign up" ? "submit gray" : "submit"}  onClick={() => {setAction("Log in")}}>Login</div>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }

export default LoginSignup
