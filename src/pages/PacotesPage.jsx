import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PacotesScreen from '../components/PacoteScreen';
function PacotesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#4B3C5D]">
      <div
        >
         <PacotesScreen/>

        </div>
      </div>
  );
}

export default PacotesPage;