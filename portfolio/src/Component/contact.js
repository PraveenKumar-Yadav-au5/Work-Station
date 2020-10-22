import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Praveen</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        My name is Praveen and I am interested in pursuing software engineering related roles
                    and have experience in web development, namely front-end.
                    I am currently looking for a full time job so feel free to check out my projects and contact me for job opportunities!
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                    (955) 538-0167
                  </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                    praveeny54@gmail.com
                  </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>

                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/praveen-yadav-97183b14b/" style={{textDecoration: 'none', color: "black"}} target="_blank">
                                        Praveen Yadav
          </a>

                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
