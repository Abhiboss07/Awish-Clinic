/* ==========================================================================
   AWISH CLINIC - PREMIUM CLIENT-SIDE STORYTELLING CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initHeaderScroll();
  initMobileNav();
  initCanvasParticles();
  initSplitBodyHotspots();
  initScrollParallax();
  initServiceFilters();
  initBeforeAfterSlider();
  initBookingWizard();
  initScheduleSlots();
});

/* ==========================================================================
   1. CUSTOM CURSOR FOLLOWER
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const glow = document.getElementById('customCursorGlow');
  
  if (!cursor || !glow) return;

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateGlowCursor() {
    const delay = 8; 
    glowX += (mouseX - glowX) / delay;
    glowY += (mouseY - glowY) / delay;

    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    requestAnimationFrame(animateGlowCursor);
  }
  animateGlowCursor();

  // Hover transitions on interactive layers
  function bindCursorHovers() {
    const interactives = document.querySelectorAll('a, button, .hotspot, .choice-card, .checkbox-choice-card, .schedule-slot, .close-hud-btn');
    interactives.forEach(el => {
      el.removeEventListener('mouseenter', onHoverEnter);
      el.removeEventListener('mouseleave', onHoverLeave);
      
      el.addEventListener('mouseenter', onHoverEnter);
      el.addEventListener('mouseleave', onHoverLeave);
    });
  }

  function onHoverEnter(e) {
    const isHotspot = e.currentTarget.classList.contains('hotspot');
    cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
    cursor.style.background = isHotspot ? 'rgba(255,255,255,0.9)' : 'var(--color-male)';
    glow.style.transform = 'translate(-50%, -50%) scale(1.4)';
    glow.style.borderColor = isHotspot ? '#ffffff' : 'var(--color-male)';
    glow.style.background = isHotspot ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 0, 60, 0.08)';
  }

  function onHoverLeave() {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = '#ffffff';
    glow.style.transform = 'translate(-50%, -50%) scale(1)';
    glow.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    glow.style.background = 'transparent';
  }

  bindCursorHovers();
  window.refreshCursorBinds = bindCursorHovers;
}

/* ==========================================================================
   2. HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.style.background = 'rgba(5, 5, 8, 0.88)';
      header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.06)';
    } else {
      header.classList.remove('scrolled');
      header.style.background = 'rgba(5, 5, 8, 0.4)';
      header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)';
    }
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('navMenu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

/* ==========================================================================
   3. HTML5 CANVAS CRIMSON PARTICLE SYSTEM
   ========================================================================== */
function initCanvasParticles() {
  const canvas = document.getElementById('cellularCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: null, y: null, radius: 130 };

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.size = Math.random() * 2 + 0.8;
      // Single consistent crimson red color
      this.color = 'rgba(255, 0, 60, 0.35)';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Mouse repulsion dynamics
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = dx / distance;
          let directionY = dy / distance;
          this.x -= directionX * force * 3;
          this.y -= directionY * force * 3;
        }
      }
    }
  }

  function init() {
    particles = [];
    const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < numParticles; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
  }

  function connectParticles() {
    const maxDist = 95;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          let alpha = (maxDist - dist) / maxDist * 0.18;
          // Connecting lines in glowing crimson red
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 0, 60, ${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  init();
  animate();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    init();
    animate();
  });
}

/* ==========================================================================
   4. INTERACTIVE STORYTELLING CLINICAL DATA & HOTSPOT LOGIC
   ========================================================================== */
