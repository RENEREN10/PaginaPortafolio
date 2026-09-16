/* ==========================================================
   app.js — Vanilla JS (sin librerías)
   1. CONFIG: pega aquí tus URLs finales y tu WhatsApp
   2. i18n ES/EN con data-i18n
   3. IntersectionObserver: fade/blur + fondo dinámico
   ========================================================== */

"use strict";

/* ---------- 1. CONFIGURACIÓN EDITABLE ---------- */
const CONFIG = {
  whatsapp: "573224231633", // ← número real con código país Colombia
  contactEmail: "ReneMen1096@gmail.com", // ← correo real para recibir solicitudes
  projects: {
    taller:    "URL-PROYECTO-TALLER",              // ← pega tu URL final
    barberia:  "URL-PROYECTO-BARBERIA",
    gimnasio:  "URL-PROYECTO-GIMNASIO",
    ecommerce: "URL-PROYECTO-DASHBOARD-ECOMMERCE",
    gymdash:   "URL-PROYECTO-DASHBOARD-GIMNASIO",
  },
};

/* ---------- 2. DICCIONARIO ES / EN ---------- */
const TRANSLATIONS = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.cta": "Cotizar",
    "hero.badge": "Disponible para proyectos freelance",
    "hero.greeting": "Hola, soy René",
    "hero.role": "Desarrollador Web Front-end",
    "hero.desc": "Landing pages, dashboards y diseño a código. Rápido, responsive y sin plantillas.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Pedir cotización",
    "hero.cardRole": "Front-end Developer · Freelance",
    "hero.cardStatus": "● En línea",
    "hero.f1": "Landing pages ultrarrápidas y optimizadas",
    "hero.f2": "Dashboards claros para tomar decisiones",
    "hero.f3": "Diseño a código pixel-perfect",
    "hero.s1": "Proyectos demo",
    "hero.s2": "Responsive",
    "hero.s3": "Dependencias",
    "services.kicker": "Qué puedo hacer por ti",
    "services.title": "Servicios enfocados en resultados",
    "services.desc": "Sin plantillas genéricas. Cada proyecto está pensado para cargar rápido, verse profesional y ayudarte a conseguir clientes.",
    "services.c1t": "Landing Pages que venden",
    "services.c1d": "Páginas para talleres, barberías, gimnasios y negocios locales: hero potente, prueba social, beneficios, precios y botón directo a WhatsApp.",
    "services.c1l1": "Diseño 100% responsive",
    "services.c1l2": "Optimización de velocidad y SEO básico",
    "services.c1l3": "Integración con WhatsApp y mapas",
    "services.c2t": "Dashboards Administrativos",
    "services.c2d": "Paneles para e-commerce y gimnasios: ventas, inventario, miembros, asistencia y pagos en una vista clara y fácil de usar.",
    "services.c2l1": "Tablas, filtros y tarjetas de métricas",
    "services.c2l2": "Gráficos y estados visuales",
    "services.c2l3": "Interfaz pensada para no-diseñadores",
    "services.c3t": "De Diseño a Código",
    "services.c3d": "¿Ya tienes el diseño en Figma o una referencia? Lo convierto en HTML + CSS + JS limpio, semántico y sin librerías pesadas.",
    "services.c3l1": "Pixel-perfect y fiel al diseño",
    "services.c3l2": "Código limpio y fácil de mantener",
    "services.c3l3": "Animaciones suaves con CSS y JS",
    "projects.kicker": "Trabajo seleccionado",
    "projects.title": "Proyectos",
    "projects.desc": "Sigue bajando: cada proyecto ilumina la página con su propio color. Haz clic en “Ver demo” para explorar cada uno.",
    "projects.hint": "Desliza para explorar",
    "projects.demo": "Ver demo en vivo ↗",
    "p1.badge": "Landing Page",
    "p1.title": "Taller Mecánico “Auto fix”",
    "p1.desc": "Diseñada para convertir usuarios con urgencias mecánicas en clientes en la rampa de servicio. Estructura de alta conversión con jerarquía clara de precios, llamadas a la acción inmediatas y agendamiento directo sin fricción.",
    "p1.f1": "✔ Agenda de citas por WhatsApp",
    "p1.f2": "✔ Servicios, precios y mapa del taller",
    "p1.f3": "✔ Diseño rudo y de alto contraste",
    "p2.badge": "Landing Page",
    "p2.title": "Barbería “DAPPER”",
    "p2.desc": "Una experiencia visual de lujo orientada a posicionar la marca en el segmento premium. Layout de alto impacto que resalta el trabajo del equipo, agiliza la reserva de turnos y transmite exclusividad desde el primer segundo..",
    "p2.f1": "✔ Reserva rápida por WhatsApp",
    "p2.f2": "✔ Galería y lista de precios",
    "p2.f3": "✔ Estética premium dorado / negro",
    "p3.badge": "Landing Page",
    "p3.title": "Gimnasio “BOGOFITNESS”",
    "p3.desc": "Landing energética para captar inscripciones: planes mensuales, horarios de clases, entrenadores y primera clase gratis como gancho.",
    "p3.f1": "✔ Planes y prueba gratis destacada",
    "p3.f2": "✔ Horarios y coaches con fotos",
    "p3.f3": "✔ Animaciones de scroll motivadoras",
    "p4.badge": "Dashboard Admin",
    "p4.title": "Dashboard E-commerce",
    "p4.desc": "Panel administrativo para una tienda en línea: ventas del mes, pedidos recientes, stock bajo y productos top en tarjetas de métricas claras.",
    "p4.f1": "✔ Métricas: ventas, pedidos y ticket medio",
    "p4.f2": "✔ Tabla de pedidos con estados",
    "p4.f3": "✔ Alertas de inventario bajo",
    "p5.badge": "Dashboard Admin",
    "p5.title": "Dashboard Gimnasio",
    "p5.desc": "Panel para dueños de gimnasio: miembros activos, membresías por vencer, asistencia del día y pagos pendientes, todo en una sola pantalla.",
    "p5.f1": "✔ Control de miembros y membresías",
    "p5.f2": "✔ Asistencia diaria y clases",
    "p5.f3": "✔ Pagos pendientes bien visibles",
    "contact.kicker": "Contacto",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.desc": "Cuéntame qué necesitas: una landing para tu negocio, un panel administrable o pasar tu diseño a código. Te respondo en menos de 24 horas.",
    "contact.l1": "Respuesta rápida por WhatsApp o correo",
    "contact.l2": "Cotización clara, sin letras pequeñas",
    "contact.l3": "Entrega responsive y optimizada",
    "contact.emailLabel": "Tu correo electrónico",
    "contact.msgLabel": "Cuéntame tu solicitud",
    "contact.msgPh": "Ej: Necesito una landing para mi barbería con reservas por WhatsApp…",
    "contact.send": "Enviar solicitud ✉",
    "contact.hint": "Al enviar aceptas ser contactado sobre tu solicitud. Nada de spam.",
    "contact.ok": "✓ ¡Gracias! Tu solicitud fue registrada. Te contactaré muy pronto.",
    "contact.sending": "Enviando…",
    "contact.errSend": "✕ No se pudo enviar. Intenta de nuevo o escríbeme por WhatsApp.",
    "contact.errMail": "✕ Escribe un correo válido para poder responderte.",
    "contact.errMsg": "✕ Cuéntame un poco más sobre tu proyecto (mínimo 10 caracteres).",
    "footer.rights": "Todos los derechos reservados.",
    "footer.made": "Hecho con HTML + CSS + JS vainilla. Sin frameworks.",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Get a quote",
    "hero.badge": "Available for freelance projects",
    "hero.greeting": "Hi, I'm René —",
    "hero.role": "Front-end Web Developer",
    "hero.desc": "Landing pages, dashboards and design-to-code. Fast, responsive, no templates.",
    "hero.cta1": "View projects",
    "hero.cta2": "Request a quote",
    "hero.cardRole": "Front-end Developer · Freelance",
    "hero.cardStatus": "● Online",
    "hero.f1": "Ultra-fast, optimized landing pages",
    "hero.f2": "Clear dashboards for better decisions",
    "hero.f3": "Pixel-perfect design to code",
    "hero.s1": "Demo projects",
    "hero.s2": "Responsive",
    "hero.s3": "Dependencies",
    "services.kicker": "What I can do for you",
    "services.title": "Services focused on results",
    "services.desc": "No generic templates. Every project is built to load fast, look professional, and help you win clients.",
    "services.c1t": "Landing Pages that sell",
    "services.c1d": "Pages for auto shops, barbershops, gyms and local businesses: strong hero, social proof, benefits, pricing and a direct WhatsApp button.",
    "services.c1l1": "100% responsive design",
    "services.c1l2": "Speed optimization & basic SEO",
    "services.c1l3": "WhatsApp & maps integration",
    "services.c2t": "Admin Dashboards",
    "services.c2d": "Panels for e-commerce and gyms: sales, inventory, members, attendance and payments in one clear, easy view.",
    "services.c2l1": "Tables, filters & metric cards",
    "services.c2l2": "Charts and visual statuses",
    "services.c2l3": "UI designed for non-designers",
    "services.c3t": "From Design to Code",
    "services.c3d": "Already have a Figma design or reference? I turn it into clean, semantic HTML + CSS + JS with no heavy libraries.",
    "services.c3l1": "Pixel-perfect, faithful to design",
    "services.c3l2": "Clean, maintainable code",
    "services.c3l3": "Smooth CSS & JS animations",
    "projects.kicker": "Selected work",
    "projects.title": "Projects",
    "projects.desc": "Keep scrolling: each project lights the page with its own color. Click “View live demo” to explore each one.",
    "projects.hint": "Scroll to explore",
    "projects.demo": "View live demo ↗",
    "p1.badge": "Landing Page",
    "p1.title": "Auto Shop “Auto Fix”",
    "p1.desc": "Landing page to book maintenance and repair appointments. Urgent hero, service list with base pricing, testimonials and a floating WhatsApp button.",
    "p1.f1": "✔ Appointment booking via WhatsApp",
    "p1.f2": "✔ Services, pricing & shop map",
    "p1.f3": "✔ Bold, high-contrast design",
    "p2.badge": "Landing Page",
    "p2.title": "“DAPPER” Barbershop",
    "p2.desc": "Elegant gold-toned landing for cuts & beard bookings. Work gallery, price list, barbers and one-click booking.",
    "p2.f1": "✔ Quick booking via WhatsApp",
    "p2.f2": "✔ Gallery & price list",
    "p2.f3": "✔ Premium gold / black aesthetic",
    "p3.badge": "Landing Page",
    "p3.title": "“BOGOFITNESS” Gym",
    "p3.desc": "High-energy landing to win signups: monthly plans, class schedule, trainers and a free first class as the hook.",
    "p3.f1": "✔ Featured plans & free trial",
    "p3.f2": "✔ Schedules & coaches with photos",
    "p3.f3": "✔ Motivating scroll animations",
    "p4.badge": "Admin Dashboard",
    "p4.title": "E-commerce Dashboard",
    "p4.desc": "Admin panel for an online store: monthly sales, recent orders, low stock and top products in clear metric cards.",
    "p4.f1": "✔ Metrics: sales, orders & avg. ticket",
    "p4.f2": "✔ Orders table with statuses",
    "p4.f3": "✔ Low-inventory alerts",
    "p5.badge": "Admin Dashboard",
    "p5.title": "Gym Dashboard",
    "p5.desc": "Panel for gym owners: active members, expiring memberships, daily attendance and pending payments — all on one screen.",
    "p5.f1": "✔ Members & membership control",
    "p5.f2": "✔ Daily attendance & classes",
    "p5.f3": "✔ Clearly visible pending payments",
    "contact.kicker": "Contact",
    "contact.title": "Have a project in mind?",
    "contact.desc": "Tell me what you need: a landing for your business, a manageable admin panel, or turning your design into code. I reply within 24 hours.",
    "contact.l1": "Fast reply via WhatsApp or email",
    "contact.l2": "Clear quote, no fine print",
    "contact.l3": "Responsive, optimized delivery",
    "contact.emailLabel": "Your email address",
    "contact.msgLabel": "Tell me about your request",
    "contact.msgPh": "E.g.: I need a landing for my barbershop with WhatsApp booking…",
    "contact.send": "Send request ✉",
    "contact.hint": "By sending you agree to be contacted about your request. No spam.",
    "contact.ok": "✓ Thanks! Your request was received. I'll get back to you very soon.",
    "contact.sending": "Sending…",
    "contact.errSend": "✕ Could not send. Try again or message me on WhatsApp.",
    "contact.errMail": "✕ Please enter a valid email so I can reply.",
    "contact.errMsg": "✕ Tell me a bit more about your project (min. 10 characters).",
    "footer.rights": "All rights reserved.",
    "footer.made": "Built with vanilla HTML + CSS + JS. No frameworks.",
  },
};

