// ==========================================================================
// Portfolio Main JavaScript
// ==========================================================================

(function() {
  'use strict';

  // Embedded Data
  const DATA = {
    projects: [
      { id: 1, title: "Engagement-First Design Has Deadly Consequences: How Platform Design Can Curate Real-World Violence", description: null, date: "AUG 2025", dateSort: "2025-08", type: "article", category: ["article"], company: null, logo: null, link: "https://medium.com/@Rhizome001/re-thinking-engagement-first-design-how-social-media-curates-real-world-violence-8fd62c9b1477", linkText: "Read Article", linkExternal: true },
      { id: 2, title: "A Digital Re-Transformation of Blinkist by Integrating User Experience Design and Systems Thinking", description: null, date: "JAN 2024", dateSort: "2024-01", type: "article", category: ["article"], company: null, logo: null, link: "https://medium.com/@Rhizome001/a-digital-re-transformation-of-blinkist-by-integrating-user-experience-design-and-systems-thinking-9a1a03955b48", linkText: "Read Article", linkExternal: true },
      { id: 3, title: "My Predictions for Tech in the Music Industry", description: null, date: "SEP 2023", dateSort: "2023-09", type: "article", category: ["article"], company: null, logo: null, link: "https://medium.com/@Rhizome001/my-predictions-for-tech-in-the-music-industry-db07b76bde03", linkText: "Read Article", linkExternal: true },
      { id: 4, title: "JPMorganChase", description: ["Designed AI features across 4 cybersecurity products, scaling automation to 900k findings and reducing support demand by 53%", "Ownership of UX ways of working, tooling, and processes enabling consistent delivery across 10 cybersecurity products."], date: "JUL 2024-PRESENT", dateSort: "2024-07", type: "experience", category: ["experience"], company: "JPMorganChase", logo: "assets/logos/jpmorgan.png", link: "summary.html?id=jpmorgan-cybersecurity", linkText: "View Summary", linkExternal: false, featured: true },
      { id: 6, title: "How Merging User Experience Design with Systems Thinking Can Improve Digital Transformations: The Example of the Emerging Webtoon Platform", description: null, date: "JAN 2024", dateSort: "2024-01", type: "article", category: ["article"], company: null, logo: null, link: "https://medium.com/@Rhizome001/how-merging-user-experience-design-with-systems-thinking-can-improve-digital-transformations-the-b9fc0a86e680", linkText: "Read Article", linkExternal: true, featured: true },
      { id: 7, title: "A systems-led platform concept challenging Webtoon's extractive model through community-driven discovery and monetisation", description: null, date: "OCT 2023-MAY 2024", dateSort: "2023-10", type: "case-study", category: ["case-study"], company: null, logo: null, link: "case-study.html?id=webtoon", linkText: "View Case Study", linkExternal: false, featured: true },
      { id: 8, title: "JPMorganChase", description: "Designed and pitched Open Banking payment solutions for enterprise partners, while building UX tooling to support white-labelling and brand switching at scale.", date: "JUN 2023-AUG 2023", dateSort: "2023-06", type: "experience", category: ["experience"], company: "JPMorganChase", logo: "assets/logos/jpmorgan.png", link: "summary.html?id=jpmorgan-payments", linkText: "View Summary", linkExternal: false },
      { id: 9, title: "The Democratisation of Applications Through Low-Code/No-code", description: null, date: "MAY 2023", dateSort: "2023-05", type: "article", category: ["article"], company: null, logo: null, link: "https://medium.com/@Rhizome001/the-democratisation-of-applications-through-low-code-no-code-4dbbd87fdc24", linkText: "Read Article", linkExternal: true },
      { id: 10, title: "Kool Stories", description: "Early UX designer helping shape a social edtech startup, driving a strategic shift from B2C to B2B through partnerships and cross-functional delivery.", date: "SEP 2022-MAR 2023", dateSort: "2022-09", type: "experience", category: ["experience"], company: "Kool Stories", logo: "assets/logos/koolstories.png", link: "summary.html?id=kool-stories", linkText: "View Summary", linkExternal: false },
      { id: 11, title: "A data visualisation-driven project helping anime viewers navigate choice overload and discover what to watch.", description: null, date: "OCT 2022-JAN 2023", dateSort: "2022-10", type: "case-study", category: ["case-study"], company: null, logo: null, link: "case-study.html?id=anime-data-viz", linkText: "View Case Study", linkExternal: false },
      { id: 12, title: "Exploring accessibility and navigation by designing a maritime GPS set in the fictional world of One Piece", description: null, date: "JAN 2023", dateSort: "2023-01", type: "case-study", category: ["case-study", "personal-project"], company: null, logo: null, link: "case-study.html?id=onepiece-gps", linkText: "View Case Study", linkExternal: false },
      { id: 13, title: "Exploring collections, tagging, and weighted signals as alternatives to algorithmic recommendation", description: null, date: "AUG 2022-JAN 2023", dateSort: "2022-08", type: "case-study", category: ["case-study"], company: null, logo: null, link: "case-study.html?id=algorithmic-recommendation", linkText: "View Case Study", linkExternal: false },
      { id: 14, title: "PrecTech", description: "Supporting accessible preconception health through visual and motion design", date: "APR 2022", dateSort: "2022-04", type: "personal-project", category: ["case-study", "personal-project"], company: "PrecTech", logo: "assets/logos/prectech.png", link: "summary.html?id=prectech", linkText: "View Summary", linkExternal: false },
      { id: 15, title: "Blokbot", description: "Sole UX designer on a crypto-trading and NFT startup, creating dashboard prototypes that secured investor backing and early stakeholder buy-in", date: "DEC 2021 - JUL 2022", dateSort: "2021-12", type: "experience", category: ["experience"], company: "Blokbot", logo: "assets/logos/blokbot.png", link: "summary.html?id=blokbot", linkText: "View Summary", linkExternal: false },
      { id: 16, title: "Digital Influx", description: "First UX Designer, delivering UX learning content for a global edtech platform, while onboarding and teaching new designers.", date: "SEP 2021 - DEC 2021", dateSort: "2021-09", type: "experience", category: ["experience"], company: "Digital Influx", logo: "assets/logos/digitalinflux.png", link: "summary.html?id=digital-influx", linkText: "View Summary", linkExternal: false },
      { id: 17, title: "The Digital Nomad Project", description: "Guided UX and learning design for a non-profit platform supporting freelancers, enabling a live cohort to exceed 200 participants", date: "AUG 2021-NOV 2021", dateSort: "2021-08", type: "experience", category: ["experience"], company: "The Digital Nomad Project", logo: "assets/logos/digitalnomad.png", link: "summary.html?id=digital-nomad-project", linkText: "View Summary", linkExternal: false },
      { id: 18, title: "Growmi", description: "Owned end-to-end product design and build for a wellbeing app, integrating APIs and Firebase to ship a community recognised product with 100+ users.", date: "DEC 2020-SEP 2022", dateSort: "2020-12", type: "case-study", category: ["case-study", "personal-project"], company: "Growmi", logo: "assets/logos/growmi.png", link: "case-study.html?id=growmi", linkText: "View Case Study", linkExternal: false },
      { id: 19, title: "Exploring cultural and sensitive social themes communicated through illustration and augmented reality.", description: null, date: "JUL 2020", dateSort: "2020-07", type: "case-study", category: ["case-study", "personal-project"], company: null, logo: null, link: "case-study.html?id=cultural-themes-ar", linkText: "View Case Study", linkExternal: false },
      { id: 20, title: "Etsy", description: "Using UX practices to optimise an existing ecommerce store on Etsy", date: "DEC 2020-SEP 2022", dateSort: "2020-12", type: "case-study", category: ["case-study", "personal-project"], company: "Etsy", logo: "assets/logos/etsy.png", link: "case-study.html?id=etsy", linkText: "View Case Study", linkExternal: false },
      { id: 21, title: "Research Study on the Webcomic Publishing Industry", description: null, date: "DEC 2020-SEP 2022", dateSort: "2020-12", type: "case-study", category: ["case-study"], company: null, logo: null, link: "case-study.html?id=webcomic-publishing", linkText: "View Case Study", linkExternal: false }
    ],
    credentials: [
      { organization: "UAL", title: "1st Class Honors | User Experience Design", type: "Bachelors" },
      { organization: "D&AD", title: "2024 New Bloods Portfolio Winner", type: "Competition" },
      { organization: "IBM", title: "Enterprise Design Thinking Practitioner", type: "Course" },
      { organization: "GirlsTalkLondon", title: "Guest Speaker", type: "Community" },
      { organization: "Avado", title: "Data Analyst Accelerator Skills", type: "Bootcamp" },
      { organization: "SAP AppGyver", title: "Creator of the Week", type: "Community Award" },
      { organization: "The Open University", title: "Cyber Foundations", type: "Course" },
      { organization: "Kaggle", title: "Python", type: "Course" },
      { organization: "Kaggle", title: "Intro & Intermediate Machine Learning", type: "Course" },
      { organization: "Google", title: "Fundamentals of Digital Marketing", type: "Course" },
      { organization: "BrightNetwork", title: "Technology Internship Experience", type: "Internship" },
      { organization: "BrightNetwork", title: "Business, Operations & Marketing Experience", type: "Internship" },
      { organization: "StepUp", title: "6 Month Tech Accelerator", type: "Community" },
      { organization: "Stepilo", title: "Finance App", type: "Hackathon" },
      { organization: "Udemy", title: "MITRE ATT&CK", type: "Course" },
      { organization: "ProjectSet", title: "Heathy Food Concept App", type: "Hackathon" }
    ],
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/heiken-bautista-8785311b6/", icon: "linkedin" },
      { name: "Medium", url: "https://medium.com/@Rhizome001", icon: "medium" },
      { name: "Kaggle", url: "https://www.kaggle.com/heikenbautista", icon: "kaggle" },
      { name: "GitHub", url: "https://github.com/HeikenB", icon: "github" }
    ]
  };

  // State
  let projects = [];
  let credentials = [];
  let socialLinks = [];
  let activeFilters = new Set(['experience', 'case-study']);
  let sortOrder = 'newest';

  // DOM Elements
  const navHeader = document.getElementById('navHeader');
  const filterBar = document.getElementById('filterBar');
  const filterPills = document.getElementById('filterPills');
  const projectsGrid = document.getElementById('projectsGrid');
  const credentialsTrack = document.getElementById('credentialsTrack');
  const socialLinksContainer = document.getElementById('socialLinks');
  const sortSelect = document.getElementById('sortSelect');

  // Icons
  const icons = {
    experience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
    'case-study': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h6l6 6v10a2 2 0 01-2 2z"/></svg>`,
    'personal-project': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    article: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    kaggle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.285"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
  };

  // ==========================================================================
  // Initialize
  // ==========================================================================

  function init() {
    loadData();
    renderProjects();
    renderCredentials();
    renderSocialLinks();
    setupEventListeners();
    setupScrollBehavior();
  }

  // ==========================================================================
  // Data Loading
  // ==========================================================================

  function loadData() {
    projects = DATA.projects || [];
    credentials = DATA.credentials || [];
    socialLinks = DATA.social || [];
  }

  // ==========================================================================
  // Rendering
  // ==========================================================================

  function renderProjects() {
    const filteredProjects = filterProjects();
    const sortedProjects = sortProjects(filteredProjects);

    projectsGrid.innerHTML = sortedProjects.map(project => createProjectCard(project)).join('');
  }

  function createProjectCard(project) {
    const hasLogo = project.logo && project.company;
    const isExternal = project.linkExternal;
    const primaryType = project.type;

    // Build card classes
    const cardClasses = ['project-card'];
    if (hasLogo) cardClasses.push('project-card--with-logo');
    if (primaryType === 'case-study') cardClasses.push('project-card--case-study');
    if (primaryType === 'personal-project') cardClasses.push('project-card--personal-project');
    if (primaryType === 'article') cardClasses.push('project-card--article');
    if (project.featured) cardClasses.push('project-card--featured');

    // Build category badges
    const badges = project.category.map(cat =>
      `<span class="card-badge card-badge--${cat}" title="${formatCategoryName(cat)}">
        ${icons[cat] || ''}
      </span>`
    ).join('');

    // Helper to render description (handles string or array)
    const renderDescription = (desc) => {
      if (!desc) return '';
      if (Array.isArray(desc)) {
        return desc.map(d => `<p class="card-description">${d}</p>`).join('');
      }
      return `<p class="card-description">${desc}</p>`;
    };

    // Determine card content based on type
    let cardContent = '';

    if (hasLogo) {
      // Experience card with logo
      cardContent = `
        <img src="${project.logo}" alt="${project.company} logo" class="card-logo">
        ${renderDescription(project.description)}
        <p class="card-date">${project.date}</p>
      `;
    } else if (project.description) {
      // Card with description but no logo
      cardContent = `
        <h3 class="card-title">${project.title}</h3>
        ${renderDescription(project.description)}
        <p class="card-date">${project.date}</p>
      `;
    } else {
      // Article/Case study card - title only
      cardContent = `
        <h3 class="card-title">${project.title}</h3>
        <p class="card-date">${project.date}</p>
      `;
    }

    const linkClasses = ['card-link'];
    if (isExternal) linkClasses.push('card-link--external');
    if (!project.featured) linkClasses.push('card-link--tertiary');
    // This is a comment
    return `
      <article class="${cardClasses.join(' ')}" data-categories="${project.category.join(',')}">
        ${cardContent}
        <div class="card-footer">
          <div class="card-badges">
            ${badges}
          </div>
          <a href="${project.link}" class="${linkClasses.join(' ')}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            ${project.linkText}
            <span class="card-link-arrow">→</span>
          </a>
        </div>
      </article>
    `;
  }

  function formatCategoryName(category) {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  function renderCredentials() {
    const credentialItems = credentials.map(cred => `
      <div class="credential-item">
        <span class="credential-org">${cred.organization}</span>
        <span class="credential-title">${cred.title}</span>
        <span class="credential-type">${cred.type}</span>
      </div>
    `).join('');

    // Duplicate content for seamless infinite scroll
    credentialsTrack.innerHTML = credentialItems + credentialItems;
  }

  function renderSocialLinks() {
    socialLinksContainer.innerHTML = socialLinks.map(link => `
      <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer" title="${link.name}">
        ${icons[link.icon] || ''}
      </a>
    `).join('');
  }

  // ==========================================================================
  // Filtering & Sorting
  // ==========================================================================

  function filterProjects() {
    if (activeFilters.size === 0) {
      return [];
    }

    return projects.filter(project =>
      project.category.some(cat => activeFilters.has(cat))
    );
  }

  function sortProjects(projectList) {
    return [...projectList].sort((a, b) => {
      const dateA = a.dateSort;
      const dateB = b.dateSort;

      if (sortOrder === 'newest') {
        return dateB.localeCompare(dateA);
      } else {
        return dateA.localeCompare(dateB);
      }
    });
  }

  function toggleFilter(filter) {
    if (activeFilters.has(filter)) {
      activeFilters.delete(filter);
    } else {
      activeFilters.add(filter);
    }
    updateFilterPills();
    renderProjects();
  }

  function setFilters(filters) {
    activeFilters = new Set(filters);
    updateFilterPills();
    renderProjects();
  }

  function updateFilterPills() {
    const pills = filterPills.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      const filter = pill.dataset.filter;
      if (activeFilters.has(filter)) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  function setupEventListeners() {
    // Filter pills
    filterPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (pill) {
        const filter = pill.dataset.filter;
        toggleFilter(filter);
      }
    });

    // Sort select
    sortSelect.addEventListener('change', (e) => {
      sortOrder = e.target.value;
      renderProjects();
    });

    // CTA buttons
    document.querySelectorAll('[data-filter-preset]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const preset = e.target.dataset.filterPreset;
        applyFilterPreset(preset);
        updateCtaButtons(preset);
      });
    });

    // Contact link - shake animation
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
      contactLink.addEventListener('click', (e) => {
        const footerContent = document.querySelector('.footer-content');
        if (footerContent) {
          footerContent.classList.remove('shake');
          void footerContent.offsetWidth;
          setTimeout(() => {
            footerContent.classList.add('shake');
          }, 300);
          setTimeout(() => {
            footerContent.classList.remove('shake');
          }, 1000);
        }
      });
    }

    // Credentials link - shake animation
    const credentialsLink = document.querySelector('a[href="#credentials"]');
    if (credentialsLink) {
      credentialsLink.addEventListener('click', (e) => {
        const credentialsSection = document.querySelector('.credentials-section');
        if (credentialsSection) {
          credentialsSection.classList.remove('shake');
          void credentialsSection.offsetWidth;
          setTimeout(() => {
            credentialsSection.classList.add('shake');
          }, 300);
          setTimeout(() => {
            credentialsSection.classList.remove('shake');
          }, 1000);
        }
      });
    }

    // Scroll to top FAB
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function applyFilterPreset(preset) {
    switch (preset) {
      case 'hiring':
        setFilters(['experience', 'case-study']);
        break;
      case 'exploring':
        setFilters(['experience', 'case-study', 'personal-project', 'article']);
        break;
      case 'learning':
        setFilters(['case-study', 'article']);
        break;
    }
  }

  function updateCtaButtons(activePreset) {
    document.querySelectorAll('[data-filter-preset]').forEach(btn => {
      const preset = btn.dataset.filterPreset;
      if (preset === activePreset) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Scroll Behavior
  // ==========================================================================

  function setupScrollBehavior() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll(lastScrollY);
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function handleScroll(lastScrollY) {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollThreshold = 100;
    const fabThreshold = 400;

    // Hide/show nav header
    if (currentScrollY > scrollThreshold) {
      if (scrollingDown) {
        navHeader.classList.add('hidden');
        filterBar.classList.remove('with-nav');
      } else {
        navHeader.classList.remove('hidden');
        filterBar.classList.add('with-nav');
      }
    } else {
      navHeader.classList.remove('hidden');
      filterBar.classList.add('with-nav');
    }

    // Show/hide scroll to top FAB
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      if (currentScrollY > fabThreshold) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  // ==========================================================================
  // Start
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', init);

})();
