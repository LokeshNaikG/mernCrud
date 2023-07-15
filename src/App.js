import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Adduser from "./Pages/Adduser";
import Color from "./Pages/Colour";
import Items from "./Pages/Items";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route exact path="/" Component={Home} />
          <Route path="/addUser" Component={Adduser} />
          <Route path="/userDetails/:id" Component={Adduser} />
          <Route path="/color" Component={Color} />
          <Route path="/items" Component={Items}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={Signup}/>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
