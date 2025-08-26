import React, {useState ,useEffect} from 'react'
import axios from 'axios'  
import { deleteWorker } from '../src/services/api';
function Workershow ({name , date , role , salary, id }) {
  const token = localStorage.getItem('token');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(id)
      const response = await deleteWorker(id, token);
      if (response.data.success) {
        setIsDeleted(true);
      }
    } catch (error) {
      console.error("Error deleting worker:", error);
    }
  };
  useEffect(() => {
    if (isDeleted) {
      window.location.reload(); 
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
