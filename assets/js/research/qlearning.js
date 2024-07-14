var state_qlearning;
var agent_qlearning, env_qlearning;

var spec_qlearning = {}
spec_qlearning.update = 'qlearn';
spec_qlearning.gamma = 0.75; // discount factor, [0, 1)
spec_qlearning.epsilon = 0.2; // initial epsilon for epsilon-greedy policy, [0, 1)
spec_qlearning.alpha = 0.1; // value function learning rate
spec_qlearning.eta = 0.02; // epsilon decay rate

// gridword_qlearning
var gridword_qlearning = function(){
    this.Rarr = null; // reward array
    this.T = null; // cell types, 0 = normal, 1 = cliff
    this.reset()
};

gridword_qlearning.prototype = {
    reset: function() {
        // hardcoding one gridworld for now
        this.gh = 7;
        this.gw = 7;
        this.gs = this.gh * this.gw; // number of states

        // specify some rewards
        this.Rarr = R.zeros(this.gs);
        this.T = R.zeros(this.gs);

        this.Rarr[16] = -5.0;
        this.Rarr[32] = 5.0;
    },

    reward: function(s, a, ns) {
        // reward of being in s, taking action a, and ending up in ns
        return this.Rarr[ns];
    },

    nextStateDistribution: function(s, a) {
        // given (s,a) return distribution over s' (in sparse form)
        // ordinary space
        var nx, ny;
        var x = this.stox(s);
        var y = this.stoy(s);

        if (a === 0) {nx=x-1; ny=y;}
        if (a === 1) {nx=x; ny=y-1;}
        if (a === 2) {nx=x; ny=y+1;}
        if (a === 3) {nx=x+1; ny=y;}

        var ns = nx * this.gh + ny;

        // gridworld is deterministic, so return only a single next state
        return ns;
    },

    sampleNextState: function(s,a) {
        // gridworld is deterministic, so this is easy
        var ns = this.nextStateDistribution(s, a);
        var r = this.Rarr[s]; // observe the raw reward of being in s, taking a, and ending up in ns

        var out = {
            'ns':ns, 'r':r, 'reset_episode': false
        };

        if (s === 16 || s === 32) {
            // episode is over
            out.reset_episode = true;
        }
        return out;
    },

    allowedActions: function(s) {
        var x = this.stox(s);
        var y = this.stoy(s);
        var as = [];
        if(x > 0) { as.push(0); } // up
        if(y > 0) { as.push(1); } // left
        if(y < this.gh-1) { as.push(2); } // right
        if(x < this.gw-1) { as.push(3); } // down
        return as;
    },

    randomState: function() {
        return Math.floor(Math.random() * this.gs);
    },

    startState: function() {
        return 0;
    },

    getNumStates: function() {
        return this.gs;
    },

    getMaxNumActions: function() {
        return 4;
    },

    // private functions
    stox: function(s) { return Math.floor(s / this.gw); },
    stoy: function(s) { return s % this.gh; },
    xytos: function(x, y) { return x * this.gw + y; },
}

// ------
// UI
// ------
var rs_qlearning = {};
var trs_qlearning = {};
var tvs_qlearning = {};
var pas_qlearning = {};

