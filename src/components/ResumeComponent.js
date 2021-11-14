import React from 'react'
import { Link } from 'react-router-dom'
import { RESUME } from '../data/RESUME'

const resume = RESUME
const bannerText = `d-flex align-items-center justify-content-center text-white`
const projectHeading = `d-flex justify-content-center text-white h1`

function RenderContactInfo() {
    return (
        <div>
            {
                resume.contact.map(info => (
                    <>
                        <div>
                            <u>{info.name}</u>
                        </div>

                        <div className="m-2 mb-2">
                            {
                                info.isClick ? <a target='_blank' href={`http://${info.value}`}>{info.value}</a> : info.value
                            }

                        </div>
                    </>
                ))
            }
        </div>
    )
}

function RenderProjectsList() {
    return (
        <>
            {
                resume.Projects.map(project => (
                    <>
                        <div className="h2 mt-4">{project.name}</div>
                        <div className="h6">{project.description}</div>
                    </>
                ))
            }
        </>
    )
}

function RenderWorkHistoryList() {
    return (
        <>
            {
                resume.recentWorkHistory.map(job => (
                    <>
                        <div className="h2 mt-4 "><u>{`${job.name}`}</u></div>
                        <div className="h5 d-flex justify-content-between">
                            <div className="pr-5">
                                {`${job.title}`}
                            </div>
                            <div className="">
                                <u>{`(${job.dates})`}</u>
                            </div>
                        </div>
                        <ul>
                            {job.roles.map(role => {
                                return (
                                    <li>{role}</li>
                                )
                            })}
                        </ul>
                    </>
                ))
            }
        </>
    )
}

export default class Resume extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="resumeMainBanner">
                            <div className={`${bannerText} h1`}>Placido Hoff</div>
                            <div className={`${bannerText} h4`}>Software Engineer</div>
                        </div>
                        <div className="text-white" style={{ width: '70%', fontSize: '18px' }}>
                            <span>
                                <strong>Summary:</strong>
                            </span>
                            &nbsp;
                            <span>
                                {resume.summary}
                            </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="resumeBanner">
                            <span className={`${bannerText} h4`}>Contact</span>
                        </div>
                        <div className="border border-3 border-dark text-white p-3">
                            <RenderContactInfo />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="row" style={{ width: '90%' }}>
                            <div className="col resumeBanner">
                                <span className={`${bannerText} h4`}>Skill Set</span>
                            </div>
                            <div className="border border-3 border-dark text-white p-3">
                                {
                                    resume.skillSet.map(skill => (
                                        <div className="d-flex justify-content-center h5">{skill}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="row mt-3" style={{ width: '90%' }}>
                            <div className="col resumeBanner">
                                <span className={`${bannerText} h4 d-flex justify-content-center`}>Military Experience</span>
                            </div>
                            <div className="border border-3 border-dark text-white p-3">

                                <div className="mb-3">
                                    {
                                        resume.militaryExperience.description
                                    }
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-lg-6">
                                        {
                                            resume.militaryExperience.date
                                        }
                                    </div>
                                    <div className="col-lg-6">

                                        Rank: &nbsp;{
                                            resume.militaryExperience.rank
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col text-white">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h2 className={`${projectHeading}`}>Full-Stack Projects</h2>
                                    <hr />
                                    <RenderProjectsList />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <h2 className={`${projectHeading}`}>Recent Work History</h2>
                                    <hr />
                                    <RenderWorkHistoryList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}