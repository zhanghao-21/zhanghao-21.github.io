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
          </div>
        </section>

        <section className="profile-section technical-profile-section" id="profile" aria-labelledby="profile-title">
          <div className="technical-profile-shell">
            <header className="technical-profile-heading">
              <div>
                <p className="section-label">Technical profile</p>
                <p className="technical-profile-kicker">Hao Zhang · AV systems researcher</p>
                <h2 id="profile-title">From world models to<br />safe autonomous driving.</h2>
              </div>
              <p className="technical-profile-path">
                <span>Model the world</span><i>→</i><span>Generate hard cases</span><i>→</i><span>Design behavior</span><i>→</i><span>Measure safety</span>
              </p>
            </header>

            <div className="technical-profile-system">
              <div className="technical-profile-rail technical-profile-rail-left">
                <article className="technical-profile-card">
                  <div className="technical-profile-card-top"><span>01</span><small>World models</small></div>
                  <h3>Digital twins &amp;<br />HD mapping</h3>
                  <p>Reconstruct simulation-ready roads and lane-level vector maps from field and global geospatial data.</p>
                  <div className="technical-profile-tags" aria-label="Digital twin and mapping methods">
                    <span>OSM</span><span>LiDAR</span><span>Satellite</span><span>DETR</span><span>DINOv3</span>
                  </div>
                </article>

                <article className="technical-profile-card">
                  <div className="technical-profile-card-top"><span>02</span><small>Hard cases</small></div>
                  <h3>Scenario<br />engineering</h3>
                  <p>Build synchronized mixed-traffic worlds and turn road or language intent into repeatable critical tests.</p>
                  <div className="technical-profile-tags" aria-label="Simulation and scenario tools">
                    <span>CARLA</span><span>SUMO</span><span>PhysX</span><span>OpenDRIVE</span><span>LLM + RAG</span>
                  </div>
                </article>
              </div>

              <figure className="technical-profile-scene">
                <img
                  src="/technical-profile-city.png"
                  alt="A transportation digital twin of an urban intersection showing lane topology, sensor coverage, planned paths, predicted trajectories, traffic signals, vehicles, pedestrians, and cyclists."
                />
                <div className="technical-profile-scene-labels" aria-hidden="true">
                  <span>Digital twin</span>
                  <span>Mixed traffic</span>
                  <span>Safety-critical interactions</span>
                </div>
                <figcaption className="visually-hidden">Transportation-aware autonomy connects road geometry, traffic operations, vehicle behavior, and safety constraints.</figcaption>
              </figure>

              <div className="technical-profile-rail technical-profile-rail-right">
                <article className="technical-profile-card">
                  <div className="technical-profile-card-top"><span>03</span><small>Vehicle behavior</small></div>
                  <h3>AV control &amp;<br />decision-making</h3>
                  <p>Design car-following and lane-change control across continuous and discrete actions.</p>
                  <div className="technical-profile-tags" aria-label="Autonomous vehicle control methods">
                    <span>P-DQN</span><span>ACC</span><span>LQR / MPC</span><span>VLM</span><span>VLA</span>
                  </div>
                </article>

                <article className="technical-profile-card">
                  <div className="technical-profile-card-top"><span>04</span><small>Risk measurement</small></div>
                  <h3>Safety analysis &amp;<br />validation</h3>
                  <p>Stress-test AVs in high-risk interactions with physics-aware, multidimensional, and stochastic methods.</p>
                  <div className="technical-profile-tags" aria-label="Autonomous vehicle safety methods">
                    <span>TTC / SSM</span><span>Risk</span><span>ISO 26262</span><span>IEEE 2846</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="technical-profile-foundation" aria-label="Transportation-aware autonomy foundation">
              <div><strong>Data sources</strong><span>AV datasets, OSM, LiDAR, imagery</span></div>
              <div><strong>Vector maps</strong><span>Lane topology, semantics, infrastructure</span></div>
              <div><strong>Mixed traffic</strong><span>Vehicles, pedestrians, cyclists, signals</span></div>
              <div><strong>Behavior &amp; intent</strong><span>Prediction, control, trajectory forecasting</span></div>
              <div><strong>Risk &amp; safety</strong><span>Metrics, scenario testing, validation</span></div>
            </div>
          </div>
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
              <div className="featured-project-top">
                <div className="featured-project-copy">
                  <h3>Virtual Roads, Smarter Safety</h3>
                  <p className="project-summary">
                    A digital-twin framework for reproducing mixed autonomous traffic and measuring safety with synchronized
                    traffic flow, vehicle physics, and perception-level simulation.
                  </p>
                  <div className="industry-value">
                    <strong>Why it matters for AV development</strong>
                    <p>It provides a scenario-to-metric workflow for testing vehicle behavior under realistic geometry, traffic demand, and physical conditions.</p>
                  </div>
                </div>
                <figure className="research-overview-figure">
                  <img
                    src="/virtual-roads-overview.jpg"
                    alt="Isometric research overview showing a layered digital road map, synchronized mixed-traffic simulation, autonomous-vehicle sensing, and safety validation at an urban intersection."
                  />
                  <figcaption>Digital environment · Co-simulation · Safety validation</figcaption>
                </figure>
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
              <div className="featured-project-top">
                <div className="featured-project-copy">
                  <h3>Learning HD Digital Twins from Global Maps</h3>
                  <p className="project-summary">
                    A multi-modal learning framework that transforms satellite imagery and imperfect OpenStreetMap priors into
                    lane-level vector maps with geometry, semantics, and topology.
                  </p>
                  <div className="industry-value">
                    <strong>Why it matters for AV development</strong>
                    <p>It explores a scalable route for bootstrapping and updating HD map coverage without relying exclusively on repeated survey-vehicle collection.</p>
                  </div>
                </div>
                <figure className="research-overview-figure">
                  <img
                    src="/hd-map-overview.jpg"
                    alt="Isometric research overview showing satellite imagery and an imperfect global road-map prior transformed by a multi-modal learning model into a precise lane-level HD vector map across different cities."
                  />
                  <figcaption>Satellite + OSM prior · Multi-modal learning · HD vector map</figcaption>
                </figure>
              </div>
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
              <div className="featured-project-top">
                <div className="featured-project-copy">
                  <h3>V2XSynth</h3>
                  <p className="project-summary">
                    An LLM-orchestrated, retrieval-augmented framework that converts natural-language traffic intent into
                    communication-aware CARLA scenarios with executable behavior and V2X fault models.
                  </p>
                  <div className="industry-value">
                    <strong>Why it matters for AV development</strong>
                    <p>It reduces the effort required to author diverse simulation scenarios and links communication failures—latency, loss, and jitter—to driving safety outcomes.</p>
                  </div>
                </div>
                <figure className="research-overview-figure">
                  <img
                    src="/v2xsynth-overview.jpg"
                    alt="Isometric research overview showing natural-language traffic intent, an LLM and retrieval orchestration core, reusable scenario modules, and a connected-vehicle simulation with V2X communication faults."
                  />
                  <figcaption>Traffic intent · LLM + RAG orchestration · V2X scenario execution</figcaption>
                </figure>
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
            <div className="education-item">
              <div className="university-icon" aria-hidden="true">
                <img src="/university-tamu.png" alt="" />
              </div>
              <div className="education-copy">
                <h3>Texas A&amp;M University</h3>
                <p>Ph.D. in Civil and Environmental Engineering</p>
                <span>Research / Teaching Assistant · 2023–Present</span>
              </div>
            </div>
            <div className="education-item">
              <div className="university-icon" aria-hidden="true">
                <img src="/university-tongji.png" alt="" />
              </div>
              <div className="education-copy">
                <h3>Tongji University</h3>
                <p>M.S. in Transportation Engineering</p>
                <span>Research Assistant · 2020–2023</span>
              </div>
            </div>
            <div className="education-item">
              <div className="university-icon" aria-hidden="true">
                <img src="/university-csu.png" alt="" />
              </div>
              <div className="education-copy">
                <h3>Central South University</h3>
                <p>B.S. in Logistics Engineering</p>
                <span>2016–2020</span>
              </div>
            </div>
          </div>
          <aside className="interests-block" aria-labelledby="interests-title">
            <img className="interests-icon" src="/liverpool-fc.png" alt="Liverpool FC" />
            <div>
              <p className="interests-title" id="interests-title">Interests</p>
              <p>I enjoy playing soccer and supporting Liverpool FC.</p>
            </div>
          </aside>
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
