import { useState } from "react";
import "./style/App.css";

function Add() {
  // State to store input fields
  const [workers, setWorkers] = useState([
    {  name: "", salary: "", overtime: "" },
  ]);

  // Function to add a new worker input set
  const addWorkerField = () => {
    setWorkers([...workers, { name: "", salary: "", overtime: "" }]);
  };

  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index][field] = value;
    setWorkers(updatedWorkers);
  };

  // Function to handle form submission

  return (
    <>
      <div>
        <form>
          <h2>Add Worker</h2>
          <div id="input-div">
          <input
                  type="date"
                  name="date"
                  placeholder="Date"
                />
            {workers.map((worker, index) => (
              <div key={index} className="worker-input-set">
                <input
                  type="text"
                  name="name"
                  value={worker.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  placeholder="Worker Name"
                />
                <input
                  type="number"
                  name="salary"
                  value={worker.salary}
                  onChange={(e) =>
                    handleInputChange(index, "salary", e.target.value)
                  }
                  placeholder="Salary/day"
                />
                <input
                  type="text"
                  name="overtime"
                  value={worker.overtime}
                  onChange={(e) =>
                    handleInputChange(index, "overtime", e.target.value)
                  }
                  placeholder="Overtime (optional)"
                />
              </div>
            ))}
          </div>
          <button type="button" onClick={addWorkerField}>
            ADD +
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Add;

