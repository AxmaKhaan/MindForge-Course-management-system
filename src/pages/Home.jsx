import React from "react";
import "/src/Home.css";
import CourseCard from "../navigation/CourseCard";
export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="box">
            <h2>Welcome to Student Course Management System</h2>
            <h1>MINDFORGE</h1>
            <p>
              This is a student course management system where you can manage
              your courses and students.
            </p>
            <span>
              <button>Enroll Now</button>
              <button>Learn More</button>
            </span>
          </div>
        </div>
      </section>
      <main>
        <section className="main_section">
          <div className="m_cont">
            <div className="cont cont-1">
              <h3>Unlock your Potential</h3>
              <p>
                MINDFORGE (MF) is more than an
                incubator. it's a launchpad for your tech career. We bridge the
                gap between academic knowledge and real-world success, offering
                a dynamic blend of education, incubation, and opportunities for
                tech enthusiasts.
              </p>
            </div>
            <div className="cont cont-2">
              <div className="block">
                <span>
                  <img src="man smilling.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
              <div className="block">
                <span>
                  <img src="a girl smilling.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
              <div className="block">
                <span>
                  <img src="a man smilling.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sect-2">
          <div className="contain">
            <div className="course_cards">
              <CourseCard
                          courseName="Web Development"
                          image="/web devlop.jpg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                          
                        />
            </div>
            <div className="course_cards">
              <CourseCard
                          courseName="Graphic designing"
                          image="/graphic designing.svg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                        />
            </div>
            <div className="course_cards">
              <CourseCard
                          courseName="Digital Media Marketing"
                          image="/digi media merketing.svg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                        />
            </div>
            <div className="course_cards">
              <CourseCard
                          courseName="AI Web generating"
                          image="/ai website generating.svg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                        />
            </div>
            <div className="course_cards">
              <CourseCard
                          courseName="Basic Computer"
                          image="/basic computer.svg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                        />
            </div>
            <div className="course_cards">
              <CourseCard
                          courseName="Web Designing"
                          image="/web devlop.jpg"
                          alter="web development picture"
                          courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
                        />
            </div>
          </div>
        </section>

        {/* main section 3 */}
        <section className="main-sect-3">
          <div className="contt">
            <h2>Supercharge Your Career Potential</h2>
            <p>
              At MindForge, we're committed to empowering
              your career journey. Our programs equip you with the skills that
              today's job market craves. Whether you're starting or advancing,
              AKTI's programs are your direct path to career success.
            </p>
            <span>
              <button>How to Apply</button>
              <button>More About MINDFORGE</button>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
