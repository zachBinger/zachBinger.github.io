import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <section class="colorlib-education" data-section="education">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div
              class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <span class="heading-meta">Education</span>
              <h2 class="colorlib-heading animate-box fadeInUp animated">
                Education
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-12 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <div class="fancy-collapse-panel">
                <div
                  class="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Ph.D. Chemcial Engineering
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      class="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-6">
                            <p>
                              Description{" "}
                            </p>
                          </div>
                          <div class="col-md-6">
                            <li>Separated they live in Bookmarksgrove right</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Master of Science Chemcial Engineering
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div class="panel-body">
                        <p>
                          Description
                        </p>
                        <ul>
                          <li>Separated they live in Bookmarksgrove right</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingFour">
                      <h4 class="panel-title">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Bachelor of Science Chemcial Engineering
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div class="panel-body">
                        <p>
                          Description
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
