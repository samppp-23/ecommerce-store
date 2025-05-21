import { Outlet } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
