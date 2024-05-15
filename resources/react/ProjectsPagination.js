import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; 

const ProjectsPagination = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container">
                {currentProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPagination;
