---
layout: page
permalink: /courses/2025/1/advanced_drl
---

<section style="overflow-wrap: anywhere; word-wrap: anywhere;">
    <div class="cw-content container-fluid">
        <div class="cyw-container" style="width: 100%; margin-left: auto; margin-right: auto">
            <div class="container" style="width: 100%; margin-left: auto; margin-right: auto">
                <!--Start Container Div-->
                <div style="background-color:white;" class="container-fluid">
                    <!--Start Content Grid-->
                    <div class="row content">
                        <div class="content-fluid">
                            <div class="cw-content container-fluid">
                                <div class="cyw-container">
                                    <div class="container">
                                        <!--Start Container Div-->
                                        <div style="background-color:white;color:black" class="container-fluid">
                                            <!--Start Content Grid-->
                                            <div class="row content">
                                                <div class="content-wrapper">
                                                    <h2 class="title-level-2">
                                                        Advanced Deep Reinforcement Learning (고급심층강화학습 [240222], Spring Semester, 2025) </h2>
                                                    <p><em><br>“Student-professor relationships are based on trust. Acts,
                                                        which violate this trust, undermine the educational process.
                                                        Your classmates and the professor will not tolerate violations
                                                        of academic integrity.”
                                                    </em></p><br>
                                                    <h3 class="title-level-3">1. Course Schedule &amp; Lecture Notes</h3>
                                                    <br/>
                                                    <div>
                                                        <h3>[공지사항 - 2025.03.04]</h3>
                                                        <i class="fas fa-bullhorn"></i> 본 수업을 수강하는 학생들에게 공지합니다. 본 수업은 심층강화학습(Deep Reinforcement Learning)에 대한 공부를 어느 정도 수행한 학생들을 대상으로 하는 수업입니다.
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> 특히 본 수업은 최신 심층강화학습 기반 <strong><u>4족 보행 로봇</u></strong>, <strong><u>2족 보행 로봇(휴머노이드)</u></strong> 및 <strong><u>기본 모델 (Foundation Model) 기반 로봇</u></strong>에 대하여 함께 공부할 예정입니다.
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> 모든 학생들은<br/>
                                                        &nbsp;&nbsp;&nbsp;1) 본 수업에서 강의하는 내용을 심도있게 공부해야 하며,<br/>
                                                        &nbsp;&nbsp;&nbsp;2) 본 수업에서 제시하는 논문들을 직접읽고 발표를 해야 하며,<br/>
                                                        &nbsp;&nbsp;&nbsp;3) 기말고사를 통하여 본 수업에서 다룬 논문들 전반에 걸친 이해도를 평가받게 됩니다.
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> 본 수업을 수강하기 위하여 꼭 필요한 선수 지식<br/>
                                                        &nbsp;&nbsp;&nbsp;1) 학부과정에서의 자료구조 및 알고리즘 교과목 이수<br/>
                                                        &nbsp;&nbsp;&nbsp;2) 파이썬을 활용한 가상 환경 구축 및 다양한 패키지/모 활용 경험<br/>
                                                        &nbsp;&nbsp;&nbsp;3) 파이썬을 활용한 Tensorflow 또는 Pytorch 기반으로 딥러닝 관련 코딩 수행 경험<br/>
                                                        &nbsp;&nbsp;&nbsp;4) 심층강화학습에 대한 기초 지식<br/>
                                                        <i class="fas fa-bullhorn"></i> 학점은 A+/A, B+/B, C+/C, F 이렇게 총 4개의 그룹으로 나누어 부여할 예정이며, F로 평가될 학생이 없다면 A+/A, B+/B, C+/C 그룹에 대한 학점 분포는 40%, 40%, 20%로 나누어 부여할 예정이지만 강의가 종료된 이후 전반적인 학업성취도를 가늠하여 변경될 수 있습니다.<br/>
<!--
                                                        <i class="fas fa-bullhorn"></i> 본 수업에서 참고하는 Github Repositories<br/>
                                                        &nbsp;&nbsp;&nbsp;1) <strong>Data-Driven Deep Reinforcement Learning Library for Python (d3rlpy)</strong> <a href="https://github.com/takuseno/d3rlpy" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a><br/>
                                                        &nbsp;&nbsp;&nbsp;2) <strong>Clean Offline Reinforcement Learning (CORL)</strong> <a href="https://github.com/corl-team/CORL" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a><br/>
