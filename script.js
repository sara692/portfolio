document.addEventListener('DOMContentLoaded', () => {
    // Current State
    let currentLang = 'en';
    let currentTheme = 'light'; // Light is default now

    // Elements
    const themeBtn = document.getElementById('theme-toggle');
    const langBtn = document.getElementById('lang-toggle');

    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const navbar = document.querySelector('.navbar');
    const bgGlows = document.querySelectorAll('.bg-glow, .bg-glow-2');

    // Initialize
    initTheme();
    renderProjects('all');
    applyTranslations();
    initScrollReveal();

    // Event Listeners
    themeBtn.addEventListener('click', toggleTheme);
    langBtn.addEventListener('click', toggleLang);

    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Render projects
            const filter = e.target.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // --- Functions ---
    
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            currentTheme = savedTheme;
        }
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
    }

    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    }

    function initScrollReveal() {
        const sections = document.querySelectorAll('.card');
        sections.forEach(sec => sec.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(sec => observer.observe(sec));
    }



    function updateThemeIcon() {
        const iconSpan = themeBtn.querySelector('.icon');
        iconSpan.setAttribute('data-i18n', currentTheme === 'dark' ? 'modeLight' : 'modeDark');
        iconSpan.textContent = translations[currentLang][currentTheme === 'dark' ? 'modeLight' : 'modeDark'];
    }

    function toggleLang() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // Update language button text
        langBtn.querySelector('.icon').textContent = currentLang === 'en' ? 'عربي' : 'English';
        
        applyTranslations();
        
        // Re-render projects to show translated content
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderProjects(activeFilter);
        
        updateThemeIcon(); // sync theme button text
    }

    function applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        const t = translations[currentLang];
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
    }

    function renderProjects(filter) {
        projectsGrid.innerHTML = '';
        
        let filteredData = projectsData;
        if (filter !== 'all') {
            filteredData = projectsData.filter(p => p.category === filter);
        }

        filteredData.forEach((p, index) => {
            const isAr = currentLang === 'ar';
            const title = isAr ? p.titleAr : p.title;
            const points = isAr ? p.pointsAr : p.points;
            
            const card = document.createElement('div');
            card.className = 'project-card reveal active'; // active to show immediately
            
            const pointsList = points.map(pt => `<li>${pt}</li>`).join('');

            card.innerHTML = `
                <div class="project-header">${title}</div>
                <div class="project-body">
                    <ul>${pointsList}</ul>
                </div>
            `;
            
            projectsGrid.appendChild(card);
        });
    }
});
