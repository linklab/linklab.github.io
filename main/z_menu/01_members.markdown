---
layout: page
title: Members
permalink: /members/
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
                <div style="background-color:white; font-size: 120%; font-weight: bold" class="container-fluid">
                    <!--Start Content Grid-->
                    <div class="row content">
                        <div style="padding:1.0em" class="content-wrapper">
                            <h4 class = "title-level-4 year"> 
                                LINK Lab. Director: Prof. Youn-Hee Han
                                <a href="/members/professor">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </h4>
                            <h4 class = "title-level-4 year"> 
                                LINK Lab. Members (Current Students & Researchers) 
                                <a href="/members/students_and_members" target="_blank">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </h4>
                            <h4 class = "title-level-4 year"> 
                                LINK Lab. Alumni
                                <a href="/members/alumni" target="_blank">
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