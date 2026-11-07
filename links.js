(() => {
  const links = window.AEROMED_LINKS || {};
  document.querySelectorAll(".configured-link[data-link-name]").forEach(anchor => {
    const name = anchor.dataset.linkName;
    const value = typeof links[name] === "string" ? links[name].trim() : "";
    const status = document.querySelector(`[data-link-status="${name}"]`);
    let safeUrl = "";
    try {
      const parsed = new URL(value);
      if (parsed.protocol === "https:") safeUrl = parsed.href;
    } catch (_) {}
    if (safeUrl) {
      anchor.href = safeUrl;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.classList.remove("is-unavailable");
      anchor.removeAttribute("aria-disabled");
      if (status) status.hidden = true;
    } else {
      anchor.href = "#";
      anchor.classList.add("is-unavailable");
      anchor.setAttribute("aria-disabled", "true");
      anchor.addEventListener("click", event => event.preventDefault());
    }
  });
})();
