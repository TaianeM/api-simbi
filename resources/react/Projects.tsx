import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import axios from 'axios';

interface Project {
    id: number;
    nome: string;
    resumo: string;
    municipio: string;
    uf: string;
    valor_captado: number;
    valor_aprovado: number;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
    const projectsPerPage = 3;
    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/projetos');
                setProjects(response.data);
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        };

        fetchProjects();
    }, []);

    const paginateForward = () => {
        const maxIndex = projects.length - 1;
        const newIndex = firstVisibleIndex + 1;
        if (newIndex + projectsPerPage - 1 <= maxIndex) {
            setFirstVisibleIndex(newIndex);
            if ((newIndex % projectsPerPage) === 0) {
                setCurrentPage(currentPage + 1);
            }
        }
    }

    const toggleViewAll = () => {
        setViewAll(!viewAll); 
    
        setCurrentPage(1);

        setFirstVisibleIndex(0);
    }

    const currentProjects = viewAll ? projects : projects.slice(firstVisibleIndex, firstVisibleIndex + projectsPerPage);

    return (
        <Container>
            <Row className="justify-content-center my-3">
                <h2 className="mt-4 title-projects"> Teste Simbioso - Taiane </h2>
                <Row className="justify-content-center my-3">
                    <Button variant="outline-light" onClick={toggleViewAll} className="mb-3 button-view-all">
                        {viewAll ? 'Menos Projetos' : '+ Ver Todos'}
                    </Button>
                </Row>
                {!viewAll && (
                    <Col xs={12} className="d-flex justify-content-between align-items-center">
                        {currentProjects.map(project => (
                            <Col md={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Col>
                        ))}
                        <Button variant="outline-primary" onClick={paginateForward} disabled={firstVisibleIndex + projectsPerPage >= projects.length}>→</Button>
                    </Col>
                )}
            </Row>
            {!viewAll && (
                <Row className="justify-content-center my-3">
                    {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => (
                        <Button 
                            key={i} 
                            onClick={() => {
                                const newIndex = i * projectsPerPage;
                                setFirstVisibleIndex(newIndex);
                                setCurrentPage(i + 1);
                            }}
                            className={`mx-1 page-link ${currentPage === i + 1 ? 'active' : ''}`}
                            aria-label={`Go to page ${i + 1}`}
                        ></Button>
                    ))}
                </Row>
            )}
            {viewAll && (
                <Row className="justify-content-center my-3">
                    {projects.map((project, index) => {
                        if (index % projectsPerPage === 0) {
                            return (
                                <React.Fragment key={index}>
                                    <Row className="mb-3">
                                        {projects.slice(index, index + projectsPerPage).map(project => (
                                            <Col md={4} key={project.id}>
                                                <ProjectCard project={project} />
                                            </Col>
                                        ))}
                                    </Row>
                                </React.Fragment>
                            );
                        }
                        return null;
                    })}
                </Row>
            )}
        </Container>
    );
};

export default Projects;
