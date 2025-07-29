import { Route, Routes } from "react-router-dom";

import Home from "./containers/Home/Home";

// import Container from "./containers/Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
