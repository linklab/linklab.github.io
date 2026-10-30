$(document).ready(function () {
  init_sarsa();
  document.getElementById("sarsa_toggle").addEventListener("click", toggleSarsaIteration);
  document.getElementById("sarsa_stop").addEventListener("click", stopSarsaIteration);
  document.getElementById("sarsa_reset").addEventListener("click", resetSarsa);
  init_qlearning();
  document.getElementById("qlearning_toggle").addEventListener("click", toggleQLearningIteration);
  document.getElementById("qlearning_stop").addEventListener("click", stopQLearningIteration);
  document.getElementById("qlearning_reset").addEventListener("click", resetQLearning);
});