var initGrid_qlearning = function() {
    var d3elt = d3.select('#draw_qlearning');
    d3elt.html('');

    var gh = env_qlearning.gh; // height in cells
    var gw = env_qlearning.gw; // width in cells
    var gs = env_qlearning.gs; // total number of cells

    var w = 420;
    var h = 420;
    svg = d3elt.append('svg').attr('width', w).attr('height', h)
      .append('g').attr('transform', 'scale(1)');

    // define a marker for drawing arrowheads
    svg.append("defs").append("marker")
    .attr("id", "arrowhead")
    .attr("refX", 3)
    .attr("refY", 2)
    .attr("markerWidth", 3)
    .attr("markerHeight", 4)
    .attr("orient", "auto")
    .append("path").attr("d", "M 0,0 V 4 L3,2 Z");

    for (var y=0; y<gh; y++) {
        for (var x=0; x<gw; x++) {
            var xcoord = x * cs;
            var ycoord = y * cs;
            var s = env_qlearning.xytos(x, y);
            var g = svg.append('g');

            // set up cell rectangles
            var r = g.append('rect')
            .attr('x', xcoord)
            .attr('y', ycoord)
            .attr('height', cs)
            .attr('width', cs)
            .attr('fill', '#FFF')
            .attr('stroke', 'black')
            .attr('stroke-width', 2);
            rs_qlearning[s] = r;

            // reward text
            var tr = g.append('text')
            .attr('x', xcoord + 5)
            .attr('y', ycoord + 55)
            .attr('font-size', 10)
            .text('');
            trs_qlearning[s] = tr;

            // skip rest for cliffs
            if (env_qlearning.T[s] === 1) { continue; }

            // value text
            var tv = g.append('text')
                .attr('x', xcoord + 5)
                .attr('y', ycoord + 20)
                .style("fill", "#CCCCCC")
                .text('');
            tvs_qlearning[s] = tv;

            // policy arrows
            pas_qlearning[s] = []
            for (var a=0;a<4;a++) {
                var pa = g.append('line')
                  .attr('x1', xcoord)
                  .attr('y1', ycoord)
                  .attr('x2', xcoord)
                  .attr('y2', ycoord)
                  .attr('stroke', 'black')
                  .attr('stroke-width', '2')
                  .attr("marker-end", "url(#arrowhead)");
                pas_qlearning[s].push(pa);
            }
        }
    }

    // append agent position circle
    svg.append('circle')
        .attr('cx', -100)
        .attr('cy', -100)
        .attr('r', 15)
        .attr('fill', '#F00')
        .attr('stroke', '#000')
        .attr('id', 'cpos_qlearning');
}

var drawGrid_qlearning = function() {
    var gh = env_qlearning.gh; // height in cells
    var gw = env_qlearning.gw; // width in cells
    var gs = env_qlearning.gs; // total number of cells

    var sx = env_qlearning.stox(state_qlearning);
    var sy = env_qlearning.stoy(state_qlearning);
    d3.select('#cpos_qlearning')
        .attr('cx', sx*cs+cs/2)
        .attr('cy', sy*cs+cs/2);

    // updates the grid with current state of world/agent_qlearning
    for (var y=0; y<gh; y++) {
        for (var x=0; x<gw; x++) {
            var xcoord = x * cs;
            var ycoord = y * cs;
            var r=255, g=255, b=255;
            var s = env_qlearning.xytos(x, y);

            var poss = env_qlearning.allowedActions(s);
            var vv = -1;
            for (var i = 0; i < poss.length; i++) {
                var qsa = agent_qlearning.Q[poss[i] * gs + s];
                if (i === 0 || qsa > vv) {
                    vv = qsa;
                }
            }

            var ms = 100;
            if (vv > 0) { g = 255; r = 255 - vv * ms; b = 255 - vv * ms; }
            if (vv < 0) { g = 255 + vv * ms; r = 255; b = 255 + vv * ms; }
            var vcol = 'rgb(' + Math.floor(r) + ',' + Math.floor(g) + ',' + Math.floor(b) + ')';
            if (env_qlearning.T[s] === 1) { vcol = "#AAA"; rcol = "#AAA"; }

            // update colors of rectangles based on value
            var r = rs_qlearning[s];
            var rv = env_qlearning.Rarr[s];

            if (rv === 5) {
                // highlight goal cell
                r.attr('fill', '#FF0');
            } else if (rv == -5) {
                // highlight cliff cell
                r.attr('fill', '#aaa');
            } else {
                r.attr('fill', vcol);
            }

            // write reward texts
            trs_qlearning[s].text('R ' + rv.toFixed(1))

            // skip rest for cliff
            if (env_qlearning.T[s] === 1) continue;

            // write value
            if(s !== 16 && s !== 32) {
                var tv = tvs_qlearning[s];
                tv.text(vv.toFixed(2));

                // update policy arrows
                var paa = pas_qlearning[s];
                for (var a = 0; a < 4; a++) {
                    var pa = paa[a];
                    var prob = agent_qlearning.P[a * gs + s];

                    if (prob === 0 || prob < 0.1) {
                        pa.attr('visibility', 'hidden');
                    }
                    else {
                        pa.attr('visibility', 'visible');
                    }

                    var ss = cs / 2 * prob * 0.9;
                    if (a === 0) {
                        nx = -ss;
                        ny = 0;
                    }
                    if (a === 1) {
                        nx = 0;
                        ny = -ss;
                    }
                    if (a === 2) {
                        nx = 0;
                        ny = ss;
                    }
                    if (a === 3) {
                        nx = ss;
                        ny = 0;
                    }

                    pa.attr('x1', xcoord + cs / 2)
                        .attr('y1', ycoord + cs / 2)
                        .attr('x2', xcoord + cs / 2 + nx)
                        .attr('y2', ycoord + cs / 2 + ny);
                }
            }
        }
    }
}

