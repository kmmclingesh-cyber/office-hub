import { useState, useEffect } from "react";
import EmployeeModal from "../components/EmployeeModal";

import {

getEmployees,
addEmployee as saveEmployeeToSheet,
deleteEmployee as removeFromSheet,
editEmployee as updateSheetEmployee

}
from "../services/googleSheetService";

function Employees() {

  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Load data on page load
  useEffect(() => {

    loadEmployees();

  }, []);


  // ===============================
  // Fetch Employees from Sheet
  // ===============================

  const loadEmployees = async () => {

    try {

      setLoading(true);

      const data = await getEmployees();

      const formattedData = data.map((emp) => ({

        id: emp.ID || "",
        name: emp.Name || "",
        department: emp.Department || "",
        email: emp.Email || ""

      }));

      setEmployees(formattedData);

    }
    catch (error) {

      console.log(
        "Employee loading failed:",
        error
      );

      alert(
        "Failed to load employees ❌"
      );

    }
    finally {

      setLoading(false);

    }

  };



  // ===============================
  // Save Employee
  // ===============================

  const saveEmployee = async (newEmployee) => {

    try {

      setLoading(true);

      await saveEmployeeToSheet({

        ID: newEmployee.id,
        Name: newEmployee.name,
        Department: newEmployee.department,
        Email: newEmployee.email

      });

      await loadEmployees();

      setShowModal(false);

      alert(
        "Employee Added Successfully ✅"
      );

    }
    catch (error) {

      console.log(
        "Save Error:",
        error
      );

      alert(
JSON.stringify(
error?.response?.data ||
error?.message ||
error
)
);
    }
    finally {

      setLoading(false);

    }

  };



  // ===============================
  // Delete Employee (UI only)
  // ===============================

const deleteEmployee =
async(id)=>{

const confirmDelete =
window.confirm(
"Delete employee?"
);

if(!confirmDelete)
return;

try{

setLoading(true);

await removeFromSheet(
id
);

await loadEmployees();

alert(
"Employee deleted ✅"
);

}
catch(error){

console.log(
error
);

alert(
"Delete failed ❌"
);

}
finally{

setLoading(false);

}

};



  // ===============================
  // Edit Employee (UI only)
  // ===============================

const editEmployee =
async(emp)=>{

const updatedName =
prompt(
"Enter new name",
emp.name
);

if(!updatedName)
return;

try{

setLoading(true);

await updateSheetEmployee({

ID:emp.id,
Name:updatedName,
Department:emp.department,
Email:emp.email

});

await loadEmployees();

alert(
"Employee updated ✅"
);

}
catch(error){

console.log(
error
);

alert(
"Update failed ❌"
);

}
finally{

setLoading(false);

}

};



  // ===============================
  // Search Filter
  // ===============================

  const filteredEmployees =

    employees.filter(

      (emp) =>

        emp.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )

    );



  return (

    <div className="relative">


      {/* Loading Overlay */}

      {

        loading && (

          <div
            className="
            fixed
            top-0
            left-0
            w-full
            h-full
            bg-black/40
            flex
            justify-center
            items-center
            z-50
            "
          >

            <div
              className="
              bg-white
              p-8
              rounded-2xl
              shadow-xl
              text-center
              "
            >

              <div
                className="
                animate-spin
                rounded-full
                h-14
                w-14
                border-4
                border-blue-600
                border-t-transparent
                mx-auto
                mb-4
                "
              />

              <p className="font-semibold">

                Loading Employees...

              </p>

            </div>

          </div>

        )

      }



      {/* Header */}

<div className="flex items-center gap-4 mb-8">

  {/* Search */}

  <input
    type="text"
    placeholder="Search employee..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    className="
    flex-1
    p-4
    rounded-xl
    border
    "
  />

  {/* Refresh */}

  <button
    onClick={loadEmployees}
    className="
    bg-white
    p-4
    rounded-xl
    shadow
    hover:bg-gray-100
    transition
    "
  >
    🔄
  </button>

  {/* Add Employee */}

  <button
    onClick={()=>setShowModal(true)}
    className="
    bg-blue-600
    text-white
    px-6
    py-4
    rounded-xl
    hover:bg-blue-700
    "
  >
    + Add Employee
  </button>

</div>

      {/* Table */}

      <div
        className="
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        "
      >

        <table className="w-full">

          <thead>

            <tr
              className="
              border-b
              h-14
              text-left
              "
            >

              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>

          </thead>


          <tbody>

            {

              filteredEmployees.length > 0

              ?

              filteredEmployees.map((emp)=>(

                <tr
                  key={emp.id}
                  className="
                  border-b
                  h-16
                  hover:bg-gray-50
                  "
                >

                  <td>{emp.id}</td>

                  <td>{emp.name}</td>

                  <td>{emp.department}</td>

                  <td>{emp.email}</td>

                  <td>

                    <div className="flex gap-3">

                      <button
                        onClick={()=>
                        editEmployee(emp)
                        }
                        className="
                        bg-yellow-500
                        px-4
                        py-2
                        rounded-lg
                        text-white
                        "
                      >

                        Edit

                      </button>


                      <button
                        onClick={()=>
                          deleteEmployee(emp.id)
                        }
                        className="
                        bg-red-600
                        px-4
                        py-2
                        rounded-lg
                        text-white
                        "
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))

              :

              (

                <tr>

                  <td
                    colSpan="5"
                    className="
                    text-center
                    py-10
                    text-gray-500
                    "
                  >

                    No employees found 😔

                  </td>

                </tr>

              )

            }

          </tbody>

        </table>

      </div>



      {/* Modal */}

      {

        showModal && (

          <EmployeeModal

            closeModal={()=>
              setShowModal(false)
            }

            addEmployee={saveEmployee}

          />

        )

      }

    </div>

  );

}

export default Employees;