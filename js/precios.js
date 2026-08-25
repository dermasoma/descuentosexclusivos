"use strict";

/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */
const WHATSAPP_NUMBER = "5113727273";

/* =========================================================
   CATÁLOGO DE TRATAMIENTOS
   Sin precios visibles.
========================================================= */
const priceTreatments = [
  {
    "name": "Toxina Botulínica",
    "image": "images/tratamientos/toxina-botulinica.png",
    "category": "Toxina Botulínica",
    "discount": "15%",
    "description": "Suaviza líneas de expresión dinámicas y ayuda a conservar una apariencia descansada y natural.",
  },
  {
    "name": "Ácido Hialurónico",
    "image": "images/tratamientos/acido-hialuronico.png",
    "category": "Ácido Hialurónico",
    "discount": "15%",
    "description": "Armonización facial para mejorar soporte, hidratación, contornos y proporción en zonas seleccionadas.",
  },
  {
    "name": "Bioestimulación de Colágeno",
    "image": "images/tratamientos/bioestimulacion-colageno.png",
    "category": "Bioestimulación",
    "discount": "15%",
    "description": "Protocolo progresivo para mejorar firmeza, calidad de piel y soporte mediante estimulación de colágeno.",
  },
  {
    "name": "Enzimas Recombinantes",
    "image": "images/tratamientos/enzimas-recombinantes.png",
    "category": "Rejuvenecimiento",
    "discount": "15%",
    "description": "Tratamiento orientado a grasa localizada, calidad de piel, drenaje y soporte del colágeno.",
  },
  {
    "name": "Fibroblastos",
    "image": "images/tratamientos/fibroblastos.png",
    "category": "Rejuvenecimiento",
    "discount": "15%",
    "description": "Protocolo basado en fibroblastos propios para apoyar la producción de colágeno y elastina.",
  },
  {
    "name": "Pink Glow",
    "image": "images/tratamientos/pink-glow.png",
    "category": "Rejuvenecimiento",
    "discount": "15%",
    "description": "Cóctel de nutrientes orientado a hidratación, luminosidad y mejora global de la calidad de la piel.",
  },
  {
    "name": "Hidratación con Ácido Hialurónico",
    "image": "images/tratamientos/hidratacion-con-acido-hialuronico.png",
    "category": "Ácido Hialurónico",
    "discount": "15%",
    "description": "Microinyecciones de ácido hialurónico para una hidratación profunda y efecto revitalizante.",
  },
  {
    "name": "Hiperhidrosis Axilar",
    "image": "images/tratamientos/hiperhidrosis-axilar.png",
    "category": "Toxina Botulínica",
    "discount": "15%",
    "description": "Tratamiento con toxina botulínica para ayudar a reducir la sudoración excesiva en las axilas.",
  },
  {
    "name": "Bruxismo",
    "image": "images/tratamientos/bruxismo.png",
    "category": "Toxina Botulínica",
    "discount": "15%",
    "description": "Aplicación médica de toxina botulínica orientada a disminuir la tensión muscular relacionada con el bruxismo.",
  },
  {
    "name": "Nefertiti Lift",
    "image": "images/tratamientos/nefertitis.png",
    "category": "Toxina Botulínica",
    "discount": "15%",
    "description": "Tratamiento con toxina botulínica para suavizar la tracción del platisma y definir visualmente el contorno mandibular.",
  }
];

const priceGrid = document.querySelector("#price-grid");
const filterContainer = document.querySelector("#price-filters");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");
const siteHeader = document.querySelector(".site-header");

const createWhatsAppUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const renderPriceCards = () => {
  if (!priceGrid) return;

  priceGrid.innerHTML = priceTreatments.map((treatment) => {
    const discount = treatment.discount
      ? `<span class="discount-badge">${treatment.discount}</span>`
      : "";


    const message = `Hola, deseo solicitar información sobre ${treatment.name}. ¿Podrían brindarme más información y ayudarme a agendar una cita?`;

    return `
      <article class="price-card" data-category="${treatment.category}">
        <div class="price-card-image">
          <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
          <span class="price-badge">${treatment.category}</span>
          ${discount}
        </div>

        <div class="price-card-body">
          <h3>${treatment.name}</h3>
          <p class="price-card-description">${treatment.description}</p>

          <a
            class="button price-card-action"
            href="${createWhatsAppUrl(message)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar información sobre ${treatment.name}"
          >
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            + Información
          </a>
        </div>
      </article>
    `;
  }).join("");
};

const filterCards = (category) => {
  document.querySelectorAll(".price-card").forEach((card) => {
    card.hidden = category !== "Todos" && card.dataset.category !== category;
  });
};

filterContainer?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  filterContainer.querySelectorAll(".price-filter").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });

  filterCards(button.dataset.category);
});

/* WhatsApp general */
document.querySelectorAll(".js-price-whatsapp").forEach((link) => {
  link.href = createWhatsAppUrl(
    "Hola, deseo solicitar información sobre los tratamientos y agendar una evaluación con el Dr. Juan Quintero."
  );
});

/* Menú móvil */
const closeMobileMenu = () => {
  if (!menuToggle || !mainNavigation) return;
  mainNavigation.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  if (!mainNavigation) return;

  const isOpen = mainNavigation.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
  document.body.classList.toggle("menu-open", isOpen);
});

mainNavigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMobileMenu();
});

/* Header al hacer scroll */
const updateHeader = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 18);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();


/* =========================================================
   MEJORES RESULTADOS
   Reemplaza before y after con las rutas de tus imágenes reales.
   Ejemplo:
   before: "images/resultados/toxina-patas-crow-before.jpg"
   after: "images/resultados/toxina-patas-crow-after.jpg"
========================================================= */
const bestResults = [
  {
    "title": "Toxina Botulínica",
    "subtitle": "Patas de gallo",
    "before": "images/resultados/patasdegallodespues.jpg",
    "after": "images/resultados/patasdegalloantes.jpg"
  },
  {
    "title": "Toxina Botulínica",
    "subtitle": "Entrecejo",
    "before": "images/resultados/entrecejodespues.jpg",
    "after": "images/resultados/entrecejoantes.jpg"
  },
  {
    "title": "Toxina Botulínica",
    "subtitle": "Frente",
    "before": "images/resultados/frentedespues.jpg",
    "after": "images/resultados/frenteantes.jpg"
  },
  {
    "title": "Ácido Hialurónico",
    "subtitle": "Rinomodelación",
    "before": "images/resultados/rinomodelaciondespues.jpg",
    "after": "images/resultados/rinomodelacionantes.jpg"
  },
  {
    "title": "Ácido Hialurónico",
    "subtitle": "Mentón",
    "before": "images/resultados/mentondespues.jpg",
    "after": "images/resultados/mentonantes.jpg"
  },
  {
    "title": "Ácido Hialurónico",
    "subtitle": "Labios",
    "before": "images/resultados/labiosdespues.jpg",
    "after": "images/resultados/labiosantes.jpg"
  },
  {
    "title": "Bioestimulador de Colágeno",
    "subtitle": "Rostro",
    "before": "images/resultados/bioestimuladordespues.jpg",
    "after": "images/resultados/bioestimuladorantes.jpg"
  },
  {
    "title": "Enzimas Recombinantes",
    "subtitle": "Rostro",
    "before": "images/resultados/enzimasdespues.jpg",
    "after": "images/resultados/enzimasantes.jpg"
  },
  {
    "title": "Fibroblastos",
    "subtitle": "Rostro",
    "before": "images/resultados/pinkglowdespues.jpg",
    "after": "images/resultados/pinkglowantes.jpg"
  }
];

const resultsGrid = document.querySelector("#results-grid");

