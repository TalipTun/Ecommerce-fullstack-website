import Navbar from "../../components/Navbar.tsx"
import "./loginSignup.css"
import user_icon from './Assets/person.png' 
import email_icon from './Assets/email.png' 
import password_icon from './Assets/password.png' 


function LoginSignup() {
    return (
      <>
        <Navbar />

        <div className="flex flex-col bg-white pb-30 border-blue-900 border-8 w-150">

          <div className="flex flex-col justify-center gap-9 w-100% mt-30">
            <div className="text-purple-700 text-6xl font-bold">Sign up</div>
            <div className="w-61 h-2 bg-black rounded-[9px]"></div>
          </div>

          <div className="mt-55 flex flex-col gap-25">

            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" />
            </div>

            <div className="forgot-password">
              Forgot password? <span>Click here</span>
            </div>

            <div className="submit-container">
              <div className="submit">Sign up</div>
              <div className="submit">Login</div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default LoginSignup
