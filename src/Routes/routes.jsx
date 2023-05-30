import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MyTask from "../Pages/MyTask/MyTask";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path:'/',
                element: <Home></Home>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/signup', 
                element: <SignUp></SignUp>
            }, 
            {
                path: '/my-task', 
                element: <MyTask></MyTask>
            }, 
            {
                path: '/add-task', 
                element: <AddTask></AddTask>
            }, 
            {
                path: '/completed-task', 
                element: <CompletedTask></CompletedTask>
            }
        ]
    }
])

export default routes;