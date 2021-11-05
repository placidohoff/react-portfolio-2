import React from 'react'
import { ABOUT } from '../data/ABOUT'

const about = ABOUT

function RenderAbout() {
    return (
        about.map(info => (
            <p className="text-white h4 mt-5 lh-lg">{info}</p>
        )
        ))


}

export default class About extends React.Component {
    render() {
        return (
            <div className="container bannerText p-4">
                <h2 className="text-white">About Me</h2>
                <div><RenderAbout /></div>
            </div>
        )
    }
}