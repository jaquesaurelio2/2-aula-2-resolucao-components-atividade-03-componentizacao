import * as React from "react";
import "./index.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Highlight from "./components/Highlight";
import Main from "./components/Main";

/**
  - Identifique os possíveis componentes que esta página pode ter
  - Crie componentes individuais para cada uma das seções identificadas
  e mova o conteúdo para cada um deles
  - Importe os componentes nessa página para que ela fique com a mesma 
  aparência de antes
 */

export default function App() {
  return (
    <div>
      <NavBar />
      <Highlight />
      <Main />
      <Footer />
    </div>
  );
}
