/* =========================================================
   SAM HASAN — PORTFOLIO JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   GLOBAL STATE
========================================================= */

const state = {
  reducedMotion: window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches,

  isMobile: window.innerWidth <= 760,

  mouse: {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  }
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileNavLinks =
  document.querySelectorAll(".mobile-nav-link");

const navLinks =
  document.querySelectorAll(".nav-link");

const revealElements =
  document.querySelectorAll(".reveal");

const backToTop =
  document.getElementById("backToTop");

const contactForm =
  document.getElementById("contactForm");

const cursorDot =
  document.getElementById("cursorDot");

const cursorRing =
  document.getElementById("cursorRing");


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.classList.add("loaded");

    document.body.classList.add("page-loaded");

  }, state.reducedMotion ? 100 : 500);

});


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function handleNavbarScroll() {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > window.innerHeight * 0.7) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

}

window.addEventListener(
  "scroll",
  handleNavbarScroll,
  { passive: true }
);

handleNavbarScroll();


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

  const isOpen =
    mobileMenuButton.classList.toggle("open");

  mobileMenu.classList.toggle("open", isOpen);

  document.body.classList.toggle("menu-open", isOpen);

  mobileMenuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

}


mobileMenuButton.addEventListener(
  "click",
  toggleMobileMenu
);


mobileNavLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenuButton.classList.remove("open");
    mobileMenu.classList.remove("open");

    document.body.classList.remove("menu-open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#" ||
      targetId.length < 2
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navbarHeight =
      navbar.offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: state.reducedMotion
        ? "auto"
        : "smooth"
    });

  });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll("main section[id]");

function updateActiveNavigation() {

  const scrollPosition =
    window.scrollY + navbar.offsetHeight + 150;

  let currentSection = "home";

  sections.forEach(section => {

    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (
      scrollPosition >= top &&
      scrollPosition < top + height
    ) {
      currentSection = section.id;
    }

  });

  navLinks.forEach(link => {

    const href =
      link.getAttribute("href");

    link.classList.toggle(
      "active",
      href === `#${currentSection}`
    );

  });

}

window.addEventListener(
  "scroll",
  updateActiveNavigation,
  { passive: true }
);

updateActiveNavigation();


/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

