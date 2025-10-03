import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProjects(){
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    axios.get(`${API_BASE_URL}/api/projects`)
      .then(r => setProjects(r.data))
      .catch(console.error);
  },[]);
  return projects;
}