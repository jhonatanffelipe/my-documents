import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Documents } from "./Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Documentos - Início" />} />
        <Route
          path="/documents"
          element={<Documents title="Documentos - Início" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
