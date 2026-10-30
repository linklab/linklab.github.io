var disqus_config;
(() => {
  const { pageUrl, shortname } = document.currentScript.dataset;
  disqus_config = function () {
    this.page.url = pageUrl;
    this.page.identifier = pageUrl;
  };
  const script = document.createElement("script");
  script.src = `https://${shortname}.disqus.com/embed.js`;
  script.setAttribute("data-timestamp", Number(new Date()));
  (document.head || document.body).appendChild(script);
})();