const createResultMedia = (item, index) => {
  const hasImages = item.before && item.after;

  if (!hasImages) {
    return `
      <div class="result-compare result-placeholder">
        <div class="result-layer result-placeholder"><em>Reemplazar imagen</em></div>
        <div class="result-overlay result-placeholder" style="width: 50%;">
          <div class="result-layer result-placeholder"><em>Reemplazar imagen</em></div>
        </div>
        <span class="result-chip result-chip-before">Antes</span>
        <span class="result-chip result-chip-after">Después</span>
        <span class="result-divider-line" aria-hidden="true"></span>
        <span class="result-handle" aria-hidden="true">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <input
          class="result-slider"
          type="range"
          min="0"
          max="100"
          value="50"
          step="1"
          aria-label="Deslizar comparación antes y después de ${item.title} ${item.subtitle}"
        >
      </div>
    `;
  }

  return `
    <div class="result-compare">
      <div class="result-layer">
        <img src="${item.before}" alt="Antes de ${item.title} ${item.subtitle}" loading="lazy">
      </div>
      <div class="result-overlay" style="width: 50%;">
        <img src="${item.after}" alt="Después de ${item.title} ${item.subtitle}" loading="lazy">
      </div>
      <span class="result-chip result-chip-before">Antes</span>
      <span class="result-chip result-chip-after">Después</span>
      <input
        class="result-slider"
        type="range"
        min="0"
        max="100"
        value="50"
        step="1"
        aria-label="Deslizar comparación antes y después de ${item.title} ${item.subtitle}"
      >
    </div>
  `;
};

const renderResults = () => {
  if (!resultsGrid) return;

  resultsGrid.innerHTML = bestResults.map((item, index) => `
    <article class="result-card">
      ${createResultMedia(item, index)}
      <div class="result-caption">
        <strong>${item.title}</strong>
        <span>(${item.subtitle})</span>
      </div>
    </article>
  `).join("");

  resultsGrid.querySelectorAll(".result-card").forEach((card) => {
    const compare = card.querySelector(".result-compare");
    const slider = card.querySelector(".result-slider");
    const overlay = card.querySelector(".result-overlay");
    const divider = card.querySelector(".result-divider-line");
    const handle = card.querySelector(".result-handle");

    if (!compare || !slider || !overlay || !divider || !handle) return;

    const setPosition = (value) => {
      const clamped = Math.max(0, Math.min(100, Number(value)));
      slider.value = String(clamped);
      overlay.style.width = `${clamped}%`;
      divider.style.left = `${clamped}%`;
      handle.style.left = `${clamped}%`;
    };

    const positionFromPointer = (clientX) => {
      const rect = compare.getBoundingClientRect();
      const percentage = ((clientX - rect.left) / rect.width) * 100;
      setPosition(percentage);
    };

    slider.addEventListener("input", () => {
      setPosition(slider.value);
    });

    compare.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;

      compare.classList.add("is-dragging");
      compare.setPointerCapture?.(event.pointerId);
      positionFromPointer(event.clientX);
      event.preventDefault();
    });

    compare.addEventListener("pointermove", (event) => {
      if (!compare.classList.contains("is-dragging")) return;
      positionFromPointer(event.clientX);
      event.preventDefault();
    });

    const stopDragging = (event) => {
      compare.classList.remove("is-dragging");
      if (
        event?.pointerId !== undefined &&
        compare.hasPointerCapture?.(event.pointerId)
      ) {
        compare.releasePointerCapture(event.pointerId);
      }
    };

    compare.addEventListener("pointerup", stopDragging);
    compare.addEventListener("pointercancel", stopDragging);
    compare.addEventListener("pointerleave", (event) => {
      if (event.buttons === 0) stopDragging(event);
    });

    // Mantiene accesibilidad con teclado:
    // flechas izquierda/derecha mueven el comparador.
    slider.addEventListener("keydown", (event) => {
      const current = Number(slider.value);

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setPosition(current - 2);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setPosition(current + 2);
      }
    });

    setPosition(50);
  });
};

renderPriceCards();
renderResults();
