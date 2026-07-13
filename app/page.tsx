const Arrow = () => <span aria-hidden="true">↗</span>;

const publications = [
  {
    year: "2026",
    title:
      "Integrated Automated Car Following and Lane-changing Control Based on a Parameterized Deep Q-Network with Hybrid Action Space",
    venue: "arXiv preprint",
    role: "First author",
    href: "https://arxiv.org/abs/2607.06771",
  },
  {
    year: "2025",
    title:
      "Why Anticipatory Sensing Matters in Commercial ACC Systems Under Cut-in Scenarios",
    venue: "Accident Analysis & Prevention",
    role: "First author",
  },
  {
    year: "2025",
    title:
      "On the Collision Risk of Stochastic Traffic: Analytical Approximation in 2D and 3D Spaces for Generic Vehicles",
    venue: "Presented at TRB 2026",
    role: "First author",
  },
  {
    year: "2022",
    title:
      "A Temporal Fusion Transformer for Short-term Freeway Traffic Speed Multistep Prediction",
    venue: "Neurocomputing",
    role: "First author",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hao Zhang, home">
          HZ<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:haozhangch9811@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Transportation × AI × Safety</p>
            <h1>
              Building intelligence
              <br />
              for <em>safer roads.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Hao Zhang, a Ph.D. researcher at Texas A&amp;M. I build
              digital twins, learning systems, and simulation tools that help
              autonomous mobility understand the road—and its risks.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore my research <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href="/Hao-Zhang-Resume.pdf"
                target="_blank"
              >
                View résumé <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A research map connecting sensing, simulation, and safety">
            <div className="hero-grid" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="visual-node node-a">
              <span>01</span>
              <strong>Sense</strong>
              <small>LiDAR · Satellite · V2X</small>
            </div>
            <div className="visual-node node-b">
              <span>02</span>
              <strong>Simulate</strong>
              <small>Digital twins · CARLA</small>
            </div>
            <div className="visual-node node-c">
              <span>03</span>
              <strong>Make safer</strong>
              <small>Analyze · Learn · Act</small>
            </div>
            <div className="visual-center" aria-hidden="true">
              <span>HZ</span>
            </div>
            <div className="signal-line" aria-hidden="true" />
          </div>

          <div className="hero-meta">
            <p>
              <span>Currently</span>
              Ph.D. Candidate · Civil &amp; Environmental Engineering
            </p>
            <p>
              <span>Based in</span>
              College Station, Texas
            </p>
            <p>
              <span>Open to</span>
              Research collaboration &amp; industry roles
            </p>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected research</p>
              <h2>From the physical road to machine reasoning.</h2>
            </div>
            <p>
              My work connects geospatial intelligence, simulation, vehicle
              dynamics, and generative AI to make mobility systems safer and
              more scalable.
            </p>
          </div>

          <article className="project project-featured">
            <div className="project-index">
              <span>01</span>
              <p>Digital twin safety</p>
            </div>
            <div className="project-main">
              <div className="project-kicker">
                <span className="status-dot" /> Published · IEEE Internet of
                Things Journal
              </div>
              <h3>Virtual Roads, Smarter Safety</h3>
              <p className="project-lead">
                A high-fidelity digital twin framework for studying active
                safety in mixed autonomous traffic—before risky situations
                happen on real roads.
              </p>
              <div className="project-links">
                <a
                  href="https://arxiv.org/abs/2504.17968"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the paper <Arrow />
                </a>
                <span>First author · 2025</span>
              </div>
            </div>

            <div className="pipeline" aria-label="Digital twin research workflow">
              <div className="pipeline-step">
                <span className="step-number">01</span>
                <div className="mini-map" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h4>Construct</h4>
                <p>Drone LiDAR, OpenStreetMap, and vehicle sensors become a lane-accurate 3D world.</p>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">→</div>
              <div className="pipeline-step">
                <span className="step-number">02</span>
                <div className="sim-stack" aria-hidden="true">
                  <b>CARLA</b><b>SUMO</b><b>PhysX</b>
                </div>
                <h4>Co-simulate</h4>
                <p>Traffic flow, perception, and vehicle physics run together in one synchronized platform.</p>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">→</div>
              <div className="pipeline-step">
                <span className="step-number">03</span>
                <div className="safety-chart" aria-hidden="true">
                  <i /><i /><i /><i /><b />
                </div>
                <h4>Analyze</h4>
                <p>Real-time safety indicators reveal how vehicle behavior changes under critical conditions.</p>
              </div>
            </div>

            <div className="project-proof">
              <div><strong>3</strong><span>simulation engines synchronized</span></div>
              <div><strong>18</strong><span>figures in the full study</span></div>
              <div><strong>3D</strong><span>physics-informed safety analysis</span></div>
            </div>
          </article>

          <article className="project project-map">
            <div className="project-index">
              <span>02</span>
              <p>HD map learning</p>
            </div>
            <div className="project-main">
              <div className="project-kicker project-kicker-warm">
                <span className="status-dot" /> Manuscript in preparation
              </div>
              <h3>Learning High-definition Digital Twins from Low-fidelity Global Maps</h3>
              <p className="project-lead">
                A multi-modal framework that turns satellite imagery and
                imperfect OpenStreetMap priors into precise, connected,
                lane-level vector maps—without a survey vehicle.
              </p>
              <div className="method-chips" aria-label="Methods used">
                <span>DINOv3</span><span>DETR</span><span>OSM query expansion</span><span>Graph refinement</span>
              </div>
            </div>

            <figure className="result-figure">
              <img
                src="/map-generation-results.png"
                alt="Satellite images, ground-truth lane maps, model predictions, and prediction overlays for Washington DC and Pittsburgh"
              />
              <figcaption>
                <span>Qualitative results</span>
                The model recovers visible lane markings and virtual topology across distinct urban environments.
              </figcaption>
            </figure>

            <div className="evidence-grid">
              <div>
                <strong>2,341</strong>
                <span>aligned map tiles across four U.S. cities</span>
              </div>
              <div>
                <strong>0.890</strong>
                <span>geometry F1 at 2m in Pittsburgh</span>
              </div>
              <div>
                <strong>0.879</strong>
                <span>topological adjacency F1</span>
              </div>
            </div>

            <details className="project-detail">
              <summary>See how the story is organized <span aria-hidden="true">+</span></summary>
              <div className="detail-content">
                <p><b>1. The gap.</b> Global maps are abundant, but machine-operational lane geometry is expensive and geographically limited.</p>
                <p><b>2. The method.</b> Satellite features supply visual evidence, OSM guides the queries, and graph refinement restores topology.</p>
                <p><b>3. The evidence.</b> Within-city, cross-city, and few-shot experiments show where the system generalizes—and where local examples help.</p>
              </div>
            </details>
          </article>

          <article className="project project-v2x">
            <div className="project-index">
              <span>03</span>
              <p>Generative simulation</p>
            </div>
            <div className="project-main">
              <div className="project-kicker project-kicker-blue">
                <span className="status-dot" /> Open project page
              </div>
              <h3>V2XSynth</h3>
              <p className="project-lead">
                An LLM-orchestrated, retrieval-augmented compiler that turns
                natural-language traffic intent into communication-aware CARLA
                scenarios—and traces how latency, loss, and jitter become
                safety outcomes.
              </p>
              <div className="project-links">
                <a
                  href="https://keshuw95.github.io/V2XSynth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit project page <Arrow />
                </a>
                <span>Co-author · 2025</span>
              </div>
            </div>

            <div className="v2x-visual" aria-label="V2XSynth converts a prompt into an executable connected-vehicle simulation">
              <div className="prompt-card">
                <span>Natural-language intent</span>
                <p>“Dense, high-conflict traffic at a signalized intersection.”</p>
              </div>
              <div className="compiler-card">
                <span>LLM + RAG</span>
                <div aria-hidden="true"><i /><i /><i /></div>
                <p>Interpret · Retrieve · Validate · Assemble</p>
              </div>
              <div className="scenario-card">
                <span>Executable scenario</span>
                <div className="intersection" aria-hidden="true">
                  <i className="road-h" /><i className="road-v" />
                  <b className="car car-one" /><b className="car car-two" /><b className="car car-three" />
                  <em className="wave wave-one" /><em className="wave wave-two" />
                </div>
                <p>CARLA + SPaT / MAP / BSM telemetry</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Selected publications</p>
              <h2>Research with a measurable road forward.</h2>
            </div>
            <a
              className="text-link"
              href="https://scholar.google.com/citations?user=Y2bfQ1kAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              All work on Google Scholar <Arrow />
            </a>
          </div>

          <div className="publication-list">
            {publications.map((publication) => {
              const content = (
                <>
                  <span className="pub-year">{publication.year}</span>
                  <div>
                    <h3>{publication.title}</h3>
                    <p>{publication.venue} · {publication.role}</p>
                  </div>
                  <span className="pub-arrow" aria-hidden="true">{publication.href ? "↗" : "—"}</span>
                </>
              );

              return publication.href ? (
                <a key={publication.title} href={publication.href} target="_blank" rel="noreferrer" className="publication-row">
                  {content}
                </a>
              ) : (
                <div key={publication.title} className="publication-row">
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">Beyond the papers</p>
            <h2>I like problems that live between disciplines.</h2>
            <p>
              My background spans logistics, transportation engineering, and
              AI. That mix shapes how I work: start with a real system, model
              the structure that matters, and build tools people can test—not
              just ideas they can describe.
            </p>
            <p>
              Away from research, you&apos;ll usually find me playing soccer or
              supporting Liverpool FC. The same things keep me interested:
              systems, space, timing, and a good team moving with purpose.
            </p>
          </div>

          <div className="timeline" aria-label="Education and experience timeline">
            <div className="timeline-item active">
              <span>2023—2026</span>
              <h3>Texas A&amp;M University</h3>
              <p>Ph.D. · Research &amp; Teaching Assistant</p>
            </div>
            <div className="timeline-item">
              <span>2020—2023</span>
              <h3>Tongji University</h3>
              <p>M.S. · Transportation Engineering</p>
            </div>
            <div className="timeline-item">
              <span>2016—2020</span>
              <h3>Central South University</h3>
              <p>B.S. · Logistics Engineering</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Start a conversation</p>
          <h2>Let&apos;s make mobility<br />safer—and smarter.</h2>
          <p>
            I&apos;m interested in research collaborations and opportunities at
            the intersection of AI, simulation, and transportation safety.
          </p>
          <a className="contact-email" href="mailto:haozhangch9811@gmail.com">
            haozhangch9811@gmail.com <Arrow />
          </a>
          <div className="contact-links">
            <a href="https://scholar.google.com/citations?user=Y2bfQ1kAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://www.linkedin.com/in/hao-zhang-8a8b482b4/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Hao-Zhang-Resume.pdf" target="_blank">Résumé</a>
          </div>
        </section>
      </div>

      <footer>
        <p>© 2026 Hao Zhang</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
