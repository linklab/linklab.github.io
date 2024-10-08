---
layout: page
permalink: /research/robotics
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
            max-width: 1200px;
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
                <section style="padding: 0px 0px; width:100%" class="content-wrapper">
                    <article>
                        <button class="accordion">Robotics - Materials</button>
                        <div class="panel article-content-1 research-content">
                        </div>
                        <br/>
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


