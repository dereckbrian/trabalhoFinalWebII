import { Eye, EyeOff } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import styles from "./inputEye.module.css";

function LoginScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [toggle, setToggle] = useState(false)

    const senhaInputRef = useRef(null);

    const navigate = useNavigate();

    function onClickRegister(){
        navigate('/register?')
    }

    const handlePassword = () => setMostrarSenha(!mostrarSenha);

    const onClickLogin = () =>{
        const dadosLogin = {
            email,
            password
        };
        props.onLoginClick(dadosLogin);
    }

    return(
        <div className="justify-center w-screen h-screen flex place-items-center" style={{ backgroundColor: '#4B3C5D' }}>
            <div className="w-[500px] space-y-7 p-9 rounded-xl bg-slate-700 drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col items-center">
                    <img
                        src="/src/imgs/logo.png"
                        alt="ResidIFG"
                        className="w-[130px] h-[130px] object-contain filter drop-shadow-[0px_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <p className="text-xl font-bold mt-[-8px]" style={{ color: '#FFFFFF' }}>ResidIFG</p>
                </div>

                <h1 className="text-xl text-center font-bold text-slate-100">ACESSE SUA CONTA ABAIXO</h1>

                <div className="text-xl space-y-2">


                    <div className="text-xl space-y-4">
                        <div className="flex flex-col items-start">
                            <label className={styles.area}>
                                <input 
                                    type="text" 
                                    placeholder=" " 
                                    className="w-full p-2 mt-1 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="login-input" 
                                />
                                <label htmlFor="login-input">Email</label> 
                            </label>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className={styles.area}>
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder=" "
                                    className="w-full rounded-md" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="senha-input"
                                    ref={senhaInputRef}
                                />
                                <button onClick={(e) => {
                                    e.preventDefault(); 
                                    e.stopPropagation(); 
                                    handlePassword(); 

                                    if (senhaInputRef.current) {
                                        senhaInputRef.current.focus();
                                    }
                                }}
                                    tabIndex="-1"
                                >
                                    {!mostrarSenha && <Eye size={25}/>}
                                    {mostrarSenha && <EyeOff size={25}/>}
                                </button>
                                <label htmlFor="senha-input">Senha</label>
                            </div>
                        </div>
                    </div>

                    <div className="text-xl space-y-2">
                        <div className="flex items-center space-x-2 mt-4">
                            <div className={styles.App}>
                                <button
                                    className={`${styles['toggle-btn']} ${toggle ? styles.toggled : ''}`}
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <div className={styles.thumb}></div>
                                </button>
                            </div>
                            <label className="text-white text-sm">Salvar Acesso</label>
                        </div>
                    </div>

                    <div className="flex justify-center space-y-4 p-6 font-bold font-extrabold">
                        <button className="w-[200px] rounded-md bg-green-700 text-white px-4 py-2" onClick={()=>{
                            if(!email.trim() || !password.trim()){
                                return alert("Preencha todos os campos para logar");
                            }
                            onClickLogin();
                            setEmail("");
                            setPassword("");
                        }}>Entrar</button>
                    </div>

                    <div className="flex justify-center">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Esqueceu sua senha?</a>
                    </div>

                    <div className="flex justify-center">
                        <label className="text-sm text-slate-300">Não tem uma conta? <button onClick={()=> onClickRegister()} className="text-sm text-blue-600 hover:underline"> Registre-se</button></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
