---
layout: page
permalink: /research/cop
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
            <div style="background-color:white;" class="container-fluid">
                <section class="row content" style="padding-bottom:100px">
                <section style="padding: 0px 3px; width:100%" class="content-wrapper">
                    <article>
                        <button class="accordion">Neural Combinatorial Optimization (NCO) - Related Works</button>
                        <div class="panel article-content-1 research-content">
                            <ol class="study">
                                <li>
                                    <span>
                                        Ruben Solozabal, Josu Ceberio, and Martin Takáč,
                                        <span style="font-weight: bold">
                                            "Constrained Combinatorial Optimization with Reinforcement Learning,"
                                        </span>
                                        arXiv:2006.11984, 2022
                                        <a href="https://arxiv.org/abs/2006.11984" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Andoni I. Garmendia, Josu Ceberio, Alexander Mendiburu,
                                        <span style="font-weight: bold">
                                            "Neural Combinatorial Optimization: a New Player in the Field,"
                                        </span>
                                            arXiv:2205.01356, 2022
                                        <a href="https://arxiv.org/abs/2205.01356" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Wouter Kool, Herke van Hoof, Max Welling,
                                        <span style="font-weight: bold">
                                            "Attention, Learn to Solve Routing Problems!,"
                                        </span>
                                        ICLR 2019
                                        <a href="https://arxiv.org/abs/1803.08475" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Mohammadreza Nazari, Afshin Oroojlooy, Lawrence V. Snyder, and Martin Takáč,
                                        <span style="font-weight: bold">
                                            "Reinforcement Learning for Solving the Vehicle Routing Problem,"
                                        </span>
                                        NIPS 2018
                                        <a href="https://arxiv.org/abs/1802.04240" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Irwan Bello, Hieu Pham, Quoc V. Le, Mohammad Norouzi, and Samy Bengio,
                                        <span style="font-weight: bold">
                                            "Neural Combinatorial Optimization with Reinforcement Learning,"
                                        </span>
                                        ICLR 2017
                                        <a href="https://arxiv.org/abs/1611.09940" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Oriol Vinyals, Meire Fortunato, and Navdeep Jaitly,
                                        <span style="font-weight: bold">
                                            "Pointer networks,"
                                        </span>
                                        NIPS 2015
                                        <a href="https://proceedings.neurips.cc/paper/2015/file/29921001f2f04bd3baee84a12e98098f-Paper.pdf" target="_blank">
                                            <i class="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <img src="/assets/images/research/nco_history.png" />
                        </div>
                        <br/>
                    </article>
                    <article>
                        <button class="accordion">Materials</button>
                        <div class="panel article-content-1 research-content">
                            <ol class="study">
                                <li>
                                    <span style="font-weight: bold">Operations Research</span>
                                    <ol style="padding-left: 1.0em">
                                        <li>
                                            Operations Research with Reinforcement Learning
                                            <a href="https://www.dropbox.com/s/3vioufswbyfx6ri/OR.pdf?dl=0" target="_blank">
                                                <i class="fa fa-external-link" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            실습
                                            <ol style="padding-left: 1.0em">
                                                <li>
                                                    Knapsack Problem
                                                    <a href="https://colab.research.google.com/drive/1yzl_Od_QdGbzFTTV8NuMNgj-oKEcBKbZ" target="_blank">
                                                        <img src="/assets/images/colab.png" width="5%" />
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </article>
                    <br/>
                    <br/>
                </section>
            </section>
            </div>
        </div>
    </div>
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


