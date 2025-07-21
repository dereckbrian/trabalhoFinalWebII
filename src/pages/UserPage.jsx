import UserScreen from "../components/UserScreen";
import { useEffect, useState } from "react";

function UserPage(){
    const [userName, setUserName] = useState('');

  

    return(
        <div>
            <UserScreen />
        </div>

    )
}

export default UserPage