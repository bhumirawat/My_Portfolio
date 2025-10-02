import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProjects(){
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/projects')
      .then(r => setProjects(r.data))
      .catch(console.error);
  },[]);
  return projects;
}