-->
                                                        <i class="fas fa-bullhorn"></i> 본 수업을 이수하기 위하여 참고하면 좋은 강화학습 기본 & 최적화 이론 강의<br/>
                                                        &nbsp;&nbsp;&nbsp;1) <strong>혁펜하임의 강화학습 강의</strong> <a href="https://www.youtube.com/playlist?list=PL_iJu012NOxehE8fdF9me4TLfbdv3ZW8g" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a><br/>
                                                        &nbsp;&nbsp;&nbsp;2) <strong>혁펜하임의 최적화 강의</strong> <a href="https://www.youtube.com/playlist?list=PL_iJu012NOxeMJ5TPPW1JZKec7rhjKXUy" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a><br/>
                                                    </div>
                                                    <table class="table table-responsive table-hover">
                                                        <thead class="thead-light">
                                                        <tr>
                                                            <th scope="col" style="width:4%">#</th>
                                                            <th scope="col" style="width:10%">Date</th>
                                                            <th scope="col" style="width:32%">Book Presentation</th>
                                                            <th scope="col" style="width:32%">Paper Presentation</th>
                                                            <th scope="col" style="width:22%">Notice</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">01</th>
                                                            <td>03월 03일(월)</td>
                                                            <td>
                                                                - 강의 소개<br/>
                                                                - Neural Networks, Loss Functions, and Optimization
                                                                    <a href="https://www.dropbox.com/scl/fi/yfwwspbmzmkejdz7npq6b/RL_0_nn_loss_functions_and_optimization.pdf?rlkey=81gxoln71dq16wo4kenjbwl9l&dl=0" target="_blank">
                                                                        <span class="badge badge-warning">강의 노트</span>
                                                                    </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">02</th>
                                                            <td>03월 10일(월)</td>
                                                            <td>
                                                                - Neural Networks, Loss Functions, and Optimization<br/>
                                                                - Information & Entropy
                                                                    <a href="https://www.dropbox.com/scl/fi/4da2swzn3bu7e2st25m20/RL_1_information_and_entropy.pdf?rlkey=aespgosnla94n0jkdqd4ftq33&dl=0" target="_blank">
                                                                        <span class="badge badge-warning">강의 노트</span>
                                                                    </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">03</th>
                                                            <td>03월 17일(월)</td>
                                                            <td>
                                                                - Information & Entropy
                                                            </td>
                                                            <td>
                                                                - 
                                                            </td>
                                                            <td>
                                                                <!-- <span class="font-weight-bold">
                                                                    Homework #1.
                                                                    <a href="https://www.dropbox.com/scl/fi/iyat052w8oous1p148f9g/HW_1.pdf?rlkey=qggwkbwvkz7ihbutnk247nvrq&dl=0" target="_blank">
                                                                        <span class="badge badge-primary">숙제 설명</span>
                                                                    </a>
                                                                    <br/>
                                                                    기한: 2024년 3월 31일 23시 59분
                                                                </span> -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td>03월 24일(월)</td>
                                                            <td>
                                                                - Information & Entropy
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">05</th>
                                                            <td>03월 31일(월)</td>
                                                            <td>
                                                                - Autoencoder & VAE
                                                            </td>
                                                            <td>
                                                                - 
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td>04월 07일(월)</td>
                                                            <td>
                                                                - Autoencoder & VAE
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">07</th>
                                                            <td>04월 14일(월)</td>
                                                            <td>
                                                                - Autoencoder & VAE
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td>04월 21일(월)</td>
                                                            <td>
                                                                - Deep Q Network (DQN) <br/>
                                                                - Double DQN (DDQN) <br/>
                                                                - <a href="https://arxiv.org/abs/1312.5602" target="_blank">Playing Atari with Deep Reinforcement Learning</a><br/>
                                                                - <a href="https://arxiv.org/abs/1509.06461" target="_blank">Deep Reinforcement Learning with Double Q-learning</a><br/>
                                                                <!-- - <a href="https://arxiv.org/abs/1806.06923" target="_blank">Implicit Quantile Networks for Distributional Reinforcement Learning</a> -->
                                                                <!-- - Implicit Quantile Networks (QR-DQN)
                                                                 <a href="https://www.dropbox.com/scl/fi/0avmjtqv453rvgr147eak/02.Q_Learning.pdf?rlkey=xgib8swsfnloomz59sj2zrbla&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a> -->
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">09</th>
                                                            <td>04월 28일(월)</td>
                                                            <td>
                                                                - Deep Deterministic Policy Gradient (DDPG)<br/>
                                                                - Twin Delayed Deep Deterministic Policy Gradient (TD3)
                                                                <!-- <a href="https://www.dropbox.com/scl/fi/2nm6gt3fbzphxpjn567as/03.DQN.pdf?rlkey=mwwfnqnqzxbi6sn00x32c89jc&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a> --><br/>
                                                                - <a href="https://arxiv.org/abs/1509.02971" target="_blank">Continuous Control with Deep Reinforcement Learning</a><br/>
                                                                - <a href="https://arxiv.org/abs/1802.09477" target="_blank">Addressing Function Approximation Error in Actor-Critic Methods</a>
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>05월 05일(월)</td>
                                                            <td colspan="3" class="center">공휴일 (휴강)</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">11</th>
                                                            <td>05월 12일(월)</td>
                                                            <td>
                                                                - Soft Actor-Critic (SAC)<br/>
                                                                <!-- <a href="https://www.dropbox.com/scl/fi/gjhfhn1sa8vzfuk2pjygn/05.A2C.pdf?rlkey=kl8637ey0iu3jrgb7iz6awvam&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a> -->
                                                                - <a href="https://arxiv.org/abs/1812.05905" target="_blank">Soft Actor-Critic Algorithms and Applications</a>
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">12</th>
                                                            <td>05월 19일(월)</td>
                                                            <td>
                                                                - Imitation Learning<br/>
                                                                - <a href="https://ieeexplore.ieee.org/document/10602544" target="_blank">A Survey of Imitation Learning: Algorithms, Recent Developments, and Challenges</a><br/>
