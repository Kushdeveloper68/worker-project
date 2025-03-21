import { useState, useEffect } from 'react'
function Check () {
  const [massage, setMessage] = useState()
  useEffect(() => {
    fetch('https://localhost:5000/check')
      .then(res => res.json())
      .then(data => setMessage(data.massage))
      .catch(error => console.log('vite cors error ', error))
  })
  return (
    <>
      <div className='container'>
        <h2>{massage}</h2>
        <form>
          <label htmlFor='date'>Date</label>
          <input type='date' id='date' name='date' required />

          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username' required />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' required />

          <button className='button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
export default Check
