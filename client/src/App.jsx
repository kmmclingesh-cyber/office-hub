import { BrowserRouter, Routes, Route } from "react-router-dom";

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

<Route
path="/"
element={<MainLayout />}
>

<Route
index
element={<Dashboard/>}
/>

<Route
path="employees"
element={<Employees/>}
/>

<Route
path="tasks"
element={<Tasks/>}
/>

<Route
path="attendance"
element={<Attendance/>}
/>

<Route
path="reports"
element={<Reports/>}
/>

<Route
path="calendar"
element={<CalendarPage/>}
/>

<Route
path="time-tracking"
element={<TimeTracking/>}
/>

<Route
path="leave"
element={<Leave/>}
/>

<Route
path="settings"
element={<Settings/>}
/>

</Route>

</Routes>

</BrowserRouter>

)

}

export default App;