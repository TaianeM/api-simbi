import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Project {
    id: number;
    nome: string;
    resumo: string;
    municipio: string;
    uf: string;
    valor_captado: number;
    valor_aprovado: number;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Card className="project-card">
            <Card.Body>
                <Badge className="custom-badge"> ROUANET </Badge>
                <Card.Title className="fw-bold resume">{project.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.municipio} <i className="bi bi-dot"></i> {project.uf}</Card.Subtitle>
                <Card.Text className="resume">{project.resumo}</Card.Text>
                <div className="financial approved-amount">
                    Aprovado: <strong> R$ {new Intl.NumberFormat('pt-BR').format(project.valor_aprovado)}</strong>
                </div>
                <div className="financial raised-amount">
                    Captado: <strong> R$ {new Intl.NumberFormat('pt-BR').format(project.valor_captado)}</strong>
                </div>
                <div className="d-flex align-items-center mt-3">
                    <Button className='button-add flex-grow-1' variant="secondary" size="lg"> ADICIONAR </Button>
                    <i className="bi bi-heart icon-heart ms-2"></i>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