const HUD_ANATOMY_DATA = {
  male: {
    'hair-head': {
      title: "Hair & Scalp",
      concerns: ["Male Alopecia", "Hair Thinning", "Severe Dandruff", "Follicle Dormancy"],
      treatments: ["PRP Hair Therapy", "FUE Hair Transplant", "Low-Level Laser Therapy"],
      therapy: "Highly reactive autologous growth factor infusion paired with advanced micro-channeling to revive hair stem cells natively.",
      category: "male",
      concernIdx: 0
    },
    'face-skin': {
      title: "Facial Complexion",
      concerns: ["Cystic Acne", "Dermal Congestion", "Acne Scars", "Early Wrinkles"],
      treatments: ["Q-Switched Carbon Laser", "Bespoke Dermal Peel", "LED Photo Therapy"],
      therapy: "Photo-acoustic laser treatment targeting melanin and pore refinement, combined with localized cellular resurfacing exfoliation.",
      category: "male",
      concernIdx: 2
    },
    'chest-shoulder': {
      title: "Chest & Shoulders",
      concerns: ["Localized adiposity", "Epidermal dryness", "Deep muscle pain", "Shoulder tension"],
      treatments: ["Body Contouring", "LED Photo-Resurfacing", "EMS Dermal Stimulation"],
      therapy: "High-intensity therapeutic electromagnetic therapy targeting muscle recovery and localized structural fat decomposition.",
      category: "male",
      concernIdx: 6
    },
    'stomach-waist': {
      title: "Metabolic Waistline",
      concerns: ["Stubborn belly fat", "Metabolic weight gain", "Visceral adiposity", "Digestive slowdown"],
      treatments: ["Belly Cryo-Sculpt", "Personalized Diet Program", "Fat Lipolysis Care"],
      therapy: "Medical cryolipolysis cooling lipids to -11°C, inducing selective fat cell apoptosis without harming tissue systems.",
      category: "male",
      concernIdx: 4
    },
    'arms-joints': {
      title: "Arms & Joints",
      concerns: ["Elbow joint stiffness", "Tendinitis / Strain", "Bicep dermal dryness", "Lack of definition"],
      treatments: ["Joint Wellness Plan", "Muscle EMS Toning", "Clinical Hydrolock"],
      therapy: "High-frequency electromagnetic muscle stimulation to boost tone, combined with deep joint ultrasound pain relief.",
      category: "male",
      concernIdx: 6
    },
    'legs-feet': {
      title: "Lower Extremities",
      concerns: ["Varicose veins", "Joint stiffness", "Dermal scaling", "Limb heaviness"],
      treatments: ["Vascular Vein laser", "Hydrating Dermal Infusion", "Wellness Joint Plans"],
      therapy: "Bespoke vascular photo-coagulation restoring venous flow, aligned with clinical transdermal hydration lock-in.",
      category: "male",
      concernIdx: 6
    }
  },
  female: {
    'hair-head': {
      title: "Hair & Crown Density",
      concerns: ["Hair Thinning & Fall", "Dry Scalp Scaling", "Follicular Alopecia", "Shaft Fragility"],
      treatments: ["Bespoke Density PRP", "Stem Cell Infusion", "Laser Dermal Nourish"],
      therapy: "Infusion of purified cellular exosome growth factors to reboot metabolic activity in dormant crown follicles.",
      category: "female",
      concernIdx: 0
    },
    'face-skin': {
      title: "Facial Dermis",
      concerns: ["Hormonal Acne", "Hyperpigmentation", "Dark Circles Under Eyes", "Wrinkles & Dullness"],
      treatments: ["24K Microneedling", "Hydra Facial Glow", "Glutathione Peels"],
      therapy: "Bespoke gold-plated micro-channeling injecting high-concentration hyaluronic acid and pure medical antioxidants.",
      category: "female",
      concernIdx: 2
    },
    'chest-shoulder': {
      title: "Neck & Shoulders",
      concerns: ["Postural stress", "Upper back tension", "Skin dryness", "Shoulder dullness"],
      treatments: ["Therapeutic Dermal Massage", "LED Light Healing", "Deep Dermal Hydraderm"],
      therapy: "Photodynamic red-light cellular healing paired with luxurious clinical essential oils to release heavy spinal tension.",
      category: "female",
      concernIdx: 6
    },
    'stomach-waist': {
      title: "Endocrine Core",
      concerns: ["Belly Fat Accumulation", "PCOS Weight Gain", "Hormonal Bloating", "Metabolic slowing"],
      treatments: ["Cryo-Lipo Fat Freeze", "Hormone Alignment Plan", "Bespoke Diet Synergy"],
      therapy: "Bespoke clinical weight resolution uniting cryolipolysis fat freezing with clinical endocrinology metabolic programs.",
      category: "female",
      concernIdx: 4
    },
    'arms-joints': {
      title: "Arms & Elasticity",
      concerns: ["Upper arm skin laxity", "Cellulite texture", "Elbow skin hyperpigmentation", "Joint fatigue"],
      treatments: ["RF Skin Tightening", "Carbon Peel Hydration", "Clinical Wellness massage"],
      therapy: "Medical-grade Radio Frequency (RF) skin tightening to boost dermal collagen and reverse arm skin laxity.",
      category: "female",
      concernIdx: 6
    },
    'legs-feet': {
      title: "Lower Mobility & Dermis",
      concerns: ["Joint inflammation", "Varicose spider veins", "Epidermal Scaling", "Ankle swelling"],
      treatments: ["Clinical Hydraderm", "Vascular spider-laser", "Wellness joint programs"],
      therapy: "Bespoke non-invasive vascular spider laser therapy combined with high-urea epidermal moisture locking.",
      category: "female",
      concernIdx: 6
    }
  }
};

function initSplitBodyHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');
  const svg = document.getElementById('heroSvgLines');
  const wrapper = document.getElementById('bodyImageWrapper');

  if (!hotspots.length || !svg || !wrapper) return;

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', (e) => {
      hotspots.forEach(h => h.classList.remove('active'));
      hotspot.classList.add('active');

      const side = hotspot.getAttribute('data-side');
      const part = hotspot.getAttribute('data-part');
      const data = HUD_ANATOMY_DATA[side][part];

      if (!data) return;

      const hudPanel = document.getElementById(`${side}HudPanel`);
      const opposingSide = side === 'male' ? 'female' : 'male';
      const opposingHud = document.getElementById(`${opposingSide}HudPanel`);
      
      if (opposingHud) opposingHud.classList.remove('active');

      // Populate elements
      document.getElementById(`${side}PartTitle`).textContent = data.title;
      document.getElementById(`${side}TherapyDesc`).textContent = data.therapy;

      const concernsContainer = document.getElementById(`${side}ConcernsList`);
      concernsContainer.innerHTML = '';
      data.concerns.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        concernsContainer.appendChild(li);
      });

      const treatmentsContainer = document.getElementById(`${side}TreatmentsList`);
      treatmentsContainer.innerHTML = '';
      data.treatments.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        treatmentsContainer.appendChild(li);
      });

      const cta = document.getElementById(`${side}HudCTA`);
      cta.onclick = (event) => {
        event.preventDefault();
        triggerBookingPrefill(data.category, data.concernIdx);
      };

      hudPanel.classList.add('active');
      drawDynamicConnectorLine(hotspot, hudPanel, wrapper, svg, side);
      
      if (window.refreshCursorBinds) window.refreshCursorBinds();
    });
  });

  window.addEventListener('resize', () => {
    svg.innerHTML = '';
    hotspots.forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.floating-hud-panel').forEach(p => p.classList.remove('active'));
  });
}

window.closeHUD = function(side) {
  const panel = document.getElementById(`${side}HudPanel`);
  const svg = document.getElementById('heroSvgLines');
  const hotspots = document.querySelectorAll('.hotspot');
  
  if (panel) panel.classList.remove('active');
  if (svg) svg.innerHTML = '';
  hotspots.forEach(h => h.classList.remove('active'));
};