if (!state.reducedMotion) {

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

  revealElements.forEach((element, index) => {

    element.style.transitionDelay =
      `${Math.min(index % 5, 4) * 45}ms`;

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

if (
  !state.isMobile &&
  !state.reducedMotion &&
  cursorDot &&
  cursorRing
) {

  window.addEventListener(
    "mousemove",
    event => {

      state.mouse.targetX = event.clientX;
      state.mouse.targetY = event.clientY;

    },
    { passive: true }
  );


  function animateCursor() {

    state.mouse.x +=
      (state.mouse.targetX - state.mouse.x) * 0.18;

    state.mouse.y +=
      (state.mouse.targetY - state.mouse.y) * 0.18;

    cursorDot.style.transform =
      `translate(${state.mouse.x}px, ${state.mouse.y}px) translate(-50%, -50%)`;

    cursorRing.style.transform =
      `translate(${state.mouse.x}px, ${state.mouse.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);

  }

  animateCursor();


  const interactiveElements =
    document.querySelectorAll(
      "a, button, input, textarea, select, .tilt-card"
    );


  interactiveElements.forEach(element => {

    element.addEventListener(
      "mouseenter",
      () => cursorRing.classList.add("hover")
    );

    element.addEventListener(
      "mouseleave",
      () => cursorRing.classList.remove("hover")
    );

  });

}


/* =========================================================
   3D TILT CARDS
========================================================= */

function setupTiltCards() {

  if (
    state.isMobile ||
    state.reducedMotion
  ) {
    return;
  }

  const cards =
    document.querySelectorAll(".tilt-card");

  cards.forEach(card => {

    card.addEventListener("mousemove", event => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -3;

      const rotateY =
        ((x - centerX) / centerX) * 3;

      card.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

  });

}

setupTiltCards();


/* =========================================================
   PROJECT PREVIEW PARALLAX
========================================================= */

function setupProjectParallax() {

  if (
    state.isMobile ||
    state.reducedMotion
  ) {
    return;
  }

  const projects =
    document.querySelectorAll(".project-preview");

  projects.forEach(project => {

    project.addEventListener(
      "mousemove",
      event => {

        const rect =
          project.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width;

        const y =
          (event.clientY - rect.top) /
          rect.height;

        const moveX =
          (x - 0.5) * 10;

        const moveY =
          (y - 0.5) * 10;

        const children =
          project.children;

        Array.from(children).forEach(
          (child, index) => {

            const strength =
              index === 0 ? 0.25 : 0.7;

            child.style.transform =
              `translate(${moveX * strength}px, ${moveY * strength}px)`;

          }
        );

      }
    );


    project.addEventListener(
      "mouseleave",
      () => {

        Array.from(project.children)
          .forEach(child => {
            child.style.transform = "";
          });

      }
    );

  });

}

setupProjectParallax();


/* =========================================================
   BACK TO TOP
========================================================= */

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: state.reducedMotion
      ? "auto"
      : "smooth"
  });

});


/* =========================================================
   CONTACT FORM
========================================================= */

contactForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const formData =
      new FormData(contactForm);

    const name =
      formData.get("name");

    const email =
      formData.get("email");

    const projectType =
      formData.get("projectType");

    const message =
      formData.get("message");


    const subject =
      encodeURIComponent(
        `Portfolio Project — ${projectType}`
      );


    const body =
      encodeURIComponent(
`Hello Sam,

My name is ${name}.

Email: ${email}

Project type: ${projectType}

Message:
${message}

Sent from your portfolio website.`
      );


    const mailto =
      `mailto:smahasan88@gmail.com?subject=${subject}&body=${body}`;


    window.location.href = mailto;

  }
);


/* =========================================================
   THREE.JS HERO SCENE
========================================================= */

function initHeroScene() {

  const canvas =
    document.getElementById("heroCanvas");

  if (!canvas) {
    return;
  }

  if (
    typeof THREE === "undefined" ||
    state.reducedMotion
  ) {
    return;
  }


  let renderer;

  try {

    renderer =
      new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !state.isMobile,
        powerPreference: "high-performance"
      });

  } catch (error) {

    console.warn(
      "WebGL unavailable. Using CSS fallback.",
      error
    );

    canvas.style.display = "none";
    return;

  }


  const scene =
    new THREE.Scene();


  const camera =
    new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );


  camera.position.z =
    state.isMobile ? 8 : 6.5;


  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      state.isMobile ? 1.25 : 1.7
    )
  );


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  renderer.outputEncoding =
    THREE.sRGBEncoding;


  /* -------------------------------------------------------
     MAIN OBJECT
  ------------------------------------------------------- */

  const geometry =
    new THREE.IcosahedronGeometry(
      state.isMobile ? 1.25 : 1.65,
      2
    );


  const material =
    new THREE.MeshStandardMaterial({

      color: 0x0c4e85,

      metalness: 0.72,
      roughness: 0.28,

      transparent: true,
      opacity: 0.82,

      wireframe: false

    });


  const mainObject =
    new THREE.Mesh(
      geometry,
      material
    );


  mainObject.position.set(
    state.isMobile ? 1.5 : 2.25,
    state.isMobile ? 0.8 : 0.2,
    0
  );


  scene.add(mainObject);


  /* -------------------------------------------------------
     WIREFRAME SHELL
  ------------------------------------------------------- */

  const wireGeometry =
    new THREE.IcosahedronGeometry(
      state.isMobile ? 1.4 : 1.82,
      2
    );


  const wireMaterial =
    new THREE.MeshBasicMaterial({

      color: 0x3faeff,

      wireframe: true,

      transparent: true,

      opacity: state.isMobile
        ? 0.08
        : 0.14

    });


  const wireObject =
    new THREE.Mesh(
      wireGeometry,
      wireMaterial
    );


  wireObject.position.copy(
    mainObject.position
  );


  scene.add(wireObject);


  /* -------------------------------------------------------
     ORBIT RING
  ------------------------------------------------------- */

  const ringGeometry =
    new THREE.TorusGeometry(
      state.isMobile ? 1.7 : 2.15,
      0.012,
      8,
      100
    );


  const ringMaterial =
    new THREE.MeshBasicMaterial({
      color: 0x57baff,
      transparent: true,
      opacity: 0.3
    });


  const ring =
    new THREE.Mesh(
      ringGeometry,
      ringMaterial
    );


  ring.position.copy(
    mainObject.position
  );


  ring.rotation.x =
    Math.PI * 0.6;

  ring.rotation.y =
    Math.PI * 0.15;


  scene.add(ring);


  /* -------------------------------------------------------
     SECOND RING
  ------------------------------------------------------- */

  const ringTwo =
    new THREE.Mesh(
      new THREE.TorusGeometry(
        state.isMobile ? 1.9 : 2.4,
        0.008,
        8,
        100
      ),
      new THREE.MeshBasicMaterial({
        color: 0x1688ff,
        transparent: true,
        opacity: 0.18
      })
    );


  ringTwo.position.copy(
    mainObject.position
  );


  ringTwo.rotation.x =
    Math.PI * 0.35;

  ringTwo.rotation.z =
    Math.PI * 0.2;


  scene.add(ringTwo);


  /* -------------------------------------------------------
     LIGHTING
  ------------------------------------------------------- */

  const ambientLight =
    new THREE.AmbientLight(
      0x8ab9d8,
      0.45
    );

  scene.add(ambientLight);


  const blueLight =
    new THREE.PointLight(
      0x1688ff,
      4,
      12
    );


  blueLight.position.set(
    3,
    2,
    4
  );


  scene.add(blueLight);


  const softLight =
    new THREE.PointLight(
      0x69c5ff,
      2,
      10
    );


  softLight.position.set(
    -4,
    -2,
    2
  );


  scene.add(softLight);


  /* -------------------------------------------------------
     PARTICLES
  ------------------------------------------------------- */

  const particleCount =
    state.isMobile ? 260 : 600;


  const particlePositions =
    new Float32Array(
      particleCount * 3
    );


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const i3 = i * 3;

    particlePositions[i3] =
      (Math.random() - 0.5) * 12;

    particlePositions[i3 + 1] =
      (Math.random() - 0.5) * 8;

    particlePositions[i3 + 2] =
      (Math.random() - 0.5) * 8;

  }


  const particleGeometry =
    new THREE.BufferGeometry();


  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      particlePositions,
      3
    )
  );


  const particleMaterial =
    new THREE.PointsMaterial({

      color: 0x65c4ff,

      size: state.isMobile
        ? 0.018
        : 0.025,

      transparent: true,

      opacity: 0.55,

      sizeAttenuation: true

    });


  const particles =
    new THREE.Points(
      particleGeometry,
      particleMaterial
    );


  scene.add(particles);


  /* -------------------------------------------------------
     MOUSE
  ------------------------------------------------------- */

  const mouse =
    {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };


  if (!state.isMobile) {

    window.addEventListener(
      "mousemove",
      event => {

        mouse.targetX =
          (event.clientX /
            window.innerWidth -
            0.5);

        mouse.targetY =
          (event.clientY /
            window.innerHeight -
            0.5);

      },
      { passive: true }
    );

  }


  /* -------------------------------------------------------
     RESIZE
  ------------------------------------------------------- */

  function resize() {

    camera.aspect =
      window.innerWidth /
      window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        window.innerWidth <= 760
          ? 1.25
          : 1.7
      )
    );

  }


  window.addEventListener(
    "resize",
    resize,
    { passive: true }
  );


  /* -------------------------------------------------------
     VISIBILITY
  ------------------------------------------------------- */

  let sceneVisible = true;


  document.addEventListener(
    "visibilitychange",
    () => {

      sceneVisible =
        !document.hidden;

    }
  );


  /* -------------------------------------------------------
     ANIMATION
  ------------------------------------------------------- */

  const clock =
    new THREE.Clock();


  function animate() {

    requestAnimationFrame(
      animate
    );


    if (!sceneVisible) {
      return;
    }


    const elapsed =
      clock.getElapsedTime();


    mouse.x +=
      (mouse.targetX - mouse.x) *
      0.035;

    mouse.y +=
      (mouse.targetY - mouse.y) *
      0.035;


    /* Main object */

    mainObject.rotation.x =
      elapsed * 0.11 +
      mouse.y * 0.22;

    mainObject.rotation.y =
      elapsed * 0.15 +
      mouse.x * 0.32;


    /* Wireframe */

    wireObject.rotation.x =
      -elapsed * 0.07;

    wireObject.rotation.y =
      -elapsed * 0.11;


    /* Rings */

    ring.rotation.z =
      elapsed * 0.13;

    ring.rotation.y =
      elapsed * 0.08;


    ringTwo.rotation.z =
      -elapsed * 0.08;


    /* Particles */

    particles.rotation.y =
      elapsed * 0.012;

    particles.rotation.x =
      mouse.y * 0.04;


    /* Camera movement */

    camera.position.x +=
      (
        mouse.x * 0.45 -
        camera.position.x
      ) * 0.015;

    camera.position.y +=
      (
        -mouse.y * 0.25 -
        camera.position.y
      ) * 0.015;


    camera.lookAt(
      mainObject.position
    );


    renderer.render(
      scene,
      camera
    );

  }


  animate();

}


/* =========================================================
   INITIALIZE THREE.JS AFTER LOAD
========================================================= */

window.addEventListener(
  "load",
  () => {

    if (
      !state.reducedMotion
    ) {

      /*
       * Small delay prevents the 3D scene
       * from competing with the initial page paint.
       */

      setTimeout(
        initHeroScene,
        150
      );

    }

  }
);


/* =========================================================
   PERFORMANCE SAFETY
========================================================= */

window.addEventListener(
  "resize",
  () => {

    state.isMobile =
      window.innerWidth <= 760;

  },
  { passive: true }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      mobileMenu.classList.contains("open")
    ) {

      mobileMenuButton.classList.remove("open");

      mobileMenu.classList.remove("open");

      document.body.classList.remove("menu-open");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


/* =========================================================
   PROJECT LINK SAFETY
========================================================= */

document.querySelectorAll(
  '.project-link[target="_blank"]'
).forEach(link => {

  link.addEventListener(
    "click",
    () => {

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    }
  );

});