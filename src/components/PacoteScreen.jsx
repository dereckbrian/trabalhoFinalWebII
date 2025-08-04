import Navbar from "./Navbar"
import { useState } from 'react';
import { MailOutlined, GithubOutlined, LockOutlined, UserOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import SidebarLayout from "./SidebarLayout";
function PacotesScreen() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    return (
       <div className="w-[95%] h-[95%] flex rounded-xl bg-slate-900 drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="flex-1 p-9 transition-all duration-300 overflow-y-auto ml-0">
                <h1 className="text-white
">Teste da pagina de pacote</h1>
            </div>
            
            
        </div>


    )
}

export default PacotesScreen