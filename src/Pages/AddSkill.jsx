import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddSkill({ onAddSkill }) {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [category, setCategory] = useState('');
  const [topics, setTopics] = useState(['']);
  const navigate = useNavigate();

  const handleAddTopic = () => {
    setTopics([...topics, '']);
  };

  const handleTopicChange = (index, value) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const coreTopics = topics
      .filter((t) => t.trim() !== '')
      .map((topic) => ({ name: topic, done: false }));

    const newSkill = {
      id: Date.now(),
      name,
      level,
      category,
      addedDate: new Date().toISOString().slice(0, 10),
      progress: 0,
      topics: coreTopics,
    };

    onAddSkill(newSkill);
    navigate('/skills');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl mt-2">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Skill Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
       <select
       value={level}
       onChange={(e) => setLevel(e.target.value)}
       className="w-full p-2 border rounded"
       required
    >
  <option value="">Select Level</option>
  <option value="Beginner">Beginner</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
</select>
        <input
          type="text"
          placeholder="Category (e.g. Frontend)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <div>
          <label className="block font-semibold mb-2 text-gray-700">Core Topics:</label>
          <div className="max-h-16 overflow-y-auto space-y-2 pr-2">
            {topics.map((topic, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Topic ${index + 1}`}
                value={topic}
                onChange={(e) => handleTopicChange(index, e.target.value)}
                className="w-full p-2 border rounded"
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddTopic}
            className="mt-2 px-3 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300"
          >
            + Add Topic
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
}

