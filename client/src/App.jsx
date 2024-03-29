import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/Home/home";
import Login from "./views/login/Login";
import Registro from "./views/Registro/Registro";
import AboutUs from "./views/AboutUs/AboutUs";
import AuthContextProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./router/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./router/PrivetRoutes/PrivateRoutes";
import CompanyHome from "./views/CompanyHome/CompanyHome";
import OrganizationHome from "./views/OrganizationHome.jsx/OrganizationHome";
import Match from "./views/Match/Match";
import RegistroOrg from "./views/RegisterOrg/RegistroOrg";
import ModifyCompany from "./views/ModifyCompany/ModifyCompany";
import PerfilCompany from "./views/PerfilCompany/PerfilCompany";
import PerfilOrganization from "./views/PerfilOrganization/PerfilOrganization";
import ModifyOrganization from "./views/ModigyOrganization/ModifyOrganization";
import Plans from "./views/Plans/Plans";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AuthContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/empacthy" element={<AboutUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/registroorg" element={<RegistroOrg />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/perfil" element={<PerfilCompany />} />
              <Route path="/companyhome" element={<CompanyHome />} />
              <Route path="/companyhome/match" element={<Match />} />
              <Route path="/companyhome/modify" element={<ModifyCompany />} />
              <Route path="/companyhome/plans" element={<Plans />} />
              <Route path="/organizationhome" element={<OrganizationHome />} />
              <Route
                path="/organizationhome/modify"
                element={<ModifyOrganization />}
              />
              <Route path="/perfilorg" element={<PerfilOrganization />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
