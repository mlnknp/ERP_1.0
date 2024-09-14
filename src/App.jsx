import "./App.css";
// import Header from "./Components/Header.jsx";
// import SideBar from "./Components/Sidebar.jsx";
import Login from "./Components/Login.jsx";
// import CreateSchool from "./Components/CreateSchool.jsx";
// import Footer from "./Components/Footer.jsx";
// import { AppContent } from "./Components/AppContent.jsx";
// import SAdminprofile from "./Components/SAdminprofile.jsx";
// import { StudentProfile } from "./Components/StudentProfile.jsx";
// import TeacherProfile from "./Components/TeacherProfile.jsx";

function App() {
  return (
    <div>
       {/* <Header /> */}
      <div className="row">
        <div className="col-5">
          {/* <SideBar /> */}
        </div>
        <div className="col-7">
          {/* <AppContent/> */}
          {/* <CreateSchool/> */}
          <Login/>
         </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
