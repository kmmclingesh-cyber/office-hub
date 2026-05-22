function EmployeeDetailsModal({

employee,
closeModal

}){

return(

<div
className="
fixed
inset-0
bg-black/50
flex
justify-center
items-center
z-50
"
>

<div
className="
bg-white
w-[500px]
rounded-2xl
shadow-xl
p-8
relative
"
>

<button
onClick={closeModal}
className="
absolute
top-4
right-4
text-xl
"
>

✖

</button>


<div className="text-center">

<img

src={
employee.photo ||

"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
}

alt="employee"

className="
w-32
h-32
rounded-full
mx-auto
mb-4
object-cover
border
"
/>

<h2
className="
text-2xl
font-bold
"
>

{employee.name}

</h2>

<p className="text-gray-500">

{employee.role}

</p>

</div>


<div
className="
mt-8
space-y-4
"
>

<div>

<b>ID:</b>

{employee.id}

</div>


<div>

<b>Department:</b>

{employee.department}

</div>


<div>

<b>Email:</b>

{employee.email}

</div>


<div>

<b>Phone:</b>

{employee.phone}

</div>


<div>

<b>Joining Date:</b>

{employee.joiningDate}

</div>

</div>

</div>

</div>

);

}

export default EmployeeDetailsModal;