var sid_qlearning = -1;
var gid_qlearning = -1;
var qlearning_state_values = 0;

var reward_history_qlearning = [0.0];
var reward_qlearning = 0;
var nsteps_history_qlearning = [0.0];
var nsteps_qlearning = 0;
var total_steps_qlearning = 0;
var nflot_qlearning = 300;
var unit_time = 10;

var toggleQLearningIteration = function() {
    var num_episode = 1;
    if (sid_qlearning === -1) {
        sid_qlearning = setInterval(function(){
            $('#qlearning_status').text("START");
            var a = agent_qlearning.act(state_qlearning); // ask agent for an action
            var obs = env_qlearning.sampleNextState(state_qlearning, a); // run it through environment dynamics
            agent_qlearning.learn(obs.r); // allow opportunity for the agent to learn
            state_qlearning = obs.ns; // evolve environment to next state

            reward_qlearning += obs.r;
            nsteps_qlearning += 1;

            // keep track of reward history
            drawGrid_qlearning(); // draw

            $('#qlearning_state_values').text(qlearning_state_values.toFixed(1));
            qlearning_state_values = getQLearningSumStateValues();

            if (obs.reset_episode === true) {
                resetQLearningAgent();
                // record the reward achieved
                if (reward_history_qlearning.length > nflot_qlearning) {
                    reward_history_qlearning = reward_history_qlearning.slice(1);
                }
                reward_history_qlearning.push(reward_qlearning);
                nsteps_history_qlearning.push(nsteps_qlearning);

                $('#qlearning_epsilon').text(agent_qlearning.epsilon.toFixed(3));

                if (num_episode > nflot_qlearning) {
                    stopQLearningIteration();
                    return;
                }

                $('#qlearning_episode').text(num_episode);
                reward_qlearning = 0;

                total_steps_qlearning += nsteps_qlearning;
                $('#qlearning_total_steps').text(total_steps_qlearning);
                nsteps_qlearning = 0;

                num_episode += 1;

                //epsilon decay
                agent_qlearning.epsilon = agent_qlearning.epsilon * (1.0 - agent_qlearning.eta);
            }
        }, unit_time);
        gid_qlearning = initGraph_qlearning(false);
        $('#qlearning_stop').prop('disabled', false);
    } else {
        clearInterval(sid_qlearning);
        clearInterval(gid_qlearning);
        sid_qlearning = -1;
        $('#qlearning_status').text("PAUSE");
    }
}

function stopQLearningIteration() {
    $('#qlearning_status').text("STOP");
    drawGrid_qlearning();
    env_qlearning.reset();
    agent_qlearning.reset();
    clearInterval(sid_qlearning);
    clearInterval(gid_qlearning);
    sid_qlearning = -1;
    $('#qlearning_toggle').prop('disabled', true);
    $('#qlearning_stop').prop('disabled', true);
}

function resetQLearningAgent() {
    state_qlearning = env_qlearning.startState();
    drawGrid_qlearning();
}

