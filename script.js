/*
================================================================================
🎀 KUNAL'S SITE CONFIGURATION
================================================================================
*/
const SITE_CONFIG = {
    name: "Kunal",
    aboutText: "I'm Kunal, a developer who loves turning random ideas into little digital experiences. I build websites, games, experiments and creative projects simply because I enjoy seeing an idea come alive. 🎀✨",
    github: "https://github.com/kunaldhibar987-collab",
    instagram: "https://instagram.com/kunal_0908__",
    email: "kunal.dhibar987@gmail.com"
};

/*
================================================================================
🎀 PROJECT DATA (Exactly 15 Real Projects)
================================================================================
Note: 
If 'image' is empty (""), the website automatically generates a beautiful 3D 
CSS illustration matching the project's category perfectly. No more random photos!
================================================================================
*/
const projects = [
    // 🎂 Birthday Websites (9)
    { title: "Birthday", category: "Birthday", description: "A creative birthday website filled with cute animations.", technologies: ["HTML", "CSS", "JavaScript"], image: "", icon: "🎂", grad: "linear-gradient(135deg, #ffc2d1, #ffe4e1)", github: "", live: "https://kunaldhibar987-collab.github.io/birthday/", featured: false },
    { title: "Happy Birthday Paglii", category: "Birthday", description: "A beautiful dedicated birthday celebration page.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "🎉", grad: "linear-gradient(135deg, #ff9ebd, #ffcde0)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-paglii/", featured: false },
    { title: "Mera Pyaara Bhan", category: "Birthday", description: "A sweet interactive birthday message.", technologies: ["HTML", "CSS"], image: "", icon: "🧸", grad: "linear-gradient(135deg, #fbc2eb, #a6c1ee)", github: "", live: "https://kunaldhibar987-collab.github.io/mera_payera_bhan/", featured: false },
    { title: "Happy Birthday Dii", category: "Birthday", description: "A loving birthday tribute website.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "🎀", grad: "linear-gradient(135deg, #ffc3a0, #ffafbd)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-dii/", featured: false },
    { title: "Happy Birthday Sweetheart", category: "Birthday", description: "A deeply personal and cute birthday surprise.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "💗", grad: "linear-gradient(135deg, #ff9a9e, #fecfef)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-sweetheart/", featured: false },
    { title: "Happy Birthday Angel Betu", category: "Birthday", description: "An angelic and soft digital birthday card.", technologies: ["HTML", "CSS"], image: "", icon: "👼", grad: "linear-gradient(135deg, #a1c4fd, #c2e9fb)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-angel-betu/", featured: false },
    { title: "Happy Birthday Anu", category: "Birthday", description: "A fun and engaging birthday website for Anu.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "🎁", grad: "linear-gradient(135deg, #fdcbf1, #e6dee9)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-anu/", featured: false },
    { title: "Happy Birthday Bunu", category: "Birthday", description: "A playful birthday greeting full of surprises.", technologies: ["HTML", "CSS"], image: "", icon: "🧁", grad: "linear-gradient(135deg, #fccb90, #d57eeb)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-bunu/", featured: false },
    { title: "Happy Birthday Sis", category: "Birthday", description: "A special digital gift crafted for a sister.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "🌸", grad: "linear-gradient(135deg, #e0c3fc, #8ec5fc)", github: "", live: "https://kunaldhibar987-collab.github.io/happy-birthday-sis/", featured: false },
    
    // 🌸 Creative Websites (4)
    { title: "Premium Night Garden", category: "Creative Website", description: "A magical, interactive night garden experience built with pure code and creativity.", technologies: ["HTML5", "CSS3", "JavaScript"], image: "", icon: "🌙🌸", grad: "linear-gradient(135deg, #1a1a2e, #16213e)", github: "", live: "https://kunaldhibar987-collab.github.io/premium-night-garden/", featured: true },
    { title: "Stars For My Angel", category: "Creative Website", description: "A dreamy starry night sky generated dynamically. Catch a falling star!", technologies: ["HTML5", "CSS3", "JS"], image: "", icon: "⭐✨", grad: "linear-gradient(135deg, #0f2027, #203a43)", github: "", live: "https://kunaldhibar987-collab.github.io/stars-for-my-angel/", featured: false },
    { title: "Me Pgl Hun", category: "Creative Website", description: "A fun, quirky, and creative interactive web page with a great sense of humor.", technologies: ["HTML", "CSS", "JS"], image: "", icon: "🤪💗", grad: "linear-gradient(135deg, #fcc5e4, #fda34b)", github: "", live: "https://kunaldhibar987-collab.github.io/me-pgl-hun/", featured: false },
    { title: "Air Drawing", category: "Creative Website", description: "Draw in the air using hand and finger movements without physically touching the screen. The system analyzes hand/finger movements and creates the corresponding drawing or patterns on the screen.", technologies: ["HTML", "CSS", "JavaScript"], image: "", icon: "✋✨", grad: "linear-gradient(135deg, #a8edea, #fed6e3)", github: "", live: "https://kunaldhibar987-collab.github.io/air-drawing/", featured: false },
    { title: "Lumi Support", category: "Creative Website", description: "A gentle little space to talk, play, reflect, and grow—helping you feel a little stronger, one small step at a time. 🌷🫂", technologies: ["HTML", "CSS", "JavaScript"], image: "", icon: "🫂✨", grad: "linear-gradient(135deg, #FFD6E7, #DCCBFF)", github: "", live: "https://kunaldhibar987-collab.github.io/lumi-support/", featured: false },


    // 🎮 Games (2)
    { title: "Horror Creature", category: "Game", description: "An intense browser game for PC users featuring custom creature mechanics.", technologies: ["HTML5", "CSS3", "JavaScript"], image: "", icon: "👹🕸️", grad: "linear-gradient(135deg, #2b5876, #4e4376)", github: "", live: "https://kunaldhibar987-collab.github.io/horrer-creature_-for-pc-user/", featured: false },
    { title: "SNAKE CLASSIC", category: "Game", description: "A cute, modern reimagining of the classic snake game with smooth controls.", technologies: ["HTML5 Canvas", "JavaScript"], image: "", icon: "🐍🍎", grad: "linear-gradient(135deg, #56ab2f, #a8e063)", github: "", live: "https://kunaldhibar987-collab.github.io/SNAKE-CLASSIC-game/", featured: false }
];

const skills = ["HTML5 🌸", "CSS3 🎀", "JavaScript ✨", "Git 📦", "GitHub 🐰", "Responsive Web Design 📱", "Creative Coding 💻"];

/* ==========================================================================
   ⚙️ SYSTEM ENGINE (Smooth & Soft)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initSite();
});

function initSite() {
    // Background Particles
    generateParticles();
    
    // Smooth Loading Screen
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.visibility = "hidden", 600);
    }, 1500);

    // Apply Config Links
    document.getElementById("about-content").innerHTML = `<p>${SITE_CONFIG.aboutText}</p>`;
    document.getElementById("github-main-link").href = SITE_CONFIG.github;
    document.getElementById("footer-github").href = SITE_CONFIG.github;
    document.getElementById("footer-ig").href = SITE_CONFIG.instagram;

    // Contact Buttons Setup
    const contactContainer = document.getElementById("contact-buttons");
    if(SITE_CONFIG.instagram) contactContainer.innerHTML += `<a href="${SITE_CONFIG.instagram}" target="_blank" class="btn-pookie">📸 Instagram</a>`;
    if(SITE_CONFIG.email) contactContainer.innerHTML += `<a href="mailto:${SITE_CONFIG.email}" class="btn-pookie btn-secondary">💌 Email Me</a>`;
    if(SITE_CONFIG.github) contactContainer.innerHTML += `<a href="${SITE_CONFIG.github}" target="_blank" class="btn-pookie">💻 GitHub</a>`;

    // Render Components
    renderStats();
    renderFeatured();
    renderFilters();
    renderProjects(projects);
    renderTimeline();
    renderSkills();

    // Interactions
    setupMobileMenu();
    setupScrollReveal();
    setupSearch();
    setupThemeToggle();
    
    // Smooth Desktop Parallax & Tilt
    if (window.matchMedia("(min-width: 769px)").matches) {
        setup3DTilt();
        setupHeroParallax();
    }
}

// 🫧 Background Particle System (Optimized & Soft)
function generateParticles() {
    const container = document.getElementById('dreamy-bg');
    const elements = ['☁️', '💗', '✨', '⭐', '🫧', '🎀', '🌸'];
    // Drastically reduce particles on mobile for smooth performance
    const count = window.innerWidth < 768 ? 8 : 20; 

    for(let i=0; i<count; i++) {
        const el = document.createElement('div');
        el.className = 'particle particle-3d';
        el.innerText = elements[Math.floor(Math.random() * elements.length)];
        el.style.left = `${Math.random() * 100}vw`;
        // Make animations very slow to prevent flashing/overwhelm
        el.style.animationDuration = `${25 + Math.random() * 25}s`; 
        el.style.animationDelay = `${Math.random() * -30}s`; 
        el.style.fontSize = `${20 + Math.random() * 25}px`;
        container.appendChild(el);
    }
}

// 📊 Render Stats (Dynamically calculates the projects)
function renderStats() {
    const container = document.getElementById("stats-container");
    const counts = { "Projects": projects.length };
    
    projects.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

    const displayOrder = ["Projects", "Birthday", "Creative Website", "Game"];
    let html = '';
    
    displayOrder.forEach(cat => {
        if(counts[cat]) {
            html += `<div class="stat-box pookie-box tilt-element">
                        <div class="stat-num">${counts[cat]}</div>
                        <div class="stat-label">${cat}${cat === "Projects" || cat === "Birthday" ? "" : "s"}</div>
                     </div>`;
        }
    });
    container.innerHTML = html;
}

// 🖼️ Generate Image or Fallback Html
function getImageHtml(p) {
    if (p.image && p.image.trim() !== "") {
        return `<img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy">`;
    } else {
        // Beautiful 3D CSS Fallback specifically tied to the project
        return `<div class="card-fallback" style="background: ${p.grad};">${p.icon}</div>`;
    }
}

// 🎁 Render Featured
function renderFeatured() {
    const featured = projects.find(p => p.featured) || projects[0];
    const container = document.getElementById("featured-container");
    
    container.innerHTML = `
        <div class="featured-card pookie-box tilt-element">
            <div class="featured-img-wrap">
                ${getImageHtml(featured)}
            </div>
            <div class="featured-info">
                <span class="featured-badge">⭐ Top Project</span>
                <h3 class="card-title 3d-text" style="font-size: 2.2rem;">${featured.title}</h3>
                <p class="card-desc" style="font-size: 1.1rem; margin-bottom:20px;">${featured.description}</p>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <button class="btn-pookie btn-small" onclick="openModal('${featured.title}')">🎀 View Details</button>
                    ${featured.live ? `<a href="${featured.live}" target="_blank" class="btn-pookie btn-secondary btn-small">🌐 Open Project</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// 🌸 Render Filters
function renderFilters() {
    const filtersContainer = document.getElementById("project-filters");
    const categories = ["All 🎀", "Birthday 🎂", "Creative Website 🌸", "Game 🎮"];
    
    filtersContainer.innerHTML = categories.map(cat => {
        const isAll = cat.includes("All");
        return `<button class="filter-btn ${isAll ? 'active' : ''}" data-filter="${isAll ? 'All' : cat.replace(/[🎂🌸🎮🎀]/g, '').trim()}">${cat}</button>`;
    }).join('');

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            document.getElementById("project-search").value = "";
            
            const filter = e.target.getAttribute("data-filter");
            const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
            renderProjects(filtered);
        });
    });
}

// 📦 Render Project Grid
function renderProjects(data) {
    const grid = document.getElementById("projects-grid");
    
    if(data.length === 0) {
        grid.innerHTML = `<p style="text-align:center; color: var(--text-light); grid-column: 1/-1; font-size:1.1rem; font-weight:bold;">No little projects found here yet... 🥺</p>`;
        return;
    }

    grid.innerHTML = data.map(p => `
        <div class="project-card pookie-box tilt-element" onclick="openModal('${p.title}')">
            <div class="card-content">
                <div class="card-img-wrap">
                    ${getImageHtml(p)}
                </div>
                <div class="card-cat">${p.category}</div>
                <h3 class="card-title">${p.title}</h3>
                <p class="card-desc">${p.description}</p>
                <div class="card-actions">
                    <button class="btn-pookie btn-small">🎀 Details</button>
                    ${p.github ? `<a href="${p.github}" target="_blank" class="btn-pookie btn-secondary btn-small" onclick="event.stopPropagation()">💻 Code</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    if (window.matchMedia("(min-width: 769px)").matches) setup3DTilt();
}

// 🌷 Render Timeline
function renderTimeline() {
    const container = document.getElementById("timeline-container");
    container.innerHTML = projects.map(p => `
        <div class="timeline-item section-reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content pookie-box tilt-element">
                <div class="time-cat">${p.category}</div>
                <h4 class="card-title" style="font-size: 1.4rem; margin-bottom:5px;">${p.title}</h4>
                <p style="color: var(--text-light); font-size: 0.95rem; font-weight:700;">${p.description}</p>
            </div>
        </div>
    `).join('');
}

// ✨ Render Skills
function renderSkills() {
    const container = document.getElementById("skills-cloud");
    container.innerHTML = skills.map((s, i) => `<div class="skill-item tilt-element" style="animation-delay: ${i * -0.5}s">${s}</div>`).join('');
}

// 🔎 Search Functionality
function setupSearch() {
    document.getElementById("project-search").addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        document.querySelector('.filter-btn[data-filter="All"]').classList.add("active");
        
        const filtered = projects.filter(p => 
            p.title.toLowerCase().includes(term) || 
            p.category.toLowerCase().includes(term) ||
            p.technologies.some(t => t.toLowerCase().includes(term))
        );
        renderProjects(filtered);
    });
}

// 💻 3D Parallax for Hero (Subtle and Smooth)
function setupHeroParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    const scene = document.getElementById('parallax-scene');
    const aboutScene = document.getElementById('about-parallax');
    
    document.addEventListener('mousemove', (e) => {
        // Very subtle division to prevent aggressive jumping
        const x = (window.innerWidth / 2 - e.pageX) / 60; 
        const y = (window.innerHeight / 2 - e.pageY) / 60;
        
        if(scene) scene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        if(aboutScene) aboutScene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// 🎀 3D Tilt for Cards (Smoothed with CSS transition)
function setup3DTilt() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Use event delegation or re-bind carefully
    document.querySelectorAll('.tilt-element').forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card); 
        
        newCard.addEventListener('mousemove', e => {
            const rect = newCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Reduced angle for softer tilt
            const rotateX = ((y - centerY) / centerY) * -6; 
            const rotateY = ((x - centerX) / centerX) * 6;
            
            // The CSS 'transition: transform' handles the smoothing automatically
            newCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        });
        
        newCard.addEventListener('mouseleave', () => {
            newCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        });
    });
}

// 🌸 Scroll Reveal (Smooth Fade In)
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section-reveal").forEach(el => observer.observe(el));
}

// 📱 Mobile Menu
function setupMobileMenu() {
    const btn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".close-menu");
    const nav = document.querySelector(".mobile-nav");
    const links = document.querySelectorAll(".mobile-link");

    btn.addEventListener("click", () => nav.classList.add("active"));
    closeBtn.addEventListener("click", () => nav.classList.remove("active"));
    links.forEach(l => l.addEventListener("click", () => nav.classList.remove("active")));
}

// 🌙 Dreamy Night Theme Toggle
function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
        btn.innerText = document.body.classList.contains("night-mode") ? "☀️" : "🌙";
    });
}

// 💌 Project Modal Logic
window.openModal = function(title) {
    const project = projects.find(p => p.title === title);
    if(!project) return;

    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content-area");
    
    content.innerHTML = `
        <div class="modal-img-wrap">
            ${getImageHtml(project)}
        </div>
        <div class="modal-cat">🎀 ${project.category}</div>
        <h2 class="modal-title 3d-text">${project.title}</h2>
        <p class="modal-desc">${project.description}</p>
        <div style="margin-bottom: 25px;">
            <strong style="font-size:1.1rem; color:var(--text-main);">💻 Technologies Used:</strong><br><br>
            <div class="tech-tags">${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        </div>
        <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            ${project.live ? `<a href="${project.live}" target="_blank" class="btn-pookie">🌐 Open Live Project</a>` : ''}
            ${project.github ? `<a href="${project.github}" target="_blank" class="btn-pookie btn-secondary">💻 View on GitHub</a>` : ''}
        </div>
    `;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent background scroll
}

document.querySelector(".modal-close").addEventListener("click", closeModal);
document.getElementById("project-modal").addEventListener("click", e => {
    if(e.target.id === "project-modal") closeModal();
});

function closeModal() {
    document.getElementById("project-modal").classList.remove("active");
    document.body.style.overflow = "auto";
}