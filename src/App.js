import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./createUser";
import UpdateUser from "./updateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/edit/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
