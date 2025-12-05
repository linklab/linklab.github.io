---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
permalink: /courses/2025/2/dl
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
                                                        Deep Learning and Practice (딥러닝및실습) - CSE533, Fall Semester, 2025 </h2>
                                                    <p><em><br>“Student-professor relationships are based on trust. Acts, which violate this trust, undermine the educational process. Your classmates and the professor will not tolerate violations of academic integrity.”</em></p><br>
                                                    <h3 class="title-level-3">
                                                    1. Course Schedule &amp; Lecture Notes
                                                    <span>
                                                        <a style="color: blue; font-size: 0.6em" href="https://github.com/linklab/link_dl">[수업 실습 코드]</a>, 
                                                        <a style="color: blue; font-size: 0.6em" href="https://docs.google.com/document/d/1IHHz9ehpnQ4FrCDciywhweyIlvtpZ_0RZ7w2wNTtWyk/edit?usp=sharing">[수업 질의 응답]</a>
                                                    </span>
                                                    </h3>
                                                    <table class="table table-bordered">
                                                        <thead class="thead-light">
                                                        <tr>
                                                            <th scope="col" style="width:8%">주차</th>
                                                            <th scope="col" style="width:5%">회</th>
                                                            <th scope="col" style="width:20%">Date</th>
                                                            <th scope="col" style="width:35%">Lecture</th>
                                                            <th scope="col" style="">Notice</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">1주차</th>
                                                            <th scope="row">01</th>
                                                            <td>09월 01일(월)</td>
                                                            <td>
                                                                - Course Introduction<br/>
                                                                - 00. Introduction to Deep Learning
                                                                <a href="https://www.dropbox.com/scl/fi/7egbxsajo0yqis1angqoc/00.dl_101.pdf?rlkey=odh4tihyg79uhatz5aicdkksi&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - _01_code 로컬 디렉토리 및 _02_homeworks 로컬 디렉토리 변경 사항 초기화<br/>
                                                                : git checkout -- _01_code<br/>
                                                                : git checkout -- _02_homeworks<br/>
                                                                - link_dl 리포지토리 최신화<br/>
                                                                : git pull
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">02</th>
                                                            <td>09월 02일(화)</td>
                                                            <td>
                                                                - 00. Introduction to Deep Learning<br/>
                                                                - 01. Development Environment
                                                                <a href="https://www.dropbox.com/scl/fi/gg3kfy55q28fa17e8j8db/01.development_environment.pdf?rlkey=hr9bw8wyz24s8bals0pf320mu&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">2주차</th>
                                                            <th scope="row">03</th>
                                                            <td>09월 08일(월)</td>
                                                            <td>
                                                                - 02. Tensors
                                                                <a href="https://www.dropbox.com/scl/fi/7tgzon6txclhis4o6qr5m/02.tensors.pdf?rlkey=qx9zze1cvltdsxejjoitjxfcu&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                                <br/>
                                                                - 03. Real-World Data to Tensors
                                                                <a href="https://www.dropbox.com/scl/fi/nq0zi6k394c4pmr8ck01k/03.real_world_data_to_tensors.pdf?rlkey=9kddwc87w95tyzqmcaqlxkqu4&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - 데이터 (zip 파일)
                                                                <a href="https://drive.google.com/file/d/1aUO7ca_cc8UoaJ_EAZZ9wmcbqV8HF_RM/view?usp=sharing" target="_blank">
                                                                    <span class="badge badge-info">다운 로드</span>
                                                                </a><br/>
                                                                : 다운받은 zip 파일을 해제하여 _00_data 폴더를 확인 후 link_dl 폴더 하위에 _00_data 폴더 위치 시킴
                                                                <img src="/assets/images/courses/data.png" width="100%"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td>09월 09일(화)</td>
                                                            <td>
                                                                - 03. Real-World Data to Tensors
                                                            </td>
                                                            <td>
                                                                - Tensor 및 Tensor Operations 에 관한 특강 (조교)
                                                                <a href="https://www.dropbox.com/scl/fi/w4olgbnzke21g14z8mfth/02.tensors_operations.pdf?rlkey=ojoo2o6mpa4dhd67u07epbuhx&dl=0" target="_blank">
                                                                    <span class="badge badge-info">강의 노트</span>
                                                                </a><br/>
                                                                - 위 특강에 대한 강의 동영상은 EL2에서 확인<br/>
                                                                - <strong>Homework #1 (기한: 9월 27일 토요일 23시 59분)</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/xs9448zo3eely5ey63de4/HW_1.pdf?rlkey=uvrqhuoti4vbz9kwe2ifaltq7&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">3주차</th>
                                                            <th scope="row">05</th>
                                                            <td>09월 15일(월)</td>
                                                            <td>
                                                                - 03. Real-World Data to Tensors
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td>09월 16일(화)</td>
                                                            <td>
                                                                - 04. Artificial Neuron, Gradient Descent, and Backpropagation
                                                                <a href="https://www.dropbox.com/scl/fi/syp32lz9n7zanyc0fltau/04.artificial_neuron_and_gradient_descent_and_bp.pdf?rlkey=tciwtci4y343k3wte4iwfp3g3&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">4주차</th>
                                                            <th scope="row">07</th>
                                                            <td>09월 22일(월)</td>
                                                            <td>
                                                                - 05. Autograd
                                                                <a href="https://www.dropbox.com/scl/fi/5ne1gdsl8b5zc1rrvn4dp/05.autograd.pdf?rlkey=329aig8q9hjv0utznkpqnck3s&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td>09월 23일(화)</td>
                                                            <td>
                                                                - 06. FCN (Fully-Connected Network)
                                                                <a href="https://www.dropbox.com/scl/fi/52iaig6x11nz9gildedsr/06.fcn.pdf?rlkey=jtv9ve4ogtkl2sln2rye21qfa&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">5주차</th>
                                                            <th scope="row">09</th>
                                                            <td>09월 29일(월)</td>
                                                            <td>
                                                                - 07. Loss Functions
                                                                <a href="https://www.dropbox.com/scl/fi/38jk04eienp8g6w4bncui/07.loss_functions.pdf?rlkey=g8opc5vehg2cayte8vr1wwegg&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - <strong>Homework #2</strong> (기한: 10월 18일 23시 59분)
                                                                <a href="https://www.dropbox.com/scl/fi/eyxjilou6e2ozf142nma3/HW_2.pdf?rlkey=4x5uv56lb26kle062qgtanr5m&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>09월 30일(화)</td>
                                                            <td>
                                                                - 08. Learning and Optimization
                                                                <a href="https://www.dropbox.com/scl/fi/9uvcqdcflornsnbwe33v1/08.learning_and_optimization.pdf?rlkey=1v67649gnc4gp8f96ef07wnjr&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - [NOTE] 9월 30일 수업은 10월 1일 저녁 9시 Zoom 온라인 수업으로 대체. Zoom 온라인 수업 링크는 EL2 사이트의 공지사항 참고. 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">6주차</th>
                                                            <th scope="row">11</th>
                                                            <td>10월 06일(월)</td>
                                                            <td>
                                                                추석 (휴강)
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">12</th>
                                                            <td>10월 07일(화)</td>
                                                            <td>
                                                                추석 (휴강)
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">7주차</th>
                                                            <th scope="row">13</th>
                                                            <td>10월 13일(월)</td>
                                                            <td>
                                                                - 09. FCN Best Practice
                                                                <a href="https://www.dropbox.com/scl/fi/t9ug3331pr4lprvtepd3t/09.fcn_best_practice.pdf?rlkey=f80mac2i0ueprtijumvxbo359&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>10월 14일(화)</td>
                                                            <td>
                                                                - 10. Convolutional Neural Network (CNN)
                                                                <a href="https://www.dropbox.com/scl/fi/bnixgu5yffvc3mk30z7w6/10.cnn.pdf?rlkey=hrtg95e23re2361dpwiudapmy&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">8주차</th>
                                                            <th scope="row">15</th>
                                                            <td>10월 20일(월)</td>
                                                            <td>
                                                                - 11. CNN Architectures
                                                                <a href="https://www.dropbox.com/scl/fi/8uwsj8j1jm7kiny8s1jny/11.cnn_architectures.pdf?rlkey=nqq7j65ytktjyk4osy16uwauq&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">16</th>
                                                            <td>10월 21일(화)</td>
                                                            <td>
                                                                - 11. CNN Architectures
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">9주차</th>
                                                            <th scope="row">17</th>
                                                            <td>10월 27일(월)</td>
                                                            <td colspan="2" class="centred">
                                                                <strong>중간 고사</strong>
                                                                <br/>
                                                                장소: 2공학관 408호, 시간: 16시 ~ 17시 50분
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">18</th>
                                                            <td>10월 28일(화)</td>
                                                            <td>
                                                                - 12. Optimizers
                                                                <a href="https://www.dropbox.com/scl/fi/eh6fntfteghv3a51nets2/12.optimizers.pdf?rlkey=me6hhjmirfu1ocopcnpe8j9va&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - CPU vs. GPU
                                                                <a href="https://colab.research.google.com/drive/1ERTiVfsKDnzBLRT9AH-6SFmuD-uKL_db?usp=sharing" target="_blank">
                                                                    <img src="/assets/images/colab.png" width="10%">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">10주차</th>
                                                            <th scope="row">19</th>
                                                            <td>11월 03일(월)</td>
                                                            <td>
                                                                - 13. Regularization
                                                                <a href="https://www.dropbox.com/scl/fi/o8ywcjy43i5t6717t7ge2/13.regularization.pdf?rlkey=j619nrtq4n9jjkrsfifoqs5ei&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">20</th>
                                                            <td>11월 04일(화)</td>
                                                            <td>
                                                                - 14. Normalization
                                                                <a href="https://www.dropbox.com/scl/fi/aq5b02yabg3bk060aze4a/14.normalization.pdf?rlkey=4fsutsbpnq1spg7ljy53nwksi&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - <strong>Homework #3 (기한: 11월 22일 (토))</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/dhxk56odbez9z1a4i53bp/HW_3.pdf?rlkey=0js5rbym68sg5fk6wd661wd2x&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">11주차</th>
                                                            <th scope="row">21</th>
                                                            <td>11월 10일(월)</td>
                                                            <td>
                                                                - 14. Normalization
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">22</th>
                                                            <td>11월 11일(화)</td>
                                                            <td>
                                                                - 15. Data Augmentation
                                                                <a href="https://www.dropbox.com/scl/fi/e2rqrjgctuks35bz78r6x/15.data_augmentation.pdf?rlkey=jnex9hks7zu8pw02rwh30l20w&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">12주차</th>
                                                            <th scope="row">23</th>
                                                            <td>11월 17일(월)</td>
                                                            <td>
                                                                - 16. Modern CNNs
                                                                <a href="https://www.dropbox.com/scl/fi/8jsvqnr7rbwccp9rx9xcs/16.modern_cnns.pdf?rlkey=zzv5zd0qvg9rjpklbl5bekb01&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">24</th>
                                                            <td>11월 18일(화)</td>
                                                            <td>
                                                                - 17. Recurrent Neural Network (RNN)
                                                                <a href="https://www.dropbox.com/scl/fi/klh9sxi2xl7fe2eaj7cm6/17.rnn.pdf?rlkey=4g8e1z4wgmd1c2oyzwlhevmgh&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">13주차</th>
                                                            <th scope="row">25</th>
                                                            <td>11월 24일(월)</td>
                                                            <td>
                                                                - 17. Recurrent Neural Network (RNN)
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">26</th>
                                                            <td>11월 25일(화)</td>
                                                            <td>
                                                                - 18. LSTM and Its Application
                                                                <a href="https://www.dropbox.com/scl/fi/htxrkv351ogkghqriz5wf/18.lstm_and_applications.pdf?rlkey=i2x6hpj2jy5k08r4ex2u1zzfv&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - <strong>Homework #4 (기한: 12월 19일 (금))</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/u2jyz65vn3kc10lgpl78t/HW_4.pdf?rlkey=gilx9v1bpf7ik6vf50wf1pa40&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a><br/>
                                                                - 비트코인 가격 데이터 (일봉: 2014.9.17 ~ 2025.11.30)
                                                                <a href="https://www.dropbox.com/scl/fi/2becmnnwuq1x4gowllo6o/BTC_KRW_2025_11_30.csv?rlkey=tohx7fyvxwcex9vyrgnj1zmum&dl=0" target="_blank">
                                                                    <span class="badge badge-info">다운 로드 (2025년 12월 5일 업데이트)</span>
                                                                </a><br/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">14주차</th>
                                                            <th scope="row">27</th>
                                                            <td>12월 01일(월)</td>
                                                            <td>
                                                                - 18. LSTM and Its Application
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">28</th>
                                                            <td>12월 02일(화)</td>
                                                            <td>
                                                                - 19. Attention
                                                                <a href="https://www.dropbox.com/scl/fi/84nfuexe9cqfnc9cvbc9v/19.attenstion.pdf?rlkey=akipeqat0v6w0hssy1yz2ygkl&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">15주차</th>
                                                            <th scope="row">29</th>
                                                            <td>12월 08일(월)</td>
                                                            <td>
                                                                - 19. Attention
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">30</th>
                                                            <td>12월 09일(화)</td>
                                                            <td>
                                                                - 20. Transformer
                                                                <a href="https://www.dropbox.com/scl/fi/mzrlhmw39hu6jiu3ykmhu/20.transformer.pdf?rlkey=wnlk68o1qon66fkddlt8oxyoz&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">16주차</th>
                                                            <th scope="row">31</th>
                                                            <td>12월 15일(월)</td>
                                                            <td>
                                                                - 21. Transfer Learning
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">32</th>
                                                            <td>12월 16일(화)</td>
                                                            <td class="centred" colspan="2">
                                                                <strong>기말 고사</strong>
                                                                <!-- <br/>장소: 2공학관 313/314, 시간: 11시 ~ 12시 50분 -->
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <br/>
                                                    <h3 class="title-level-3">2. Course Information</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - Lecturer: 한연희 교수 (Rm. 2공학관 423호, Email: yhhan@koreatech.ac.kr)
                                                        </li>
                                                        <li>
                                                            - Classes: 월요일 (8, 9교시 - 16:00 ~ 17:50), 화요일 (8, 9교시 - 16:00 ~ 17:50)
                                                        </li>
                                                        <li>
                                                            - Lecture Room: 2공학관 408호
                                                        </li>
                                                        <li>
                                                            - Prerequisites: Python (필수), 인공지능기초및실습, 기계학습및실습
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">3. Homework Guide</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - 추후 구체적인 숙제 내용 제시
                                                        </li>
                                                        <li>
                                                            - 숙제 제출 사이트: <a href="http://el2.koreatech.ac.kr" target="_blank">http://el2.koreatech.ac.kr</a> 의 자유게시판 활용
                                                        </li>
                                                        <li> - 숙제 제출 방법 (jupyter notebook 활용)
                                                            <br/>
                                                            <br/>
                                                            <ul>
                                                                <li>
                                                                    <p>1) jupyter notebook 환경에서 각 숙제별로 ipynb 파일 생성</p>
                                                                    <ul>
                                                                        <li>- <a href="http://www.slideshare.net/TaeYoungLee1/20150306-ipython" target="_blank">jupyter notebook 사용법 -1</a></li>
                                                                        <li>- <a href="https://www.slideshare.net/dahlmoon/jupyter-notebok-20160815" target="_blank">jupyter notebook 사용법 -2</a></li>
                                                                        <li>- Python 3.10 버전 이상으로 코딩</li>
                                                                    </ul>
                                                                </li>
                                                                <br/>
                                                                <li>
                                                                    <p>2) ipynb 파일 내에 코드를 작성하고 작성한 코드 설명시에 Markdown 문법으로 입력해야 함</p>
                                                                    <ul>
                                                                        <li>- Markdown 사용법은 각자 익힐 것</li>
                                                                        <li>- <a href="https://gist.github.com/ihoneymon/652be052a0727ad59601" target="_blank">Markdown 사용법</a> </li>
                                                                        <li>- <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown Tutorial</a></li>
                                                                        <li>- <a href="http://dillinger.io/" target="_blank">Markdown Online Editor</a> </li>
                                                                    </ul>
                                                                </li>
                                                                <br/>
                                                                <li>
                                                                    <p>3) 생성한 ipynb 파일에 대해 자신만의 방법을 사용하여 온라인상 URL을 생성</p>
                                                                    <ul>
                                                                        <li>로컬 파일을 원격으로 업로드하고 URL을 얻으려면 Google Drive, Dropbox 또는 OneDrive와 같은 클라우드 스토리지 서비스를 사용할 수 있음.</li>
                                                                        <li>다음은 Google 드라이브에 로컬 파일을 업로드하고 URL을 얻는 단계임:</li>
                                                                        <ol style="margin-left: 1.5em">
                                                                            <li>Google 드라이브 계정에 로그인합니다.</li>
                                                                            <li>"새로 만들기" 버튼을 클릭하고 "파일 업로드"를 선택합니다.</li>
                                                                            <li>선택 업로드할 로컬 파일.</li>
                                                                            <li>파일이 업로드되면 파일을 마우스 오른쪽 버튼으로 클릭하고 "링크 가져오기"를 선택합니다.</li>
                                                                            <li>팝업 창에서 " 링크가 있는 사람은 누구나 볼 수 있습니다."</li>
                                                                            <li>제공된 링크를 복사하면 업로드된 파일의 URL이 됩니다.</li>
                                                                        </ol>
                                                                    </ul>
                                                                </li>
                                                                <br/>
                                                                <li>
                                                                    <p>4) 다음 사이트에 해당 URL을 입력</p>
                                                                    <ul>
                                                                        <li>- <a href="http://nbviewer.jupyter.org" target="_blank">http://nbviewer.jupyter.org</a></li>
                                                                        <li>- 위 nbviewer 사이트를 통하여 보여지는 자신의 숙제를 확인하고 해당 nbviewer URL을 EL2의 자유게시판 본문에 글쓰기로 등록
                                                                            <ul>
                                                                                <li>- 따라서, 숙제 등록 URL은 반드시 http://nbviewer.jupyter.org/ 로 시작해야 함. </li>
                                                                                <li>- 숙제 등록 URL 예: http://nbviewer.jupyter.org/urls/dl.dropbox.com/s/t9nmklgjkp7w4ok/kmeans.ipynb</li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <br/>
                                                                <li>
                                                                    <p>5) jupyter notebook 단축키<br/>
                                                                    <ul>
                                                                        <li>- ESC, a: 현재 셀 바로 위에 새로운 코드 셀 추가</li>
                                                                        <li>- ESC, b: 현재 셀 바로 아래에 새로운 코드 셀 추가</li>
                                                                        <li>- ESC, dd: 현재 셀 삭제</li>
                                                                        <li>- ESC, m: 현재 셀을 markdown 셀로 변환</li>
                                                                        <li>- ESC, y: 현재 셀을 code 셀로 변환</li>
                                                                        <li>- ESC, c: 현재 셀 복사</li>
                                                                        <li>- ESC, y: 현재 셀 잘라내기</li>
                                                                        <li>- ESC, v: 복사하거나 잘라낸 셀을 붙여넣기</li>
                                                                    </ul></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">4. References</h3>
                                                    <br/>
                                                    <div class="row" style="padding-left: 2.0em">
                                                        <div class="col-12">
                                                            <h4>[강의 노트]</h4>
                                                            <ul>
                                                                <li>
                                                                    - 수업 시간 PDF로 제공
                                                                    <ul>
                                                                        <li>강의 노트 프린트 및 서류철/서류집 활용하여 정리하기 
                                                                            <a href="https://shopping.interpark.com/product/productInfo.do?prdNo=15900644272&dispNo=008001083&smid1=common_prd" target="_blank">
                                                                                <i class="fa fa-link" aria-hidden="true"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <h4>[참고 강의 노트]</h4>
                                                            <ul>
                                                                <li>
                                                                    - Deep Learning with PyTorch
                                                                    <a href="https://www.manning.com/books/deep-learning-with-pytorch" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville. (Free electronic copy available at that website)
                                                                    <a href="https://www.deeplearningbook.org/" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - 텐초의 파이토치 딥러닝 특강
                                                                    <a href="https://product.kyobobook.co.kr/detail/S000061550445" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <h4>[보조 교재]</h4>
                                                            <ul>
                                                                <li>
                                                                    - Deep Learning with Pytorch: A 60 Minute Blitz: <a href="https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" target="_blank" class="font-weight-bold"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    - Python 익히기: <a href="https://python.bakyeono.net/table-of-contents.html" target="_blank" class="font-weight-bold"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    - PyTorch 튜토리얼: <a href="https://github.com/MorvanZhou/PyTorch-Tutorial" target="_blank" class="font-weight-bold"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <h3 class="title-level-3">5. Logistics</h3>
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
                                                    <h3 class="title-level-3">6. Lecture Evaluation</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>Attendance (10%), Homework Reports (20%), Midterm Exam. (35%), Final Exam. (35%)</li>
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