import React from 'react';

const CoursesPreview = () => {
  // Replace with actual course data
  const courses = [
    { id: 1, name: 'Intro to Electronics', description: 'Learn the basics of electronics.' },
    { id: 2, name: 'Advanced PCB Design', description: 'Master the art of PCB design.' },
    { id: 3, name: 'IoT Fundamentals', description: 'Explore the world of IoT.' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Courses Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              <p className="mb-4">{course.description}</p>
              <a href="/courses" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
