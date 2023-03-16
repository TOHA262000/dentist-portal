import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Feture from "../../Pages/Dashboard/Feture/Feture";
import ManageDoctors from "../../Pages/Dashboard/ManageDonctors/ManageDoctors";
import Dashboard from "../../Pages/Dashboard/MyAppointment/Dashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import ForgetPasswordModal from "../../Pages/Login/ForgetPasswordModal";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
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
                element:<NotFound></NotFound>
            }
        ],
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
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
                path:'/dashboard/users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/add-doctor',
                element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`),
                element:<Payment></Payment>,
                
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ]
      }
])
export default router;
