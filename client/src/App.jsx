import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleGuard from "./components/RoleGuard";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import TimeTracking from "./pages/TimeTracking";
import Leave from "./pages/Leave";
import CalendarPage from "./pages/Calendar";
import Settings from "./pages/Settings";

function App() {

return(

<BrowserRouter>

<Routes>

{/* ================= LOGIN ================= */}

<Route
path="/login"
element={<Login/>}
/>


{/* ================= PROTECTED APP ================= */}

<Route

path="/"

element={

<ProtectedRoute>

<MainLayout/>

</ProtectedRoute>

}

>

{/* Dashboard */}

<Route
index
element={<Dashboard/>}
/>


{/* Employees → Admin only */}

<Route

path="employees"

element={

<RoleGuard
allowedRoles={[
"Admin"
]}
>

<Employees/>

</RoleGuard>

}

/>


{/* Tasks → Admin + User */}

<Route

path="tasks"

element={

<RoleGuard
allowedRoles={[
"Admin",
"User"
]}
>

<Tasks/>

</RoleGuard>

}

/>


{/* Attendance → Admin + User */}

<Route

path="attendance"

element={

<RoleGuard
allowedRoles={[
"Admin",
"User"
]}
>

<Attendance/>

</RoleGuard>

}

/>


{/* Reports → Admin only */}

<Route

path="reports"

element={

<RoleGuard
allowedRoles={[
"Admin"
]}
>

<Reports/>

</RoleGuard>

}

/>


{/* Calendar */}

<Route
path="calendar"
element={<CalendarPage/>}
/>


{/* Time Tracking */}

<Route

path="time-tracking"

element={

<RoleGuard
allowedRoles={[
"Admin",
"User"
]}
>

<TimeTracking/>

</RoleGuard>

}

/>


{/* Leave */}

<Route

path="leave"

element={

<RoleGuard
allowedRoles={[
"Admin",
"User"
]}
>

<Leave/>

</RoleGuard>

}

/>


{/* Settings → Admin only */}

<Route

path="settings"

element={

<RoleGuard
allowedRoles={[
"Admin"
]}
>

<Settings/>

</RoleGuard>

}

/>

</Route>

</Routes>

</BrowserRouter>

);

}

export default App;