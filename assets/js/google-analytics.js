(() => {
  const trackingId = document.currentScript.dataset.trackingId;
  if (
    window.doNotTrack === "1" ||
    navigator.doNotTrack === "1" ||
    navigator.doNotTrack === "yes" ||
    navigator.msDoNotTrack === "1"
  )
    return;
  window.GoogleAnalyticsObject = "ga";
  window.ga =
    window.ga ||
    function () {
      window.ga.q = window.ga.q || [];
      window.ga.q.push(arguments);
    };
  window.ga.l = Number(new Date());
  const script = document.createElement("script");
  const firstScript = document.getElementsByTagName("script")[0];
  script.async = true;
  script.src = "https://www.google-analytics.com/analytics.js";
  firstScript.parentNode.insertBefore(script, firstScript);
  window.ga("create", trackingId, "auto");
  window.ga("send", "pageview");
})();
