"use strict";

/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

// IMPORTANTE: reemplaza este valor por el número real con código de país,
// sin espacios, signos ni guiones. Ejemplo para Perú: 51987654321.
const WHATSAPP_NUMBER = "5113727273";

const GENERAL_WHATSAPP_MESSAGE =
  "Hola, deseo solicitar información y agendar una cita con el Dr. Juan Quintero.";

/* =========================================================
   BASE DE DATOS DE TRATAMIENTOS
   Agrega, edita o elimina objetos sin modificar el HTML.
========================================================= */
const treatments = [
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    image: "images/tratamientos/toxina-botulinica.png",
    shortDescription:
      "Procedimiento orientado a suavizar líneas de expresión y lograr una apariencia descansada y natural.",
    question: "¿Qué es la toxina botulínica?",
    applicationTitle: "¿Dónde se puede aplicar?",
    additionalTitle: "¿En qué otras zonas se puede aplicar?",
    content: [
      "La toxina botulínica es un tratamiento médico que actúa de manera controlada sobre determinados músculos responsables de las líneas de expresión dinámicas.",
      "Su aplicación se planifica de forma personalizada para conservar la expresión del rostro y obtener un resultado equilibrado, evitando cambios exagerados."
    ],
    applicationZones: [
      "Líneas de expresión (Entrecejo, patas de gallo y frente).",
      "Hiperhidrosis (sudoración).",
      "Gummy Smile (sonrisa gingival).",
      "Rejuvenecimiento facial."
    ],
    additionalZones: [
      "Sonrisa gingival.",
      "Migraña.",
      "Bruxismo.",
      "Paralisis facial",
      "Hiperhidrosis en zonas seleccionadas."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para el tratamiento de Toxina Botulínica."
  },
  {
    id: "acido-hialuronico",
    name: "Ácido Hialurónico",
    image: "images/tratamientos/acido-hialuronico.png",
    shortDescription:
      "Tratamiento de armonización facial que permite restaurar soporte, hidratación y proporción en zonas seleccionadas.",
    question: "¿Qué es el ácido hialurónico?",
    applicationTitle: "¿Dónde se puede aplicar?",
    additionalTitle: "¿En qué otras zonas se puede aplicar?",
    content: [
      "El ácido hialurónico es una sustancia biocompatible utilizada en medicina estética para mejorar contornos, aportar hidratación y recuperar volumen en áreas específicas.",
      "El producto, la técnica y la cantidad se eligen según la anatomía, objetivos y características individuales de cada paciente."
    ],
    applicationZones: [
      "Labios.",
      "Pómulos.",
      "Surcos nasogenianos.",
      "Mentón."
    ],
    additionalZones: [
      "Línea mandibular.",
      "Ojeras, en pacientes seleccionados.",
      "Rinomodelación, según evaluación.",
      "Hidratación profunda de labios."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para el tratamiento con Ácido Hialurónico."
  },
  {
    id: "bioestimulacion-colageno",
    name: "Bioestimulación de Colágeno",
    image: "images/tratamientos/bioestimulacion-colageno.png",
    shortDescription:
      "Protocolo progresivo para mejorar firmeza, calidad de piel y soporte facial mediante estimulación de colágeno.",
    question: "¿En qué consiste la bioestimulación de colágeno?",
    applicationTitle: "¿Dónde se puede aplicar?",
    additionalTitle: "¿En qué otras zonas se puede aplicar?",
    content: [
      "La bioestimulación utiliza productos y técnicas médicas diseñadas para promover la producción de nuevo colágeno en zonas con pérdida de firmeza o elasticidad.",
      "Los cambios suelen aparecer de manera progresiva y el plan puede requerir una o más sesiones, según la valoración profesional."
    ],
    applicationZones: [
      "Pómulos y tercio medio.",
      "Contorno mandibular.",
      "Mejillas.",
      "Cuello."
    ],
    additionalZones: [
      "Escote.",
      "Brazos.",
      "Abdomen.",
      "Rodillas, según indicación."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para Bioestimulación de Colágeno."
  },
  {
    id: "enzimas-recombinantes",
    name: "Enzimas Recombinantes",
    image: "images/tratamientos/enzimas-recombinantes.png",
    shortDescription:
      "Esta sustancia se componen de diversas #Enzimas que otorgan beneficios para eliminar la grasa localizada y mejorar las células de la piel, eliminando la grasa, renovando el colágeno y el ácido hialurónico.",
    question: "¿Qué son  las Enzimas Recombinantes?",
    applicationTitle: "Beneficios de las Enzimas Recombinantes",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "Esta sustancia se componen de diversas #Enzimas que otorgan beneficios para eliminar la grasa localizada y mejorar las células de la piel, eliminando la grasa, renovando el colágeno y el ácido hialurónico.",
    ],
    applicationZones: [
      "Reducen la capa de grasa hipertrófica.",
      "Movilizan la grasa localizada.",
      "Mejoran el aspecto de la piel.",
      "Aumentan el drenaje linfático.",
      "Auxiliares en temas de flacidez.",
      "Favorecen la producción del colágeno."
    ],
    additionalZones: [
      "Papada.",
      "Rostro.",
      "Abdomen."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para el tratamiento de Enzimas Recombinantes."
  },
  {
    id: "Fibroblastos",
    name: "Fibroblastos",
    image: "images/tratamientos/fibroblastos.png",
    shortDescription:
      "Son células importantes responsables de la producción de colágeno y elastina de la piel, nuestro tratamiento se centra en la toma, expansión y criopreservación de tus propios fibroblastos.",
    question: "¿Qué son los Fibroblastos?",
    applicationTitle: "Nuestro innovador tratamiento ofrece:",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "Son células importantes responsables de la producción de colágeno y elastina de la piel, nuestro tratamiento se centra en la toma, expansión y criopreservación de tus propios fibroblastos.",
    ],
    applicationZones: [
      "Mejora visible en la calidad de tu piel.",
      "Seguridad absoluta y cero tiempo de recuperación.",
      "Retrasa el envejecimiento.",
      "Elimina líneas de expresión.",
      "Hidrata tu piel.",
      "Activación de millones de fibroblastos.",
      "¡Una terapia única y avanzada en Perú!"
    ],
    additionalZones: [
      "Rostro."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para el tratamiento de los Fibroblastos."
  },
  {
    id: "pink-glow",
    name: "Pink Glow",
    image: "images/tratamientos/pink-glow.png",
    shortDescription:
      "Cóctel nutrientes indicado para aclarar asi como promover una mejor calidad de piel brindando elementos necesarios para una piel firme, hidratada y luminosa.",
    question: "¿Qué es el PinkGlow?",
    applicationTitle: "Beneficios del PinkGlow:",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "Cóctel nutrientes indicado para aclarar asi como promover una mejor calidad de piel brindando elementos necesarios para una piel firme, hidratada y luminosa.",
    ],
    applicationZones: [
      "Hidrata y rejuvenece la piel.",
      "Despigmenta y aclara la piel.",
      "Ayuda a mejorar el cutis.",
      "Cierra los poros.",
      "Disminuye el acné.",
      "Restaura elasticidad.",
      "Normaliza los niveles de humedad.",
      "Previene la apariencia de nuevas arrugas y pliegues."

    ],
    additionalZones: [
      "Rostro.",
      "Escote.",
      "Cuello.",
      "Dorso de las manos."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para el tratamiento del pinkglow."
  },
  {
    id: "hidratación-con-acido-hialuronico",
    name: "Hidratación con Ácido Hialurónico",
    image: "images/tratamientos/hidratacion-con-acido-hialuronico.png",
    shortDescription:
      "El tratamiento de Hidratación  con Ácido Hialurónico se realiza con microinyecciones de gel de ácido hialurónico en las capas profundas de la piel, proporcionando una hidratación desde el interior.",
    question: "¿Qué es la Hidratación con Ácido Hialurónico?",
    applicationTitle: "Sus beneficios son:",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "El tratamiento de Hidratación  con Ácido Hialurónico se realiza con microinyecciones de gel de ácido hialurónico en las capas profundas de la piel, proporcionando una hidratación desde el interior.",
      "Su acción es revitalizante, reafirmante, hidratante, regeneradora, iluminadora y redensificadora. Este efecto se obtiene por su capacidad para inducir la formación de colágeno tipo I y la rehidratación."
    ],
    applicationZones: [
      "Desdibuja las arrugas.",
      "Aclara las manchas.",
      "Rejuvenece la piel.",
      "Tono de piel más terso.",
      "Hidrata la piel.",
      "Regenera células.",
      "Aporta volumen a los labios."
    ],
    additionalZones: [
      "Rostro.",
      "Labios.",
      "Cuelo."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita para la aplicación de hidratación con ácido hialurónico"
  },
  {
    id: "hiperhidrosis-axilar",
    name: "Hiperhidrosis Axilar",
    image: "images/tratamientos/hiperhidrosis-axilar.png",
    shortDescription:
      "La hiperhidrosis axilar es una condición caracterizada por una producción excesiva de sudor en las axilas, incluso cuando no hace calor, no se está realizando ejercicio o el cuerpo no necesita enfriarse.",
    question: "¿Qué es la hiperhidrosis axilar?",
    applicationTitle: "¿Cuáles son los beneficios del tratamiento con toxina botulínica?",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "La hiperhidrosis axilar es una condición caracterizada por una producción excesiva de sudor en las axilas, incluso cuando no hace calor, no se está realizando ejercicio o el cuerpo no necesita enfriarse. Esta sudoración puede humedecer la ropa, generar incomodidad y afectar las actividades cotidianas y sociales.",
      "Puede ser primaria, cuando ocurre por una actividad excesiva de los nervios que estimulan las glándulas sudoríparas, o secundaria, cuando está relacionada con alguna enfermedad, medicamento o alteración hormonal."
    ],
    applicationZones: [
      "Reduce significativamente la sudoración excesiva.",
      "Mantiene las axilas más secas durante varios meses.",
      "Disminuye la humedad y las manchas de sudor en la ropa.",
      "Mejora la comodidad, seguridad y confianza del paciente.",
      "Es un procedimiento mínimamente invasivo y no quirúrgico.",
      "Los resultados suelen comenzar a notarse durante los primeros días posteriores al tratamiento."
    ],
    additionalZones: [
      "Palmas de las manos.",
      "Plantas de los pies."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita acerca del tratamiento hiperhidrosis axilar."
  },
  {
    // =====================================================
    // TRATAMIENTO NUEVO 09: reemplaza todos estos datos
    // =====================================================
    id: "bruxismo",
    name: "Bruxismo",
    image: "images/tratamientos/bruxismo.png",
    shortDescription:
      "El bruxismo es una condición en la que una persona aprieta o rechina los dientes de manera involuntaria. Puede presentarse durante el día o mientras duerme.",
    question: "¿Qué es el bruxismo?",
    applicationTitle: "¿Cuáles son los beneficios del tratamiento con toxina botulínica?",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "El bruxismo es una condición en la que una persona aprieta o rechina los dientes de manera involuntaria. Puede presentarse durante el día o mientras duerme.",
      "Cuando es frecuente, puede provocar tensión muscular, dolor en la mandíbula, dolor de cabeza, sensibilidad dental y desgaste o daño en los dientes."
    ],
    applicationZones: [
      "Disminuye la fuerza con la que se aprietan los dientes.",
      "Reduce la tensión de los músculos de la mandíbula.",
      "Ayuda a aliviar el dolor facial y mandibular.",
      "Puede disminuir los dolores de cabeza relacionados con la tensión muscular.",
      "Reduce la actividad excesiva de los músculos maseteros.",
      "Puede ayudar a prevenir un mayor desgaste dental.",
      "Es un procedimiento mínimamente invasivo.",
      "No requiere cirugía y permite retomar rápidamente las actividades cotidianas."
    ],
    additionalZones: [
      "Músculos maseteros: ubicados a ambos lados de la mandíbula y responsables de gran parte de la fuerza utilizada al apretar los dientes.",
      "Músculos temporales: ubicados a los lados de la cabeza, según el nivel de tensión y la evaluación del especialista."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita acerca del tratamiento del bruxismo"
  },
  {
    // =====================================================
    // TRATAMIENTO NUEVO 10: reemplaza todos estos datos
    // =====================================================
    id: "nefertitis",
    name: "Efecto Nefertiti con toxina botulínica",
    image: "images/tratamientos/nefertitis.png",
    shortDescription:
      "El efecto Nefertiti o Nefertiti Lift es un tratamiento estético no quirúrgico que utiliza toxina botulínica para relajar parcialmente el músculo platisma, ubicado en la zona inferior del rostro y el cuello.",
    question: "¿Qué es el efecto Nefertiti?",
    applicationTitle: "¿Cuáles son sus beneficios?",
    additionalTitle: "¿Dónde se puede aplicar?",
    content: [
      "El efecto Nefertiti o Nefertiti Lift es un tratamiento estético no quirúrgico que utiliza toxina botulínica para relajar parcialmente el músculo platisma, ubicado en la zona inferior del rostro y el cuello.",
      "Este músculo puede ejercer una fuerza descendente sobre el contorno mandibular. Al reducir temporalmente su actividad, se busca suavizar las bandas verticales del cuello y conseguir una apariencia más definida y estilizada de la mandíbula."
    ],
    applicationZones: [
      "Ayuda a definir el contorno mandibular.",
      "Suaviza las bandas verticales del cuello.",
      "Disminuye la fuerza muscular que tira hacia abajo del tercio inferior del rostro.",
      "Puede mejorar ligeramente la apariencia de la flacidez inicial.",
      "Proporciona un efecto de elevación sutil y natural.",
      "Ayuda a lograr una transición más armoniosa entre el rostro y el cuello.",
      "Es un tratamiento mínimamente invasivo.",
      "No necesita cirugía ni un tiempo prolongado de recuperación."
    ],
    additionalZones: [
      "Borde inferior de la mandíbula: para mejorar visualmente su definición.",
      "Bandas del platisma: líneas musculares verticales que se hacen visibles en el cuello.",
      "Zona lateral del cuello: según la fuerza y distribución del músculo platisma.",
      "Parte inferior del rostro: únicamente cuando la evaluación médica determina que algunos músculos están causando una tracción descendente."
    ],
    whatsappMessage:
      "Hola, deseo solicitar información y agendar una cita acerca del tratamiento nefertitis con botox"
  },
];

/* =========================================================
   UTILIDADES
========================================================= */
const createWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const getFocusableElements = (container) => {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hasAttribute("hidden"));
};

/* =========================================================
   ELEMENTOS DEL DOM
========================================================= */
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");
const treatmentsGrid = document.querySelector("#treatments-grid");
const modal = document.querySelector("#treatment-modal");
const modalDialog = modal.querySelector(".modal-dialog");
const modalContentPanel = modal.querySelector(".modal-content");
const modalTitle = document.querySelector("#modal-title");
const modalQuestion = document.querySelector("#modal-question");
const modalImage = document.querySelector("#modal-image");
const modalDescription = document.querySelector("#modal-description");
const modalApplicationTitle = document.querySelector("#application-title");
const modalAdditionalTitle = document.querySelector("#additional-title");
const modalApplicationZones = document.querySelector("#modal-application-zones");
const modalAdditionalZones = document.querySelector("#modal-additional-zones");
const modalWhatsApp = document.querySelector("#modal-whatsapp");

let lastFocusedElement = null;

/* =========================================================
   ENLACES GENERALES DE WHATSAPP
========================================================= */
document.querySelectorAll(".js-general-whatsapp").forEach((link) => {
  link.href = createWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE);
});

