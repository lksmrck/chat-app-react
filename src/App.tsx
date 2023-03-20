import MainPage from "./pages/MainPage";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
/* import Layout from "./components/ui/Layout"; */
import { Layout } from "./components/ui/styled";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/login/ProtectedRoutes";

function App() {
  return (
    <div>
      <Layout>
        <RouterRoutes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          {/*     <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/*     <Route element={<ProtectedRoutes allowedRights={["tbd"]} />}> */}
          <Route path="/conversations" element={<MainPage />} />
          {/*   </Route> */}
        </RouterRoutes>
      </Layout>
    </div>
  );
}

export default App;
