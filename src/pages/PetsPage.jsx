import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PetScreen from '../components/PetScreen';
function PetsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-9 transition-all duration-300  bg-slate-900 overflow-y-auto ml-0">
      <div
        >
         <PetScreen/>

        </div>
      </div>
  );
}

export default PetsPage;