function drawDynamicConnectorLine(hotspot, hudPanel, wrapper, svg, side) {
  svg.innerHTML = '';

  const dot = hotspot.querySelector('.hotspot-dot');
  if (!dot) return;

  const wrapperRect = wrapper.getBoundingClientRect();
  const dotRect = dot.getBoundingClientRect();
  const hudRect = hudPanel.getBoundingClientRect();

  const x1 = dotRect.left + (dotRect.width / 2) - wrapperRect.left;
  const y1 = dotRect.top + (dotRect.height / 2) - wrapperRect.top;

  let x2;
  if (side === 'male') {
    x2 = hudRect.right - wrapperRect.left;
  } else {
    x2 = hudRect.left - wrapperRect.left;
  }
  const y2 = hudRect.top + (hudRect.height / 2.5) - wrapperRect.top;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const dx = Math.abs(x2 - x1) * 0.6;
  const controlX1 = side === 'male' ? x1 - dx : x1 + dx;
  const controlX2 = side === 'male' ? x2 + dx : x2 - dx;

  const pathData = `M ${x1} ${y1} C ${controlX1} ${y1}, ${controlX2} ${y2}, ${x2} ${y2}`;

  path.setAttribute('d', pathData);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', '#ff003c'); // Unified Glowing Crimson Connector
  path.setAttribute('stroke-width', '1.5');
  path.classList.add('hotspot-line');

  svg.appendChild(path);
}

/* ==========================================================================
   5. CINEMATIC SINGLE-LOOP SCROLL PARALLAX & 3D ROTATION ENGINE
   ========================================================================== */
function initScrollParallax() {
  const section = document.getElementById('hero');
  const sticky = document.querySelector('.storytelling-sticky');
  const splitBodyImg = document.getElementById('splitBodyImg');
  const brandHud = document.getElementById('brandHudWrapper');
  const philosophyHud = document.getElementById('philosophyHudWrapper');
  const leftOrb = document.getElementById('leftGlowOrb');
  const rightOrb = document.getElementById('rightGlowOrb');

  if (!section || !splitBodyImg || !brandHud || !philosophyHud) return;

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  // 3D Hover-Parallax mouse listener
  sticky.addEventListener('mousemove', (e) => {
    const rect = sticky.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    targetX = x * 18;  // Eased Y-rotation range
    targetY = y * -12; // Eased X-rotation range
  });

  sticky.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function updateVisualizerFrame() {
    // 1. Calculate scroll progress relative to storytelling scroller
    const rect = section.getBoundingClientRect();
    const totalDist = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / totalDist));

    // 2. Interpolate variables driven by scroll progress
    // Spans head down to chest/stomach on hero, slides up to legs/feet on scroll!
    const slideY = progress * -24; // Slide up by up to -24vh to reveal legs
    const scrollScale = 1.4 + progress * 0.08; // Increased base scale to 1.4 to zoom the models and make them bigger
    const scrollRot = progress * 15;

    // Smooth hover easing interpolation
    mouseX += (targetX - mouseX) * 0.1;
    mouseY += (targetY - mouseY) * 0.1;

    // Apply hardware-accelerated 3D transforms to the entire wrapper so hotspots and lines move in perfect unison
    const wrapper = document.getElementById('bodyImageWrapper');
    if (wrapper) {
      wrapper.style.transform = `translate3d(0, ${slideY}vh, 0) rotateY(${scrollRot + mouseX}deg) rotateX(${mouseY}deg) scale(${scrollScale})`;
    }
    
    // Scale body glow intensity dynamically on scroll!
    const glowRadius = 40 + progress * 35;
    const glowAlpha = 0.15 + progress * 0.2;
    splitBodyImg.style.filter = `drop-shadow(0 0 ${glowRadius}px rgba(255, 0, 60, ${glowAlpha}))`;

    // Drift ambient light gradients on scroll
    if (leftOrb && rightOrb) {
      leftOrb.style.transform = `translate3d(${progress * -70}px, ${progress * -40}px, 0)`;
      rightOrb.style.transform = `translate3d(${progress * 70}px, ${progress * -40}px, 0)`;
    }

    // 3. Orchestrate Screen Transitions
    // Screen 1: Brand HUD fades out
    const brandOpacity = Math.max(0, 1 - progress * 2.5);
    brandHud.style.opacity = brandOpacity;
    brandHud.style.visibility = brandOpacity > 0 ? 'visible' : 'hidden';
    brandHud.style.transform = `translate3d(0, ${progress * -45}px, 0)`;

    // Screen 2: Philosophy HUD fades in
    let philOpacity = 0;
    if (progress > 0.2) {
      philOpacity = Math.min(1, (progress - 0.2) * 2.5);
    }
    philosophyHud.style.opacity = philOpacity;
    philosophyHud.style.visibility = philOpacity > 0 ? 'visible' : 'hidden';
    philosophyHud.style.transform = `translate3d(0, ${(1 - philOpacity) * 45}px, 0)`;

    requestAnimationFrame(updateVisualizerFrame);
  }
  
  updateVisualizerFrame();
}

