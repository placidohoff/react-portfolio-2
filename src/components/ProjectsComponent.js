import React from 'react'
import { PROJECTS } from '../data/PROJECTS'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const projects = PROJECTS

function ShowProjects() {
    return (
        <>

            {
                projects.map(project => (
                    // <Card>
                    //     <CardImg src={project.image} alt={project.name} />
                    //     <CardBody>
                    //         <CardTitle>{project.name}</CardTitle>
                    //         <CardText>{project.description}</CardText>
                    //     </CardBody>
                    // </Card>
                    <div className="d-flex border border-3 border-dark mt-3 align-items-center" style={{height: '21rem'}}>
                        <div className="">
                            <Card style={{ width: '22rem', height: '20rem' }}>
                                <img variant="top" style={{ height: '20rem' }} src={project.image} />

                            </Card>
                        </div>

                        <div className="m-4" style={{ height: '20rem' }}>

                            <div className="h2 text-white"><u>{project.name}</u></div>
                            <div className="mt-5 text-white h5">
                                {project.description}
                            </div>
                            

                        </div>

                    </div>

                ))
            }

        </>

    )
}

export default class Projects extends React.Component {

    render() {
        return (
            <div className="container">
                {/* <div className="row"> */}

                <ShowProjects />

                {/* </div> */}
            </div>
        )
    }

}