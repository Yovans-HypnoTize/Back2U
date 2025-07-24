import Login from "./pages/auth/Login"
import './App.css'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import Dashboard from "./pages/dashboard/Dashboard";
import { createBrowserRouter,RouterProvider, useNavigate } from "react-router-dom";
import Layout from "./pages/ui/Layout";
import DashboardLayout from "./pages/ui/DashboardLayout";

function App() {
  const token = Cookies.get("accessToken")

  const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/",
      element:<DashboardLayout/>
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  )
}

export default App
