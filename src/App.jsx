import "./App.css";

const projects = [
  {
    title: "TaskFlow",
    description: "A responsive task manager to add, edit, search, filter and track daily tasks.",
    tech: "React • JavaScript • CSS • LocalStorage",
    github: "https://github.com/keycoder070/TaskFlow",
    live: "https://task-flow-4hgd.vercel.app/",
  },
  {
    title: "ShopKart",
    description: "A modern shopping frontend with product search, category filters and cart functionality.",
    tech: "React • JavaScript • CSS • LocalStorage",
    github: "https://github.com/keycoder070/ShopKart",
    live: "https://shop-kart-three-psi.vercel.app/",
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">Satyabrata<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">HELLO, I'M</p>
          <h1>Satyabrata Sahoo</h1>
          <h2>Frontend Developer</h2>
          <p>I build responsive and user-friendly websites using modern web technologies.</p>
          <a className="primary-button" href="#projects">Explore My Work ↓</a>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p>
            I'm an aspiring Frontend Developer passionate about creating
            clean, responsive and interactive web experiences. I enjoy
            learning new technologies and building practical projects.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My Skills</h2>
          <div className="skills">
            {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Responsive Design"].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SOME OF MY WORK</p>
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tech}</small>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live Demo ↗</a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p>Interested in working together? Feel free to connect with me.</p>
          <a className="primary-button" href="https://github.com/keycoder070" target="_blank" rel="noreferrer">
            Visit My GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Satyabrata Sahoo. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;