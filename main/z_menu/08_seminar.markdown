---
layout: page
title: Seminar
permalink: /seminar/
---

<section class="content-wrapper">
    <article>
        <button class="accordion">Graduate</button>
        <div class="panel article-content-1">
            <br/>
            <h4 class="title-level-4">Academic Papers&nbsp;&nbsp;
                <a href="/seminar/graduate">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </a>
            </h4>
            <br/>
        </div>
    </article>
    <br/>
    <article>
        <button class="accordion">Undergraduate</button>
        <div class="panel article-content-1">
            <br/>
            <h4 class="title-level-4">2024 ~ 2025 Winter School: 심층 강화학습
                <a href="/seminar/undergraduate/winter_2024_2025">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </a>
            </h4>        
            <br/>
            <h4 class="title-level-4">2021 ~ 2022 Winter School: 만들면서 배우는 파이토치 딥러닝
                <a href="/seminar/undergraduate/winter_2021_2022">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </a>
            </h4>
            <br/>
            <h4 class="title-level-4">2021 Fall School: 케라스 창시자에게 배우는 딥러닝
                <a href="/seminar/undergraduate/fall_2021">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </a>
            </h4>
            <br/>
            <h4 class="title-level-4">2020 ~ 2021 Winter School: 심층 강화학습 인 액션
                <a href="/seminar/undergraduate/winter_2020_2021">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </a>
            </h4>
            <br/>        
        </div>
    </article>
    <br/>
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