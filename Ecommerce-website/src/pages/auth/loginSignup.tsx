import Navbar from "../../components/Navbar.tsx"
import "../../css/loginSignup.css"
import user_icon from './Assets/person.png' 
import email_icon from './Assets/email.png' 
import password_icon from './Assets/password.png' 
import {useEffect, useRef, useState} from "react"


function LoginSignup() {

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    })

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd] )

    return (
      <>
        <Navbar />
          <div className="pt-32 flex justify-center h-screen bg-amber-400">
            <div className="flex flex-col bg-white w-125 pl-15 pr-15 pt-5 pb-5 h-150 rounded-2xl">
              <div className="flex flex-col justify-center items-center gap-5 w-100%">
                <div className="text-purple-700 text-6xl font-bold">Register</div>
                <div className="w-20 h-1 bg-purple-700 rounded-[9px]"></div>
              </div>

              <div className="mt-15 flex flex-col gap-5">
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input 
                    type="text" 
                    className="input_text" 
                    placeholder="name"
                    />
                </div>

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
                  <div className="submit" >Register</div>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }

export default LoginSignup
