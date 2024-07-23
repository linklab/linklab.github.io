---
layout: page
permalink: /publication/standards
---
<style>
   .panel {
        padding: 0px 0px 0px 0px;
    }
</style>
<div>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <div style="background-color:white;" class="container-fluid">
                    <div class="row content" style="padding-bottom:100px">
                        <section class="content-wrapper title-section">
                            <h2 class="title-level-2">Standards</h2>
                        </section>
                        <section style="padding: 0px 30px; width:100%" class="content-wrapper">
                                <article>
                                    <button class="accordion">International Standards</button>
                                    <h4 class="title-level-4 year">IEEE</h4>
                                    <p>
                                        One of contributors on <strong>IEEE 802.21: Draft IEEE Standard for Local and Metropolitan Area Networks: Media Independent Handover Services</strong>, 2004 ~ 2009.
                                        <a href="https://standards.ieee.org/standard/802_21-2017.html" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                    <br/>
                                    <h4 class="title-level-4 year">IETF</h4>
                                    <p>
                                        CJ. Bernardos, Ed., “<strong>Proxy Mobile IPv6 Extensions to Support Flow Mobility</strong>,” IETF RFC 7864, May 2016.
                                        <a href="https://tools.ietf.org/html/rfc5181" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                    <p>
                                        J.-H. Jang, J.-J. Jee, Y.-H. Han, S.-H. Park, J.-S. Cha, “<strong>Mobile IPv6 Fast Handovers over IEEE 802.16e Networks</strong>,” IETF RFC 5270, June 2008.
                                        <a href="https://tools.ietf.org/html/rfc5270" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                    <p>
                                        M.-K. Shin, Y.-H. Han, S.-E. Kim, D. Premec, “<strong>IPv6 Deployment Scenarios in 802.16 Networks</strong>,” IETF RFC 5181, May 2008.
                                        <a href="https://tools.ietf.org/html/rfc7864" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                </article>
                                <br/><br/><br/>
                                <article>
                                    <button class="accordion">Domestic Standards</button>
                                    <h4 class="title-level-4 year">TTA</h4>
                                    <p>
                                        한연희 외, "<strong>호스트 식별 프로토콜을 사용한 호스트 이동성 및 멀티호밍</strong>," 정보통신단체표준(TTAS), 표준번호: TTAE.IF-RFC5206, 2009.
                                        <a href="http://www.tta.or.kr/data/ttas_view.jsp?pk_num=TTAE.IF-RFC5206&rn=1" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                    <p>
                                        한연희 외, "<strong>와이브로에서의 IPv6 기술</strong>," 정보통신단체표준(TTAS), 표준번호: TTAS.KO-10.0210, 2006.
                                        <a href="http://www.tta.or.kr/data/ttas_view.jsp?pk_num=TTAS.KO-10.0210&rn=1" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </p>
                                </article>
                            </section>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
