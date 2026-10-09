import react from 'react'
import { useContext } from 'react';
import {Logincontext} from './Usename.jsx'



const Singletop = () => {
    const isLoggedIn = useContext(Logincontext);
    console.log(isLoggedIn);

    return (
        <div>
            <h1>Single topic</h1>
        </div>
    )
}

export default Singletop;