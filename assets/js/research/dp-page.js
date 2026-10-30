$(document).ready(function () {
  init_pi();
  document.getElementById("pi_toggle").addEventListener("click", togglePolicyIteration);
  document.getElementById("pi_stop").addEventListener("click", stopPolicyIteration);
  document.getElementById("pi_reset").addEventListener("click", resetPolicyIteration);
  init_vi();
  document.getElementById("vi_toggle").addEventListener("click", toggleValueIteration);
  document.getElementById("vi_stop").addEventListener("click", stopValueIteration);
  document.getElementById("vi_reset").addEventListener("click", resetValueIteration);
});
