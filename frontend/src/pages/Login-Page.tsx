import { FormEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
// @ts-ignore
import backgroundImg from "../images/Login-Page/background.png";
// @ts-ignore
import logo from "../images/Login-Page/lifeplus-logo.png";
import { AuthContext } from "../interface/IAuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {SignIn, Signed} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=> {
    if (Signed) {
      navigate("/home");
    };
  },[navigate,Signed]);

  const handleSignIn = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const data = {
      email, 
      password
    };
    if(!email && !password || !email || !password){
      return alert("Campo obrigatório! Por favor, preencha seus dados de login (email e senha) corretamente para continuar.");
   };

    if(!email && !password || !email || !password){
       return alert(`Campo obrigatório! Por favor, preencha seus dados de login (email e senha) corretamente para continuar.`);
    };

    await SignIn(data);
  
  };

  return (
    <StyleLoginPage>
      <motion.div className="form-login"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
          }}
      >
        <form onSubmit={handleSignIn}>
          <InputLoginBox>
            <img className="logoImg" src={logo} alt="" />
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>
            <div className="wrap-input wrap-input2">
              <input
                className={password !== "" ? "has-val" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
            <p className="cadastroBtn">Não tem cadastro, clique <a href="#">aqui!</a></p>
            <p className="loginError">Seu e-mail ou senha estão incorretos.</p>
            
            <motion.button className="loginBtn"
              type="submit"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 },}}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </InputLoginBox>
        </form>
      </motion.div>
    </StyleLoginPage>
  );
}

const StyleLoginPage = styled.div`
  //---- tela de login ---- //
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0A7342;
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;

  .form-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: auto;
    height: auto;
  }

  form {
    display: flex;
    width: 28%;
    min-width: 435px;
    height: 60%;
    min-height: 500px;

    background: #f2e8d5;
    border: 2px solid rgb(255, 255, 255, 0.2);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(12px);
    border-radius: 20px;
  }
`;

const InputLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  .logoImg{
    margin-top: 20px;
    margin-bottom: -10px;
    width: 60%;
    height: auto;
  }

  .loginBtn{
    width: 120px;
    height: 40px;
    min-width: 120px;
    min-height: 40px;
    border-radius: 13px;
    border: none;
    background-color: #A04827;
    color: white;

    margin-bottom: 20px;

    font-size: 18px;

    &:hover{
      cursor: pointer;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
    }
  }

  .cadastroBtn{
    color: #043200;
    font-size: 14px;
    margin-bottom: 40px;
    a{
      color: #ff6c0a;
    }
    //display: none;
  }
  .loginError{
    color: red;
    margin-bottom: 40px;
    display: none;
  }

  .wrap-input{
    width: 85%;
    position: relative;
    border-bottom: 2px solid #72a060;
    margin-bottom: 37px;
  }

  .wrap-input2{
    margin-bottom: 0px;
  }

  .wrap-input input{
      width: 100%;
      height: 30px;
      border: none;
      margin-top: 37px;
      padding-left: 0 5px;

      font-size: 16px;
      color: #043200;
      line-height: 1.2;
      background-color: transparent;
      overflow: hidden;
      display: block;
  }

  .focus-input {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      
      pointer-events: none;
      color: #fc6804;
  }

  .focus-input::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;

      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;

      background: -webkit-linear-gradient(to left, #fc6804, #ffcdab);
      background: -o-linear-gradient(to left, #fc6804, #ffcdab);
      background: -moz-linear-gradient(to left, #fc6804, #ffcdab);
      background: linear-gradient(to left, #fc6804, #ffcdab);
  }

  .focus-input::after{
    font-size: 16px;
    color: #696969;
    line-height: 1.2;

    content: attr(data-placeholder);

    display: block;
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0px;
    padding-left: 5px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  input:focus {
      outline: none;
  }

  input:focus + .focus-input::after{
      top: -0.1px;
      color: #043200;
  }

  input:focus + .focus-input::before{
      width: 100%;
  }

  /* Mantém o placeholder e base colorida quando o input esta preenchido */
  .has-val + .focus-input::after{
      top: -0.1px;
      color: #696969;
  }

  .has-val + .focus-input::before{
      width: 100%;
  }
`;