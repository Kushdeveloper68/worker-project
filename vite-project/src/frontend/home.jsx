import React from "react";
import "../App.css"; // Make sure this file exists in your project (e.g., src/assets or src folder)

const Home = () => {
  return (
    <>
      <div className="image-div"></div>

      <nav>
        <div className="nav-items">
          <button className="button" id="navButton">
            <span className="button-content">ii</span>
          </button>
          <div className="nav-item-div" id="nav-item-div">
            <ul className="nav-item">
              <li>Home</li>
              <li>Check</li>
              <li>Add+</li>
              <li>Term & condi..</li>
              <li>Help</li>
              <li>Developer</li>
            </ul>
            <ul className="nav-social">
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
          </div>
        </div>

        <div className="nav-header" id="navHeader">
          <h1>OUR WORKER MANAGER</h1>
        </div>

        <div className="nav-logo-div">
          <img src="#" alt="logo" />
        </div>
      </nav>

      <header>
        <div className="header-main-div">
          <div className="header-div">
            <h1>
              <span> WORKER MANAGER</span> - SIMPLIFY WORKERFORCE MANAGEMENT
            </h1>
            <h2>
              Effortlessly Track <span>Attendence</span>, <span>Salaries</span> and <span>Payment</span> in one
              <span> Place</span>.
            </h2>
            <p>
              Worker manager is a smart tool for business owers and managers to track worker attendence, salaries, and payments with ease.
            </p>
            <div>
              <ul>
                <li>i</li>
                <li>i</li>
                <li>i</li>
              </ul>
            </div>
          </div>

          <div className="header-button-div">
            <div className="header-button" id="button-2">
              <div id="slide"></div>
              <a href="#">Add +</a>
            </div>
            <div className="header-button" id="button-2">
              <div id="slide"></div>
              <a href="#">Check</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="intro-div">
          <div className="intro-first-div">
            <h1>Introduction</h1>
          </div>
          <hr />
          <div className="descrip-div">
            <p>Managing your workforce efficiently is crucial for any business...</p>
            {/* trimmed for brevity */}
          </div>

          {/* How to Use Section */}
          <section className="how-to-use">
            <div className="container">
              <h2>How to Use <span>Worker Manager</span></h2>
              <p className="subtitle">Easily manage your workers, track attendance, and process payments in a few steps.</p>
              <div className="steps">
                {[
                  { icon: "user-plus", title: "Sign Up / Log In", desc: "Create an account or log in to access your dashboard." },
                  { icon: "users", title: "Add Workers", desc: "Enter worker details like name, salary, and role." },
                  { icon: "calendar-check", title: "Mark Attendance", desc: "Track daily attendance with just one click." },
                  { icon: "wallet", title: "Manage Salaries", desc: "Calculate salaries and track pending payments." },
                  { icon: "file-alt", title: "Generate Reports", desc: "Download attendance and salary reports for records." },
                ].map((step, index) => (
                  <div className="step" key={index}>
                    <i className={`fas fa-${step.icon}`}></i>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Project Showcase */}
        <div className="project-main-div">
          <h1>Our More Usefull Website</h1>
          <hr />
          <div className="project-div">
            {[
              {
                img: "https://geekflare.com/wp-content/uploads/2023/03/IP-Address-tracker-552x290.jpg",
                title: "IP Tracker",
                tech: ["Frontend", "Backend", "Libraries"],
              },
              {
                img: "https://th.bing.com/th/id/R.a27aaf3fcc6f6e7d32e025164cce5f2b?rik=6La15EsMwLQ4xg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2fc%2f6%2f188592.jpg",
                title: "Periodic Table Converter",
                tech: ["HTML", "CSS", "JSON"],
              },
              {
                img: "https://th.bing.com/th/id/OIP.H18_YPR8K5HGJEyvU6ARNgHaDt?rs=1&pid=ImgDetMain",
                title: "Food Health & Hygiene",
                tech: ["HTML", "CSS", "Web Design"],
              },
              {
                img: "https://www.1tech.org/wp-content/uploads/2021/07/Best-Online-Calculators.jpg",
                title: "Calculator",
                tech: ["JS logic", "HTML", "CSS"],
              },
            ].map((project, idx) => (
              <div key={idx}>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={project.img} alt="project image" />
                </a>
                <h2>{project.title}</h2>
                <ul>
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <div className="feedback-main-div">
          <div className="light-form">
            <div className="light-form__title">Feedback form</div>
            <form>
              <div className="light-form__wrap">
                <div className="light-form__group">
                  <input className="light-form__control light-form__control--text" type="text" required />
                  <label className="light-form__label">Your name:</label>
                </div>
                <div className="light-form__group">
                  <input className="light-form__control light-form__control--text" type="text" required />
                  <label className="light-form__label">Phone no. or Email:</label>
                </div>
              </div>
              <div className="light-form__wrap">
                <textarea className="light-form__control light-form__control--textarea"></textarea>
                <label className="light-form__label">Message:</label>
              </div>
              <div className="light-form__wrap--center">
                <input className="light-form__btn" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Freelancer</a></li>
                <li><a href="#">Designer</a></li>
                <li><a href="#">Backend developer</a></li>
                <li><a href="#">Frontend developer</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Terms && condi</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">How to use ?</a></li>
                <li><a href="#">Authentication</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Projects</h4>
              <ul>
                <li><a href="#">IP tracker</a></li>
                <li><a href="#">Calculator</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Web clones</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <button className="gotopbtn">Go top</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
