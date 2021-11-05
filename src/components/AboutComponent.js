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
            <div style={{overflowY: 'scroll'}} className="container bannerText p-4">
                <h1><RenderAbout /></h1>
            </div>
        )
    }
}