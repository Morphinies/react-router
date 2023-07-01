import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <h1>App</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
