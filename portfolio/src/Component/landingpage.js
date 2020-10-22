import React, { Component } from 'react'

class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <grid className="landing-grid">
                    <cell col={12}>
                        <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
                        alt="avatar"
                        className="avatar-img"
                        />

                        
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>React | Redux | JavaScript | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/praveen-yadav-97183b14b/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/PraveenKumar-Yadav-au5/Work-Station" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/ipraveen__/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://www.twitter.com/Praveen97_" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
                    </cell>
                </grid>
            </div>
        )
    }
}

export default Landingpage;
