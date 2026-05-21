function DashboardCard({title,value}){

return(

<div className="bg-white shadow-lg rounded-xl p-5 w-56">

<h3 className="text-gray-500">
{title}
</h3>

<h1 className="text-3xl font-bold mt-3">
{value}
</h1>

</div>

)

}

export default DashboardCard