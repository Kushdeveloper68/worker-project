import React from 'react'

function Workershow ({name , date , role , salary }) {
  return (
    <table className='worker-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Role</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>
            <span className='status-active'>{date}</span>
          </td>
          <td>{role}</td>
          <td>
            <button className='btn-link'>{salary}</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Workershow
