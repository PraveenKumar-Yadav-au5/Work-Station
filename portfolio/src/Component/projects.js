import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
    
      toggleCategories() {
    
        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'grey', height: '176px', background: 'url() center / cover'}} >Google keep clone App</CardTitle>
                <CardText>
                A clone of google keep app in which User can add, delete and edit work notes just like an original Google Keep App.
                Technology used - HTML, CSS, Bootstrap, Reactjs & Redux.
                </CardText>
                <CardActions border>
                  <Button > <a href="https://github.com/PraveenKumar-Yadav-au5/Work-Station/tree/master/google-keep-clone" 
                  target="_blank" style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> GitHub </a></Button>
                  <Button style={{marginLeft: "8rem"}}> 
                  <a href="https://keep-note-app-clone-praveen.netlify.app/" target="_blank" 
                  style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> Live Demo </a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/dxkm210vx/image/upload/v1603301171/youtube_yfxrg3.png) center / cover'}} >Youtube Clone App</CardTitle>
                <CardText>
                This is a one page Youtube clone made using front end technology like React, Material UI, Bootstrap and Youtube API.
                </CardText>
                <CardActions border>
                <Button > <a href="https://github.com/PraveenKumar-Yadav-au5/Work-Station/tree/master/youtube-clone-app" 
                  target="_blank" style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> GitHub </a></Button>
                  <Button style={{marginLeft: "8rem"}}> 
                  <a href="https://youtube-cline-app-praveen.netlify.app/" target="_blank" 
                  style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> Live Demo </a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/dxkm210vx/image/upload/v1602487710/entertainmentApp_zfeq4p.png) center / cover'}} >Movieflix App</CardTitle>
                <CardText>
                A front-end App Project based on API calls which gives the data of moves and Tv-Shows.
                Currently I have achieved 60% of this project.
                Technology used - HTML, CSS, Bootstrap, Reactjs & Redux.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  
                  <Button colored style={{marginLeft: "8rem"}}>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
    
              
            </div>
    
    
          )
        } else if(this.state.activeTab === 1) {
          return (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/dxkm210vx/image/upload/v1602830192/coffee_baqx1a.png) center / cover'}} >E-Shop Store</CardTitle>
                <CardText>
                Built an advance and professional looking single page e-commerce website with add/remove/checkout in my cart.
                Technology used - HTML, CSS, Bootstrap, JavaScript & jQuery.
                </CardText>
                <CardActions border>
                <Button > <a href="https://github.com/PraveenKumar-Yadav-au5/Work-Station/tree/master/e-Shop" 
                  target="_blank" style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> GitHub </a></Button>
                  <Button style={{marginLeft: "8rem"}}> 
                  <a href="https://e-shop-frontend.netlify.app/" target="_blank" 
                  style={{textDecoration: "none", color: 'rgb(63,81,181)'}}> Live Demo </a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            
          )
        }
    
      }
    
    render() {
        return (
            <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
        )
    }
}

export default Projects;
