import React, { useState, useEffect } from 'react'
// 🗑️
import { useLocation, Navigate , Link} from 'react-router-dom'
import '../style/dashboard.css'
import { Navbar, Footer, Number, Workershow } from '../../components'
import axios from 'axios'
import { getWorkers } from '../services/api'
function Dashboard () {
  const [workers, setWorkers] = useState({})
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!user || !token) {
    return <Navigate to='/signup' />
  }
   useEffect( () => {
    const handleWorker = async () => {
      const response = await getWorkers(token)
      setWorkers(response.data)
    }
    handleWorker()
  }, [token])
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
              <p className='profile-joined'>{user.createdAt}</p>
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
            <button className='btn-primary'><Link to="/add">Add Worker</Link></button>
            <button className='btn-secondary'><Link to="/check">Check Worker</Link></button>
          </section>

          <section className='worker-table-section'>
            <h2 className='section-title'>Your Workers</h2>
            <div className='table-wrapper'>
              <table className='worker-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Delete</th>
        </tr>
      </thead>
              {workers.workers && workers.workers.length > 0 ? (
                workers.workers.map((worker, index) => (
                  <Workershow
                    key={index}
                    name={worker.workername}
                    date={worker.date}
                    role={worker.role}
                    salary={worker.salary}
                    id={worker._id}
                  />
                ))
              ) : (
                <tbody><tr><td>No workers found. Please add some workers.</td></tr></tbody>
              )}
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Dashboard
