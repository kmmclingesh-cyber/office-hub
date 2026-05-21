import DashboardCard from "../components/DashboardCard"
import EmployeeTable from "../components/EmployeeTable"
import TaskList from "../components/TaskList"
import ProductivityChart from "../components/ProductivityChart"
import ActivityFeed from "../components/ActivityFeed";

function Dashboard(){

return(

<div>

<div className="flex gap-5 flex-wrap">

<DashboardCard
title="Employees"
value="124"
/>

<DashboardCard
title="Tasks"
value="32"
/>

<DashboardCard
title="Worked Hours"
value="216"
/>

<DashboardCard
title="Productivity"
value="91%"
/>

<div className="grid grid-cols-3 gap-6 mt-8">

<div className="col-span-2">

<EmployeeTable/>

</div>

<div>

<ActivityFeed/>

</div>

</div>

</div>

{/* Rest of dashboard */}

</div>

)

}

export default Dashboard