import React, { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
// import resume from '../assets/resume.pdf'
import { RESUME } from '../data/RESUME'

const resume = RESUME
const bannerText = `d-flex align-items-center justify-content-center text-white`
const projectHeading = `d-flex justify-content-center text-white`

function RenderContactInfo() {
    return (
        <div>
            {
                resume.contact.map(info => (
                    <>
                        <span>
                            {info.name}
                        </span>
                        <br />
                        <span className="m-2">
                            {info.value}
                        </span>
                        <br />
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
                        <div className="h2 mt-4">{`${job.name} (${job.title}) ${job.dates}`}</div>
                        {/* <div className="h6">{project.description}</div> */}
                    </>
                ))
            }
        </>
    )
}

export default class Resume extends React.Component {
    componentDidMount() {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    // render(){
    //     return(
    //         <Document file={resume}>
    //             <Page pageNumber={1} />
    //         </Document>
    //     )
    // }
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
                            <span className={`${bannerText}`}>Contact</span>
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
                                <span className={`${bannerText}`}>Skill Set</span>
                            </div>
                            <div className="border border-3 border-dark text-white p-3">
                                {
                                    resume.skillSet.map(skill => (
                                        <div>{skill}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="row mt-3" style={{ width: '90%' }}>
                            <div className="col resumeBanner">
                                <span className={`${bannerText} d-flex justify-content-center`}>Military Experience</span>
                            </div>
                            <div className="border border-3 border-dark text-white p-3">

                                <br />
                                {
                                    resume.militaryExperience.description
                                }
                                <br />
                                {
                                    resume.militaryExperience.date
                                }
                                <br />
                                Rank: &nbsp;{
                                    resume.militaryExperience.rank
                                }
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