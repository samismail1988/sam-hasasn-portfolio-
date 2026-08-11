
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Sam Ibrahim Hasan - Front-End Web Developer portfolio showcasing projects, skills, and professional profile."
    />
    <title>Sam Ibrahim Hasan | Front-End Web Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --bg: #0d1117;
        --bg-soft: #111827;
        --card: #161b22;
        --card-strong: #1d2938;
        --primary: #00e5a8;
        --primary-2: #2dd4bf;
        --text: #ffffff;
        --muted: #9ca3af;
        --border: rgba(255, 255, 255, 0.08);
        --shadow: 0 30px 60px rgba(0, 0, 0, 0.28);
      }
      * {
        box-sizing: border-box;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        margin: 0;
        font-family: "Inter", sans-serif;
        background:
          radial-gradient(
            circle at 10% 20%,
            rgba(0, 229, 168, 0.12),
            transparent 25%
          ),
          radial-gradient(
            circle at 90% 10%,
            rgba(45, 212, 191, 0.1),
            transparent 25%
          ),
          radial-gradient(
            circle at 50% 80%,
            rgba(45, 212, 191, 0.08),
            transparent 25%
          ),
          var(--bg);
        color: var(--text);
        line-height: 1.6;
        overflow-x: hidden;
      }
      body::before,
      body::after {
        content: "";
        position: fixed;
        width: 22rem;
        height: 22rem;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.18;
        z-index: 0;
        pointer-events: none;
      }
      body::before {
        background: var(--primary);
        top: 10%;
        left: -8%;
      }
      body::after {
        background: #3b82f6;
        bottom: 5%;
        right: -8%;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      img {
        max-width: 100%;
        display: block;
      }
      .container {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }
      .site-header {
        position: sticky;
        top: 0;
        z-index: 40;
        backdrop-filter: blur(16px);
        background: rgba(13, 17, 23, 0.72);
        border-bottom: 1px solid var(--border);
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 76px;
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--text);
      }
      .brand-mark {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        background: linear-gradient(135deg, var(--primary), var(--primary-2));
        display: grid;
        place-items: center;
        font-size: 0.9rem;
        color: #07150f;
        box-shadow: 0 12px 32px rgba(0, 229, 168, 0.36);
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 26px;
        font-size: 0.96rem;
        color: var(--muted);
      }
      .nav-links a {
        transition: color 0.2s ease;
      }
      .nav-links a:hover {
        color: var(--text);
      }
      .nav-button {
        padding: 0.8rem 1.25rem;
        border-radius: 999px;
        background: linear-gradient(135deg, var(--primary), var(--primary-2));
        color: #041c17;
        font-weight: 700;
        box-shadow: 0 10px 24px rgba(0, 229, 168, 0.28);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }
      .nav-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 26px rgba(0, 229, 168, 0.4);
      }
      .section {
        padding: 90px 0;
      }
      .hero {
        padding-top: 70px;
        padding-bottom: 100px;
      }
      .hero-shell {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 36px;
        align-items: center;
      }
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0.45rem 0.8rem;
        border: 1px solid rgba(0, 229, 168, 0.22);
        border-radius: 99px;
        background: rgba(0, 229, 168, 0.08);
        color: var(--primary);
        font-size: 0.76rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .hero h1 {
        font-size: clamp(2.9rem, 6vw, 5rem);
        line-height: 1.03;
        letter-spacing: -0.06em;
        margin: 0 0 22px;
      }
      .hero h1 .highlight {
        background: linear-gradient(135deg, var(--primary), #8ee7c8);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .hero-subtitle {
        max-width: 620px;
        color: var(--muted);
        font-size: 1.06rem;
        margin-bottom: 28px;
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 28px;
      }
      .primary-btn,
      .secondary-btn,
      .project-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 52px;
        padding: 0.95rem 1.5rem;
        border-radius: 14px;
        font-weight: 700;
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease,
          border-color 0.2s ease;
      }
      .primary-btn {
        background: linear-gradient(135deg, var(--primary), var(--primary-2));
        color: #041c17;
        box-shadow: 0 18px 36px rgba(0, 229, 168, 0.23);
      }
      .secondary-btn {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text);
      }
      .primary-btn:hover,
      .secondary-btn:hover,
      .project-link:hover {
        transform: translateY(-2px);
      }
      .hero-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        color: var(--muted);
        font-size: 0.94rem;
      }
      .meta-item strong {
        color: var(--text);
        display: block;
        font-size: 1.2rem;
        margin-bottom: 4px;
      }
      .profile-card {
        position: relative;
        padding: 18px;
        border-radius: 30px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.07),
          rgba(255, 255, 255, 0.03)
        );
        border: 1px solid var(--border);
        box-shadow: var(--shadow);
      }
      .profile-image-wrap {
        position: relative;
        overflow: hidden;
        border-radius: 26px;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.12),
          rgba(255, 255, 255, 0.03)
        );
        min-height: 420px;
        display: grid;
        place-items: center;
      }
      .profile-placeholder {
        text-align: center;
        padding: 40px 20px;
        color: var(--muted);
      }
      .profile-placeholder .big-letter {
        width: 120px;
        height: 120px;
        border-radius: 28px;
        background: linear-gradient(135deg, var(--primary), var(--primary-2));
        display: grid;
        place-items: center;
        font-size: 3.5rem;
        font-weight: 800;
        color: #041c17;
        margin: 0 auto 20px;
        box-shadow: 0 20px 40px rgba(0, 229, 168, 0.3);
      }
      .floating-card {
        position: absolute;
        bottom: 18px;
        left: 18px;
        right: 18px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 16px 18px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        background: rgba(15, 20, 27, 0.7);
        backdrop-filter: blur(14px);
      }
      .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary);
        box-shadow: 0 0 18px rgba(0, 229, 168, 0.9);
      }
      .status-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .status-text small {
        color: var(--muted);
      }
      .status-text strong {
        font-size: 1rem;
      }
      .badge {
        padding: 0.45rem 0.8rem;
        border-radius: 999px;
        background: rgba(0, 229, 168, 0.13);
        border: 1px solid rgba(0, 229, 168, 0.2);
        color: var(--primary);
        font-weight: 700;
        font-size: 0.75rem;
      }
      .section-heading {
        margin-bottom: 28px;
      }
      .section-heading .label {
        display: inline-block;
        margin-bottom: 12px;
        color: var(--primary);
        font-size: 0.74rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-weight: 700;
      }
      .section-heading h2 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 3rem);
        letter-spacing: -0.05em;
      }
      .about-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
      .panel {
        background: rgba(22, 27, 34, 0.9);
        border: 1px solid var(--border);
        border-radius: 24px;
        box-shadow: var(--shadow);
      }
      .about-card {
        padding: 28px;
      }
      .about-card p {
        color: var(--muted);
        margin: 0 0 18px;
        font-size: 1.02rem;
      }
      .mini-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        gap: 16px;
        margin-top: 18px;
      }
      .mini-box {
        padding: 18px 16px;
        border: 1px solid var(--border);
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.02);
      }
      .mini-box small {
        color: var(--muted);
        display: block;
        margin-bottom: 8px;
      }
      .mini-box strong {
        font-size: 1.05rem;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 22px;
      }
      .skill-card {
        padding: 24px 20px;
        border-radius: 22px;
        background: linear-gradient(
          180deg,
          rgba(22, 27, 34, 0.56),
          rgba(22, 27, 34, 0.92)
        );
        border: 1px solid var(--border);
        box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18);
        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          box-shadow 0.25s ease;
      }
      .skill-card:hover {
        transform: translateY(-8px);
        border-color: rgba(0, 229, 168, 0.35);
        box-shadow: 0 28px 54px rgba(0, 229, 168, 0.12);
      }
      .skill-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        margin-bottom: 18px;
        background: linear-gradient(
          135deg,
          rgba(0, 229, 168, 0.1),
          rgba(45, 212, 191, 0.16)
        );
        color: var(--primary);
        font-size: 1.4rem;
        font-weight: 800;
      }
      .skill-card h3 {
        margin: 0 0 8px;
        font-size: 1.1rem;
      }
      .skill-card p {
        margin: 0;
        color: var(--muted);
        font-size: 0.92rem;
      }
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
      }
      .project-card {
        display: flex;
        flex-direction: column;
        background: rgba(22, 27, 34, 0.9);
        border: 1px solid var(--border);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: var(--shadow);
        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          box-shadow 0.25s ease;
      }
      .project-card:hover {
        transform: translateY(-8px);
        border-color: rgba(0, 229, 168, 0.32);
        box-shadow: 0 30px 54px rgba(0, 229, 168, 0.1);
      }
      .project-visual {
        min-height: 200px;
        display: grid;
        place-items: center;
        background: linear-gradient(
          135deg,
          rgba(0, 229, 168, 0.14),
          rgba(59, 130, 246, 0.14)
        );
        border-bottom: 1px solid var(--border);
        color: var(--primary);
        font-size: 2.2rem;
        font-weight: 800;
      }
      .project-content {
        padding: 22px 22px 18px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        flex: 1;
      }
      .project-tag {
        display: inline-flex;
        align-self: flex-start;
        padding: 0.45rem 0.8rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--primary);
        background: rgba(0, 229, 168, 0.1);
        border: 1px solid rgba(0, 229, 168, 0.2);
      }
      .project-content h3 {
        margin: 0;
        font-size: 1.4rem;
      }
      .project-content p {
        margin: 0;
        color: var(--muted);
      }
      .tech-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .tech-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 32px;
        padding: 0.42rem 0.8rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border);
        color: var(--text);
        font-size: 0.75rem;
        font-weight: 600;
      }
      .project-links {
        display: flex;
        gap: 12px;
        margin-top: auto;
      }
      .project-link {
        flex: 1;
        border: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.02);
        color: var(--text);
      }
      .project-link.primary {
        background: linear-gradient(135deg, var(--primary), var(--primary-2));
        border: none;
        color: #031a15;
      }
      .details-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
      }
      .details-card {
        padding: 28px 24px;
        border-radius: 22px;
        background: rgba(22, 27, 34, 0.92);
        border: 1px solid var(--border);
      }
      .details-card h3 {
        margin: 0 0 16px;
        font-size: 1.1rem;
      }
      .details-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .details-card li {
        color: var(--muted);
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      }
      .details-card li:last-child {
        border-bottom: none;
      }
      .details-card li strong {
        color: var(--text);
      }
      .contact-card {
        position: relative;
        padding: 28px;
        border-radius: 28px;
        background: linear-gradient(
          135deg,
          rgba(0, 229, 168, 0.08),
          rgba(45, 212, 191, 0.02),
          rgba(255, 255, 255, 0.02)
        );
        border: 1px solid rgba(0, 229, 168, 0.18);
        overflow: hidden;
      }
      .contact-card::before {
        content: "";
        position: absolute;
        width: 190px;
        height: 190px;
        background: radial-gradient(
          circle,
          rgba(0, 229, 168, 0.2),
          transparent 70%
        );
        top: -60px;
        right: -40px;
      }
      .contact-inner {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }
      .contact-copy {
        max-width: 700px;
      }
      .contact-copy h2 {
        margin: 0 0 10px;
        font-size: clamp(2rem, 3vw, 3rem);
        letter-spacing: -0.04em;
      }
      .contact-copy p {
        margin: 0;
        color: var(--muted);
      }
      .contact-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        margin-top: 24px;
      }
      .contact-item {
        padding: 22px 18px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border);
      }
      .contact-item small {
        display: block;
        margin-bottom: 8px;
        color: var(--muted);
      }
      .contact-item a,
      .contact-item span {
        font-weight: 600;
      }
      .site-footer {
        padding: 24px 0 60px;
        color: var(--muted);
        border-top: 1px solid var(--border);
      }
      .footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }
      @media (max-width: 980px) {
        .hero-shell,
        .about-layout,
        .projects-grid,
        .details-grid,
        .contact-cards,
        .skills-grid {
          grid-template-columns: 1fr 1fr;
        }
        .hero-shell {
          grid-template-columns: 1fr;
        }
        .contact-inner {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      @media (max-width: 720px) {
        .nav-links {
          display: none;
        }
        .section {
          padding: 70px 0;
        }
        .skills-grid,
        .projects-grid,
        .details-grid,
        .contact-cards,
        .about-layout,
        .mini-grid {
          grid-template-columns: 1fr;
        }
        .profile-image-wrap {
          min-height: 360px;
        }
        .hero h1 {
          font-size: 2.8rem;
        }
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(18px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .reveal {
        animation: fadeUp 0.8s ease both;
      }
    </style>
  </head>
  <body>
    <header class="site-header">
      <div class="container nav">
        <a href="#top" class="brand" aria-label="Sam Ibrahim Hasan home">
          <span class="brand-mark">S</span>
          <span>Sam</span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="nav-button" href="mailto:smahasan88@gmail.com">Hire Me</a>
      </div>
    </header>

    <main id="top">
      <!-- HERO -->
      <section class="hero section">
        <div class="container hero-shell reveal">
          <div>
            <div class="eyebrow">Available for freelance work</div>
            <h1>
              I build clean,
              <span class="highlight">modern</span>
              digital experiences.
            </h1>
            <p class="hero-subtitle">
              I'm <strong>Sam Ibrahim Hasan</strong>, a passionate self-taught
              Front-End Web Developer focused on creating responsive,
              user-friendly, and modern interfaces that look premium and perform
              smoothly.
            </p>
            <div class="hero-actions">
              <a class="primary-btn" href="#projects">View Projects</a>
              <a class="secondary-btn" href="mailto:smahasan88@gmail.com"
                >Email Me</a
              >
            </div>
            <div class="hero-meta">
              <div class="meta-item">
                <strong>2+</strong>
                <span>Years of learning</span>
              </div>
              <div class="meta-item">
                <strong>10+</strong>
                <span>Projects built</span>
              </div>
              <div class="meta-item">
                <strong>100%</strong>
                <span>Self-driven</span>
              </div>
            </div>
          </div>

          <div class="profile-card">
            <div class="profile-image-wrap">
              <div class="profile-placeholder">
                <div class="big-letter">S</div>
                <div
                  style="
                    font-weight: 700;
                    color: var(--text);
                    margin-bottom: 6px;
                  "
                >
                  Sam Ibrahim Hasan
                </div>
                <div>Front-End Web Developer</div>
              </div>
              <div class="floating-card">
                <div style="display: flex; align-items: center; gap: 12px">
                  <span class="status-dot" aria-hidden="true"></span>
                  <div class="status-text">
                    <strong>Available for work</strong>
                    <small>Open to freelance & full-time</small>
                  </div>
                </div>
                <span class="badge">Front-End</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="label">About Me</span>
            <h2>Professional, focused, and always improving.</h2>
          </div>
          <div class="about-layout reveal">
            <div class="panel about-card">
              <p>
                I am a passionate self-taught Front-End Web Developer who enjoys
                creating modern, responsive, and user-friendly websites. I
                continuously improve my skills by building real projects and
                learning new technologies.
              </p>
              <p>
                I enjoy solving problems, writing clean code, and designing
                beautiful user experiences. My goal is to become a professional
                software engineer and work with international clients while
                continuously improving my skills.
              </p>
            </div>
            <div class="panel about-card">
              <div class="mini-grid">
                <div class="mini-box">
                  <small>Location</small>
                  <strong>Tartus, Syria</strong>
                </div>
                <div class="mini-box">
                  <small>Role</small>
                  <strong>Front-End Developer</strong>
                </div>
                <div class="mini-box">
                  <small>Email</small>
                  <strong>smahasan88@gmail.com</strong>
                </div>
                <div class="mini-box">
                  <small>Focus</small>
                  <strong>UI & UX</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS -->
      <section id="skills" class="section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="label">Skills</span>
            <h2>Tools, languages, and design thinking.</h2>
          </div>
          <div class="skills-grid reveal">
            <article class="skill-card">
              <div class="skill-icon">H</div>
              <h3>HTML5</h3>
              <p>Semantic structure and clean page architecture.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">C</div>
              <h3>CSS3</h3>
              <p>Responsive layout, styling, polish, and visual systems.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">J</div>
              <h3>JavaScript</h3>
              <p>
                Interactive logic, DOM manipulation, and front-end behavior.
              </p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">R</div>
              <h3>Responsive Design</h3>
              <p>Optimized layouts for mobile, tablet, and desktop.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">F</div>
              <h3>Flexbox</h3>
              <p>Effective structures and alignment for modern interfaces.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">G</div>
              <h3>CSS Grid</h3>
              <p>Complex layouts and consistent visual rhythm.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">G</div>
              <h3>Git</h3>
              <p>Version control workflow and collaborative learning.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">V</div>
              <h3>VS Code</h3>
              <p>Efficient development and project organization.</p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">U</div>
              <h3>UI Design</h3>
              <p>
                Design taste, hierarchy, spacing, and modern user interfaces.
              </p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">P</div>
              <h3>Problem Solving</h3>
              <p>
                Breaking projects into solutions and implementing them clearly.
              </p>
            </article>
            <article class="skill-card">
              <div class="skill-icon">B</div>
              <h3>Build Mindset</h3>
              <p>
                Turning ideas into polished products through consistent
                execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="label">Projects</span>
            <h2>Selected work with clarity and craft.</h2>
          </div>
          <div class="projects-grid reveal">
            <!-- 1. Faheem Afandi -->
            <article class="project-card">
              <div class="project-visual">🍽️</div>
              <div class="project-content">
                <span class="project-tag">Restaurant</span>
                <h3>Faheem Afandi Restaurant</h3>
                <p>
                  A premium Syrian restaurant website with elegant branding,
                  responsive layout, menu sections, and a polished digital
                  experience built for a real-world food business.
                </p>
                <div class="tech-row">
                  <span class="tech-pill">HTML</span>
                  <span class="tech-pill">CSS</span>
                  <span class="tech-pill">JavaScript</span>
                </div>
                <div class="project-links">
                  <a
                    class="project-link primary"
                    href="https://faheem-afandi-953363848103.us-east1.run.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live Demo</a
                  >
                  <a class="project-link" href="#">Case Study</a>
                </div>
              </div>
            </article>

            <!-- 2. Vanta Cafe -->
            <article class="project-card">
              <div class="project-visual">☕</div>
              <div class="project-content">
                <span class="project-tag">Cafe</span>
                <h3>Vanta Cafe</h3>
                <p>
                  A modern cafe website with a warm aesthetic, smooth responsive
                  design, menu highlights, and an inviting digital presence
                  crafted for a contemporary coffee experience.
                </p>
                <div class="tech-row">
                  <span class="tech-pill">HTML</span>
                  <span class="tech-pill">CSS</span>
                  <span class="tech-pill">JavaScript</span>
                </div>
                <div class="project-links">
                  <a
                    class="project-link primary"
                    href="https://vanta-cafe.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live Demo</a
                  >
                  <a class="project-link" href="#">Case Study</a>
                </div>
              </div>
            </article>

            <!-- 3. Blackline Barbershop -->
            <article class="project-card">
              <div class="project-visual">💈</div>
              <div class="project-content">
                <span class="project-tag">Barbershop</span>
                <h3>Blackline Barbershop</h3>
                <p>
                  A sharp, masculine barbershop website featuring bold design,
                  clean service sections, and a premium look that matches the
                  energy of a modern men’s grooming brand.
                </p>
                <div class="tech-row">
                  <span class="tech-pill">HTML</span>
                  <span class="tech-pill">CSS</span>
                  <span class="tech-pill">JavaScript</span>
                </div>
                <div class="project-links">
                  <a
                    class="project-link primary"
                    href="https://blackline-barbershop.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live Demo</a
                  >
                  <a class="project-link" href="#">Case Study</a>
                </div>
              </div>
            </article>

            <!-- 4. IRON-GYM -->
            <article class="project-card">
              <div class="project-visual">💪</div>
              <div class="project-content">
                <span class="project-tag">Fitness</span>
                <h3>IRON-GYM</h3>
                <p>
                  A powerful fitness gym website with energetic visuals,
                  responsive layouts, membership sections, and a strong modern
                  identity built for a performance-driven training brand.
                </p>
                <div class="tech-row">
                  <span class="tech-pill">HTML</span>
                  <span class="tech-pill">CSS</span>
                  <span class="tech-pill">JavaScript</span>
                </div>
                <div class="project-links">
                  <a
                    class="project-link primary"
                    href="https://iron-gym19881.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live Demo</a
                  >
                  <a class="project-link" href="#">Case Study</a>
                </div>
              </div>
            </article>

            <!-- 5. Nox-Blue Hotel -->
            <article class="project-card">
              <div class="project-visual">🏨</div>
              <div class="project-content">
                <span class="project-tag">Hotel</span>
                <h3>Nox-Blue Hotel</h3>
                <p>
                  An elegant hotel website with refined visuals, smooth
                  responsive design, room highlights, and a luxurious digital
                  experience tailored for a modern hospitality brand.
                </p>
                <div class="tech-row">
                  <span class="tech-pill">HTML</span>
                  <span class="tech-pill">CSS</span>
                  <span class="tech-pill">JavaScript</span>
                </div>
                <div class="project-links">
                  <a
                    class="project-link primary"
                    href="https://nox-blue-hotel.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live Demo</a
                  >
                  <a class="project-link" href="#">Case Study</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section class="section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="label">Experience</span>
            <h2>Building momentum.</h2>
          </div>
          <div class="details-grid reveal">
            <div class="details-card">
              <h3>Education</h3>
              <ul>
                <li><strong>Self-Taught Front-End Developer</strong></li>
                <li>Project-based learning and practical implementation</li>
                <li>Continuous improvement through real work</li>
              </ul>
            </div>
            <div class="details-card">
              <h3>Languages</h3>
              <ul>
                <li><strong>Arabic:</strong> Native</li>
                <li><strong>English:</strong> Intermediate</li>
              </ul>
            </div>
            <div class="details-card">
              <h3>Strengths</h3>
              <ul>
                <li>Fast Learner</li>
                <li>Creative</li>
                <li>Problem Solver</li>
                <li>Self Motivated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section">
        <div class="container reveal">
          <div class="contact-card">
            <div class="contact-inner">
              <div class="contact-copy">
                <span class="label">Contact</span>
                <h2>Let's Build Something Amazing Together.</h2>
                <p>
                  I’m ready to bring clean UI, great user experience, and
                  ambitious front-end ideas to life.
                </p>
              </div>
              <a class="primary-btn" href="mailto:smahasan88@gmail.com"
                >Contact Me</a
              >
            </div>
            <div class="contact-cards">
              <div class="contact-item">
                <small>Email</small>
                <a href="mailto:smahasan88@gmail.com">smahasan88@gmail.com</a>
              </div>
              <div class="contact-item">
                <small>Location</small>
                <span>Tartus, Syria</span>
              </div>
              <div class="contact-item">
                <small>Portfolio</small>
                <a href="#">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <span>© <span id="year"></span> Sam Ibrahim Hasan</span>
        <span>Designed by Sam Ibrahim Hasan.</span>
      </div>
    </footer>

    <script>
      document.getElementById("year").textContent = new Date().getFullYear();
    </script>
  </body>
</html>
