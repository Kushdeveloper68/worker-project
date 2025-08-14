import React from 'react'
import "../style/addpage.css"
import {Navbar , Footer} from "../../components"
function Add() {
  return (
    <>
    <div className='add-worker'>
  <main className="worker-form-container">
    <section className="worker-form-card">
      <h1 className="worker-form-title">Add New Worker</h1>

      <form className="worker-form" action="#" method="POST">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter worker's name" required />
        </div>

        <div className="form-group">
          <label for="salary">Salary</label>
          <input type="number" id="salary" name="salary" placeholder="Enter worker's salary" required />
        </div>

        <div className="form-group">
          <label for="hireDate">Hire Date</label>
          <input type="date" id="hireDate" name="hireDate" required />
        </div>

        <div className="form-group">
          <label for="department">Department</label>
          <input type="text" id="department" name="department" placeholder="Enter department name" required />
        </div>

        <div className="form-group">
          <label for="role">Role</label>
          <input type="text" id="role" name="role" placeholder="Enter worker's role" required />
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </section>
  </main>
</div>
</>
  )
}

export default Add