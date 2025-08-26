import React, {useState ,useEffect} from 'react'
import axios from 'axios'  
function Workershow ({name , date , role , salary, id }) {
  const token = localStorage.getItem('token');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(id)
      const response = await axios.delete(`http://localhost:5000/workers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); 
      if (response.data.success) {
        // Handle successful deletion (e.g., show a message, refresh the list)
        setIsDeleted(true);
      }
    } catch (error) {
      console.error("Error deleting worker:", error);
    }
  };
  useEffect(() => {
    if (isDeleted) {
      // Optionally, you can refresh the worker list or perform other actions
      window.location.reload(); // Simple way to refresh the list
    }
  }, [isDeleted]);
  return (
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
          <td>

            <button className='btn-link' onClick={handleDelete}>🗑️</button>
          </td>
        </tr>
      </tbody>
  )
}

export default Workershow
