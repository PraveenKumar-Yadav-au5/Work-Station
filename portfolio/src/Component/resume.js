import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Praveen Kumar Yadav</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            I have been actively involved in the web developer community for the last 2 years.
            My speciality is front-end web design and development and turning it into beautiful and semantic HTML & CSS. My interests, however, extends beyond the web and I love helping people in making prototypes for their ideas.
            When I am not coding, I am probably hanging out with my friends, playing football and cricket.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>I-357, Alpha-2, Greater Noida</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Certification <i class="fa fa-certificate" aria-hidden="true"></i> <i class="fa fa-certificate" aria-hidden="true"></i>
            </h5>
            <p>Colt Steele - The Web Developer Bootcamp | Udemy</p>
            <a href="https://www.udemy.com/certificate/UC-8b0c2179-22af-49ae-ba81-95cbbf60c7b3/" rel="noopener noreferrer" target="_blank">
            <p style={{textDecoration: 'none'}} >Certificate of Completion</p>
          </a>
          <p>Stephen Grider - Modern React with Redux | Udemy</p>
          <a href="https://www.udemy.com/" rel="noopener noreferrer" target="_blank">
            <p style={{textDecoration: 'none'}} >Certificate of Completion</p>
          </a>
            
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Galgotias University"
              schoolDescription="School of Computer Science and Engineering"
               />

<Education
              startYear={2012}
              endYear={2014}
              schoolName="Higher Secondary School"
               />

<Education
              startYear={2010}
              endYear={2012}
              schoolName="Secondary School"
               />

               
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Manna Technology"
              jobDescription="I worked as a front-end developer mostly working with HTML, CSS and jQuery.
              Develop web applications based on bootstrap and Javascript."
              />


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={100}
                />
                <Skills
                skill="Redux"
                progress={100}
                />
                <Skills
                  skill="Javascript"
                  progress={90}
                  />
                  <Skills
                    skill="HTML/CSS"
                    progress={90}
                    />

<Skills
                    skill="Bootstrap"
                    progress={90}
                    />
                    
                    <Skills
                      skill="Express"
                      progress={80}
                      />
                      <Skills
                      skill="Mongo DB"
                      progress={80}
                      />
                    <Skills
                      skill="Nodejs"
                      progress={60}
                      />
 

          </Cell>
        </Grid>
      </div>
        )
    }
}

export default Resume;