<!--
                                                                - 논문 발표 01: <a href="https://arxiv.org/abs/1805.01954" target="_blank">Behavioral Cloning from Observation</a><br/>
                                                                - 논문 발표 02: <a href="https://arxiv.org/abs/2109.00137" target="_blank">Implicit Behavioral Cloning</a>
-->
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td>
                                                                <div style="margin-left: 1.0em">
                                                                    <strong>Imitation Learning의 목표</strong>
                                                                    <ol>
                                                                        <li>시연을 통해 에이전트가 특정 작업이나 행동을 학습하도록 함.</li>
                                                                        <li>시연 데이터는 **관찰(observations)**과 **행동(actions)** 간의 매핑을 학습하는 데 사용.</li>
                                                                    </ol>
                                                                </div>
                                                                - <a href="https://optreal.github.io/blog/2025/imitation_learning/" target="_blank">참고 자료</a>
                                                                <!--Homework #2.
                                                                    <a href="https://www.dropbox.com/scl/fi/wdas1lo3l3bsx1hhp2x6z/HW_2.pdf?rlkey=8atvaerw5mydoitb4a34x5mne&dl=0" target="_blank">
                                                                        <span class="badge badge-primary">숙제 설명</span>
                                                                    </a>
                                                                    <br/>
                                                                    기한: 2024년 6월 9일 일요일 23시 59분
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">13</th>
                                                            <td>05월 26일(월)</td>
                                                            <td>
                                                                - Offline RL 
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>06월 02일(월)</td>
                                                            <td>
                                                                - Offline RL 
                                                            </td>
                                                            <td>
                                                                - 논문 발표:
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15</th>
                                                            <td>06월 09일(월)</td>
                                                            <td>
                                                                - Offline RL 
                                                            </td>
                                                            <td>
                                                                - 논문 발표: 
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">16</th>
                                                            <td>06월 16일(월)</td>
                                                            <td COLSPAN="2">기말 고사</td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <br/>
