/**
 * Varoluşun Detaylı İncelemesi — İnteraktif Okuyucu
 * Core JavaScript Logic
 */

(function () {
  'use strict';

  // --- State Management ---
  const state = {
    chapters: window.BOOK_DATA || [],
    currentChapterIndex: 1, // Default to Önsöz (01)
    currentLang: 'tr',
    completedChapters: new Set(),
    searchQuery: '',
    theme: 'dark',
    font: 'sans',
    fontSize: 18,
    width: 'standard',
    speechSynth: window.speechSynthesis,
    utterance: null,
    isPlayingTTS: false
  };

  // --- DOM Elements ---
  const el = {
    html: document.documentElement,
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    toggleSidebarBtn: document.getElementById('toggle-sidebar-btn'),
    closeSidebarBtn: document.getElementById('close-sidebar-btn'),
    chapterList: document.getElementById('chapter-list'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    completedCount: document.getElementById('completed-count'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    
    // Top Bar
    bcTitle: document.getElementById('bc-title'),
    ttsBtn: document.getElementById('tts-btn'),
    langSwitchWrapper: document.getElementById('lang-switch-wrapper'),
    langTrBtn: document.getElementById('lang-tr-btn'),
    langEnBtn: document.getElementById('lang-en-btn'),
    toggleSettingsBtn: document.getElementById('toggle-settings-btn'),
    settingsToolbar: document.getElementById('settings-toolbar'),

    // Settings Controls
    themeBtns: document.querySelectorAll('.theme-btn'),
    fontBtns: document.querySelectorAll('.font-btn'),
    widthBtns: document.querySelectorAll('.width-btn'),
    fontDecreaseBtn: document.getElementById('font-decrease-btn'),
    fontIncreaseBtn: document.getElementById('font-increase-btn'),
    fontSizeLabel: document.getElementById('font-size-label'),

    // Article Elements
    readProgressBar: document.getElementById('read-progress-bar'),
    artChapterNum: document.getElementById('art-chapter-num'),
    artPagesBadge: document.getElementById('art-pages-badge'),
    artTimeBadge: document.getElementById('art-time-badge'),
    artLangBadge: document.getElementById('art-lang-badge'),
    artTitle: document.getElementById('art-title'),
    artSubtitle: document.getElementById('art-subtitle'),
    artBody: document.getElementById('art-body'),
    
    // Concepts Pane
    conceptsPane: document.getElementById('concepts-pane'),
    conceptsList: document.getElementById('concepts-list'),
    conceptsHeaderTitle: document.getElementById('concepts-header-title'),

    // Footer & Nav
    markCompleteBtn: document.getElementById('mark-complete-btn'),
    prevChapterBtn: document.getElementById('prev-chapter-btn'),
    nextChapterBtn: document.getElementById('next-chapter-btn'),
    prevTitle: document.getElementById('prev-title'),
    nextTitle: document.getElementById('next-title')
  };

  // --- Initialize App ---
  function init() {
    loadSettings();
    loadProgress();
    renderSidebarList();
    loadChapter(state.currentChapterIndex);
    setupEventListeners();
    updateScrollProgress();
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  }

  // --- LocalStorage Settings ---
  function loadSettings() {
    const savedTheme = localStorage.getItem('varolus_theme') || 'dark';
    const savedFont = localStorage.getItem('varolus_font') || 'sans';
    const savedSize = parseInt(localStorage.getItem('varolus_fontSize')) || 18;
    const savedWidth = localStorage.getItem('varolus_width') || 'standard';

    setTheme(savedTheme);
    setFont(savedFont);
    setFontSize(savedSize);
    setWidth(savedWidth);
  }

  function loadProgress() {
    try {
      const saved = localStorage.getItem('varolus_completed');
      if (saved) {
        state.completedChapters = new Set(JSON.parse(saved));
      }
      const savedIndex = localStorage.getItem('varolus_lastChapter');
      if (savedIndex !== null) {
        const parsed = parseInt(savedIndex);
        if (parsed >= 0 && parsed < state.chapters.length) {
          state.currentChapterIndex = parsed;
        }
      }
    } catch (e) {
      console.error("Error loading progress", e);
    }
  }

  function saveProgress() {
    localStorage.setItem('varolus_completed', JSON.stringify(Array.from(state.completedChapters)));
    localStorage.setItem('varolus_lastChapter', state.currentChapterIndex.toString());
    updateProgressStats();
  }

  // --- UI Settings Setters ---
  function setTheme(theme) {
    state.theme = theme;
    el.html.setAttribute('data-theme', theme);
    localStorage.setItem('varolus_theme', theme);
    el.themeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === theme);
    });
  }

  function setFont(font) {
    state.font = font;
    document.body.setAttribute('data-font', font);
    localStorage.setItem('varolus_font', font);
    el.fontBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setFont === font);
    });
  }

  function setFontSize(size) {
    size = Math.min(Math.max(size, 14), 26);
    state.fontSize = size;
    el.html.style.setProperty('--reader-font-size', size + 'px');
    el.fontSizeLabel.textContent = size + 'px';
    localStorage.setItem('varolus_fontSize', size.toString());
  }

  function setWidth(width) {
    state.width = width;
    el.html.setAttribute('data-width', width);
    localStorage.setItem('varolus_width', width);
    el.widthBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setWidth === width);
    });
  }

  // --- Sidebar Render & Search ---
  function renderSidebarList() {
    el.chapterList.innerHTML = '';
    const q = state.searchQuery.toLowerCase();

    state.chapters.forEach((chap, idx) => {
      const matchesTitle = chap.title.toLowerCase().includes(q) || chap.subtitle.toLowerCase().includes(q);
      const matchesText = chap.paragraphs.some(p => p.toLowerCase().includes(q));

      if (q && !matchesTitle && !matchesText) {
        return; // Filter out non-matching
      }

      const li = document.createElement('li');
      li.className = 'chapter-item';
      if (idx === state.currentChapterIndex) li.classList.add('active');
      if (state.completedChapters.has(chap.id)) li.classList.add('completed');

      const isCompleted = state.completedChapters.has(chap.id);

      li.innerHTML = `
        <span class="chap-num">${chap.id}</span>
        <div class="chap-info">
          <div class="chap-title">${escapeHTML(chap.title)}</div>
          <div class="chap-sub">${escapeHTML(chap.subtitle)}</div>
        </div>
        <div class="chap-status">
          <i class="${isCompleted ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i>
        </div>
      `;

      li.addEventListener('click', () => {
        state.currentLang = 'tr'; // Reset to Turkish on chapter change
        loadChapter(idx);
        closeMobileSidebar();
      });

      el.chapterList.appendChild(li);
    });

    updateProgressStats();
  }

  function updateProgressStats() {
    el.completedCount.textContent = `${state.completedChapters.size} / ${state.chapters.length}`;
  }

  // --- Render Chapter Content ---
  function loadChapter(index) {
    if (index < 0 || index >= state.chapters.length) return;
    
    stopTTS(); // Stop any speech synthesis if playing

    state.currentChapterIndex = index;
    const chap = state.chapters[index];

    // Save last read position
    localStorage.setItem('varolus_lastChapter', index.toString());

    // Language Switcher Visibility
    const hasEN = chap.enParagraphs && chap.enParagraphs.length > 0;
    if (hasEN) {
      el.langSwitchWrapper.classList.remove('hidden');
      el.artLangBadge.classList.remove('hidden');
    } else {
      el.langSwitchWrapper.classList.add('hidden');
      el.artLangBadge.classList.add('hidden');
      state.currentLang = 'tr';
    }

    const isEn = state.currentLang === 'en' && hasEN;

    // Update Header Badges & Breadcrumb
    el.bcTitle.textContent = isEn ? (chap.titleEn || chap.title) : chap.title;
    el.artChapterNum.textContent = isEn ? `Chapter ${chap.id}` : `Bölüm ${chap.id}`;
    el.artPagesBadge.innerHTML = isEn
      ? `<i class="fa-regular fa-file-pdf"></i> Pages ${chap.pages}`
      : `<i class="fa-regular fa-file-pdf"></i> Sayfa ${chap.pages}`;
    el.artTimeBadge.innerHTML = isEn
      ? `<i class="fa-regular fa-clock"></i> ${chap.readTime} min read`
      : `<i class="fa-regular fa-clock"></i> ${chap.readTime} dk okuma`;
    el.artLangBadge.innerHTML = isEn
      ? `<i class="fa-solid fa-language"></i> EN Active`
      : `<i class="fa-solid fa-language"></i> EN Mevcut`;

    el.langTrBtn.classList.toggle('active', state.currentLang === 'tr');
    el.langEnBtn.classList.toggle('active', state.currentLang === 'en');

    // Title & Subtitle
    el.artTitle.textContent = isEn ? (chap.titleEn || getEnglishTitle(chap.id)) : chap.title;
    el.artSubtitle.textContent = isEn && chap.subtitleEn ? chap.subtitleEn : chap.subtitle;

    // Body Paragraphs
    const parasToRender = isEn ? chap.enParagraphs : chap.paragraphs;
    
    el.artBody.innerHTML = '';
    const q = state.searchQuery.trim();

    parasToRender.forEach((pText, idx) => {
      const p = document.createElement('p');

      // Assign a stable id so concept anchors can scroll to it
      p.id = `para-${idx}`;

      // Check footnote lines
      if (pText.startsWith('(1)') || pText.startsWith('(2)')) {
        p.className = 'footnote-block';
      }

      if (q) {
        p.innerHTML = highlightSearchText(pText, q);
      } else {
        p.textContent = pText;
      }
      el.artBody.appendChild(p);
    });

    // Render concepts panel for the current chapter
    renderConcepts(chap);

    // Mark Complete Button State
    updateMarkCompleteBtn();

    // Bottom Navigation Cards
    updateBottomNav();

    // Update active highlight in sidebar
    renderSidebarList();

    // Scroll to top of article
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Core Concepts Pane ---
  // --- Deep links from the concept map: index.html#ch=06&p=3&lang=en ---
  function openFromHash() {
    const h = new URLSearchParams(location.hash.slice(1));
    const ch = h.get('ch');
    if (!ch) return;
    const idx = state.chapters.findIndex(c => String(c.id) === ch);
    if (idx < 0) return;
    loadChapter(idx);
    if (h.get('lang') === 'en' && el.langEnBtn && !el.langEnBtn.closest('.hidden')) el.langEnBtn.click();
    const p = h.get('p');
    if (p !== null) setTimeout(() => {
      const t = document.getElementById('para-' + p);
      if (!t) return;
      t.scrollIntoView({ block: 'start' });
      t.classList.add('concept-highlight');
      setTimeout(() => t.classList.remove('concept-highlight'), 1800);
    }, 150);
  }

  // Which concept-map node does this chapter concept belong to?
  function graphNodeFor(chap, concept) {
    const G = window.BOOK_GRAPH;
    if (!G) return null;
    const n = G.nodes.find(n => n.appearances.some(a => a.ch === String(chap.id) && a.labelEn === concept.labelEn));
    return n ? n.id : null;
  }

  function renderConcepts(chap) {
    const isEn = state.currentLang === 'en';
    const concepts = chap.concepts || [];
    el.conceptsList.innerHTML = '';

    if (el.conceptsHeaderTitle) {
      el.conceptsHeaderTitle.textContent = isEn ? 'Core Concepts' : 'Temel Kavramlar';
    }

    if (concepts.length === 0) {
      el.conceptsPane.classList.add('hidden');
      return;
    }

    el.conceptsPane.classList.remove('hidden');

    concepts.forEach((concept) => {
      const label = (isEn && concept.labelEn) ? concept.labelEn : concept.label;
      const targetParaIdx = (isEn && concept.paraIndexEn !== undefined && concept.paraIndexEn !== null)
        ? concept.paraIndexEn
        : concept.paraIndex;

      const li = document.createElement('li');
      li.className = 'concept-item';
      li.innerHTML = `<i class="fa-solid fa-tag"></i><span>${escapeHTML(label)}</span>`;
      const gid = graphNodeFor(chap, concept);
      if (gid) {
        const a = document.createElement('a');
        a.className = 'graph-link';
        a.href = 'graph.html#node=' + gid;
        a.title = isEn ? 'Show in concept map' : 'Kavram haritasında göster';
        a.innerHTML = '<i class="fa-solid fa-diagram-project"></i>';
        a.addEventListener('click', ev => ev.stopPropagation());
        li.appendChild(a);
      }

      li.addEventListener('click', () => {
        // Mark active visually
        el.conceptsList.querySelectorAll('.concept-item').forEach(c => c.classList.remove('active'));
        li.classList.add('active');

        // Scroll to the paragraph
        const targetEl = document.getElementById(`para-${targetParaIdx}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Briefly flash the target paragraph
          targetEl.classList.add('concept-highlight');
          setTimeout(() => targetEl.classList.remove('concept-highlight'), 1800);
        }
      });

      el.conceptsList.appendChild(li);
    });
  }

  function getEnglishTitle(id) {
    if (id === '02') return 'On Strategies of Existence';
    if (id === '03') return 'On Randomness and Free Will';
    return '';
  }

  function highlightSearchText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHTML(text).replace(regex, '<mark class="search-match">$1</mark>');
  }

  function updateMarkCompleteBtn() {
    const isEn = state.currentLang === 'en';
    const chap = state.chapters[state.currentChapterIndex];
    const isDone = state.completedChapters.has(chap.id);
    
    if (isDone) {
      el.markCompleteBtn.classList.add('completed');
      el.markCompleteBtn.querySelector('span').textContent = isEn ? 'Marked as Read' : 'Okundu Olarak İşaretlendi';
      el.markCompleteBtn.querySelector('i').className = 'fa-solid fa-circle-check';
    } else {
      el.markCompleteBtn.classList.remove('completed');
      el.markCompleteBtn.querySelector('span').textContent = isEn ? 'Mark Chapter as Read' : 'Bu Bölümü Okundu Olarak İşaretle';
      el.markCompleteBtn.querySelector('i').className = 'fa-regular fa-circle-check';
    }
  }

  function updateBottomNav() {
    const isEn = state.currentLang === 'en';
    const prevIdx = state.currentChapterIndex - 1;
    const nextIdx = state.currentChapterIndex + 1;

    const prevDirection = el.prevChapterBtn.querySelector('.nav-direction');
    if (prevDirection) {
      prevDirection.textContent = isEn ? 'Previous Chapter' : 'Önceki Bölüm';
    }
    const nextDirection = el.nextChapterBtn.querySelector('.nav-direction');
    if (nextDirection) {
      nextDirection.textContent = isEn ? 'Next Chapter' : 'Sonraki Bölüm';
    }

    if (prevIdx >= 0) {
      el.prevChapterBtn.style.visibility = 'visible';
      el.prevTitle.textContent = (isEn && state.chapters[prevIdx].titleEn) ? state.chapters[prevIdx].titleEn : state.chapters[prevIdx].title;
    } else {
      el.prevChapterBtn.style.visibility = 'hidden';
    }

    if (nextIdx < state.chapters.length) {
      el.nextChapterBtn.style.visibility = 'visible';
      el.nextTitle.textContent = (isEn && state.chapters[nextIdx].titleEn) ? state.chapters[nextIdx].titleEn : state.chapters[nextIdx].title;
    } else {
      el.nextChapterBtn.style.visibility = 'hidden';
    }
  }

  // --- Text-To-Speech (Speech Synthesis) ---
  function toggleTTS() {
    if (state.isPlayingTTS) {
      stopTTS();
    } else {
      startTTS();
    }
  }

  function startTTS() {
    if (!state.speechSynth) {
      alert("Tarayıcınız sesli okuma özelliğini desteklemiyor.");
      return;
    }

    stopTTS();

    const chap = state.chapters[state.currentChapterIndex];
    const paras = (state.currentLang === 'en' && chap.enParagraphs.length > 0) ? chap.enParagraphs : chap.paragraphs;
    const fullText = chap.title + '. ' + paras.join(' ');

    state.utterance = new SpeechSynthesisUtterance(fullText);
    state.utterance.lang = state.currentLang === 'en' ? 'en-US' : 'tr-TR';
    state.utterance.rate = 1.0;

    state.utterance.onend = () => {
      stopTTS();
    };

    state.utterance.onerror = () => {
      stopTTS();
    };

    state.speechSynth.speak(state.utterance);
    state.isPlayingTTS = true;
    el.ttsBtn.classList.add('playing');
    el.ttsBtn.querySelector('.btn-text').textContent = state.currentLang === 'en' ? 'Stop' : 'Durdur';
  }

  function stopTTS() {
    if (state.speechSynth) {
      state.speechSynth.cancel();
    }
    state.isPlayingTTS = false;
    el.ttsBtn.classList.remove('playing');
    el.ttsBtn.querySelector('.btn-text').textContent = state.currentLang === 'en' ? 'Read Aloud' : 'Sesli Oku';
  }

  // --- Event Listeners ---
  function setupEventListeners() {
    // Sidebar Toggle
    el.toggleSidebarBtn.addEventListener('click', () => {
      el.sidebar.classList.toggle('active');
      el.sidebarOverlay.classList.toggle('active');
    });

    el.closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    el.sidebarOverlay.addEventListener('click', closeMobileSidebar);

    // Search Input
    el.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      el.clearSearchBtn.classList.toggle('hidden', !state.searchQuery);
      renderSidebarList();
      loadChapter(state.currentChapterIndex); // Re-render highlights
    });

    el.clearSearchBtn.addEventListener('click', () => {
      el.searchInput.value = '';
      state.searchQuery = '';
      el.clearSearchBtn.classList.add('hidden');
      renderSidebarList();
      loadChapter(state.currentChapterIndex);
    });

    // Reset Progress Button
    el.resetProgressBtn.addEventListener('click', () => {
      if (confirm('Tüm okuma ilerlemenizi sıfırlamak istediğinize emin misiniz?')) {
        state.completedChapters.clear();
        saveProgress();
        renderSidebarList();
        updateMarkCompleteBtn();
      }
    });

    // Settings Toolbar Toggle
    el.toggleSettingsBtn.addEventListener('click', () => {
      el.settingsToolbar.classList.toggle('hidden');
    });

    // Theme Controls
    el.themeBtns.forEach(btn => {
      btn.addEventListener('click', () => setTheme(btn.dataset.setTheme));
    });

    // Font Controls
    el.fontBtns.forEach(btn => {
      btn.addEventListener('click', () => setFont(btn.dataset.setFont));
    });

    el.fontDecreaseBtn.addEventListener('click', () => setFontSize(state.fontSize - 1));
    el.fontIncreaseBtn.addEventListener('click', () => setFontSize(state.fontSize + 1));

    // Width Controls
    el.widthBtns.forEach(btn => {
      btn.addEventListener('click', () => setWidth(btn.dataset.setWidth));
    });

    // Language Switcher
    el.langTrBtn.addEventListener('click', () => {
      state.currentLang = 'tr';
      loadChapter(state.currentChapterIndex);
    });

    el.langEnBtn.addEventListener('click', () => {
      state.currentLang = 'en';
      loadChapter(state.currentChapterIndex);
    });

    // Text To Speech
    el.ttsBtn.addEventListener('click', toggleTTS);

    // Mark Complete Button
    el.markCompleteBtn.addEventListener('click', () => {
      const chap = state.chapters[state.currentChapterIndex];
      if (state.completedChapters.has(chap.id)) {
        state.completedChapters.delete(chap.id);
      } else {
        state.completedChapters.add(chap.id);
      }
      saveProgress();
      renderSidebarList();
      updateMarkCompleteBtn();
    });

    // Bottom Navigation Cards
    el.prevChapterBtn.addEventListener('click', () => {
      state.currentLang = 'tr';
      loadChapter(state.currentChapterIndex - 1);
    });

    el.nextChapterBtn.addEventListener('click', () => {
      state.currentLang = 'tr';
      loadChapter(state.currentChapterIndex + 1);
    });

    // Keyboard Shortcuts (Left / Right Arrows)
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowLeft') {
        if (state.currentChapterIndex > 0) {
          state.currentLang = 'tr';
          loadChapter(state.currentChapterIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (state.currentChapterIndex < state.chapters.length - 1) {
          state.currentLang = 'tr';
          loadChapter(state.currentChapterIndex + 1);
        }
      } else if (e.key.toLowerCase() === 'z' && e.altKey) {
        // Alt+Z shortcut for settings
        el.settingsToolbar.classList.toggle('hidden');
      }
    });

    // Scroll Progress Bar
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
  }

  function closeMobileSidebar() {
    el.sidebar.classList.remove('active');
    el.sidebarOverlay.classList.remove('active');
  }

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    el.readProgressBar.style.width = `${Math.min(percent, 100)}%`;
  }

  // --- Helper Functions ---
  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Start App
  document.addEventListener('DOMContentLoaded', init);
})();
