import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PacotesScreen from '../components/PacoteScreen';
function PetsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-9 transition-all duration-300  bg-slate-900 overflow-y-auto ml-0">
      <div
        >
         <PacotesScreen/>

        </div>
      </div>
  );
}

export default PetsPage;