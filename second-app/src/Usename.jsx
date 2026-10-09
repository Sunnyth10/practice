import React,{createComponent, createContext} from 'react'
import Maincomp from './Maincomp';

const Logincontext = createContext();
const Usename = () => {
    return (
        <Logincontext.Provider value={true}>
            <div>
                <Maincomp />
            </div>
        </Logincontext.Provider>
    );
};
export default Usename;

