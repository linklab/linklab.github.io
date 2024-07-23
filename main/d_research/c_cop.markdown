{# !!! research_areas.html page, anchor links are synchronized to the old link pages and resources #}

{% extends "base.html" %}
{% block title %} 한국기술교육대학교 LINK 연구실 위치 {% endblock %}
{% block additional_style %}
{# custom list styles for current page #}
.list-style-1, .list-style-1 > :not(.list-style-2) {
    font-size: 14px;
    margin-left: 20px;
    list-style-type: decimal;
}
.list-style-2, .list-style-2 * {
    font-size: 14px;
    margin-left: 20px;
    list-style-type: circle;
 }
.list-style-2 > :not(.list-style-1) {
    margin-top:    5px;
    margin-bottom: 10px;
}
{% endblock %}

{% block body %}
<!-- page-title -->
<section class="page-title centred" style="background-image: url(/assets/images/landscape/koreatech_landscape_2.jpg);">
  <div class="container">
    <div class="content-box">
      <div class="title">Research Areas</div>
      <ul class="bread-crumb">
        <li><a href="/">Home</a></li>
        <li><a href="/menu/research">Research</a></li>
        <li>Research Areas</li>
        <li>Operation Research</li>
      </ul>
    </div>
  </div>
</section>
<!-- page-title end -->

<section>
<div class="cw-content container-fluid">
            <div class="cyw-container">
                <div class="container">
                    <!--Start Container Div-->

<div style="background-color:white;" class="container-fluid">
 <!--Start Content Grid-->
<section class="row content" style="padding-bottom:100px">
    <section class="content-wrapper title-section">
{#        <h2 class="title-level-1">Research Areas</h2>#}
    </section>
    <section style="padding: 0px 60px; width:100%" class="content-wrapper">
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
        </article>
        <article>
            <button class="accordion">Fundamentals</button>
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
        <article>
            <button class="accordion">Application</button>
            <div class="panel article-content-1 research-content" style="max-height: 983px;">
                <ol class="study">
                </ol>
            </div>
        </article>
        <br/>
        <br/>
    </section>
</section>

<!--End Content Grid-->
</div>
</div>
</div>
<!--End Container Div-->
</div>
</section>
{% endblock %}

<!-- script for accordion -->
{% block additional_javascript %}
    <script type="text/javascript">
        const acc2 = document.getElementsByClassName("accordion");

        for (let i2 = 0; i2 < acc.length; i2++) {
            acc2[i2].click();
        }
    </script>
{% endblock %}

