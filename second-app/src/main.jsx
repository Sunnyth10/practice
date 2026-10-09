import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uncontrolledforms from './uncontrolledforms.jsx'
import Ustate from './Ustate.jsx'
import Ueffect from './Ueffect.jsx'
import Chook from './assets/Chook.jsx'
import Userlist from './userlist.jsx'
import Usename from './Usename.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    <Usename />

    <Maincomp />
    <Singletop />


    
  


  </StrictMode>
)
