import React, { useState } from "react";
import Swal from "sweetalert2";

import { QrReader } from "react-qr-reader";
const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState("Scan...");
  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      salary,
      date,
    };

    employees.push(newEmployee);
    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} 's data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "10%" }}
        />
      </>
      <form onSubmit={handleAdd}>
        <label htmlFor="firstName">Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={data}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="salary">Amount</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
