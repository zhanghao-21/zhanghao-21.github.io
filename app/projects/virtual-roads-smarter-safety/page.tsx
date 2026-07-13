import type { Metadata } from "next";
import Link from "next/link";

const assetRoot = "/projects/virtual-roads-smarter-safety";

export const metadata: Metadata = {
  title: "Virtual Roads, Smarter Safety | Hao Zhang",
  description:
    "A project case study by Hao Zhang on physics-aware digital twins for autonomous-vehicle safety analysis in mixed traffic.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function VirtualRoadsProject() {
  return (
    <main className="case-study">
      <a className="skip-link" href="#project-content">Skip to project</a>

      <header className="project-header">
        <Link className="site-name" href="/">Hao Zhang</Link>
        <nav aria-label="Project navigation">
          <a href="#system">System</a>
          <a href="#experiments">Experiments</a>
          <a href="#results">Results</a>
          <Link href="/#research">All research</Link>
        </nav>
      </header>

      <article id="project-content">
        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="section-label">Research project · First author</p>
            <h1>Virtual Roads,<br />Smarter Safety</h1>
            <p className="project-deck">
              A physics-aware digital twin for testing autonomous vehicles in mixed traffic before the hard cases reach public roads.
            </p>
            <p className="project-abstract">
              I developed a field-to-simulation workflow that reconstructs real roads, synchronizes traffic and autonomous-vehicle behavior, models tire and vehicle dynamics, and turns each run into measurable safety evidence.
            </p>
            <div className="project-actions">
              <a className="primary-link" href="https://arxiv.org/abs/2504.17968" target="_blank" rel="noreferrer">
                Read the paper <Arrow />
              </a>
              <Link href="/#research">Back to research</Link>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src={`${assetRoot}/digital-twin-roundabout.png`}
              alt="A georeferenced three-dimensional reconstruction of a real roundabout from aerial LiDAR and map data"
            />
            <figcaption>A real intersection reconstructed as a simulation-ready 3D environment.</figcaption>
          </figure>
        </section>

        <section className="project-proof" aria-label="Project highlights">
          <div><strong>3 engines</strong><span>SUMO · CARLA · NVIDIA PhysX</span></div>
          <div><strong>8 scenarios</strong><span>Rear-end, sideswipe, blind-spot, and intersection cases</span></div>
          <div><strong>59% lower MAE</strong><span>High-fidelity TTC versus traditional TTC</span></div>
        </section>

        <section className="case-section problem-section">
          <div className="case-heading">
            <p className="case-number">01</p>
            <div>
              <p className="section-label">The problem</p>
              <h2>Safety metrics are only as credible as the world behind them.</h2>
            </div>
          </div>
          <div className="problem-grid">
            <p className="case-lead">
              Crash records tell us what already failed. Public-road testing cannot efficiently cover rare, dangerous events. And conventional time-to-collision calculations often flatten the problem to constant speed and one-dimensional motion.
            </p>
            <div className="problem-detail">
              <p>
                Those shortcuts can omit the factors that decide whether an AV stops safely: road slope, intersection geometry, tire friction, mass distribution, steering, suspension, and the behavior of surrounding traffic.
              </p>
              <blockquote>
                The design goal was end-to-end fidelity: realistic roads, realistic traffic, realistic vehicle physics, and a risk measure that connects them.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="case-section" id="system">
          <div className="case-heading">
            <p className="case-number">02</p>
            <div>
              <p className="section-label">The system</p>
              <h2>One synchronized pipeline connects the physical road to the safety metric.</h2>
            </div>
          </div>

          <figure className="wide-figure">
            <img
              src={`${assetRoot}/joint-simulation-platform.png`}
              alt="Architecture linking a reconstructed environment, SUMO traffic, CARLA simulation, and NVIDIA PhysX vehicle dynamics"
            />
            <figcaption>The platform keeps road geometry, traffic state, sensor-rich simulation, and vehicle dynamics synchronized.</figcaption>
          </figure>

          <div className="system-layers">
            <article>
              <span>Real to digital</span>
              <h3>Reconstruct the environment</h3>
              <p>Aerial LiDAR and OSM establish the scene; GPS and inclinometer measurements refine slope, superelevation, and curvature.</p>
            </article>
            <article>
              <span>Traffic to autonomy</span>
              <h3>Run mixed traffic</h3>
              <p>SUMO controls network-scale traffic and signals while CARLA hosts the ego vehicle, sensors, environment, and custom AV logic.</p>
            </article>
            <article>
              <span>Physics to evidence</span>
              <h3>Measure what changes risk</h3>
              <p>PhysX resolves wheel and tire forces; the safety layer evaluates collision risk in the full three-dimensional scene.</p>
            </article>
          </div>
        </section>

        <section className="case-section reconstruction-section">
          <div className="case-heading">
            <p className="case-number">03</p>
            <div>
              <p className="section-label">Environment reconstruction</p>
              <h2>Build the road at the fidelity the vehicle will feel.</h2>
            </div>
          </div>

          <div className="reconstruction-copy">
            <p className="case-lead">
              The platform combines complementary sources instead of asking one dataset to do everything. OSM supplies accessible network structure, aerial LiDAR captures the physical scene, and vehicle-mounted sensors recover roadway attributes that influence dynamics.
            </p>
            <ul>
              <li>Semantic segmentation separates roads, buildings, and vegetation in the point cloud.</li>
              <li>RoadRunner converts the georeferenced scene into OpenDRIVE and simulation assets.</li>
              <li>GPS and inclinometer data sampled at 5 Hz refine curvature, slope, and cross-slope.</li>
              <li>DBSCAN-based junction assignment repairs missing intersection connections.</li>
            </ul>
          </div>

          <div className="construction-media">
            <figure className="construction-video">
              <video
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster={`${assetRoot}/data-collection.png`}
                aria-label="Drone survey and three-dimensional capture setup used to collect data for the digital twin"
              >
                <source src={`${assetRoot}/digital-twin-construction.mp4`} type="video/mp4" />
              </video>
              <figcaption>Field collection: configuring the drone&apos;s automated 3D capture and surveying the real road environment.</figcaption>
            </figure>
            <div className="construction-context">
              <p className="section-label">Watch the real-to-digital step</p>
              <h3>Capture once. Reuse the environment across AV experiments.</h3>
              <p>
                The drone follows a structured scan plan to collect overlapping multi-view imagery. Ground control points anchor the reconstruction to real coordinates so the resulting geometry can be aligned with OSM and exported to the simulation stack.
              </p>
            </div>
          </div>

          <figure className="construction-figure">
            <figcaption>
              <span>Construction workflow</span>
              <strong>From field observations to a simulation-ready digital twin</strong>
            </figcaption>
            <div className="construction-steps">
              <article>
                <div className="step-image">
                  <img src={`${assetRoot}/data-collection.png`} alt="Drone three-dimensional scan setup interface in the field" />
                  <span>01</span>
                </div>
                <div className="step-copy">
                  <h3>Collect</h3>
                  <p>Drone multi-view images establish the scene; ground control points and GPS provide geospatial reference.</p>
                  <small>Output · raw .dng imagery</small>
                </div>
              </article>
              <article>
                <div className="step-image">
                  <img src={`${assetRoot}/point-cloud-reconstruction.png`} alt="Photogrammetric reconstruction of the surveyed roadway environment" />
                  <span>02</span>
                </div>
                <div className="step-copy">
                  <h3>Reconstruct</h3>
                  <p>RealityCapture aligns the images and produces a dense, georeferenced 3D point cloud and textured mesh.</p>
                  <small>Output · .las point cloud</small>
                </div>
              </article>
              <article>
                <div className="step-image">
                  <img src={`${assetRoot}/digital-twin-roundabout.png`} alt="RoadRunner digital twin built from OpenStreetMap and reconstructed point-cloud data" />
                  <span>03</span>
                </div>
                <div className="step-copy">
                  <h3>Structure</h3>
                  <p>Semantic segmentation and OSM add roads, lanes, topology, buildings, vegetation, and junction logic in RoadRunner.</p>
                  <small>Output · .rrhd scene</small>
                </div>
              </article>
              <article>
                <div className="step-image">
                  <img src={`${assetRoot}/roadway-finetuning.png`} alt="Road geometry before and after sensor-based elevation fine tuning" />
                  <span>04</span>
                </div>
                <div className="step-copy">
                  <h3>Calibrate &amp; export</h3>
                  <p>Vehicle sensors refine grade and cross-slope; missing junctions are repaired before synchronized deployment.</p>
                  <small>Output · OpenDRIVE + CARLA/SUMO assets</small>
                </div>
              </article>
            </div>
          </figure>
        </section>

        <section className="case-section" id="experiments">
          <div className="case-heading">
            <p className="case-number">04</p>
            <div>
              <p className="section-label">Physics experiment</p>
              <h2>The same control input can produce a different safety outcome.</h2>
            </div>
          </div>

          <div className="experiment-intro">
            <p className="case-lead">
              With throttle held at 0.5, the demonstration changes the tire-friction scaling factor from 5.0 to 1.0. The synchronized view exposes the resulting wheel forces, slip behavior, and vehicle spacing—not just the rendered motion.
            </p>
            <p>Use the controls to compare the two runs.</p>
          </div>

          <div className="video-comparison">
            <figure>
              <video controls muted loop playsInline preload="metadata" poster={`${assetRoot}/friction-high.png`} aria-label="Vehicle dynamics demonstration with tire friction set to 5.0">
                <source src={`${assetRoot}/friction-high.mp4`} type="video/mp4" />
              </video>
              <figcaption><strong>Higher grip</strong><span>Tire friction 5.0 · throttle 0.5</span></figcaption>
            </figure>
            <figure>
              <video controls muted loop playsInline preload="metadata" poster={`${assetRoot}/friction-low.png`} aria-label="Vehicle dynamics demonstration with tire friction set to 1.0">
                <source src={`${assetRoot}/friction-low.mp4`} type="video/mp4" />
              </video>
              <figcaption><strong>Lower grip</strong><span>Tire friction 1.0 · throttle 0.5</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section results-section" id="results">
          <div className="case-heading">
            <p className="case-number">05</p>
            <div>
              <p className="section-label">Safety evaluation</p>
              <h2>Simulation becomes engineering evidence when the metric tracks the physics.</h2>
            </div>
          </div>

          <div className="result-feature">
            <figure>
              <video controls muted playsInline preload="metadata" poster={`${assetRoot}/active-safety.png`} aria-label="Active safety analysis running in a mixed-traffic simulation">
                <source src={`${assetRoot}/active-safety-analysis.mp4`} type="video/mp4" />
              </video>
              <figcaption>Prediction and collision checking running inside the mixed-traffic digital twin.</figcaption>
            </figure>
            <div className="result-copy">
              <p>
                The paper evaluates eight synthetic collision scenarios spanning rear-end, sideswipe, blind-spot, and intersection conflicts. It compares traditional TTC with simulated collision time and a high-fidelity TTC that accounts for multidimensional motion and roadway effects.
              </p>
              <div className="result-callout">
                <strong>0.29 s</strong>
                <span>High-fidelity TTC mean absolute error, versus 0.71 s for traditional TTC.</span>
              </div>
            </div>
          </div>

          <div className="metric-table" role="table" aria-label="Traditional and high-fidelity TTC error comparison">
            <div className="metric-table-row metric-table-head" role="row">
              <span role="columnheader">Method</span>
              <span role="columnheader">MAE</span>
              <span role="columnheader">RMSE</span>
              <span role="columnheader">Maximum error</span>
            </div>
            <div className="metric-table-row" role="row">
              <strong role="cell">Traditional TTC</strong>
              <span role="cell">0.71 s</span>
              <span role="cell">0.97 s</span>
              <span role="cell">2.17 s</span>
            </div>
            <div className="metric-table-row highlight" role="row">
              <strong role="cell">High-fidelity TTC</strong>
              <span role="cell">0.29 s</span>
              <span role="cell">0.32 s</span>
              <span role="cell">0.60 s</span>
            </div>
          </div>
          <p className="result-note">That is a 59% reduction in MAE and a 67% reduction in RMSE in the paper&apos;s reported comparison.</p>
        </section>

        <section className="case-section contribution-section">
          <div className="case-heading">
            <p className="case-number">06</p>
            <div>
              <p className="section-label">My contribution</p>
              <h2>I worked across the stack—from infrastructure data to AV safety analysis.</h2>
            </div>
          </div>
          <div className="contribution-grid">
            <article>
              <h3>Digital-twin construction</h3>
              <p>Built HD environments from LiDAR point clouds, OpenStreetMap, RoadRunner, and vehicle-sensor data.</p>
            </article>
            <article>
              <h3>Python co-simulation</h3>
              <p>Integrated CARLA, SUMO, and NVIDIA PhysX into a synchronized mixed-traffic analysis platform.</p>
            </article>
            <article>
              <h3>Safety experiments</h3>
              <p>Connected controllable scenarios and physics parameters to multidimensional collision-risk evaluation.</p>
            </article>
            <article>
              <h3>Research leadership</h3>
              <p>Led the first-author paper that brings mapping, transportation simulation, vehicle dynamics, and safety into one system.</p>
            </article>
          </div>
        </section>

        <section className="industry-section">
          <div>
            <p className="section-label">Industry relevance</p>
            <h2>Transportation context is an advantage for autonomous-driving validation.</h2>
          </div>
          <div>
            <p>
              This work shows how I approach AV systems: the vehicle, road, traffic stream, infrastructure, and safety metric are coupled parts of one engineering problem.
            </p>
            <ul>
              <li>Reproducible rare-event testing</li>
              <li>Infrastructure-aware scenario design</li>
              <li>Physics sensitivity analysis</li>
              <li>Extensible control and sensor evaluation</li>
            </ul>
          </div>
        </section>

        <section className="project-citation">
          <p className="section-label">Publication</p>
          <p>
            <strong>H. Zhang</strong>, X. Yue, K. Tian, S. Li, K. Wu, Z. Li, D. Lord, and Y. Zhou, “Virtual Roads, Smarter Safety: A Digital Twin Framework for Mixed Autonomous Traffic Safety Analysis,” <em>IEEE Internet of Things Journal</em>.
          </p>
          <a href="https://arxiv.org/abs/2504.17968" target="_blank" rel="noreferrer">Paper and citation <Arrow /></a>
        </section>

        <section className="project-contact">
          <p className="section-label">Let&apos;s connect</p>
          <h2>Interested in simulation, digital twins, or AV safety validation?</h2>
          <a href="mailto:haozhangch9811@gmail.com">haozhangch9811@gmail.com <Arrow /></a>
        </section>
      </article>

      <footer>
        <span>© 2026 Hao Zhang</span>
        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}