function resetQLearning() {
    env_qlearning.reset();
    agent_qlearning.reset();
    state_qlearning = env_qlearning.startState();
    agent_qlearning = new RL_TD.TDAgent(env_qlearning, spec_qlearning);
    reward_history_qlearning = [0.0];
    nsteps_history_qlearning = [0.0];
    reward_qlearning = 0;
    nsteps_qlearning = 0;
    total_steps_qlearning = 0;

    clearInterval(sid_qlearning);
    clearInterval(gid_qlearning);
    initGraph_qlearning(true);

    $('#qlearning_episode').text(0);
    initGrid_qlearning();
    drawGrid_qlearning();
    sid_qlearning = -1;
    gid_qlearning = -1;

    $('#qlearning_state_values').text(-1);
    $('#qlearning_total_steps').text(-1);
    $('#qlearning_epsilon').text(spec_qlearning.epsilon);
    $('#qlearning_status').text("RESET");
    $('#qlearning_toggle').prop('disabled', false);
    $('#qlearning_stop').prop('disabled', true);
}

function getQLearningSumStateValues() {
    var sumStateValues = 0;
    var gh = env_qlearning.gh; // height in cells
    var gw = env_qlearning.gw; // width in cells
    var gs = env_qlearning.gs; // total number of cells

    for (var y=0; y<gh; y++) {
        for (var x = 0; x < gw; x++) {
            var s = env_qlearning.xytos(x, y);

            var poss = env_qlearning.allowedActions(s);
            var vv = -1;
            for (var i = 0; i < poss.length; i++) {
                var qsa = agent_qlearning.Q[poss[i] * gs + s];
                if (i === 0 || qsa > vv) {
                    vv = qsa;
                }
            }
            sumStateValues += vv;
        }
    }
    return sumStateValues;
}

function init_qlearning() {
    env_qlearning = new gridword_qlearning(); // create environment
    state_qlearning = env_qlearning.startState();
    agent_qlearning = new RL_TD.TDAgent(env_qlearning, spec_qlearning);
    initGrid_qlearning();
    drawGrid_qlearning();
    initGraph_qlearning(true);
}

function getFlotRewards_qlearning() {
  // zip rewards into flot data
  var res = [];
  for(var i=0; i<reward_history_qlearning.length; i++) {
    res.push([i, reward_history_qlearning[i]]);
  }
  return res;
}

function getFlotNsteps_qlearning() {
  var res = [];
  for(var i=0; i<nsteps_history_qlearning.length; i++) {
    res.push([i, nsteps_history_qlearning[i]]);
  }
  return res;
}

function initGraph_qlearning(isClear) {
  var container = $("#flotreward_qlearning");
  var res = getFlotRewards_qlearning();
  var res2 = getFlotNsteps_qlearning();
  series = [{
        data: res,
        label: "Sum of rewards",
        lines: {fill: true}
    }, {
        data: res2,
        label: "Number of steps",
        yaxis: 2
  }];
  var plot = $.plot(container, series, {
    grid: {
      borderWidth: 1,
      minBorderMargin: 20,
      labelMargin: 10,
      backgroundColor: {
        colors: ["#FFF", "#e4f4f4"]
      },
      margin: {
        top: 10,
        bottom: 10,
        left: 10,
      }
    },
    xaxes: [{
        min: 1,
        max: nflot_sarsa,
        title: "Episode"
    }],
    yaxes: [{
        min: -10,
        max: 20
    },{
        position: "right",
        min: 0,
        max: 100
    }]
  });

  if (isClear) {
    series[0].data = getFlotRewards_qlearning();
    series[1].data = getFlotNsteps_qlearning();
    plot.setData(series);
    plot.draw();
  } else {
      gid_qlearning = setInterval(function () {
          series[0].data = getFlotRewards_qlearning();
          series[1].data = getFlotNsteps_qlearning();
          plot.setData(series);
          plot.draw();
      }, unit_time);

      return gid_qlearning;
  }
}
