---
layout: page
title: Publication
permalink: /publication/
---

<style>
    h4 {
        font-weight: bold;
    }
</style>
<section>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <!--Start Container Div-->
                <div style="background-color:white; font-size: 110%; font-weight: bold" class="container-fluid">
                    <!--Start Content Grid-->
                    <div class="row content">
                        <div style="padding:1.0em" class="content-wrapper">
                            <h4 class = "title-level-4 year"> 
                                Academic Papers
                                <a href="/publication/papers">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </h4>
                            <h4 class = "title-level-4 year"> 
                                Patents 
                                <a href="/publication/patents">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </h4>
                            <h4 class = "title-level-4 year"> 
                                Standards
                                <a href="/publication/standards">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </h4>
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