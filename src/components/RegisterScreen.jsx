import { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { data, useNavigate } from "react-router-dom"
import styles from "./inputEye.module.css";

function RegisterScreen(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const role = 'USER';
    const [repetirSenha, setRepetirSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarSenhaRepetir, setMostrarSenhaRepetir] = useState(false);

    const senhaInputRef = useRef(null);

    const senhaInputRefRepeat = useRef(null);

    const quandoClicado = () => {
    const dadosUser = {
        email,
        password,
        name,
        role
    };
    props.onRegisterClick(dadosUser);
}

    function onClickLogar(){
        navigate('/logar?')
    }

    const handlePassword = () => setMostrarSenha(!mostrarSenha);

     const handlePasswordRepetir = () => setMostrarSenhaRepetir(!mostrarSenhaRepetir);

    return(
        <div className="justify-center w-screen h-screen flex place-items-center" style={{ backgroundColor: '#4B3C5D' }}>
            <div className="w-[500px] space-y-7 p-9 rounded-xl bg-slate-700 drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">

                <div className="mt-[-8px]">
                    <h4 className="text-2xl text-center font-bold text-slate-100">CRIAR CONTA</h4>
                    <h5 className="text-1xl text-center text-slate-100">INSIRA SEUS DADOS ABAIXO</h5>
                </div>

                <div className="text-xl space-y-2 mt[-px]">

                    <div className="text-xl space-y-4">
                        <div className="flex flex-col items-start">

                            <label className={styles.area}>
                                <input type="text" 
                                    placeholder="" 
                                    className="w-full p-2 mt-1 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="text-white font-bold">E-mail</label>
                            </label>
                        
                        </div>

                         <div className="flex flex-col items-start">

                            <label className={styles.area}>
                                <input type="text" 
                                    placeholder="" 
                                    className="w-full p-2 mt-1 rounded-md"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="text-white font-bold">Nome</label>
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
                                <label htmlFor="senha-input" className="font-bold">Senha</label>
                            </div>
                        </div>

                    <div className="flex flex-col items-start">
                            <div className={styles.area}>
                                <input
                                    type={mostrarSenhaRepetir ? "text" : "password"}
                                    placeholder=" "
                                    className="w-full rounded-md" 
                                    value={repetirSenha}
                                    onChange={(e) => setRepetirSenha(e.target.value)}
                                    id="senha-input-Repetir"
                                    ref={senhaInputRefRepeat}
                                />
                                <button onClick={(e) => {
                                    e.preventDefault(); 
                                    e.stopPropagation(); 
                                    handlePasswordRepetir(); 

                                    if (senhaInputRefRepeat.current) {
                                        senhaInputRefRepeat.current.focus();
                                    }
                                }}
                                    tabIndex="-1"
                                >
                                    {!mostrarSenhaRepetir && <Eye size={25}/>}
                                    {mostrarSenhaRepetir && <EyeOff size={25}/>}
                                </button>
                                <label htmlFor="senha-input-Repetir" className="font-bold">Repetir Senha</label>
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-center space-y-4 p-6 font-bold font-extrabold">
                        <button className="w-[200px] rounded-md bg-green-700 text-white px-4 py-2" onClick={()=>{
                            if(!email.trim() || !password.trim() || !repetirSenha.trim()){
                                return alert("Preencha todos os campos para continuar");
                            }

                            if(password != repetirSenha){
                                return alert("A senhas devem coincidir")
                            }
                            quandoClicado();
                        
                            setEmail("");
                            setName("");
                            setPassword("");
                            setRepetirSenha("");
                        }}>Cadastrar</button>
                    </div>

                    <div className="flex justify-center">
                        <label className="text-sm text-slate-300">Já possui uma conta? <button onClick={()=> onClickLogar()} className="text-sm text-blue-600 hover:underline"> Logar</button></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
