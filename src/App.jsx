import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  return (
    <div className="root-container">
      <Header></Header>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