let currentLang = localStorage.getItem("portfolio-lang") || "es";

function setLang(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : "es";
  localStorage.setItem("portfolio-lang", currentLang);
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[currentLang][key]) el.textContent = TRANSLATIONS[currentLang][key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (TRANSLATIONS[currentLang][key]) el.placeholder = TRANSLATIONS[currentLang][key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
}

/* ---------- 3. APLICAR CONFIG (URLs + WhatsApp) ---------- */
function applyConfig() {
  document.querySelectorAll("[data-project]").forEach((a) => {
    const key = a.dataset.project;
    const url = CONFIG.projects[key];
    // Solo reemplaza si pusiste una URL real (que empiece con http)
    if (url && /^https?:\/\//.test(url)) a.href = url;
  });

  const wa = document.querySelector(".whatsapp-float");
  if (wa && CONFIG.whatsapp && /^\d+$/.test(CONFIG.whatsapp)) {
    const rawText =
      currentLang === "en"
        ? "👋 Hello René 😊, I want a quote for my web project 💻✨"
        : "👋 Hola René 😊, quiero una cotización para mi proyecto web 💻✨";
    const text = encodeURIComponent(rawText);
    wa.href = `https://wa.me/${CONFIG.whatsapp}?text=${text}`;
  }
}

/* ---------- 4. SCROLL-STORYTELLING con IntersectionObserver ---------- */
function initScrollAnimations() {
  // 4a. Fade-in / fade-out + blur para .reveal
  // Al salir del viewport se quita .visible → se difumina de nuevo.
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // 4b. Cambio dinámico del fondo según el proyecto visible
  const title = document.getElementById("projectsTitle");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.dataset.theme = entry.target.dataset.theme || "base";
          // El título "Proyectos" se desvanece al entrar al primer proyecto
          if (title) title.classList.add("faded");
        }
      });
    },
    { threshold: 0.35 }
  );
  document.querySelectorAll(".project-card").forEach((card) => projectObserver.observe(card));

  // 4c. Cuando NO hay ningún proyecto visible (hero / contacto),
  // vuelve al fondo base y restaura el título.
  const resetObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.dataset.theme = "base";
          if (title) title.classList.remove("faded");
        }
      });
    },
    { threshold: 0.3 }
  );
  [".hero", "#servicios", "#contacto"].forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) resetObserver.observe(el);
  });
}

