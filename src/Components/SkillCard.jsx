import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SkillCard({ skill: initialSkill, onDelete }) {
  const [skill, setSkill] = useState(initialSkill);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem('skills')) || [];
    const updatedSkill = storedSkills.find((s) => String(s.id) === String(skill.id));
    if (updatedSkill) {
      setSkill(updatedSkill);
    }
  }, [skill.id]);

  useEffect(() => {
    const completed = skill.topics?.filter((t) => t.done).length || 0;
    const total = skill.topics?.length || 1;
    const newProgress = Math.round((completed / total) * 100);
    setProgress(newProgress);
  }, [skill]);

  const handleDelete = () => {
    if (window.confirm(`Delete "${skill.name}"?`)) {
      onDelete(skill.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[400px] h-[250px] flex-shrink-0 mx-2">
      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
      <p className="text-sm text-gray-700">Level: {skill.level}</p>

      <div className="w-full bg-gray-300 rounded-full h-2.5 my-3">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700">{progress}% Complete</p>

      <div className="flex justify-between items-center mt-4 mb-8 text-xs text-gray-700">
        <span className="bg-gray-100 px-2 py-1 rounded">{skill.category}</span>
        <span>Added: {skill.addedDate}</span>
      </div>

    <Link
        to={`/skilldetail/${skill.id}`}
        className="inline-block px-3 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
>
        See Detail
    </Link>
      <button
        onClick={handleDelete}
        className="px-3 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
       >
        Delete
       </button>

    </div>
  );
}




