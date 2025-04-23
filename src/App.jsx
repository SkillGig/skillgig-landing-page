import { Route, Routes } from "react-router-dom";

// import Container from "./containers/Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>The new Landing page</div>} />
    </Routes>
  );
}

export default App;