<div>
<h3>4족보행 로봇 제어 관련 논문</h3>
<ol style="margin-left: 2.0em">
    <li><strong>Learning Agile Robotic Locomotion Skills by Imitating Animals</strong><br>
        Xue Bin Peng, et al. - RSS, 2020<br>
        <a href="https://roboticsconference.org/2020/program/papers/64.html">논문 링크</a>
    </li>
    <li><strong>RMA: Rapid Motor Adaptation for Legged Robots</strong><br>
        Kumar, Ashish, et al. - RSS, 2021<br>
        <a href="https://arxiv.org/abs/2107.04034">논문 링크</a>
    </li>
    <li><strong>Learning Robust Perceptive Locomotion for Quadrupedal Robots in The Wild</strong><br>
        Miki, Takuma, et al. - Science Robotics, 2022<br>
        <a href="https://www.science.org/doi/10.1126/scirobotics.abk2822">논문 링크</a>
    </li>
    <li><strong>Learning Vision-Guided Quadrupedal Locomotion End-to-End with Cross-Modal Transformers</strong><br>
        Yang, Ruihan, et al. - ICLR, 2022<br>
        <a href="https://arxiv.org/abs/2107.03996">논문 링크</a>
    </li>
    <li><strong>GenLoco: Generalized Locomotion Controllers for Quadrupedal Robots</strong><br>
        Feng, Gilbert, et al. - CoRL, 2022<br>
        <a href="https://arxiv.org/abs/2209.05309">논문 링크</a>
    </li>
    <li><strong>DribbleBot: Dynamic Quadrupedal Manipulation in the Wild</strong><br>
        Ji, Yandong, et al. - ICRA, 2023<br>
        <a href="https://arxiv.org/abs/2304.01159">논문 링크</a>
    </li>
    <li><strong>Learning Quadrupedal Locomotion on Deformable Terrain</strong><br>
        Choi, Sehoon, et al. - Science Robotics, 2023<br>
        <a href="https://www.science.org/doi/10.1126/scirobotics.ade2256">논문 링크</a>
    </li>
    <li><strong>DreamWaQ: Learning Robust Quadrupedal Locomotion With Implicit Terrain Imagination</strong><br>
        Nahrendra, I Made Aswin, et al. - ICRA, 2023<br>
        <a href="https://arxiv.org/abs/2301.10602">논문 링크</a>
    </li>
</ol>

<h3>휴머노이드 (이족보행) 로봇 제어 관련 논문</h3>
<ol style="margin-left: 2.0em">
    <li><strong>Learning Locomotion Skills for Cassie: Iterative Design and Sim-to-Real</strong><br>
        Xie, Zhaoming, et al. - PMLR, 2020<br>
        <a href="https://proceedings.mlr.press/v100/xie20a.html">논문 링크</a>
    </li>
    <li><strong>Adapting Rapid Motor Adaptation for Bipedal Robots</strong><br>
        Kumar, Ashish, et al. - IROS, 2022<br>
        <a href="https://ashish-kmr.github.io/a-rma/">논문 링크</a>
    </li>
    <li><strong>Reinforcement Learning for Versatile, Dynamic, and Robust Bipedal Locomotion Control</strong><br>
        Li, Zhongyu, et al. - 2024<br>
        <a href="https://arxiv.org/abs/2106.02149">논문 링크</a>
    </li>
</ol>

<h3>기본 모델 (Foundation Model) 기반 로봇 제어 관련 논문</h3>
<ol style="margin-left: 2.0em">
    <li><strong>RT-1: Robotics Transformer for Real-World Control at Scale</strong><br>
        Brohan, Anthony, et al. - CoRL, 2022<br>
        <a href="https://arxiv.org/abs/2212.06817">논문 링크</a>
    </li>
    <li><strong>COMPASS: Contrastive Multimodal Pretraining for Autonomous Systems</strong><br>
        Ma, Shuang, et al. - IROS, 2022<br>
        <a href="https://arxiv.org/abs/2203.15788">논문 링크</a>
    </li>
    <li><strong>GATO: A Generalist Agent</strong><br>
        Reed, Scott, et al. - DeepMind, 2022<br>
        <a href="https://arxiv.org/abs/2205.06175">논문 링크</a>
    </li>
    <li><strong>DayDreamer: World Models for Physical Robot Learning</strong><br>
        Wu, Philipp, et al. - CoRL, 2022<br>
        <a href="https://arxiv.org/abs/2206.14176">논문 링크</a>
    </li>
    <li><strong>Video PreTraining (VPT): Learning to Act by Watching Unlabeled Online Videos</strong><br>
        Baker, Bowen, et al. - NIPS, 2022<br>
        <a href="https://arxiv.org/abs/2206.11795">논문 링크</a>
    </li>
    <li><strong>RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation</strong><br>
        Google DeepMind Team - Google DeepMind, 2023<br>
        <a href="https://arxiv.org/abs/2306.11706">논문 링크</a>
    </li>
    <li><strong>ViNT: A Foundation Model for Visual Navigation</strong><br>
        Shah, Dhruv, et al. - CoRL, 2023<br>
        <a href="https://arxiv.org/abs/2306.14846">논문 링크</a>
    </li>
    <li><strong>RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control</strong><br>
        Brohan, Anthony, et al. - CoRL, 2023<br>
        <a href="https://arxiv.org/abs/2307.15818">논문 링크</a>
    </li>
    <li><strong>LIV: Language-Image Representations and Rewards for Robotic Control</strong><br>
        Yecheng Jason Ma, et al. - ICML, 2023<br>
        <a href="https://arxiv.org/abs/2306.00958">논문 링크</a>
    </li>
    <li><strong>PACT: Perception-Action Causal Transformer for Autoregressive Robotics Pre-Training</strong><br>
        Bonatti, Rogerio, et al. - IROS, 2023<br>
        <a href="https://arxiv.org/abs/2209.11133">논문 링크</a>
    </li>
    <li><strong>RT-2-X: Open X-Embodiment: Robotic Learning Datasets and RT-X Models: Open X-Embodiment Collaboration</strong><br>
        Brohan, Anthony, et al. - ICRA, 2024<br>
        <a href="https://arxiv.org/abs/2310.08864">논문 링크</a>
    </li>
