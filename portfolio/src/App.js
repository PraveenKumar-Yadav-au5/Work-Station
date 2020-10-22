import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Component/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                        <Navigation>
                            < Link to="/resume">Resume</Link>
                            < Link to="/project">Project</Link>
                            < Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="My Portfolio">
                        <Navigation>
                        < Link to="/resume">Resume</Link>
                        < Link to="/project">Project</Link>
                        < Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        < Main />
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default App;