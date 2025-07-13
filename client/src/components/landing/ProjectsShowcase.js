import React from 'react';

const ProjectsShowcase = () => {
  // Replace with actual project data
  const projects = [
    { id: 1, name: 'Project One', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Project Two', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Project Three', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
