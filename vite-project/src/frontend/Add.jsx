import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios'
import "../style/addpage.css";
import { Navbar, Footer } from "../../components";

function Add() {
  const [alart, setAlart] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (!user || !token) {
    return <Navigate to="/signup" />;
  }

  // ✅ State for multiple workers
  const [data , setData] = useState({})
  const [workers, setWorkers] = useState([
    { name: "", salary: "", hireDate: "", role: "" },
  ]);

  // ✅ Handle input change
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkers = [...workers];
    newWorkers[index][name] = value;
    setWorkers(newWorkers);
  };

  // ✅ Add more worker fields
  const handleAddMore = () => {
    setWorkers([...workers, { name: "", salary: "", hireDate: "", role: "" }]);
  };

  // ✅ Submit all workers
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/add',{
      workers, 
      email: user.email
    },{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setData(response.data)
    setAlart(response.data.alert)
  };
 if (alart !== "" ) {
    alert(alart)
     return <Navigate to='/dashboard' />
  }
  return (
    <div className="add-worker">
      <main className="worker-form-container">
        <section className="worker-form-card">
          <h1 className="worker-form-title">Add New Worker(s)</h1>
<h1 className={data.message ? 'alerth1' : 'alert-success'}>
              {data.message}
          </h1>
          <form className="worker-form" onSubmit={handleSubmit}>
            {workers.map((worker, index) => (
              <div key={index} className="worker-form-block">
                <h3>Worker {index + 1}</h3>

                <div className="form-group">
                  <label htmlFor={`name-${index}`}>Name</label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    name="name"
                    value={worker.name}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter worker's name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`salary-${index}`}>Salary</label>
                  <input
                    type="number"
                    id={`salary-${index}`}
                    name="salary"
                    value={worker.salary}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter worker's salary"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`hireDate-${index}`}>Hire Date</label>
                  <input
                    type="date"
                    id={`hireDate-${index}`}
                    name="hireDate"
                    value={worker.hireDate}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`role-${index}`}>Role</label>
                  <input
                    type="text"
                    id={`role-${index}`}
                    name="role"
                    value={worker.role}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter worker's role"
                    required
                  />
                </div>
                <hr />
              </div>
            ))}

            <button type="button" className="btn-add-more" onClick={handleAddMore}>
              ➕ Add More
            </button>
            <button type="submit" className="btn-submit">Submit All</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Add;
