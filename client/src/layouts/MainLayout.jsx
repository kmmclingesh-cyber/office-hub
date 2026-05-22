import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {

return(

<div
className="
min-h-screen
bg-[#f8fafc]
"
>

{/* Sidebar */}

<Sidebar/>


{/* Main Area */}

<div
className="
ml-[240px]
min-h-screen
px-8
py-6
"
>

{/* Navbar */}

<div
className="
sticky
top-0
z-40
bg-[#f8fafc]
pb-6
"
>

<Navbar/>

</div>


{/* Content */}

<div
className="
mt-2
"
>

<Outlet/>

</div>

</div>

</div>

)

}

export default MainLayout;