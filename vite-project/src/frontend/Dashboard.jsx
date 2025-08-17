import React, { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import '../style/dashboard.css'
import { Navbar, Footer, Number } from '../../components'
function Dashboard () {
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!user || !token) {
    return <Navigate to='/signup' />
  }

  return (
    <>
      <div className='dashboard'>
        <main className='main-dashboard'>
          <section className='profile-section'>
            <div className='profile-image'>
              <img src='#' alt='Profile Photo' />
            </div>
            <div className='profile-details'>
              <h1 className='profile-name'>{user.username}</h1>
              <p className='profile-role'>Administrator</p>
              <p className='profile-joined'>Joined 2 years ago</p>
            </div>
          </section>
          <section className='worker-stats'>
            <Number />
            <Number />
            <Number />
          </section>

          <section className='recent-activity'>
            <h2 className='section-title'>Recent Activity</h2>
            <ul className='activity-list'>
              <li>
                🆕 New worker added: Owen Carter <span>2 hours ago</span>
              </li>
              <li>
                🔄 Worker status changed: Sophia Davis – Active{' '}
                <span>Yesterday</span>
              </li>
              <li>
                📄 Report generated: Monthly Worker Performance{' '}
                <span>2 days ago</span>
              </li>
            </ul>
          </section>

          <section className='quick-actions'>
            <button className='btn-primary'>Add Worker</button>
            <button className='btn-secondary'>Check Worker</button>
          </section>

          <section className='worker-table-section'>
            <h2 className='section-title'>Your Workers</h2>
            <div className='table-wrapper'>
              <table className='worker-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Owen Carter</td>
                    <td>
                      <span className='status-active'>Active</span>
                    </td>
                    <td>Engineering</td>
                    <td>
                      <button className='btn-link'>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sophia Davis</td>
                    <td>
                      <span className='status-active'>Active</span>
                    </td>
                    <td>Marketing</td>
                    <td>
                      <button className='btn-link'>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Lucas Harper</td>
                    <td>
                      <span className='status-inactive'>Inactive</span>
                    </td>
                    <td>Sales</td>
                    <td>
                      <button className='btn-link'>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Chloe Bennett</td>
                    <td>
                      <span className='status-active'>Active</span>
                    </td>
                    <td>HR</td>
                    <td>
                      <button className='btn-link'>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ryan Foster</td>
                    <td>
                      <span className='status-inactive'>Inactive</span>
                    </td>
                    <td>Operations</td>
                    <td>
                      <button className='btn-link'>View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Dashboard
