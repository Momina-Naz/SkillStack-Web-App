import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function SkillDetail() {
  const { id } = useParams(); // get skill ID from URL
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem('skills')) || [];
    const found = storedSkills.find((s) => String(s.id) === String(id));
    if (found) {
      setSkill(found);
    } else {
      navigate('/skills');
    }
  }, [id, navigate]);

  const handleToggle = (index) => {
    if (!skill || !skill.topics) return;

    const updatedTopics = [...skill.topics];
    updatedTopics[index].done = !updatedTopics[index].done;

    const completed = updatedTopics.filter((t) => t.done).length;
    const progress = Math.round((completed / updatedTopics.length) * 100);

    const updatedSkill = {
      ...skill,
      topics: updatedTopics,
      progress,
    };

    const allSkills = JSON.parse(localStorage.getItem('skills')) || [];
    const updatedSkills = allSkills.map((s) =>
      String(s.id) === String(id) ? updatedSkill : s
    );
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
    setSkill(updatedSkill);
  };

  if (!skill) return <p className="text-center mt-8">Loading skill details...</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[400px] mx-2 mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{skill.name}</h2>
      <p className="text-gray-600">Level: {skill.level}</p>
      <p className="text-gray-600">Category: {skill.category}</p>
      <p className="text-gray-600 mb-2">Added: {skill.addedDate}</p>

      <div className="w-full bg-gray-300 rounded-full h-2.5 my-3">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${skill.progress || 0}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700">{skill.progress || 0}% Complete</p>

      <h3 className="mt-6 mb-2 font-semibold text-gray-700">Core Topics:</h3>
      <ul className="space-y-2 max-h-52 overflow-y-auto pr-1 mb-3">
        {skill.topics?.map((topic, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border rounded"
          >
            <span className={topic.done ? 'line-through text-green-600' : ''}>
              {topic.name}
            </span>
            <button
              onClick={() => handleToggle(index)}
              className={`px-3 py-1 rounded text-sm ${
                topic.done ? 'bg-green-200' : 'bg-gray-200'
              }`}
            >
              {topic.done ? 'Undo' : 'Mark Done'}
            </button>
          </li>
          
        ))}
      </ul>
      <Link
              to="/skills"
              className="px-4 py-2 mr-2 mt-5 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Back to Skills
            </Link>
    </div>
  );
}






