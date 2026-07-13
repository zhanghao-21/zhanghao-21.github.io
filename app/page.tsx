const Arrow = () => <span aria-hidden="true">↗</span>;

const publications = [
  {
    year: "2026",
    title: "Integrated Automated Car Following and Lane-changing Control Based on a Parameterized Deep Q-Network with Hybrid Action Space",
    venue: "arXiv preprint",
    authors: "H. Zhang, Z. Li, and Y. Zhou",
    href: "https://arxiv.org/abs/2607.06771",
  },
  {
    year: "2026",
    title: "Virtual Roads, Smarter Safety: A Digital Twin Framework for Mixed Autonomous Traffic Safety Analysis",
    venue: "IEEE Internet of Things Journal",
    authors: "H. Zhang, X. Yue, K. Tian, S. Li, K. Wu, Z. Li, D. Lord, and Y. Zhou",
    href: "https://arxiv.org/abs/2504.17968",
  },
  {
    year: "2025",
    title: "Why Anticipatory Sensing Matters in Commercial ACC Systems Under Cut-in Scenarios",
    venue: "Accident Analysis & Prevention",
    authors: "H. Zhang, S. Li, Z. Li, M. Anis, D. Lord, and Y. Zhou",
  },
  {
    year: "2025",
    title: "On the Collision Risk of Stochastic Traffic: Analytical Approximation in 2D and 3D Spaces for Generic Vehicles",
    venue: "Presented at TRB 2026",
    authors: "H. Zhang, K. Wu, Z. Li, Z. Tu, D. Lord, and Y. Zhou",
  },
  {
    year: "2025",
    title: "V2XSynth: An LLM-Orchestrated and Retrieval-Augmented V2X Scenario Generator",
    venue: "Presented at TRB 2026",
    authors: "K. Wu, H. Zhang, P. Li, R. Gan, J. You, Z. Tu, and Y. Zhou",
    href: "https://keshuw95.github.io/V2XSynth/",
  },
  {
    year: "2022",
    title: "A Temporal Fusion Transformer for Short-term Freeway Traffic Speed Multistep Prediction",
    venue: "Neurocomputing",
    authors: "H. Zhang, Y. Zou, X. Yang, and H. Yang",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>

      <header className="site-header">
        <a className="site-name" href="#about">Hao Zhang</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#background">Background</a>
        </nav>
      </header>

      <div className="page-shell">
        <section className="about-section" id="about">
          <div className="portrait-column">
            <img className="portrait" src="/bio_figure.jpg" alt="Portrait of Hao Zhang" />
            <div className="profile-links" aria-label="Profile links">
              <a href="mailto:haozhangch9811@gmail.com">Email</a>
              <a href="https://scholar.google.com/citations?user=Y2bfQ1kAAAAJ" target="_blank" rel="noreferrer">Scholar</a>
              <a href="https://github.com/zhanghao-21" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/hao-zhang-8a8b482b4/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="/Hao-Zhang-Resume.pdf" target="_blank">Résumé</a>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-label">About</p>
            <h1>Hao Zhang</h1>
            <p className="role">Ph.D. Researcher in Autonomous Driving Systems &amp; Transportation Safety</p>
            <p className="lead">
              I build learning, simulation, and mapping systems for safer and more capable autonomous vehicles.
            </p>
            <p>
              I am a Ph.D. researcher in Civil and Environmental Engineering at Texas A&amp;M University. My work spans
              autonomous-driving simulation, digital twins, HD map learning, vehicle control, V2X scenario generation,
              and safety analysis.
            </p>
            <p>
              My goal is to work on autonomous driving systems that perform well not only in benchmarks, but also in the
              complexity of real traffic. My transportation-engineering background gives me a system-level perspective on
              how vehicles interact with roads, infrastructure, human drivers, and safety constraints.
            </p>
            <div className="availability">
              <span>Career direction</span>
              Seeking research and engineering opportunities in the autonomous driving industry.
            </div>
          </div>
        </section>

        <section className="profile-section technical-profile-section" id="profile" aria-labelledby="profile-title">
          <h2 className="visually-hidden" id="profile-title">Technical profile: from world models to safe autonomous driving</h2>
          <figure className="technical-profile-figure">
            <div className="technical-profile-viewport">
              <a href="/technical-profile.png" target="_blank" rel="noreferrer" aria-label="Open the technical profile figure at full resolution">
                <img
                  className="technical-profile-image"
                  src="/technical-profile.png"
                  alt="Hao Zhang's autonomous driving research profile, connecting digital twins and HD mapping, scenario engineering, AV control and decision-making, and safety analysis and validation around a transportation digital twin."
                />
              </a>
            </div>
            <figcaption>
              <span>Research and engineering capabilities across the autonomous-driving stack.</span>
              <span className="technical-profile-hint">Swipe to explore on smaller screens.</span>
              <a href="/technical-profile.png" target="_blank" rel="noreferrer">View full resolution <Arrow /></a>
            </figcaption>
          </figure>
        </section>

        <section className="research-section" id="research">
          <div className="section-intro split">
            <div>
              <p className="section-label">Selected research</p>
              <h2>Research for real-world autonomy.</h2>
            </div>
            <p>
              I focus on three practical bottlenecks for autonomous driving: building scalable world models, creating useful
              simulation scenarios, and evaluating safety under realistic traffic interactions.
            </p>
          </div>

          <article className="project-entry">
            <div className="project-number">01</div>
            <div className="project-content">
              <div className="project-meta"><span>Digital twin · Simulation · Safety validation</span><span>First author</span></div>
              <h3>Virtual Roads, Smarter Safety</h3>
              <p className="project-summary">
                A digital-twin framework for reproducing mixed autonomous traffic and measuring safety with synchronized
                traffic flow, vehicle physics, and perception-level simulation.
              </p>
              <div className="industry-value">
                <strong>Why it matters for AV development</strong>
                <p>It provides a scenario-to-metric workflow for testing vehicle behavior under realistic geometry, traffic demand, and physical conditions.</p>
              </div>
              <div className="simple-pipeline" aria-label="Digital twin research workflow">
                <div><b>Environment</b><span>LiDAR · OSM · vehicle data</span></div>
                <i aria-hidden="true">→</i>
                <div><b>Co-simulation</b><span>CARLA · SUMO · PhysX</span></div>
                <i aria-hidden="true">→</i>
                <div><b>Validation</b><span>Behavior · dynamics · safety</span></div>
              </div>
              <div className="project-links">
                <a href="/projects/virtual-roads-smarter-safety/">Project page <Arrow /></a>
                <a href="https://arxiv.org/abs/2504.17968" target="_blank" rel="noreferrer">Paper <Arrow /></a>
              </div>
            </div>
          </article>

          <article className="project-entry">
            <div className="project-number">02</div>
            <div className="project-content">
              <div className="project-meta"><span>HD mapping · Multi-modal learning · Generalization</span><span>First author · In preparation</span></div>
              <h3>Learning HD Digital Twins from Global Maps</h3>
              <p className="project-summary">
                A multi-modal learning framework that transforms satellite imagery and imperfect OpenStreetMap priors into
                lane-level vector maps with geometry, semantics, and topology.
              </p>
              <div className="industry-value">
                <strong>Why it matters for AV development</strong>
                <p>It explores a scalable route for bootstrapping and updating HD map coverage without relying exclusively on repeated survey-vehicle collection.</p>
              </div>
              <figure className="project-figure">
                <img src="/map-generation-results.png" alt="HD map predictions compared with ground truth in Washington DC and Pittsburgh" />
                <figcaption>Satellite + OSM input, ground truth, and model predictions across two cities.</figcaption>
              </figure>
              <div className="metric-row" aria-label="Selected project results">
                <div><strong>2,341</strong><span>aligned map tiles</span></div>
                <div><strong>0.890</strong><span>geometry F1 at 2 m</span></div>
                <div><strong>0.879</strong><span>adjacency F1</span></div>
                <div><strong>4 cities</strong><span>within- and cross-city tests</span></div>
              </div>
            </div>
          </article>

          <article className="project-entry">
            <div className="project-number">03</div>
            <div className="project-content">
              <div className="project-meta"><span>Generative AI · V2X · Scenario engineering</span><span>Co-author</span></div>
              <h3>V2XSynth</h3>
              <p className="project-summary">
                An LLM-orchestrated, retrieval-augmented framework that converts natural-language traffic intent into
                communication-aware CARLA scenarios with executable behavior and V2X fault models.
              </p>
              <div className="industry-value">
                <strong>Why it matters for AV development</strong>
                <p>It reduces the effort required to author diverse simulation scenarios and links communication failures—latency, loss, and jitter—to driving safety outcomes.</p>
              </div>
              <div className="scenario-flow" aria-label="V2XSynth workflow">
                <div><span>Prompt</span><p>Describe the traffic, agents, environment, and communication conditions.</p></div>
                <div><span>LLM + RAG compiler</span><p>Retrieve validated behaviors, maps, and V2X modules.</p></div>
                <div><span>CARLA execution</span><p>Run the scenario and collect joint mobility and message telemetry.</p></div>
              </div>
              <div className="project-links">
                <a href="https://keshuw95.github.io/V2XSynth/" target="_blank" rel="noreferrer">Project page <Arrow /></a>
              </div>
            </div>
          </article>
        </section>

        <section className="publications-section" id="publications">
          <div className="section-intro split">
            <div>
              <p className="section-label">Publications</p>
              <h2>Selected work</h2>
            </div>
            <a className="scholar-link" href="https://scholar.google.com/citations?user=Y2bfQ1kAAAAJ" target="_blank" rel="noreferrer">Full list on Google Scholar <Arrow /></a>
          </div>
          <div className="publication-list">
            {publications.map((publication) => {
              const body = (
                <>
                  <span className="publication-year">{publication.year}</span>
                  <div>
                    <h3>{publication.title}</h3>
                    <p>{publication.authors}</p>
                    <b>{publication.venue}</b>
                  </div>
                  <span className="publication-arrow" aria-hidden="true">{publication.href ? "↗" : ""}</span>
                </>
              );
              return publication.href ? (
                <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>{body}</a>
              ) : (
                <div className="publication" key={publication.title}>{body}</div>
              );
            })}
          </div>
        </section>

        <section className="background-section" id="background">
          <div className="section-intro">
            <p className="section-label">Background</p>
            <h2>Education &amp; experience</h2>
          </div>
          <div className="background-grid">
            <div>
              <h3>Texas A&amp;M University</h3>
              <p>Ph.D. in Civil and Environmental Engineering</p>
              <span>Research / Teaching Assistant · 2023–Present</span>
            </div>
            <div>
              <h3>Tongji University</h3>
              <p>M.S. in Transportation Engineering</p>
              <span>Research Assistant · 2020–2023</span>
            </div>
            <div>
              <h3>Central South University</h3>
              <p>B.S. in Logistics Engineering</p>
              <span>2016–2020</span>
            </div>
          </div>
          <p className="personal-note">Outside research, I enjoy playing soccer and supporting Liverpool FC.</p>
        </section>

        <section className="contact-section">
          <div>
            <p className="section-label">Contact</p>
            <h2>Interested in autonomous driving research and engineering.</h2>
          </div>
          <div>
            <p>I welcome conversations about AV simulation, mapping, safety validation, and intelligent mobility systems.</p>
            <a href="mailto:haozhangch9811@gmail.com">haozhangch9811@gmail.com <Arrow /></a>
          </div>
        </section>
      </div>

      <footer>
        <span>© 2026 Hao Zhang</span>
        <a href="#about">Back to top ↑</a>
      </footer>
    </main>
  );
}
