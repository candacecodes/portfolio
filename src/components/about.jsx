import React from "react";
import pic from "../img/pic.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "In 2018 I had the opportunity to rotate in various roles at a major research hospital where I realized how significantly technology could improve life quality. "
        },
        {
          id: "second-p-about",
          content:
            "With that in mind, I transitioned into software engineering - my goals revolve primarily around helping people, and software engineering gives me the opportunity to build new resources that help shape a brighter future through tech and innovation."
        },
        {
          id: "interests-p-about",
          content:
            "My interests include science, technology, medicine, and music. During my free time I enjoy collaborating on projects, traveling, and playing the violin."
        },
        {
          id: "tech-p-about",
          content:
            "Technical Skills: JavaScript, React, Rails, Ruby, Swift, Front-End Development, HTML/CSS, BootStrap, ActiveRecord, SQL, Database Architecture and Design, Object-Oriented Programming, Functional Programming"
        },
        {
          id: "skills-p-about",
          content:
            "Skills: Genetics, Cell Biology, Nutrition, Healthcare Administration, Electronic Health Records, Research, Patient Care, Out-Patient Clinic, Radiation Oncology, Healthcare Billing, Healthcare Insurance, Healthcare Revenue Practice Management Operations, Pediatric & Adult Genetics, EPIC/APEX, Non-Profit Communications"
        }


      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                    <img
                            className="img-fluid rounded b-shadow-a"
                            src={pic}
                            alt=""
                          />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me | Tech and the Future</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
