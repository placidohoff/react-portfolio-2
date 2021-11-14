import React from 'react'
import avatar from '../assets/avatar.png'
import { DiReact, DiJavascript1, DiBootstrap, DiNodejs, DiMongodb, DiGit } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'

export default class Home extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <img
                                className="img-responsive rounded-circle"
                                src={avatar}
                            />
                        </div>
                        <div className="bannerText mt-5 d-flex justify-content-center">

                            <h1 className="d-flex justify-content-center">Placido Hoff</h1>
                            <h3 className="d-flex justify-content-center text-white">Web Developer</h3>
                            <hr />
                            <div className="container">
                                <div className="mt-1 row d-flex justify-content-center">
                                    <div className="col p-3">
                                        <DiReact
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                    <div className="col p-3">
                                        <DiJavascript1
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>

                                    <div className="col p-3">
                                        <DiBootstrap
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                    <div className="col p-3">
                                        <DiNodejs
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                    <div className="col p-3">
                                        <DiMongodb
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                    <div className="col p-3">
                                        <SiFirebase
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                    <div className="col p-3">
                                        <DiGit
                                            color="white"
                                            fontSize="5.5em"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}