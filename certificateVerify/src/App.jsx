import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AccessPortal from "./components/AccessPortal"
import { useRef } from "react"
import { Outlet, Route,Routes } from "react-router"
import StudentDashBoard from "./pages/Student/StudentDashBoard"
import UniversityDashboard from "./pages/University/UniversityDashboard"
import VeriferDashboard from "./pages/Verifier/VeriferDashboard"
import AdminDashBoard from "./pages/Admin/AdminDashBoard"
import LoginPage from "./pages/LoginPage"
import IssueNewCertificate from "./pages/University/IssueNewCertificate"


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
             <Route
                path="/UniversityDashBoard"
                element={
                  <NoNavbarLayout>
                    <UniversityDashboard />
                  </NoNavbarLayout>
                  }
              />
              <Route
                path="/UniversityDashBoard/IssueNewCertificate"
                element={
                  <NoNavbarLayout>
                    <IssueNewCertificate/>
                  </NoNavbarLayout>
                  }
              />
            <Route path="/VeriferDashBoard"
                  element={
                    <NoNavbarLayout>
                      <VeriferDashboard/>
                      <Outlet/>
                    </NoNavbarLayout>
                  }
            />
            <Route path="/AdminDashBoard"
                  element={
                    <NoNavbarLayout>
                      <AdminDashBoard/>
                    </NoNavbarLayout>
                  }
            />
            <Route path="/LoginPage"
                  element={
                    <NoNavbarLayout>
                      <LoginPage/>
                    </NoNavbarLayout>
                  }
            />
        </Routes>
      </>  
  )
}

export default App




