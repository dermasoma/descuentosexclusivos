"use strict";

(() => {
  const clamp = (value) => Math.max(0, Math.min(100, Number(value)));

  const ensureControls = (compare) => {
    if (!compare.querySelector(".result-divider-line")) {
      const divider = document.createElement("span");
      divider.className = "result-divider-line";
      divider.setAttribute("aria-hidden", "true");
      compare.appendChild(divider);
    }

    if (!compare.querySelector(".result-handle")) {
      const handle = document.createElement("span");
      handle.className = "result-handle";
      handle.setAttribute("aria-hidden", "true");
      handle.innerHTML = `
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      `;
      compare.appendChild(handle);
    }
  };

  const updateChipsState = (compare, value) => {
    const beforeChip = compare.querySelector(".result-chip-before");
    const afterChip = compare.querySelector(".result-chip-after");

    if (!beforeChip || !afterChip) return;

    compare.classList.remove("compare-before", "compare-middle", "compare-after");
    beforeChip.classList.remove("is-active", "is-inactive", "is-hidden");
    afterChip.classList.remove("is-active", "is-inactive", "is-hidden");
    compare.removeAttribute("data-dominant");

    // Antes dominante: ocultar Después
    if (value <= 35) {
      compare.classList.add("compare-before");
      beforeChip.classList.add("is-active");
      afterChip.classList.add("is-hidden");
      return;
    }

    // Después dominante: ocultar Antes
    if (value >= 65) {
      compare.classList.add("compare-after");
      afterChip.classList.add("is-active");
      beforeChip.classList.add("is-hidden");
      return;
    }

    // Zona intermedia: mostrar ambas, resaltando la más dominante
    compare.classList.add("compare-middle");

    if (value < 50) {
      compare.dataset.dominant = "before";
      beforeChip.classList.add("is-active");
      afterChip.classList.add("is-inactive");
    } else if (value > 50) {
      compare.dataset.dominant = "after";
      afterChip.classList.add("is-active");
      beforeChip.classList.add("is-inactive");
    } else {
      compare.dataset.dominant = "before";
      beforeChip.classList.add("is-active");
      afterChip.classList.add("is-inactive");
    }
  };

  const init = (compare) => {
    if (compare.dataset.finalCompareReady === "true") return;

    const before = compare.querySelector(":scope > .result-layer");
    const after = compare.querySelector(":scope > .result-overlay");

    if (!before || !after) return;

    ensureControls(compare);

    compare.dataset.finalCompareReady = "true";
    compare.tabIndex = 0;
    compare.setAttribute("role", "slider");
    compare.setAttribute("aria-valuemin", "0");
    compare.setAttribute("aria-valuemax", "100");
    compare.setAttribute(
      "aria-label",
      "Comparación antes y después. Antes a la izquierda y después a la derecha."
    );

    let value = 50;
    let dragging = false;

    const setSplit = (nextValue) => {
      value = clamp(nextValue);
      compare.style.setProperty("--split", `${value}%`);
      compare.setAttribute("aria-valuenow", String(Math.round(value)));

      const range = compare.querySelector(".result-slider");
      if (range) range.value = String(value);

      updateChipsState(compare, value);
    };

    const setFromX = (clientX) => {
      const rect = compare.getBoundingClientRect();
      if (!rect.width) return;
      setSplit(((clientX - rect.left) / rect.width) * 100);
    };

    compare.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      dragging = true;
      compare.classList.add("is-dragging");
      compare.setPointerCapture?.(event.pointerId);
      setFromX(event.clientX);
      event.preventDefault();
    });

    compare.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      setFromX(event.clientX);
      event.preventDefault();
    });

    const stop = (event) => {
      dragging = false;
      compare.classList.remove("is-dragging");

      if (
        event?.pointerId !== undefined &&
        compare.hasPointerCapture?.(event.pointerId)
      ) {
        compare.releasePointerCapture(event.pointerId);
      }
    };

    compare.addEventListener("pointerup", stop);
    compare.addEventListener("pointercancel", stop);

    compare.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSplit(value - 2);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSplit(value + 2);
      } else if (event.key === "Home") {
        event.preventDefault();
        setSplit(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setSplit(100);
      }
    });

    setSplit(50);
  };

  const initAll = () => {
    document.querySelectorAll(".result-compare").forEach(init);
  };

  initAll();

  const grid = document.querySelector("#results-grid");
  if (grid) {
    const observer = new MutationObserver(initAll);
    observer.observe(grid, { childList: true, subtree: true });
  }
})();
