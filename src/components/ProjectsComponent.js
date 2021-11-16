import React from 'react'
import { PROJECTS } from '../data/PROJECTS'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

const projects = PROJECTS

function ShowProjects() {
    return (
        <>
            <Stagger in>
                {
                    projects.map(project => {
                        return (
                            <Fade in>
                                {/* <div className="d-flex border border-3 border-dark mt-3 align-items-center overflow-hidden" style={{ height: '21rem' }}>
                                    <div className="col">
                                        <a href={`${project.link}`} target="blank">
                                            <Card style={{ width: '22rem', height: '20rem' }}>
                                                <img variant="top" style={{ height: '20rem' }} src={project.image} />

                                            </Card>
                                        </a>
                                    </div>

                                    <div className="col m-4" style={{}}>

                                        <div className="h2 text-white"><a className="text-white" href={`${project.link}`}>{project.name}</a></div>
                                        <div className="mt-5 text-white h5 col">
                                            <div className="d-none d-md-block overflow-hidden col">{project.description}</div>
                                            <a href={`${project.link}`} target="blank"><div className="mt-4 text-white">See it here</div></a>
                                        </div>


                                    </div>

                                </div> */}
                                <div className="card mb-3 d-flex justify-content-between">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-4">
                                            <img variant="top" className="img-fluid" style={{}} src={project.image} />

                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <div className="card-title">{project.name}</div>
                                                <div className="card-text">{project.description}</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </Fade>

                        )
                    })
                }
            </Stagger>

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