</ol>
</div>
                                                    <br/>
                                                    <h3 class="title-level-3">2. Course Information</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - Lecturer: 한연희 교수 (Rm. 2공학관 423호, Email: yhhan@koreatech.ac.kr)
                                                        </li>
                                                        <li>
                                                            - Classes: 월요일 (16:00 ~ 16:50)
                                                        </li>
                                                        <li>
                                                            - Lecture Room: 2공학관 317호
                                                        </li>
                                                        <li>
                                                            - Prerequisites: 머신러닝 및 딥러닝 기본 지식, 파이썬 기반의 PyTorch/Tensorflow 기본 코딩 경험
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">3. Presentation Evaluation</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - BOOK: 내용 이해도 (60%), 발표 자료 충실도 (40%) - 반드시 모든 팀원이 모두 골고루 발표, 팀원들에게 동일한 점수 부여
                                                        </li>
                                                        <li>
                                                            - PAPER: 내용 이해도 (50%), 발표 자료 충실도 (30%), 발표 역량 (20%)
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">4. Home Work Guide</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - 추후 구체적인 숙제 가이드 라인 제공
                                                        </li>
                                                        <li>
                                                            - 교재를 기반으로 강화학습 코딩 및 실험 결과 담은 리포트 제출
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">5. References</h3>
                                                    <br/>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>[주교재]</h4>
                                                            <ul>
                                                                <li>- 밑바닥부터 시작하는 딥러닝 4 (파이썬으로 직접 구현하며 배우는 강화 학습 알고리즘
)
                                                                    <a href="https://product.kyobobook.co.kr/detail/S000212020531" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>- 수업 시간 PDF로 제공</li>
                                                                <li>- 심층강화학습 핵심 논문</li>
                                                            </ul>
                                                            <h4>[부교재]</h4>
                                                            <ul>
                                                                <li>
                                                                    - 심층 강화학습 인 액션 : 기본 개념부터 파이썬 기반의 최신 알고리즘 구현까지
                                                                    <a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791190665612" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - 파이썬 기반 강화학습 알고리듬 DP, Q-Learning, AC, DQN, TRPO, PPO, DDPG, TD3 | Imitation Learning, ESBAS 알아보기
                                                                    <a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791161755571&orderClick=LAH&Kc=#N" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - 심층강화학습 주요 논문 모음: <a href="https://spinningup.openai.com/en/latest/spinningup/keypapers.html" target="_blank" class="font-weight-bold"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    - PyTorch 튜토리얼: <a href="https://github.com/MorvanZhou/PyTorch-Tutorial" target="_blank" class="font-weight-bold"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <h3 class="title-level-3">6. Logistics</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>- <span class="font-weight-bold">Attendance</span>: one class absence will result in the deduction
                                                            of two points out of 100 points. Five absences will not
                                                            result in ten points deduction, but “failure” (i.e., grade
                                                            ‘F’) in this course.
                                                        </li>
                                                        <li>- <span class="font-weight-bold">Homework</span>: much intensive homework will be set. Any cheating
                                                            (or copying) will result in grade ‘F’.
                                                        </li>
                                                        <li>- <span class="font-weight-bold">Exam</span>: there will be the final examination for the
                                                            evaluation of the knowledge learned from the class.
                                                        </li>
                                                    </ul>
                                                    <br>
                                                    <h3 class="title-level-3">7. Lecture Evaluation</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>Attendance (10%), Book Presentation (20%), Paper Presentation (20%), Homework Reports (20%), Final Exam. (30%)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                            <!--End Content Grid-->
                                        </div>
                                    </div>
                                </div>
                                <!--End Container Div-->
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <!--End Content Grid-->
                </div>
            </div>
        </div>
        <!--End Container Div-->
    </div>
</section>
