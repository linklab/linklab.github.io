---
layout: page
permalink: /research/rl/dp
---

<section>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <!--Start Container Div-->
                <div style="color:black;" class="container-fluid">
                    <br/>
                    <div class="text-center">
                        <h2 style="font-weight: bold">Dynamic Programming - Policy Iteration, Value Iteration</h2>
                    </div>
                    <div class="text-right">
                        <span style="font-weight: bold">LINK@KoreaTech</span>
                        <br/>
                        <span style="font-weight: bold">Febraury, 14, 2019</span>
                        <br/>
                        <span style="font-weight: bold">Email: <a href="mailto: link.koreatech@gmail.com">link.koreatech at gmail.com</a></span>
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
                                    Policy Iteration
                                    <button class="btn btn-success" id="pi_toggle"
                                            onclick="togglePolicyIteration()">
                                        Start/Pause (Toggle)
                                    </button>
                                    <button class="btn btn-danger" id="pi_stop" onclick="stopPolicyIteration()">
                                        Stop
                                    </button>
                                    <button class="btn btn-info" onclick="resetPolicyIteration()">
                                        Reset
                                    </button>
                                </h2>
                                <br/>
                                <div class="text-left" style="font-size: 1.2em">
                                    <ul>
                                        <li>
                                            Sum of All <Stat></Stat>e Values: <span style="font-weight: bold"
                                                                           id="pi_state_values">0</span>
                                        </li>
                                        <li>
                                            Difference of Sum of All State Values: <span style="font-weight: bold"
                                                                                         id="pi_diff_state_values">-1</span>
                                        </li>
                                        <li>
                                            Status: <span style="font-weight: bold" id="pi_status">RESET</span>
                                        </li>
                                        <li>
                                            Discount Factor (gamma): 0.75
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="/assets/images/research/PI_algo.png" width="90%" border="0"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="text-left">
                                    <span style="font-size: small">Iteration: <span id="pi_iter">-1</span></span>
                                </div>
                                <div id="draw_pi" class="text-left"></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <div>
                        <div class="row">
                            <div class="col-md-8 text-center">
                                <h2>
                                    Value Iteration
                                    <button class="btn btn-success" id="vi_toggle" onclick="toggleValueIteration()">
                                        Start/Pause (Toggle)
                                    </button>
                                    <button class="btn btn-danger" id="vi_stop" onclick="stopValueIteration()">
                                        Stop
                                    </button>
                                    <button class="btn btn-info" onclick="resetValueIteration()">
                                        Reset
                                    </button>
                                </h2>
                                <br/>
                                <div class="text-left" style="font-size: 1.2em">
                                    <ul>
                                        <li>
                                            Sum of All State Values: <span style="font-weight: bold"
                                                                           id="vi_state_values">0</span>
                                        </li>
                                        <li>
                                            Difference of Sum of All State Values: <span style="font-weight: bold"
                                                                                         id="vi_diff_state_values">-1</span>
                                        </li>
                                        <li>
                                            Status: <span style="font-weight: bold" id="vi_status">RESET</span>
                                        </li>
                                        <li>
                                            Discount Factor (gamma): 0.75
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="/assets/images/research/VI_algo.png" width="90%" border="0"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="text-left">
                                    <span style="font-size: small">Iteration: <span id="vi_iter">-1</span></span>
                                </div>
                                <div id="draw_vi" class="text-left"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
    </div>
</section>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script type="text/javascript" src="/assets/js/research/rl.js"></script>
<script>
    var action_names = ["up", "left", "right", "down"];
    var cs = 60;  // cell size
</script>
<script type="text/javascript" src="/assets/js/research/policy_iteration.js"></script>
<script type="text/javascript" src="/assets/js/research/value_iteration.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
            init_pi();
            init_vi();
    });
</script>
