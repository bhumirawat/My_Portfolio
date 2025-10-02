import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/skills")
      .then((res) => setSkills(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-md p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="space-y-3">
          {skills.map((s) => (
            <div key={s._id} className="flex justify-between">
              <span>{s.name}</span>
              <span className="text-purple-300">{s.score}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
