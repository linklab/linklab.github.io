---
layout: page
title: Research
permalink: /research/
---

<style>
    @media (min-width: 1200px) {
        .container {
            max-width: 1180px;
            padding: 0;
        }
    }
    .panel {
        padding: 20px 0px 0px 0px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
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
                            <article>
                                <button class="accordion">Fundamentals & Algorithms</button>
                                <div class="panel article-content-1">
                                    <h4 class="title-level-4">1. Reinforcement Learning&nbsp;&nbsp;&nbsp;
                                        <a href="/research/rl">
                                            <i class="fa fa-link" aria-hidden="true"></i>
                                        </a>
                                    </h4>
                                    <br/>
                                    <h4 class="title-level-4">2. Machine Learning&nbsp;&nbsp;&nbsp;<a
                                            href="/research/ml"><i class="fa fa-link"
                                                                        aria-hidden="true"></i></a>
                                    </h4>
                                    <br/>
                                    <h4 class="title-level-4">3. Combinatorial Optimization&nbsp;<a
                                            href="/research/cop"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </h4>
                                </div>
                            </article>
                            <br/>
                            <article>
                                <button class="accordion">Applications</button>
                                <div class="panel article-content-1">
                                    <h4 class="title-level-4">1. Intelligent Networking (5G/6G)&nbsp;&nbsp;&nbsp;<a
                                            href="/research/network"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </h4>
                                    <br/>
                                    <h4 class="title-level-4">2. Control of Internet of Things & Robotics&nbsp;&nbsp;<a
                                            href="/research/robotics"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </h4>
                                    <br/>
                                    <h4 class="title-level-4">3. Financial Engineering&nbsp;&nbsp;&nbsp;<a
                                            href="/research/finance"><i
                                            class="fa fa-link" aria-hidden="true"></i></a>
                                    </h4>
                                </div>
                            </article>
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

