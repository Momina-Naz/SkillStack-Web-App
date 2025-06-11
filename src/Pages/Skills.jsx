import React from 'react';
import SkillCard from '../Components/SkillCard';
import { Link } from 'react-router-dom';

export default function Skills({ skills = [], deleteSkill }) {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Skills
      </h1>

      <div className="flex overflow-x-auto space-x-4 py-4">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} onDelete={deleteSkill} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No skills added yet.</p>
        )}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/addskill"
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Skill
        </Link>
      </div>
    </div>
  );
}












