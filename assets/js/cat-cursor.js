(() => {
  "use strict";

  const RELEASE_DELAY_MS = 250;
  const root = document.documentElement;
  const capability = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
  const script = document.currentScript;
  let releaseTimer;
  let ready = false;

  const reset = () => {
    window.clearTimeout(releaseTimer);
    root.classList.remove("cat-cursor-pressed");
  };

  const updateCapability = () => {
    reset();
    root.classList.toggle("cat-cursor-ready", ready && capability.matches);
  };

  // Decode both tiny assets before enabling the cursor so the first press is immediate.
  const preload = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        if (image.decode) image.decode().then(resolve, reject);
        else resolve();
      };
      image.onerror = reject;
      image.src = url;
    });

  Promise.all([preload(script.dataset.sleeping), preload(script.dataset.arched)])
    .then(() => {
      ready = true;
      updateCapability();
    })
    .catch(() => {
      // Missing or unsupported assets leave normal browser cursors in place.
    });

  window.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "mouse" || !ready || !capability.matches) return;
      window.clearTimeout(releaseTimer);
      root.classList.add("cat-cursor-pressed");
    },
    { capture: true, passive: true }
  );

  // Mouse events also cover releasing one button while another remains held.
  window.addEventListener(
    "mouseup",
    (event) => {
      if (event.buttons !== 0) return;
      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(reset, RELEASE_DELAY_MS);
    },
    { capture: true, passive: true }
  );

  window.addEventListener("pointercancel", reset, { passive: true });
  window.addEventListener("blur", reset);
  window.addEventListener("pagehide", reset);
  window.addEventListener("pageshow", reset);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) reset();
  });
  capability.addEventListener("change", updateCapability);
})();
