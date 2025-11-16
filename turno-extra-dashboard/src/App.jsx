import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CronogramaTurnoExtra from "./pages/TurnoExtraCronograma";
import TurnoExtraDashboards from "./pages/TurnoExtraDashboards";
import PresentacionInicial from "./pages/Slides";
import Despedida from "./pages/Despedida";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/presentacion" replace />} />

        {/* Presentación inicial con slides de Canva */}
        <Route path="/presentacion" element={<PresentacionInicial />} />

        {/* Tu cronograma actual */}
        <Route path="/cronograma" element={<CronogramaTurnoExtra />} />

        {/* Tus dashboards actuales */}
        <Route path="/dashboards" element={<TurnoExtraDashboards />} />

        {/* Página de despedida */}
        <Route path="/despedida" element={<Despedida />} />

        <Route path="*" element={<Navigate to="/presentacion" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