/* =========================================================
   RENDERIZADO AUTOMÁTICO DE TARJETAS
========================================================= */
const renderTreatments = () => {
  const fragment = document.createDocumentFragment();

  treatments.forEach((treatment, index) => {
    const article = document.createElement("article");
    article.className = "treatment-card reveal";

    article.innerHTML = `
      <div class="treatment-card-media">
        <img
          src="${treatment.image}"
          alt="${treatment.name}"
          width="640"
          height="480"
          loading="lazy"
        >
      </div>
      <div class="treatment-card-body">
        <span class="treatment-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${treatment.name}</h3>
        <p>${treatment.shortDescription}</p>
        <button class="button" type="button" data-treatment-id="${treatment.id}">
          Ver tratamiento
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    `;

    fragment.appendChild(article);
  });

  treatmentsGrid.appendChild(fragment);
};

/* =========================================================
   MODAL
========================================================= */
const fillList = (element, items) => {
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const openTreatmentModal = (treatment) => {
  lastFocusedElement = document.activeElement;

  modalTitle.textContent = treatment.name;
  modalQuestion.textContent = treatment.question;
  modalImage.src = treatment.image;
  modalImage.alt = treatment.name;
  modalDescription.innerHTML = treatment.content
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  // Estos títulos pertenecen a cada tratamiento y se editan dentro de su objeto.
  modalApplicationTitle.textContent =
    treatment.applicationTitle || "¿Dónde se puede aplicar?";
  modalAdditionalTitle.textContent =
    treatment.additionalTitle || "¿En qué otras zonas se puede aplicar?";

  fillList(modalApplicationZones, treatment.applicationZones);
  fillList(modalAdditionalZones, treatment.additionalZones);

  modalWhatsApp.href = createWhatsAppUrl(treatment.whatsappMessage);
  modalWhatsApp.setAttribute(
    "aria-label",
    `Agendar una cita por WhatsApp para ${treatment.name}`
  );

  // Cada tratamiento se abre desde el inicio de su información.
  modalContentPanel.scrollTop = 0;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.querySelector(".modal-close").focus();
  });
};

const closeTreatmentModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

treatmentsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-treatment-id]");
  if (!button) return;

  const treatment = treatments.find((item) => item.id === button.dataset.treatmentId);
  if (treatment) openTreatmentModal(treatment);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeTreatmentModal();
  }
});

modal.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTreatmentModal();
    return;
  }

  if (event.key !== "Tab") return;

  const focusableElements = getFocusableElements(modalDialog);
  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

/* =========================================================
   MENÚ MÓVIL
========================================================= */
const closeMobileMenu = () => {
  menuToggle.classList.remove("is-active");
  mainNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
  document.body.classList.remove("menu-open");
};

const toggleMobileMenu = () => {
  const isOpen = mainNavigation.classList.toggle("is-open");
  menuToggle.classList.toggle("is-active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
  document.body.classList.toggle("menu-open", isOpen);
};

menuToggle.addEventListener("click", toggleMobileMenu);

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.innerWidth <= 860) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMobileMenu();
  }
});

/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */
const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* =========================================================
   APARICIÓN SUAVE AL HACER SCROLL
========================================================= */
let revealObserver;

const initializeRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
};

/* =========================================================
   INICIALIZACIÓN
========================================================= */
renderTreatments();
initializeRevealAnimations();
