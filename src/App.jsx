import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import AddSkill from './Pages/AddSkill';
import EditSkill from './Pages/EditSkill';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import SkillDetail from './Pages/SkillDetail';
import Skills from './Pages/Skills';

export default function App() {
  const [skills, setSkills] = useState(() => {
    const stored = localStorage.getItem('skills');
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            name: 'React.js',
            level: 'Intermediate',
            progress: 60,
            category: 'Frontend',
            addedDate: '2025-06-01',
            topics: [
              { name: 'JSX', done: false },
              { name: 'Components', done: false },
              { name: 'Hooks', done: false },
            ],
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const addSkill = (newSkill) => {
    setSkills((prev) => [...prev, newSkill]);
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="h-full w-full flex flex-col items-center bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills skills={skills} deleteSkill={deleteSkill} />} />
            <Route path="/addskill" element={<AddSkill onAddSkill={addSkill} />} />
            <Route path="/editskill" element={<EditSkill />} />
            <Route path="/skilldetail/:id" element={<SkillDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

