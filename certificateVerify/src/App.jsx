import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AccessPortal from "./components/AccessPortal"
import { useRef } from "react"
import { Route,Router,Routes } from "react-router"
import StudentDashBoard from "./pages/Student/StudentDashBoard"
import UniversityDashboard from "./pages/University/UniversityDashboard"
import VeriferDashboard from "./pages/Verifier/VeriferDashboard"


function MainLayout( { children,PortalSelectionRef } ){
  return (
    <> 
    <Navbar PortalSelectionRef={PortalSelectionRef} />
    <div> {children} </div>
    </>
  )
}

function NoNavbarLayout({children}){
  return(
    <>{children}</>
  )
}

function App() {

  const PortalSelectionRef = useRef(null); // for the transfer of the actoion on the portal of the access portal 

  return (
    <>
        <Routes>
          <Route path="/" 
                element={
                <MainLayout PortalSelectionRef={PortalSelectionRef}> 
                  <Home/>
                  <AccessPortal ref={PortalSelectionRef} />
                </MainLayout>
                } 
          />
          <Route path="/StudentDashBoard"
                  element={
                    <NoNavbarLayout>
                      <StudentDashBoard/>
                    </NoNavbarLayout>
                  }
            />
            <Route path="/UniversityDashBoard"
                  element={
                    <NoNavbarLayout>
                      <UniversityDashboard/>
                    </NoNavbarLayout>
                  }
            />
            <Route path="/VeriferDashBoard"
                  element={
                    <NoNavbarLayout>
                      <VeriferDashboard/>
                    </NoNavbarLayout>
                  }
            />
        </Routes>
      </>  
  )
}

export default App
