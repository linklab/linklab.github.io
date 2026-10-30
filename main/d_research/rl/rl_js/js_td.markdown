---
layout: page
permalink: /research/rl/td
---

<section>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <!--Start Container Div-->
                <div class="container-fluid u-color-black">
                    <br/>
                    <div class="text-center">
                        <h2 class="u-font-weight-bold">Temporal Difference Learning - SARSA & Q-Learning</h2>
                    </div>
                    <div class="text-right">
                        <span class="u-font-weight-bold">LINK@KoreaTech</span>
                        <br/>
                        <span class="u-font-weight-bold">Febraury, 14, 2019</span>
                        <br/>
                        <span class="u-font-weight-bold">Email: <a href="mailto: link.koreatech@gmail.com">link.koreatech at gmail.com</a></span>
                        <br/>
                        <span>This site is made by using the source codes shared from the site,
                            <a href="https://cs.stanford.edu/people/karpathy/reinforcejs/index.html">REINFORCEjs</a>
                        </span>
                    </div>
                    <br>
                    <div>
                        <div class="row">
                            <div class="col-md-8 text-center">
                                <h2>
                                    SARSA
                                    <button class="btn btn-success" id="sarsa_toggle">
                                        Start/Pause (Toggle)
                                    </button>
                                    <button class="btn btn-danger" id="sarsa_stop">
                                        Stop
                                    </button>
                                    <button class="btn btn-info" id="sarsa_reset">
                                        Reset
                                    </button>
                                </h2>
                                <br/>
                                <div class="row text-left u-font-size-1p2em">
                                    <div class="col-md-12">
                                        <ul>
                                            <li>
                                                Sum of all state values: <span
                                                                               id="sarsa_state_values" class="u-font-weight-bold">-1</span>
                                            </li>
                                            <li>
                                                Total number of steps over all episodes: <span id="sarsa_total_steps" class="u-font-weight-bold">-1</span>
                                            </li>
                                            <li>
                                                Status: <span
                                                              id="sarsa_status" class="u-font-weight-bold">RESET</span>
                                            </li>
                                            <li>
                                                Epsilon: <span
                                                               id="sarsa_epsilon" class="u-font-weight-bold">0.2</span>
                                            </li>
                                            <li>
                                                Discount Factor (&gamma;): 0.75
                                            </li>
                                            <li>
                                                Initial epsilon value for &epsilon;-greedy policy (&epsilon;): 0.2
                                            </li>
                                            <li>
                                                Epsilon decay rate (&eta;): 0.02
                                            </li>
                                            <li>
                                                Learning rate (&alpha;): 0.1
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-center">
                                    Sum of each step's reward over episodes:
                                    <div class="text-center u-fixed-video-frame" id="flotreward_sarsa"></div>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="text-left">
                                    <span class="u-font-size-small">Episode: <span id="sarsa_episode">0</span></span>
                                </div>
                                <div id="draw_sarsa" class="text-left"></div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <img src="/assets/images/research/SARSA_algo.png" width="60%" border="0"/>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <hr/>
                    <div>
                        <div class="row">
                            <div class="col-md-8 text-center">
                                <h2>
                                    Q-learning
                                    <button class="btn btn-success" id="qlearning_toggle">
                                        Start/Pause (Toggle)
                                    </button>
                                    <button class="btn btn-danger" id="qlearning_stop">
                                        Stop
                                    </button>
                                    <button class="btn btn-info" id="qlearning_reset">
                                        Reset
                                    </button>
                                </h2>
                                <br/>
                                <div class="row text-left u-font-size-1p2em">
                                    <div class="col-md-12">
                                        <ul>
                                            <li>
                                                Sum of all state values: <span
                                                                               id="qlearning_state_values" class="u-font-weight-bold">-1</span>
                                            </li>
                                            <li>
                                                Total number of steps over all episodes: <span id="qlearning_total_steps" class="u-font-weight-bold">-1</span>
                                            </li>
                                            <li>
                                                Status: <span
                                                              id="qlearning_status" class="u-font-weight-bold">RESET</span>
                                            </li>
                                            <li>
                                                Epsilon: <span
                                                               id="qlearning_epsilon" class="u-font-weight-bold">0.2</span>
                                            </li>
                                            <li>
                                                Discount Factor (&gamma;): 0.75
                                            </li>
                                            <li>
                                                Initial epsilon value for &epsilon;-greedy policy (&epsilon;): 0.2
                                            </li>
                                            <li>
                                                Epsilon decay rate (&eta;): 0.02
                                            </li>
                                            <li>
                                                Learning rate (&alpha;): 0.1
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-center">
                                    Sum of each step's reward over episodes:
                                    <div class="text-center u-fixed-video-frame" id="flotreward_qlearning"></div>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="text-left">
                                    <span class="u-font-size-small">Episode: <span
                                            id="qlearning_episode">0</span></span>
                                </div>
                                <div id="draw_qlearning" class="text-left"></div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <img src="/assets/images/research/QLearning_algo.png" width="60%" border="0"/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
        <!--End Container Div-->
    </div>
</section>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script type="text/javascript" src="/assets/js/research/rl.js"></script>
<script src="/assets/js/research/grid-config.js"></script>
<script type="text/javascript" src="/assets/js/research/jquery.plot.min.js"></script>
<script type="text/javascript" src="/assets/js/research/sarsa.js"></script>
<script type="text/javascript" src="/assets/js/research/qlearning.js"></script>
<script src="/assets/js/research/td-page.js"></script>