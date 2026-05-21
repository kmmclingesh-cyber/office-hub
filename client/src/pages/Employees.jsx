import { useState, useEffect } from "react";
import EmployeeModal from "../components/EmployeeModal";

import {
  getEmployees,
  addEmployee as saveEmployeeToSheet
} from "../services/googleSheetService";

function Employees() {

  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  // Load employees on page load
  useEffect(() => {
    loadEmployees();
  }, []);

  // Fetch employees
  const loadEmployees = async () => {

    try {

      const data = await getEmployees();

      const formattedData = data.map((emp) => ({
        id: emp.ID || "",
        name: emp.Name || "",
        department: emp.Department || "",
        email: emp.Email || ""
      }));

      setEmployees(formattedData);

    } catch (error) {

      console.log(
        "Employee loading failed:",
        error
      );

    }

  };

  // Save employee
  const saveEmployee = async (newEmployee) => {

    try {

      await saveEmployeeToSheet({

        ID: newEmployee.id,
        Name: newEmployee.name,
        Department: newEmployee.department,
        Email: newEmployee.email

      });

      // Reload latest data from sheet
      await loadEmployees();

      setShowModal(false);

      alert("Employee added successfully");

    } catch (error) {

      console.log(
        "Save Error:",
        error
      );

      alert("Failed to save employee");

    }

  };

  // Delete employee (UI only)
  const deleteEmployee = (id) => {

    setEmployees((prev) =>
      prev.filter(
        emp => emp.id !== id
      )
    );

  };

  // Edit employee name
  const editEmployee = (id) => {

    const updatedName =
      prompt("Enter new employee name");

    if (!updatedName) return;

    setEmployees((prev) =>

      prev.map((emp) =>

        emp.id === id
          ? {
              ...emp,
              name: updatedName
            }
          : emp

      )

    );

  };

  // Search filter
  const filteredEmployees = employees.filter(

    (emp) =>

      emp.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

  );

  return (

    <div>

      {/* Top section */}

      <div className="flex justify-end mb-8">

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >

          + Add Employee

        </button>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full p-3 rounded-xl border mb-6"
      />

      {/* Table */}

      <div className="bg-white rounded-xl shadow-lg p-5">

        <table className="w-full">

          <thead>

            <tr className="border-b h-12">

              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              filteredEmployees.length > 0 ?

              filteredEmployees.map((emp) => (

                <tr
                  key={emp.id}
                  className="border-b h-14 text-center"
                >

                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.email}</td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          editEmployee(emp.id)
                        }
                        className="bg-yellow-500 px-3 py-1 rounded-lg text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteEmployee(emp.id)
                        }
                        className="bg-red-600 px-3 py-1 rounded-lg text-white"
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
                    className="text-center py-8"
                  >

                    No employees found

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
            closeModal={() =>
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