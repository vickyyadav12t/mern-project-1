import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element ={<AppLayout><login/></AppLayout>}/>
    </Routes>
  );
}

export default App;
