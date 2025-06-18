import React, { useState } from "react";
import "../style/Add.css";

const AddWorkers = () => {
  const [date, setDate] = useState("");
  const [workers, setWorkers] = useState([
    { name: "", salary: "", extra: "" }
  ]);

  const handleWorkerChange = (index, field, value) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index][field] = value;
    setWorkers(updatedWorkers);
  };

  const addWorker = () => {
    setWorkers([...workers, { name: "", salary: "", extra: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      workers
    };
    console.log("Form submitted:", formData);
    // TODO: Send formData to backend using fetch/axios
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <h1>Add Workers</h1>

        <label htmlFor="dateInput">Date:</label>
        <input
          type="date"
          id="dateInput"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br /><br />

        <div id="workers-container">
          {workers.map((worker, index) => (
            <div className="worker-group" key={index}>
              {index > 0 && <hr />}
              <label>Worker Name:</label>
              <input
                type="text"
                name={`workers[${index}][name]`}
                placeholder="Name"
                value={worker.name}
                onChange={(e) =>
                  handleWorkerChange(index, "name", e.target.value)
                }
                required
              />
              <br />

              <label>Salary:</label>
              <input
                type="number"
                name={`workers[${index}][salary]`}
                placeholder="Salary"
                value={worker.salary}
                onChange={(e) =>
                  handleWorkerChange(index, "salary", e.target.value)
                }
                required
              />
              <br />

              <label>Extra Details:</label>
              <textarea
                name={`workers[${index}][extra]`}
                placeholder="Extra details (optional)"
                value={worker.extra}
                onChange={(e) =>
                  handleWorkerChange(index, "extra", e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <br />
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="add-btn" onClick={addWorker}>
          Add More Worker
        </button>
      </div>
    </form>
  );
};

export default AddWorkers;
