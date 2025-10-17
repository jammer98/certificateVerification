import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AccessPortal from "./components/AccessPortal"
import { useRef } from "react"

function App() {

  const PortalSelectionRef = useRef(null); // for the transfer of the actoion on the portal of the access portal 

  return (
    <>
      <Navbar PortalSelectionRef={PortalSelectionRef} />
      <Home/>
      <AccessPortal ref={PortalSelectionRef} />  
      </>  
  )
}

export default App
