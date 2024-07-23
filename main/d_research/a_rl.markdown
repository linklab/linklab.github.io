---
layout: page
permalink: /research/rl
---

<style>
    ol.study {
        list-style: inside;
        padding-top: 0.0em;
    }
    .article-content-1 > ul, ol {
        margin-top: 0em;
        margin-left: 0px;
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1190px;
            padding: 0;
        }
    }
</style>

<section>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <!--Start Container Div-->
                <div style="background-color:white;" class="container-fluid">
                        <!--Start Content Grid-->
                        <section class="row content" style="padding-bottom:100px">
                            <section style="padding: 0px 0px; width:100%" class="content-wrapper">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <article>
                                            <button class="accordion">Probability & Statistics</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Probability, Bayes’ theorem
                                                        <a href="https://www.dropbox.com/s/ghpol7un05mu37q/RL-0_probability.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Information, Entropy, Cross Entropy, KL Divergence
                                                        <a href="https://www.dropbox.com/s/vwg6kbpls7iq35k/RL-0_entropy.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Likelihood, MLE, and MAP
                                                        <a href="https://www.dropbox.com/s/vwg6kbpls7iq35k/RL-0_entropy.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Classical RL</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Introduction to Reinforcement Learning
                                                        <a href="https://www.dropbox.com/s/swry5n8wljb4g53/RL-01.%EA%B0%95%ED%99%94%ED%95%99%EC%8A%B5%20%EA%B0%9C%EC%9A%94.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Multi-Armed Bandit
                                                        <a href="https://www.dropbox.com/s/6hbw995b0pshtkp/RL-02.%EB%A9%80%ED%8B%B0%EC%95%94%EB%93%9C%EB%B0%B4%EB%94%A7.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                멀티암드 관련 코드
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_02/10-armed-bandit.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Markov Decision Process
                                                        <a href="https://www.dropbox.com/s/k5p1zboj5pfn68r/RL-03.%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84%20%EA%B2%B0%EC%A0%95%20%EA%B3%BC%EC%A0%95.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                마르코프 결정 과정 관련 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_03/markov_decision_process.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Dynamic Programming
                                                        <a href="https://www.dropbox.com/s/cx6i74uerjyg1tr/RL-04.%EB%8F%99%EC%A0%81%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                정책 평가(Policy Evaluation) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_04/policy_evaluation.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                정책 반복(Policy Iteration) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_04/policy_evaluation.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                가치 반복(Value Iteration) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_04/value_iteration.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <strong>동적 프로그래밍의 정책 반복 및 가치 반복 실험 - 자바스크립트 버전</strong>
                                                                <a href="/research/rl/dp" target="_blank">
                                                                    <i class="fa fa-link" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Monte Carlo Method
                                                        <a href="https://www.dropbox.com/s/fvzhxs8xzha58zs/RL-05.%EB%AA%AC%ED%85%8C%EC%B9%B4%EB%A5%BC%EB%A1%9C%20%EB%B0%A9%EB%B2%95.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                몬테카를로 예측(Prediction) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_05/grid_world_mc_prediction.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                행동 가치의 몬테카를로 예측(Prediction) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_05/grid_world_mc_prediction_action.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                탐험적 시작 기반 몬테카를로 제어(Control) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_05/grid_world_mc_exploring_start_control.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                소프트 정책 기반 몬테카를로 제어(Control) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_05/grid_world_mc_soft_policy_control.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                Off-policy 몬테카를로 제어(Control) 코드 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_05/grid_world_mc_off_policy_control.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Temporal-Difference Learning
                                                        <a href="https://www.dropbox.com/s/mxkw10pk3a0c72k/RL-06.%EC%8B%9C%EA%B0%84%EC%B0%A8%20%ED%95%99%EC%8A%B5.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                시간차 예측 (환경: 랜덤 워크)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_06/random_walk_td_learning.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                시간차 예측 (환경: 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_06/grid_world_td_prediction.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                시간차 제어 (환경: 절벽이 있는 그리드 월드)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_06/cliff_walking.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <strong>SARSA와 Q-Learning 실험 - 자바스크립트 버전</strong>
                                                                <a href="/research/rl/td" target="_blank">
                                                                    <i class="fa fa-link" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        n-step TD Learning
                                                    </li>
                                                    <li>
                                                        Planning & Learning
                                                        <a href="https://www.dropbox.com/s/mxkw10pk3a0c72k/RL-06.%EC%8B%9C%EA%B0%84%EC%B0%A8%20%ED%95%99%EC%8A%B5.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                Dyna-Q, Dyna-Q+, Prioritized Dyna-Q (환경: 미로)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_08/maze_dyna.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        실습을 위한 RL 환경
                                                        <ul class="inner_study">
                                                            <li>
                                                                그리드 월드/절벽이 있는 그리드 월드
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/environments/gridworld.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                랜덤 워크
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/environments/randomwalk.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                미로
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/environments/maze.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                         </ul>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <article>
                                            <button class="accordion">Value-based Deep RL</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        DQN (from Vanilla DQN to Nature DQN)
                                                        <a href="https://www.dropbox.com/s/sn8hozn6pkhqp73/RL-DRL-01.DQN.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                Nature DQN (Tensorflow 2.2)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_10/dqn.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                Frame Skipping and Pre-Processing for Deep Q-Networks on Atari 2600 Games
                                                                <a href="https://danieltakeshi.github.io/2016/11/25/frame-skipping-and-preprocessing-for-deep-q-networks-on-atari-2600-games/" target="_blank">
                                                                    <i class="fa fa-external-link" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                Deep Reinforcement Learning Hands-On - Second Edition
                                                                <a href="https://subscription.packtpub.com/book/data/9781838826994" target="_blank">
                                                                    <i class="fa fa-external-link" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Double DQN, Dueling DQN, PER (Prioritized Experience Replay)
                                                        <ul class="inner_study">
                                                            <li>
                                                                Double DQN (Tensorflow 2.2)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_10/double_dqn.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                Dueling DQN (Tensorflow 2.2)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_10/dueling_dqn.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                Dueling Double DQN (Tensorflow 2.2)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_10/dueling_double_dqn.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                PER + Dueling Double DQN (Tensorflow 2.2)
                                                                <a href="https://github.com/linklab/link_rl_book_codes/blob/master/chapter_10/per_dueling_double_dqn.py" target="_blank">
                                                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Distributional DQN
                                                        <a href="https://colab.research.google.com/drive/1li_7kgMsE1-TfWTfUHpyNVFLGi6n3bZi#scrollTo=hSBfNONxP85n" target="_blank">
                                                            <img src="/assets/images/colab.png" width="7%" />
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <br/>
                                        <article>
                                            <button class="accordion">Policy-based Deep RL</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Policy Gradient & REINFORCE (Monte Carlo Policy Gradient)
                                                        <a href="https://www.dropbox.com/s/tnym8ojximni2l2/RL-5_Policy_Gradient_REINFORCE.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Actor & Critic Off-Policy RL</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Deep Deterministic Policy Gradient (DDPG) & Twin Delayed DDPG (TD3)
                                                        <a href="https://www.dropbox.com/s/mfnq8tnn0l5xz07/RL-8_DDPG_TD3.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Soft Actor-Critic (SAC)
                                                        <a href="https://www.dropbox.com/s/zjxigxn3gsm9sr8/RL-9_SAC.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Actor & Critic On-Policy RL</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Advantage Actor-Critic (A2C) & Asynchronous Advantage Actor-Critic (A3C)
                                                        <a href="https://www.dropbox.com/s/3b373voz2xpozg6/RL-6_A2C_A3C.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Conservative Policy Improvement & PPO
                                                        <a href="https://www.dropbox.com/s/vq2hypldrb1q09s/RL-7_PPO.pdf?dl=0" target="_blank">
                                                            <img class="pdf_icon" src="/assets/images/pdf_icon.png" />
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </section>
                            <br/>
                        </section>
                        <!--End Content Grid-->
                    </div>
            </div>
        </div>
        <!--End Container Div-->
    </div>
</section>

<script type="text/javascript">
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("acc_active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    for (var i = 0; i < acc.length; i++) {
        acc[i].click();
    }
</script>