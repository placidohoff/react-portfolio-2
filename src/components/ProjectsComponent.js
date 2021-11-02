import React from 'react'
import { PROJECTS } from '../data/PROJECTS'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const projects = PROJECTS

function ShowProjects() {
    return (
        <>

            {
                projects.map(project => (
                    <Card>
                        <CardImg src={project.image} alt={project.name} />
                        <CardBody>
                            <CardTitle>{project.name}</CardTitle>
                            <CardText>{project.description}</CardText>
                        </CardBody>
                    </Card>
                ))
            }
            
        </>

    )
}

export default class Projects extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ShowProjects />
                    </div>
                </div>
            </div>
        )
    }

}