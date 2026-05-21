import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout(){

return(

<div className="flex">

<Sidebar/>

<div className="ml-64 flex-1 p-8 bg-gray-100 min-h-screen">

<Navbar/>

<div className="mt-8">

<Outlet/>

</div>

</div>

</div>

)

}

export default MainLayout;