/* ---------- 5. Spotlight: onda de luz anclada al cursor ---------- */
function initSpotlight() {
  // Sin mouse (táctil) o movimiento reducido: se usa el halo fijo del CSS.
  if (
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  const root = document.documentElement;
  let tx = window.innerWidth / 2; // objetivo (mouse real)
  let ty = window.innerHeight * 0.28;
  let cx = tx; // posición actual (con estela)
  let cy = ty;
  let raf = null;

  const render = () => {
    // Interpolación: la luz persigue al cursor con una estela suave ("onda").
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    root.style.setProperty("--mx", `${cx.toFixed(1)}px`);
    root.style.setProperty("--my", `${cy.toFixed(1)}px`);
    if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
      raf = requestAnimationFrame(render);
    } else {
      raf = null;
    }
  };

  window.addEventListener(
    "mousemove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
    },
    { passive: true }
  );
}

/* ---------- 6. UI: menú móvil, año, formulario, header, Inicio ---------- */
function initUI() {
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // "Inicio" siempre sube al tope de la página, estés donde estés.
  document.querySelectorAll('a[href="#inicio"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      const links = document.getElementById("navLinks");
      if (links) links.classList.remove("open");
    });
  });
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      applyConfig(); // actualiza el mensaje de WhatsApp según idioma
    });
  });

  // Formulario → envío directo en segundo plano con FormSubmit AJAX.
  // No abre Gmail ni pestañas nuevas: solo muestra éxito / error en #formNote.
  // Requiere activación única: el primer envío manda un correo de activación a CONFIG.contactEmail.
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultBtnText = submitBtn ? submitBtn.textContent : "";
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("clientEmail").value.trim();
      const msg = document.getElementById("clientMsg").value.trim();
      const t = TRANSLATIONS[currentLang];

      note.className = "form-note";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = t["contact.errMail"];
        note.classList.add("error");
        return;
      }
      if (msg.length < 10) {
        note.textContent = t["contact.errMsg"];
        note.classList.add("error");
        return;
      }
      const subject =
        currentLang === "en"
          ? `Portfolio request - ${email}`
          : `Solicitud portafolio - ${email}`;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t["contact.sending"];
      }
      note.textContent = t["contact.sending"];

      try {
        const res = await fetch(
          `https://formsubmit.co/ajax/${CONFIG.contactEmail}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              email,
              message: msg,
              _subject: subject,
              _template: "table",
              _captcha: "false",
            }),
          }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        note.textContent = t["contact.ok"];
        note.classList.add("success");
        form.reset();
      } catch (err) {
        note.textContent = t["contact.errSend"];
        note.classList.add("error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnText;
          // Re-aplica idioma por si el texto del botón depende de data-i18n
          const key = submitBtn.getAttribute("data-i18n");
          if (key && TRANSLATIONS[currentLang][key]) {
            submitBtn.textContent = TRANSLATIONS[currentLang][key];
          }
        }
      }
    });
  }
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
  applyConfig();
  initScrollAnimations();
  initSpotlight();
  initUI();
});
