/**
 * Summary Page JavaScript
 * Handles routing and rendering for experience summary pages
 */

(function() {
  'use strict';

  // ==========================================================================
  // Summary Data
  // ==========================================================================

  const summaryData = {
    'jpmorgan-cybersecurity': {
      company: 'JPMorganChase',
      logo: 'assets/logos/jpmorgan.png',
      date: 'JUL 2024-PRESENT',
      role: 'UX Designer in Cybersecurity',
      outcomes: [
        'Designed AI features across 4 cybersecurity products. Most notably, scaling automation for 900k findings and reducing support demand by 53% on the organisation\'s highest-traffic security platform used internally and by external vendors.',
        'Established our UX ways of working by introducing a CTC UX Product Playbook that enabled consistent, high-quality outcomes within a lean team of 9 operating across a complex multi-product ecosystem, with myself delivering for 10+ applications.',
        'Led Design Practice workshops and organised external guest sessions, driving upskilling, craft sharing, and cross-team alignment—helping break down siloed delivery patterns typical of large organisations.',
        'Supported large-scale design system migration, auditing patterns and defining reusable components through documentation and code contributions—reducing migration toil and accelerating adoption across teams.',
        'Created and operationalised a heuristic evaluation framework, improving efficiency and repeatability; delivered 293 actionable usability recommendations across 9 products in 6 months, enabling product owners to independently drive improvements.'
      ]
    },
    'jpmorgan-payments': {
      company: 'JPMorganChase',
      logo: 'assets/logos/jpmorgan.png',
      date: 'JUN 2023-AUG 2023',
      role: 'UX Designer in Payments',
      outcomes: [
        'Pitched and designed Open Banking payment solutions for enterprise partners including Xbox, Microsoft, and Netflix, translating complex financial and regulatory constraints into clear, user-centred product concepts.',
        'Defined and delivered a scalable white-labelling UX process and tooling, enabling rapid brand customisation across client implementations while maintaining design consistency and system integrity.',
        'Extended impact beyond Open Banking, with white-labelling patterns and tooling adopted by adjacent product areas (including car payment solutions), establishing a reusable, cross-team approach to white-labelled payments.'
      ]
    },
    'kool-stories': {
      company: 'Kool Stories',
      logo: 'assets/logos/koolstories.png',
      date: 'SEP 2022-MAR 2023',
      role: 'Early stage UX Designer | Brand Ambassador | Graphic Designer',
      outcomes: [
        'Spearheaded and secured strategic partnerships with UAL, GirlsTalkLondon, and ProjectSet, contributing to a strategic shift from B2C to B2B, opening new commercial and institutional opportunities.',
        'Operated as a cross-functional designer in an early-stage startup, covering UX, brand, copywriting, marketing, and legal touchpoints to support rapid experimentation and delivery.',
        'Translated the mobile app experience to web, ensuring brand consistency, usability, and scalability across platforms.'
      ],
      images: [
        {
          label: 'COURSE CREATION',
          src: 'assets/images/koolstories-course-creation.png',
          alt: 'KoolStories course creation interface'
        },
        {
          label: 'SOCIAL POST',
          src: 'assets/images/koolstories-social-post.png',
          alt: 'KoolStories social media post design'
        }
      ]
    },
    'blokbot': {
      company: 'Blokbot',
      logo: 'assets/logos/blokbot.png',
      date: 'DEC 2021-JUL 2022',
      role: 'UX Design Intern | Illustrator | Animator',
      outcomes: [
        'Designed dashboard prototypes that secured investor backing and helped attract a prominent stakeholder to join the team.',
        'Created UX concepts for crypto trading platforms, including bot-driven trading flows and NFT-based features, translating complex technical ideas into accessible product concepts.',
        'Created animated brand campaign content to build early user engagement and participation in the brand\'s development.'
      ],
      images: [
        {
          label: 'BEFORE',
          src: 'assets/images/blokbot-before.png',
          alt: 'Blokbot dashboard before redesign'
        },
        {
          label: 'AFTER',
          src: 'assets/images/blokbot-after.png',
          alt: 'Blokbot dashboard after redesign'
        },
        {
          label: 'COMMUNITY CAMPAIGN',
          src: 'assets/images/blokbot-campaign.gif',
          alt: 'Blokbot community campaign animation'
        }
      ]
    },
    'digital-influx': {
      company: 'Digital Influx',
      logo: 'assets/logos/digitalinflux.png',
      date: 'SEP 2021-DEC 2021',
      role: 'First UX Designer | Course Content Writer',
      outcomes: [
        'Appointed as the first UX Designer, creating and delivering UX learning content for a global edtech platform, supporting service expansion into Japan.',
        'Onboarded and taught new designers, establishing foundational UX standards and accelerating team ramp-up.'
      ]
    },
    'digital-nomad-project': {
      company: 'The Digital Nomad Project',
      logo: 'assets/logos/digitalnomad.png',
      date: 'AUG 2021-NOV 2021',
      role: 'Founder Member | Course Content Reviewer',
      outcomes: [
        'Improved UX and learning experiences for a non-profit platform supporting freelancers, surpassing live cohort projections to 200+ participants.',
        'Reviewed and shaped course content quality, ensuring clarity, accessibility, and consistency across learning materials.',
        'Designed marketing and community assets to support recruitment and engagement for sister platform, Freer.'
      ],
      images: [
        {
          label: 'SOCIAL POST',
          src: 'assets/images/digitalnomad-social.gif',
          alt: 'The Digital Nomad Project social media posts'
        }
      ]
    },
    'prectech': {
      company: 'PrecTech',
      logo: 'assets/logos/prectech.png',
      date: 'APR 2022',
      role: 'Graphic Designer | Animator',
      outcomes: [
        'Created branding and visual assets for a team of MEng Biomedical Engineering students at KCL, supporting a project focused on making pre-conception health more accessible.'
      ],
      images: [
        {
          label: 'TERRIFYING EARLY CONCEPTS',
          src: 'assets/images/prectech-concepts-1.gif',
          alt: 'PrecTech early concept animation 1'
        },
        {
          label: 'TERRIFYING EARLY CONCEPTS',
          src: 'assets/images/prectech-concepts-2.gif',
          alt: 'PrecTech early concept animation 2'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-1.jpg',
          alt: 'PrecTech - Why prepare for pregnancy?'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-2.jpg',
          alt: 'PrecTech - Only 27% of women sought advice'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-3.jpg',
          alt: 'PrecTech - What is preconception care?'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-4.jpg',
          alt: 'PrecTech - Why is it so important?'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-5.jpg',
          alt: 'PrecTech - Pregnancy planning'
        },
        {
          label: 'DELIVERED',
          src: 'assets/images/prectech-delivered-6.jpg',
          alt: 'PrecTech - Important first steps'
        }
      ]
    }
  };

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const summaryLogo = document.getElementById('summaryLogo');
  const summaryDate = document.getElementById('summaryDate');
  const summaryRole = document.getElementById('summaryRole');
  const summaryOutcomes = document.getElementById('summaryOutcomes');

  // ==========================================================================
  // Initialize
  // ==========================================================================

  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const summaryId = urlParams.get('id');

    console.log('URL:', window.location.href);
    console.log('Summary ID:', summaryId);
    console.log('Available IDs:', Object.keys(summaryData));

    if (!summaryId || !summaryData[summaryId]) {
      console.log('Error: summaryId not found. Got:', summaryId);
      showError();
      return;
    }

    renderSummary(summaryData[summaryId]);
    updatePageTitle(summaryData[summaryId].company);
  }

  function renderSummary(data) {
    if (data.logo) {
      summaryLogo.src = data.logo;
      summaryLogo.alt = `${data.company} logo`;
      summaryLogo.style.display = 'block';
    } else {
      summaryLogo.style.display = 'none';
    }

    summaryDate.textContent = data.date;
    summaryRole.textContent = data.role;

    summaryOutcomes.innerHTML = data.outcomes.map(outcome =>
      `<p class="summary-outcome">${outcome}</p>`
    ).join('');

    // Render images if available
    if (data.images && data.images.length > 0) {
      const imagesContainer = document.getElementById('summaryImages');
      if (imagesContainer) {
        imagesContainer.innerHTML = data.images.map(image => `
          <div class="summary-image-block">
            <span class="summary-image-label">${image.label}</span>
            <div class="summary-image-wrapper">
              <img src="${image.src}" alt="${image.alt}" class="summary-image">
            </div>
          </div>
        `).join('');
        imagesContainer.style.display = 'flex';
      }
    } else {
      const imagesContainer = document.getElementById('summaryImages');
      if (imagesContainer) {
        imagesContainer.style.display = 'none';
      }
    }
  }

  function updatePageTitle(company) {
    document.title = `${company} | HB Portfolio`;
  }

  function showError() {
    const content = document.getElementById('summaryContent');
    content.innerHTML = `
      <div class="summary-card">
        <p style="color: var(--color-gray-600);">Summary not found. <a href="index.html">Return to portfolio</a></p>
      </div>
    `;
  }

  // ==========================================================================
  // Start
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', init);

})();
