import { useNavigate } from 'react-router-dom';
import AvisoScreen from '../components/AvisoScreen';
function AvisosPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-9 transition-all duration-300  bg-slate-900 overflow-y-auto ml-0">
      <div
        >
         <AvisoScreen/>

        </div>
      </div>
  );
}

export default AvisosPage;