// ==========================================================================
// Case Study Page JavaScript
// ==========================================================================

(function() {
  'use strict';

  // Case study data with PDF paths and sections
  const caseStudyData = {
    'webtoon': {
      title: 'A systems-led platform concept challenging Webtoon\'s extractive model through community-driven discovery and monetisation',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2Fwebtoon.pdf?alt=media',
      totalPages: 102,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Contents', page: 2 },
        { title: 'Process', page: 3 },
        { title: 'Gantt Chart', page: 4 },
        { title: 'Value Proposition', page: 5 },
        { title: 'Context Part 1', page: 6 },
        { title: 'Context Part 2', page: 7 },
        { title: 'Context Part 3', page: 8 },
        { title: 'Context Part 4', page: 9 },
        { title: 'Context Overview', page: 10 },
        { title: 'Feedback System Cover', page: 11 },
        { title: 'Feedback System Context Part 1', page: 12 },
        { title: 'Feedback System Context Part 2', page: 13 },
        { title: 'Feedback System Context Part 3', page: 14 },
        { title: 'Feedback System Develop Part 1', page: 15 },
        { title: 'Feedback System Develop Part 2', page: 16 },
        { title: 'Feedback System Develop Test Part 1', page: 17 },
        { title: 'Feedback System Develop Test Part 2', page: 18 },
        { title: 'Feedback System Develop Iteration Part 1', page: 19 },
        { title: 'Feedback System Develop Iteration Part 2', page: 20 },
        { title: 'Browsing System Cover', page: 21 },
        { title: 'Browsing System Context Part 1', page: 22 },
        { title: 'Browsing System Context Part 2', page: 23 },
        { title: 'Browsing System Develop Part 1', page: 24 },
        { title: 'Browsing System Develop Part 2', page: 25 },
        { title: 'Browsing System Develop Part 3', page: 26 },
        { title: 'Browsing System Test Part 1', page: 27 },
        { title: 'Browsing System Iteration', page: 28 },
        { title: 'Monetisation System Cover', page: 29 },
        { title: 'Monetisation System Context', page: 30 },
        { title: 'Monetisation System Develop', page: 31 },
        { title: 'Monetisation System Test Part 1', page: 32 },
        { title: 'Monetisation System Test Part 2', page: 33 },
        { title: 'Monetisation System Test Part 3', page: 34 },
        { title: 'Monetisation System Iteration', page: 35 },
        { title: 'Reflection', page: 36 },
        { title: 'References Part 1', page: 37 },
        { title: 'References Part 2', page: 38 },
        { title: 'Appendix Cover', page: 39 },
        { title: 'Appendix A', page: 40 },
        { title: 'Appendix B Part 1', page: 41 },
        { title: 'Appendix B Part 2', page: 42 },
        { title: 'Appendix B Method Part 1', page: 43 },
        { title: 'Appendix B Method Part 2', page: 44 },
        { title: 'Appendix C', page: 45 },
        { title: 'Appendix C Method', page: 46 },
        { title: 'Appendix D', page: 47 },
        { title: 'Appendix D Method Part 1', page: 48 },
        { title: 'Appendix D Method Part 2', page: 49 },
        { title: 'Appendix E Part 1', page: 50 },
        { title: 'Appendix E Part 2', page: 51 },
        { title: 'Appendix E Part 3', page: 52 },
        { title: 'Appendix E Part 4', page: 53 },
        { title: 'Appendix E Part 5', page: 54 },
        { title: 'Appendix E Part 6', page: 55 },
        { title: 'Appendix E Part 7', page: 56 },
        { title: 'Appendix E Part 8', page: 57 },
        { title: 'Appendix E Part 9', page: 58 },
        { title: 'Appendix E Part 10', page: 59 },
        { title: 'Appendix E Part 11', page: 60 },
        { title: 'Appendix E Part 12', page: 61 },
        { title: 'Appendix E Part 13', page: 62 },
        { title: 'Appendix E Method', page: 63 },
        { title: 'Appendix F Part 1', page: 64 },
        { title: 'Appendix F Part 2', page: 65 },
        { title: 'Appendix F Part 3', page: 66 },
        { title: 'Appendix F Method', page: 67 },
        { title: 'Appendix G Part 1', page: 68 },
        { title: 'Appendix G Part 2', page: 69 },
        { title: 'Appendix G Part 3', page: 70 },
        { title: 'Appendix G Part 4', page: 71 },
        { title: 'Appendix G Part 5', page: 72 },
        { title: 'Appendix G Part 6', page: 73 },
        { title: 'Appendix G Part 7', page: 74 },
        { title: 'Appendix G Method', page: 75 },
        { title: 'Appendix H Part 1', page: 76 },
        { title: 'Appendix H Part 2', page: 77 },
        { title: 'Appendix H Part 3', page: 78 },
        { title: 'Appendix H Part 4', page: 79 },
        { title: 'Appendix H Method', page: 80 },
        { title: 'Appendix I Part 1', page: 81 },
        { title: 'Appendix I Part 2', page: 82 },
        { title: 'Appendix I Part 3', page: 83 },
        { title: 'Appendix I Part 4', page: 84 },
        { title: 'Appendix I Part 5', page: 85 },
        { title: 'Appendix I Part 6', page: 86 },
        { title: 'Appendix I Part 7', page: 87 },
        { title: 'Appendix I Method', page: 88 },
        { title: 'Appendix J Part 1', page: 89 },
        { title: 'Appendix J Part 2', page: 90 },
        { title: 'Appendix J Method', page: 91 },
        { title: 'Appendix K Part 1', page: 92 },
        { title: 'Appendix K Part 2', page: 93 },
        { title: 'Appendix K Part 3', page: 94 },
        { title: 'Appendix K Method', page: 95 },
        { title: 'Appendix L Part 1', page: 96 },
        { title: 'Appendix L Part 2', page: 97 },
        { title: 'Appendix L Part 3', page: 98 },
        { title: 'Appendix L Part 4', page: 99 },
        { title: 'Appendix L Part 5', page: 100 },
        { title: 'Appendix L Method', page: 101 },
        { title: 'Appendix M', page: 102 }
      ]
    },
    'anime-data-viz': {
      title: 'A data visualisation-driven project helping anime viewers navigate choice overload and discover what to watch',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2Fanime-data-viz.pdf?alt=media',
      totalPages: 21,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Introduction', page: 2 },
        { title: 'Context Part 1', page: 3 },
        { title: 'Context Part 2', page: 4 },
        { title: 'Context Part 3', page: 5 },
        { title: 'Key Insights', page: 6 },
        { title: 'Data Visualisation Study Part 1', page: 7 },
        { title: 'Data Visualisation Study Part 2', page: 8 },
        { title: 'User Personas', page: 9 },
        { title: 'Define Part 1', page: 10 },
        { title: 'Design Part 1', page: 11 },
        { title: 'Design Part 2', page: 12 },
        { title: 'Design Part 3', page: 13 },
        { title: 'Design Part 4', page: 14 },
        { title: 'Design Part 5', page: 15 },
        { title: 'Design Part 6', page: 16 },
        { title: 'Design Part 7', page: 17 },
        { title: 'User Journey Part 1', page: 18 },
        { title: 'User Journey Part 2', page: 19 },
        { title: 'User Journey Part 3', page: 20 },
        { title: 'References', page: 21 }
      ]
    },
    'onepiece-gps': {
      title: 'Exploring accessibility and navigation by designing a maritime GPS set in the fictional world of One Piece',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2Fonepiece-gps.pdf?alt=media',
      totalPages: 14,
      sections: [
        { title: 'Overview', page: 1 },
        { title: 'Discovery', page: 2 },
        { title: 'Define', page: 3 },
        { title: 'Develop', page: 4 },
        { title: 'Deliver Part 1', page: 5 },
        { title: 'Deliver Part 2', page: 6 },
        { title: 'Deliver Part 3', page: 7 },
        { title: 'Deliver Part 4', page: 8 },
        { title: 'Deliver Part 5', page: 9 },
        { title: 'Deliver Part 6', page: 10 },
        { title: 'Reflection', page: 11 },
        { title: 'References Part 2', page: 12 },
        { title: 'References Part 3', page: 13 },
        { title: 'References Part 4', page: 14 }
      ]
    },
    'algorithmic-recommendation': {
      title: 'Exploring collections, tagging, and weighted signals as alternatives to algorithmic recommendation',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2Falgorithmic-recommendation.pdf?alt=media',
      totalPages: 25,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Discovery Part 1', page: 2 },
        { title: 'Discovery Part 2', page: 3 },
        { title: 'Define Part 1', page: 4 },
        { title: 'Define Part 2', page: 5 },
        { title: 'Define Part 3', page: 6 },
        { title: 'Define Part 4', page: 7 },
        { title: 'Define Part 5', page: 8 },
        { title: 'Develop Part 1', page: 9 },
        { title: 'Develop Part 2', page: 10 },
        { title: 'Develop Part 3', page: 11 },
        { title: 'Deliver Part 1', page: 12 },
        { title: 'Deliver Part 2', page: 13 },
        { title: 'Deliver Part 3', page: 14 },
        { title: 'Deliver Part 4', page: 15 },
        { title: 'Deliver Part 5', page: 16 },
        { title: 'Deliver Part 6', page: 17 },
        { title: 'Deliver Part 7', page: 18 },
        { title: 'Deliver Part 8', page: 19 },
        { title: 'Deliver Part 9', page: 20 },
        { title: 'Reflections Part 1', page: 21 },
        { title: 'Reflections Part 2', page: 22 },
        { title: 'References Part 1', page: 23 },
        { title: 'References Part 2', page: 24 },
        { title: 'References Part 3', page: 25 }
      ]
    },
    'growmi': {
      title: 'Owned end-to-end product design and build for a wellbeing app, integrating APIs and Firebase to ship a community recognised product with 100+ users',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2FGrowMi.pdf?alt=media',
      totalPages: 34,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Achievements', page: 2 },
        { title: 'Context', page: 3 },
        { title: 'Process Overview', page: 4 },
        { title: 'Research', page: 5 },
        { title: 'Research Part 1', page: 6 },
        { title: 'Research Part 2', page: 7 },
        { title: 'Research Part 3', page: 8 },
        { title: 'Research Part 4', page: 9 },
        { title: 'Problem', page: 10 },
        { title: 'Planning', page: 11 },
        { title: 'User Login Part 1', page: 12 },
        { title: 'User Login Part 2', page: 13 },
        { title: 'Home Part 1', page: 14 },
        { title: 'Home Part 2', page: 15 },
        { title: 'Relieve Part 1', page: 16 },
        { title: 'Relieve Part 2', page: 17 },
        { title: 'To Do Part 1', page: 18 },
        { title: 'To Do Part 2', page: 19 },
        { title: 'Goals Part 1', page: 20 },
        { title: 'Goals Part 2', page: 21 },
        { title: 'Habits Part 1', page: 22 },
        { title: 'Habits Part 2', page: 23 },
        { title: 'Reflections Part 1', page: 24 },
        { title: 'Reflections Part 2', page: 25 },
        { title: 'Meditations Part 1', page: 26 },
        { title: 'Meditations Part 2', page: 27 },
        { title: 'Journal Part 1', page: 28 },
        { title: 'Journal Part 2', page: 29 },
        { title: 'Settings Part 1', page: 30 },
        { title: 'Settings Part 2', page: 31 },
        { title: 'Pre-Launch', page: 32 },
        { title: 'Google Play', page: 33 },
        { title: 'Reflections', page: 34 }
      ]
    },
    'cultural-themes-ar': {
      title: 'Exploring cultural and sensitive social themes communicated through illustration and augmented reality',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2FJapanese%20Book.pdf?alt=media',
      totalPages: 18,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Context', page: 2 },
        { title: 'Proposal', page: 3 },
        { title: 'Research', page: 4 },
        { title: 'Ideation', page: 5 },
        { title: 'Final Design Part 1', page: 6 },
        { title: 'Final Design Part 2', page: 7 },
        { title: 'Final Design Part 3', page: 8 },
        { title: 'Final Design Part 4', page: 9 },
        { title: 'Final Design Part 5', page: 10 },
        { title: 'Final Design Part 6', page: 11 },
        { title: 'Final Design Part 7', page: 12 },
        { title: 'Final Design Part 8', page: 13 },
        { title: 'Final Design Part 9', page: 14 },
        { title: 'Final Design Part 10', page: 15 },
        { title: 'Final Design Part 11', page: 16 },
        { title: 'Final Design Part 12', page: 17 },
        { title: 'Augmented Reality', page: 18 }
      ]
    },
    'etsy': {
      title: 'Using UX practices to optimise an existing ecommerce store on Etsy',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2FEtsy%20Store.pdf?alt=media',
      totalPages: 10,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Achievements', page: 2 },
        { title: 'Context', page: 3 },
        { title: 'Qualitative Research', page: 4 },
        { title: 'Quantitative Research', page: 5 },
        { title: 'Synthesis', page: 6 },
        { title: 'Optimisation Part 1', page: 7 },
        { title: 'Optimisation Part 2', page: 8 },
        { title: 'Optimisation Part 3', page: 9 },
        { title: 'Reflections', page: 10 }
      ]
    },
    'webcomic-publishing': {
      title: 'Research Study on the Webcomic Publishing Industry',
      pdfPath: 'https://firebasestorage.googleapis.com/v0/b/portfolio-archive-fddf8.firebasestorage.app/o/case-studies%2FWebcomic%20Publishing.pdf?alt=media',
      totalPages: 33,
      sections: [
        { title: 'Cover', page: 1 },
        { title: 'Contents', page: 2 },
        { title: 'Introduction Part 1', page: 3 },
        { title: 'Introduction Part 2', page: 4 },
        { title: 'Introduction Part 3', page: 5 },
        { title: 'Introduction Part 4', page: 6 },
        { title: 'Plan Part 1', page: 7 },
        { title: 'Plan Part 2', page: 8 },
        { title: 'Timeline Part 1', page: 9 },
        { title: 'Timeline Part 2', page: 10 },
        { title: 'Define Part 1', page: 11 },
        { title: 'Define Part 2', page: 12 },
        { title: 'Define Part 3', page: 13 },
        { title: 'Define Part 4', page: 14 },
        { title: 'Define Part 5', page: 15 },
        { title: 'Define Part 6', page: 16 },
        { title: 'Define Part 7', page: 17 },
        { title: 'Define Part 8', page: 18 },
        { title: 'Define Part 9', page: 19 },
        { title: 'Define Part 10', page: 20 },
        { title: 'Define Part 11', page: 21 },
        { title: 'Define Part 12', page: 22 },
        { title: 'Define Part 13', page: 23 },
        { title: 'Define Part 14', page: 24 },
        { title: 'Define Part 15', page: 25 },
        { title: 'Synthesis Part 1', page: 26 },
        { title: 'Synthesis Part 2', page: 27 },
        { title: 'Synthesis Part 3', page: 28 },
        { title: 'Develop Part 1', page: 29 },
        { title: 'Develop Part 2', page: 30 },
        { title: 'Develop Part 3', page: 31 },
        { title: 'References Part 1', page: 32 },
        { title: 'References Part 2', page: 33 }
    ]
    }
  };

  // DOM Elements
  const scrollspy = document.getElementById('scrollspy');
  const pdfPages = document.getElementById('pdfPages');
  const pdfViewer = document.getElementById('pdfViewer');
  const caseStudyTitle = document.getElementById('caseStudyTitle');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.case-study-sidebar');
  const layout = document.querySelector('.case-study-layout');

  // State
  let currentCaseStudy = null;
  let activeSection = -1; // Start at -1 so first update always triggers
  let pdfDoc = null;
  let renderedPages = new Set();
  let renderQueue = [];
  let isRendering = false;

  // ==========================================================================
  // Initialize
  // ==========================================================================

  function init() {
    // Get case study ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const caseStudyId = urlParams.get('id') || 'webtoon';

    currentCaseStudy = caseStudyData[caseStudyId];

    if (currentCaseStudy) {
      renderCaseStudy();
      // setupScrollspy();
      setupMobileSidebar();

      if (currentCaseStudy.pdfPath) {
        loadPdf();
      }
    }
  }

  // ==========================================================================
  // PDF Loading with PDF.js
  // ==========================================================================

  async function loadPdf() {
    try {
      // Set worker source
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

      // Load the PDF
      const loadingTask = pdfjsLib.getDocument(currentCaseStudy.pdfPath);
      pdfDoc = await loadingTask.promise;

      // Create placeholders for all pages
      createPagePlaceholders();

      // Render visible pages
      renderVisiblePages();

      // Setup lazy loading on scroll
      pdfViewer.addEventListener('scroll', debounce(renderVisiblePages, 100));

      // Update active section after pages are created
      updateActiveSection();

    } catch (error) {
      console.error('Error loading PDF:', error);
      pdfPages.innerHTML = '<div class="pdf-error">Error loading PDF. Please try again later.</div>';
    }
  }

  function createPagePlaceholders() {
    pdfPages.innerHTML = '';

    for (let i = 1; i <= currentCaseStudy.totalPages; i++) {
      const pageContainer = document.createElement('div');
      pageContainer.className = 'pdf-page';
      pageContainer.id = `page-${i}`;
      pageContainer.dataset.page = i;

      // Add loading placeholder
      pageContainer.innerHTML = `
        <div class="pdf-page-loading">
          <div class="loading-spinner"></div>
          <span>Loading page ${i}...</span>
        </div>
      `;

      pdfPages.appendChild(pageContainer);
    }
  }

  function renderVisiblePages() {
    if (!pdfDoc) return;

    const viewerRect = pdfViewer.getBoundingClientRect();
    const buffer = viewerRect.height; // Load one viewport height above and below

    const pageElements = pdfPages.querySelectorAll('.pdf-page');

    pageElements.forEach((pageEl) => {
      const pageNum = parseInt(pageEl.dataset.page);
      const pageRect = pageEl.getBoundingClientRect();

      // Check if page is in or near viewport
      const isVisible = (
        pageRect.bottom >= viewerRect.top - buffer &&
        pageRect.top <= viewerRect.bottom + buffer
      );

      if (isVisible && !renderedPages.has(pageNum)) {
        queuePageRender(pageNum, pageEl);
      }
    });

    processRenderQueue();
  }

  function queuePageRender(pageNum, container) {
    if (!renderQueue.some(item => item.pageNum === pageNum)) {
      renderQueue.push({ pageNum, container });
    }
  }

  async function processRenderQueue() {
    if (isRendering || renderQueue.length === 0) return;

    isRendering = true;

    // Sort by page number to render in order
    renderQueue.sort((a, b) => a.pageNum - b.pageNum);

    while (renderQueue.length > 0) {
      const { pageNum, container } = renderQueue.shift();

      if (!renderedPages.has(pageNum)) {
        await renderPage(pageNum, container);
        renderedPages.add(pageNum);
      }
    }

    isRendering = false;
  }

  async function renderPage(pageNum, container) {
    try {
      const page = await pdfDoc.getPage(pageNum);

      // Calculate scale to fit container width with high DPI support
      const containerWidth = pdfPages.clientWidth;
      const viewport = page.getViewport({ scale: 1 });
      const scale = (containerWidth - 32) / viewport.width; // 32px for padding

      // Use higher resolution for crisp rendering (2x base + device pixel ratio)
      const pixelRatio = Math.max(window.devicePixelRatio || 1, 2) * 1.5;
      const scaledViewport = page.getViewport({ scale: scale * pixelRatio });

      // Create canvas
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas size to high-res dimensions
      canvas.height = scaledViewport.height;
      canvas.width = scaledViewport.width;

      // Scale canvas display size back down with CSS
      canvas.style.width = `${scaledViewport.width / pixelRatio}px`;
      canvas.style.height = `${scaledViewport.height / pixelRatio}px`;

      // Render PDF page to canvas
      await page.render({
        canvasContext: context,
        viewport: scaledViewport
      }).promise;

      // Replace placeholder with canvas
      container.innerHTML = '';
      container.appendChild(canvas);

    } catch (error) {
      console.error(`Error rendering page ${pageNum}:`, error);
      container.innerHTML = `<div class="pdf-page-error">Error loading page ${pageNum}</div>`;
    }
  }

  // ==========================================================================
  // Rendering
  // ==========================================================================

  function renderCaseStudy() {
    // Set title
    caseStudyTitle.textContent = currentCaseStudy.title;
    document.title = `${currentCaseStudy.title} | HB Portfolio`;

    // Render scrollspy
    renderScrollspy();

    // If no PDF, show placeholders
    if (!currentCaseStudy.pdfPath) {
      renderPlaceholderPages();
    }
  }

  function renderScrollspy() {
    scrollspy.innerHTML = currentCaseStudy.sections.map((section, index) => `
      <div class="scrollspy-item" data-page="${section.page}" data-index="${index}">
        <span class="scrollspy-item-title">${section.title}</span>
        <span class="scrollspy-item-page">${section.page}/${currentCaseStudy.totalPages}</span>
      </div>
    `).join('');

    // Set initial active state
    updateScrollspyHighlight();
  }

  function renderPlaceholderPages() {
    pdfPages.innerHTML = '';

    for (let i = 1; i <= currentCaseStudy.totalPages; i++) {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'pdf-page';
      pageDiv.id = `page-${i}`;
      pageDiv.dataset.page = i;
      pageDiv.innerHTML = `
        <div class="pdf-page-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 15l5-5 4 4 5-5 4 4"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
        </div>
      `;
      pdfPages.appendChild(pageDiv);
    }
  }

  // ==========================================================================
  // Scrollspy Functionality
  // ==========================================================================

  function setupScrollspy() {
    // Click to scroll
    scrollspy.addEventListener('click', (e) => {
      const item = e.target.closest('.scrollspy-item');
      if (item) {
        const pageNum = parseInt(item.dataset.page);
        const sectionIndex = parseInt(item.dataset.index);

        // Update active section immediately
        activeSection = sectionIndex;
        updateScrollspyHighlight();

        // Scroll to the page
        scrollToPage(pageNum);

        // Close sidebar on mobile after selection
        if (window.innerWidth <= 900) {
          closeSidebar();
        }
      }
    });

    // Scroll detection to update active section
    pdfViewer.addEventListener('scroll', debounce(updateActiveSection, 30));

    // Also run once initially after a short delay
    setTimeout(updateActiveSection, 500);
  }

  function scrollToPage(pageNum) {
    const pageElement = document.getElementById(`page-${pageNum}`);
    const viewer = document.getElementById('pdfViewer');

    if (!pageElement || !viewer) return;

    const pageRect = pageElement.getBoundingClientRect();
    const viewerRect = viewer.getBoundingClientRect();
    const targetScroll = viewer.scrollTop + pageRect.top - viewerRect.top;

    viewer.scrollTop = targetScroll;
  }

  function updateActiveSection() {
    const pages = pdfPages.querySelectorAll('.pdf-page');

    if (pages.length === 0) return;

    let currentPage = 1;
    let minDistance = Infinity;
    const pdfViewerTop = pdfViewer.getBoundingClientRect().top;

    // Find the page closest to the top of the pdf viewer
    pages.forEach((page) => {
      const pageRect = page.getBoundingClientRect();
      const distance = Math.abs(pageRect.top - pdfViewerTop);

      if (distance < minDistance) {
        minDistance = distance;
        currentPage = parseInt(page.dataset.page);
      }
    });

    // Direct 1:1 mapping - page number equals section index + 1
    let sectionIndex = currentPage - 1;

    // Clamp to valid range
    sectionIndex = Math.max(0, Math.min(sectionIndex, currentCaseStudy.sections.length - 1));

    // Update if section changed
    if (sectionIndex !== activeSection) {
      activeSection = sectionIndex;
      updateScrollspyHighlight();
      scrollSpyIntoView();
    }
  }

  function scrollSpyIntoView() {
    const activeItem = scrollspy.querySelector('.scrollspy-item.active');
    if (activeItem && sidebar) {
      // Calculate position of item relative to sidebar
      const itemTop = activeItem.offsetTop;
      const sidebarHeight = sidebar.clientHeight;
      const scrollTarget = itemTop - (sidebarHeight / 2) + (activeItem.clientHeight / 2);

      sidebar.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  }

  function updateScrollspyHighlight() {
    const items = scrollspy.querySelectorAll('.scrollspy-item');
    items.forEach((item, index) => {
      if (index === activeSection) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Mobile Sidebar
  // ==========================================================================

  function setupMobileSidebar() {
    sidebarToggle.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking overlay
    layout.addEventListener('click', (e) => {
      if (e.target === layout && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
  }

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    layout.classList.toggle('sidebar-open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    layout.classList.remove('sidebar-open');
  }

  // ==========================================================================
  // Utilities
  // ==========================================================================

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ==========================================================================
  // Start
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', init);

})();
