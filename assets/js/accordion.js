(() => {
  const initiallyCollapsed = document.currentScript.dataset.initiallyCollapsed === "true";
  const accordions = document.getElementsByClassName("accordion");
  for (const accordion of accordions) {
    accordion.addEventListener("click", function () {
      this.classList.toggle("acc_active");
      const panel = this.nextElementSibling;
      const maxHeight = panel.style.maxHeight || getComputedStyle(panel).maxHeight;
      const collapsed = !maxHeight || maxHeight === "0px" || maxHeight === "none";
      panel.style.maxHeight = collapsed ? `${panel.scrollHeight}px` : "0px";
    });
  }
  // Preserve the existing initial state, including two clicks on the ML page.
  for (const accordion of accordions) {
    accordion.click();
    if (initiallyCollapsed) accordion.click();
  }
})();
