import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Feture from "../../Pages/Dashboard/Feture/Feture";
import Dashboard from "../../Pages/Dashboard/MyAppointment/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import ForgetPasswordModal from "../../Pages/Login/ForgetPasswordModal";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            },
            {
                path:"/forgetpass",
                element:<ForgetPasswordModal></ForgetPasswordModal>
            },
            {
                path:'*',
                element:'NO ITEAMS ARE FOUND'
            }
        ],
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/feture',
                element:<Feture></Feture>
            },
            {
                path:'*',
                element:'NO ITEAMS ARE FOUND'
            }
        ]
      }
])
export default router;