/* ==========================================================================
   6. CTA ACTION PRE-FILL BOOKING INTEGRATION
   ========================================================================== */
function triggerBookingPrefill(category, concernIdx) {
  const bookingSec = document.getElementById('booking');
  if (!bookingSec) return;

  bookingSec.scrollIntoView({ behavior: 'smooth' });

  const radio = document.querySelector(`input[name="category"][value="${category}"]`);
  if (radio) {
    radio.checked = true;
    populateConcerns(category);
  }

  setTimeout(() => {
    const checkboxes = document.querySelectorAll('input[name="concerns"]');
    if (checkboxes.length > concernIdx) {
      checkboxes[concernIdx].checked = true;
      checkboxes[concernIdx].parentElement.classList.add('checked');
    }
  }, 100);

  updateWizardView(2);
}

/* ==========================================================================
   7. SERVICES / TREATMENTS GRID FILTER
   ========================================================================== */
function initServiceFilters() {
  const tabsContainer = document.getElementById('serviceTabs');
  const grid = document.getElementById('servicesGrid');

  if (!tabsContainer || !grid) return;

  const tabBtns = tabsContainer.querySelectorAll('.tab-btn');
  const cards = grid.querySelectorAll('.service-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   8. BEFORE & AFTER IMAGE SLIDER (INTERACTIVE CRITICAL ELEMENT)
   ========================================================================== */
function initBeforeAfterSlider() {
  const slider = document.getElementById('beforeAfterSlider');
  const beforeContainer = document.getElementById('beforeImgContainer');
  const handle = document.getElementById('sliderHandle');
  const beforeLabel = slider ? slider.querySelector('.before-label') : null;
  const afterLabel = slider ? slider.querySelector('.after-label') : null;

  if (!slider || !beforeContainer || !handle) return;

  let isDragging = false;
  let targetPercentage = 50;
  let currentPercentage = 50;

  function updateSliderPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    const constrainedX = Math.max(0, Math.min(rect.width, x));
    targetPercentage = (constrainedX / rect.width) * 100;
  }

  function drawSliderInertia() {
    currentPercentage += (targetPercentage - currentPercentage) * 0.15;
    
    beforeContainer.style.width = currentPercentage + '%';
    handle.style.left = currentPercentage + '%';

    if (beforeLabel && afterLabel) {
      beforeLabel.style.opacity = currentPercentage < 15 ? '0' : '1';
      afterLabel.style.opacity = currentPercentage > 85 ? '0' : '1';
    }

    requestAnimationFrame(drawSliderInertia);
  }
  drawSliderInertia();

  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  handle.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  });

  slider.addEventListener('click', (e) => {
    if (e.target === handle || handle.contains(e.target)) return;
    updateSliderPosition(e.clientX);
  });
}

/* ==========================================================================
   9. DR Anya's WEEKLY BOOKING PREVIEWS
   ========================================================================== */
function initScheduleSlots() {
  const slots = document.querySelectorAll('.schedule-slot.active');
  const bookingSec = document.getElementById('booking');
  const dateInput = document.getElementById('bookingDate');

  if (!slots.length) return;

  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      const day = slot.getAttribute('data-day');
      
      const today = new Date();
      let dayOffset = 1; 
      if (day === 'Wed') dayOffset = 3;
      if (day === 'Thu') dayOffset = 4;
      
      const targetDate = new Date();
      targetDate.setDate(today.getDate() + (dayOffset - today.getDay() + 7) % 7);
      
      if (dateInput) {
        dateInput.value = targetDate.toISOString().split('T')[0];
      }

      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        updateWizardView(3);
      }, 300);
    });
  });
}

