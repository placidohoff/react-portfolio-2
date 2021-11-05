import React from 'react'
//Components:
import Home from './HomeComponent'
import Footer from './FooterComponent'
import Projects from './ProjectsComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import Resume from './ResumeComponent'
//Other Dependencies:
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Switch, Route, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../App.css'

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout className="mainColor">
                    <>
                    <Header className="mainColor" title="Placido's Porfolio" scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    </>
                    <Drawer style={{ backgroundImage: "linear-gradient(to right,  #203A43, #0F2027)" }} className="mainColor" title="Portfolio"> <Link to="/">home</Link>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>

                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content mt-4">
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="page" timeout={200}>
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/about" component={About} />
                                        <Route exact path="/contact" component={Contact} />
                                        <Route exact path="/projects" component={Projects} />
                                        <Route exact path="/resume" component={Resume} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}