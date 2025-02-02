import Navbar from "../../components/Navbar.tsx"
import "./loginSignup.css"
import user_icon from './Assets/person.png' 
import email_icon from './Assets/email.png' 
import password_icon from './Assets/password.png' 


function LoginSignup() {
    return (
      <>
        <Navbar />

        <div className="container">

          <div className="header">
            <div className="text">Sign up</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">

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
