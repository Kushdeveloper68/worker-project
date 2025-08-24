import React, { useState, useEffect } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import '../style/dashboard.css'
import { Navbar, Footer, Number, Workershow } from '../../components'
import { axios } from 'axios'
function Dashboard () {
  const [workers, setWorkers] = useState({})
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!user || !token) {
    return <Navigate to='/signup' />
  }
   useEffect( async () => {
  const workers = await axios.get("http://localhost/dashboard")

})
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
              <Workershow />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Dashboard
