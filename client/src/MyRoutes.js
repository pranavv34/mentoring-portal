import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import DashboardPage from "./Pages/DashboardPage";
import ActivityPoints from "./Pages/ActivityPoints";
import BacklogPage from "./Pages/BacklogPage";
import DetainedPage from "./Pages/DetainedPage";
import Discovery from "./Pages/Discovery";
import CIEPage from "./Pages/CIEPage";
import LoginPageT from "./Pages/LoginPageT";
import RegistrationPageT from "./Pages/RegistrationPageT";
import CardTPage from "./Pages/CardTPage";
import DashboardTPage from "./Pages/DashboardTPage";
export default function MyRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/logint" element={<LoginPageT />} ></Route>
      <Route path="/register" element={<RegistrationPage />} ></Route>
      <Route path="/tregister" element={<RegistrationPageT />} ></Route>
      <Route path="/dashboard" element={<DashboardPage/>} ></Route>
      <Route path="/activity" element={<ActivityPoints/>} ></Route>
      <Route path="/backlog" element={<BacklogPage/>} ></Route>
      <Route path="/detained" element={<DetainedPage/>} ></Route>
      <Route path="/cie" element={<CIEPage/>} ></Route>
      <Route path="/cardt" element={<CardTPage/>} ></Route>
      <Route path="/student/:hallTicketNumber" element={<DashboardTPage/>} ></Route>
      <Route path="/discovery" element={<Discovery/>} ></Route>
    </Routes>
    // </BrowserRouter>
  );
}