/* ==========================================================================
   10. CONVERSION-OPTIMIZED BOOKING WIZARD
   ========================================================================== */
const CONCERNS_MAP = {
  male: [
    'Hair Thinning / Hair Loss',
    'Patchy Beard Stimulation',
    'Male Cystic Acne & Breakouts',
    'Dull / Congested Skin',
    'Stubborn Belly Fat Reduction',
    'Stress, Fatigue & Brain Fog',
    'General Physical Rebalance'
  ],
  female: [
    'Severe Hair Fall / Thinning',
    'Hormonal Acne Breakouts',
    'Skin Glow / Hyperpigmentation',
    'Dark Circles Under Eyes',
    'PCOS Related Skin & Metabolic Issues',
    'Belly Fat & Weight Management',
    'Hormonal Balance & Wellness'
  ],
  skincare: [
    'Q-Switched Carbon Laser Facial',
    'Bespoke Salicylic Dermal Peeling',
    '24K Gold Micro-Needling Resurfacing',
    'LED Photo Therapy Cleansing',
    'Deep Hydradermabrasion Nourishment'
  ]
};

let currentStep = 1;

window.nextStep = function(step) {
  const categorySelected = document.querySelector('input[name="category"]:checked');
  
  if (step === 2) {
    if (!categorySelected) {
      alert('Please select a treatment category to continue.');
      return;
    }
    populateConcerns(categorySelected.value);
  }

  if (step === 3) {
    const checkedConcerns = document.querySelectorAll('input[name="concerns"]:checked');
    if (checkedConcerns.length === 0) {
      alert('Please select at least one concern area.');
      return;
    }
  }

  if (step === 4) {
    const dateInput = document.getElementById('bookingDate').value;
    const timeSelected = document.querySelector('input[name="timeSlot"]:checked');
    if (!dateInput || !timeSelected) {
      alert('Please specify your preferred date and consultation hour.');
      return;
    }
  }

  updateWizardView(step);
};

window.prevStep = function(step) {
  updateWizardView(step);
};

function populateConcerns(category) {
  const container = document.getElementById('concernList');
  if (!container) return;

  container.innerHTML = '';
  const concerns = CONCERNS_MAP[category] || [];

  concerns.forEach((concern, index) => {
    const card = document.createElement('label');
    card.className = 'checkbox-choice-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'concerns';
    checkbox.value = concern;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        card.classList.add('checked');
      } else {
        card.classList.remove('checked');
      }
    });

    const span = document.createElement('span');
    span.textContent = concern;

    card.appendChild(checkbox);
    card.appendChild(span);
    container.appendChild(card);
  });

  if (window.refreshCursorBinds) window.refreshCursorBinds();
}

function updateWizardView(step) {
  currentStep = step;
  
  const indicators = document.querySelectorAll('.step-indicator');
  indicators.forEach(ind => {
    const indStep = parseInt(ind.getAttribute('data-step'));
    if (indStep <= step) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });

  const formSteps = document.querySelectorAll('.wizard-step');
  formSteps.forEach(stepBlock => {
    const blockStep = parseInt(stepBlock.getAttribute('data-step'));
    if (blockStep === step) {
      stepBlock.classList.add('active');
    } else {
      stepBlock.classList.remove('active');
    }
  });
}

function initBookingWizard() {
  const form = document.getElementById('bookingForm');
  const toast = document.getElementById('bookingToast');

  if (!form || !toast) return;

  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  const categoryRadios = document.querySelectorAll('input[name="category"]');
  categoryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.choice-card').forEach(c => c.classList.remove('checked'));
      radio.parentElement.classList.add('checked');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBookingBtn');
    submitBtn.textContent = 'Scheduling clinical diagnostic...';
    submitBtn.disabled = true;

    setTimeout(() => {
      toast.classList.add('show');

      form.reset();
      document.querySelectorAll('.choice-card').forEach(c => c.classList.remove('checked'));
      updateWizardView(1);
      
      submitBtn.textContent = 'Book Consultation Now';
      submitBtn.disabled = false;

      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);

    }, 1600);
  });
}
