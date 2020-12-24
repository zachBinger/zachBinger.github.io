import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Zach Binger</a></h1>
              <span className="email"><i className="icon-mail"></i> zacharybinger@icloud.com</span>
            </div>
            <nav id="colorlib-icon-menu">
              <ul>
                <li id="icon"><a href="https://www.linkedin.com/in/zbinger/" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin2"></span></a></li>
                <li id="icon"><a href="https://github.com/zachBinger" target="_blank" rel="noopener noreferrer"><span className="icon-github"></span></a></li>
                <li id="icon"><a href="https://scholar.google.com/citations?user=lYbVN8oAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer"><span className="ai ai-google-scholar ai-3x"></span></a></li>

                {/* <ul class="icons alt">
									<li><a href="#" class="icon brands alt fa-google"><span class="label">Google Scholar</span></a></li>
									<li><a href="#" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
									<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
								</ul> */}

              </ul>
            </nav>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#education" data-nav-section="about">Education</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Achievements</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
