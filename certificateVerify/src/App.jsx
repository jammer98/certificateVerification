import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AccessPortal from "./components/AccessPortal"
import { useRef ,useEffect} from "react"

function App() {
  
  useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 
  const PortalSelectionRef = useRef(null);

  

  return (
    <>
      <Navbar PortalSelectionRef={PortalSelectionRef} />
      <Home/>
      <AccessPortal ref={PortalSelectionRef} />  
      </>  
  )
}

export default App
