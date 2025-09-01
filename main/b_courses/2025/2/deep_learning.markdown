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
                                                    <span><a style="color: blue; font-size: 0.6em" href="https://github.com/linklab/link_dl">[수업 실습 코드]</a></span>
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
                                                                - 데이터 (zip 파일)
                                                                <a href="https://drive.google.com/file/d/1aUO7ca_cc8UoaJ_EAZZ9wmcbqV8HF_RM/view?usp=sharing" target="_blank">
                                                                    <span class="badge badge-info">다운 로드</span>
                                                                </a><br/>
                                                                : 다운받은 zip 파일을 해제하여 _00_data 폴더를 확인 후 link_dl 폴더 하위에 _00_data 폴더 위치 시킴
                                                                <img src="/assets/images/courses/data.png" width="100%"/>
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
                                                                <!--<a href="https://www.dropbox.com/scl/fi/1s5oagxiun81c675u6q0u/03.real_world_data_to_tensors.pdf?rlkey=gu4j5tl833s9hvsfbnol0s6gi&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                                <!--
                                                                - 9월 13일 오후 2시 ~ 5시: Tensor 및 Tensor Operators에 관한 특강 (조교)
                                                                <span class="badge badge-danger">특강: Zoom 온라인 실시간 강의</span>
                                                                <a href="https://www.dropbox.com/scl/fi/jxd6rhq5hsvm6sefmkxzy/02.tensors.pdf?rlkey=sz94rdfkgs2vz3hk8zu8x0n5y&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a><br/>
                                                                - Zoom URL은 EL2 공지사항에 올려 놓았으며, 개별 문자로 발송하였습니다.
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td>09월 09일(화)</td>
                                                            <td>
                                                                - 03. Real-World Data to Tensors
                                                            </td>
                                                            <td>
                                                                <!--
                                                                - <strong>Homework #1 (기한: 9월 24일 23시 59분)</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/nwzmqe2k821xw68alcc50/HW_1.pdf?rlkey=vzuz70oam6m4xgl2v55n6o2bh&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">3주차</th>
                                                            <th scope="row">05</th>
                                                            <td>09월 15일(월)</td>
                                                            <td>
                                                                - 04. Artificial Neuron, Gradient Descent, and Backpropagation
                                                                <!--<a href="https://www.dropbox.com/scl/fi/61c2ixt4ewzl9avx9d34i/04.artificial_neuron_and_gradient_descent_and_bp.pdf?rlkey=fv5toi194bt7y86ytavdaq0bl&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td>09월 16일(화)</td>
                                                            <td>
                                                                - 04. Artificial Neuron, Gradient Descent, and Backpropagation<br/>
                                                                - 05. Autograd
                                                                <!--<a href="https://www.dropbox.com/scl/fi/sghovvt6b3w795aqujg62/05.autograd.pdf?rlkey=vbwe2p0w45bw1fyt9bxeyisah&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">4주차</th>
                                                            <th scope="row">07</th>
                                                            <td>09월 22일(월)</td>
                                                            <td>
                                                                - 06. FCN (Fully-Connected Network) and Loss Functions
                                                                <!--<a href="https://www.dropbox.com/scl/fi/whugcckintnx5zv1qbtkv/06.fcn_and_loss_functions.pdf?rlkey=pxnppyjiup1ll4kgm8ojm4mok&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td>09월 23일(화)</td>
                                                            <td>
                                                                - 06. FCN (Fully-Connected Network) and Loss Functions
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">5주차</th>
                                                            <th scope="row">09</th>
                                                            <td>09월 29일(월)</td>
                                                            <td>
                                                                - 07. Learning and Optimization
                                                                <!--<a href="https://www.dropbox.com/scl/fi/8orrnjc0dtzkx69qb0tyw/07.learning_and_optimization.pdf?rlkey=h8avhs2lz5n8qh0xdd5q9iajb&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                                <!--
                                                                - <strong>Homework #2</strong> (기한: 10월 18일 23시 59분)
                                                                <a href="https://www.dropbox.com/scl/fi/qvothe8meamsrlqmw5bmp/HW_2.pdf?rlkey=h3zt9ddbs3khfjwdpbo86pqz1&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>09월 30일(화)</td>
                                                            <td>
                                                                - 07. Learning and Optimization
                                                            </td>
                                                            <td>
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
                                                                - 08. FCN Best Practice
                                                                <!--<a href="https://www.dropbox.com/scl/fi/2mq7ztetczb3y17ronghm/08.fcn_best_practice.pdf?rlkey=muqaps2bbcu9mvtlr0ntzph9a&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>10월 14일(화)</td>
                                                            <td>
                                                                - 09. Convolutional Neural Network (CNN)
                                                                <!--<a href="https://www.dropbox.com/scl/fi/ffdva9hqtb7z5tl4dmq42/09.cnn.pdf?rlkey=ul9hrs5qdl8c5ffwkbrlhvlv0&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">8주차</th>
                                                            <th scope="row">15</th>
                                                            <td>10월 20일(월)</td>
                                                            <td>
                                                                - 10. CNN Architectures
                                                                <!--<a href="https://www.dropbox.com/scl/fi/xz0uvjvhkb10lol1neo5o/10.cnn_architectures.pdf?rlkey=4orcw0ngbbbhc3sh6xy75hcta&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">16</th>
                                                            <td>10월 21일(화)</td>
                                                            <td>
                                                                - 10. CNN Architectures
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
                                                                장소: 2공학관 314, 시간: 11시 ~ 12시 50분
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">18</th>
                                                            <td>10월 28일(화)</td>
                                                            <td>
                                                                - 11. Advanced Techniques in Deep Learning - I
                                                                <!--<a href="https://www.dropbox.com/scl/fi/mbtta0ps49i84l7904yhs/11.diverse_techniques_1.pdf?rlkey=riilwiz9o2v34fck57gm1hi27&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">10주차</th>
                                                            <th scope="row">19</th>
                                                            <td>11월 03일(월)</td>
                                                            <td>
                                                                - 11. Advanced Techniques in Deep Learning - I
                                                                <!--<a href="https://www.dropbox.com/scl/fi/xwj93euqte8mtyvryuyg2/12.diverse_techniques_2.pdf?rlkey=7zpzc2fp83c95hr22rgt5i4m4&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">20</th>
                                                            <td>11월 04일(화)</td>
                                                            <td>
                                                                - 12. Advanced Techniques in Deep Learning - II
                                                            </td>
                                                            <td>
                                                                <!--
                                                                - <strong>Homework #3 (기한: 11월 23일 (토))</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/s37k1lujp0ssb4zub0k0n/HW_3.pdf?rlkey=4nzyrkyuuny80nbenw8c1v4je&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">11주차</th>
                                                            <th scope="row">21</th>
                                                            <td>11월 10일(월)</td>
                                                            <td>
                                                                - 12. Advanced Techniques in Deep Learning - II
                                                                <!--<a href="https://www.dropbox.com/scl/fi/sg0aobp48qo9uw6ne0wzx/13.modern_cnns.pdf?rlkey=ss78nwsdfkpagv56qs2lbqs0d&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                                - CPU vs. GPU
                                                                <!--<a href="https://colab.research.google.com/drive/1ERTiVfsKDnzBLRT9AH-6SFmuD-uKL_db?usp=sharing" target="_blank">
                                                                    <img src="/assets/images/colab.png" width="10%">
                                                                </a>-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">22</th>
                                                            <td>11월 11일(화)</td>
                                                            <td>
                                                                - 13. Modern CNNs
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">12주차</th>
                                                            <th scope="row">23</th>
                                                            <td>11월 17일(월)</td>
                                                            <td>
                                                                - 13. Modern CNNs
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">24</th>
                                                            <td>11월 18일(화)</td>
                                                            <td>
                                                                - 14. Recurrent Neural Network (RNN)
                                                                <!--<a href="https://www.dropbox.com/scl/fi/uedau7d2t2yv2hy0649qy/14.rnn.pdf?rlkey=6sahugzgj65uja2qv8bkctou6&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">13주차</th>
                                                            <th scope="row">25</th>
                                                            <td>11월 24일(월)</td>
                                                            <td>
                                                                - 14. Recurrent Neural Network (RNN)
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">26</th>
                                                            <td>11월 25일(화)</td>
                                                            <td>
                                                                - 15. LSTM and Its Application
                                                                <!--<a href="https://www.dropbox.com/scl/fi/j3siwfkf7tzuyrxmyp2e9/15.lstm_and_applications.pdf?rlkey=inodl7f3dxrt5g55cd2ilfsjv&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">14주차</th>
                                                            <th scope="row">27</th>
                                                            <td>12월 01일(월)</td>
                                                            <td>
                                                                - 16. Transfer Learning
                                                                <!--<a href="https://www.dropbox.com/scl/fi/duaxe567iqkdsmnksvemr/16.transfer_learning.pdf?rlkey=q8k4ackml39mh1cwou5e39ig1&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                                <!--
                                                                - <strong>Homework #4 (기한: 12월 20일 (금))</strong>
                                                                <a href="https://www.dropbox.com/scl/fi/3nlqw9qtbpl00vkm4dl5z/HW_4.pdf?rlkey=i8ladgdlx7ytx80ut5k0yw00n&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a><br/>
                                                                - 비트코인 가격 데이터 (일봉: 2014.9.17 ~ 2024.11.30)
                                                                <a href="https://www.dropbox.com/scl/fi/8slq7xt57867z35pq39sr/BTC_KRW.csv?rlkey=43z2fitbjh5kwsitz9tnoyji9&dl=0" target="_blank">
                                                                    <span class="badge badge-info">다운 로드</span>
                                                                </a><br/>
                                                                -->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">28</th>
                                                            <td>12월 02일(화)</td>
                                                            <td>
                                                                - 17. Autoencoders
                                                                <!--<a href="https://www.dropbox.com/scl/fi/42b7p59vsq7zyhy2qw61v/17.autoencoders.pdf?rlkey=rh8pwth75p5mwrydt935j75uf&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">15주차</th>
                                                            <th scope="row">29</th>
                                                            <td>12월 08일(월)</td>
                                                            <td>
                                                                - 18. Attention and Transformer
                                                                <!--<a href="https://www.dropbox.com/scl/fi/b2berl4ycgyy3362v3uxk/18.attenstion_and_transformer.pdf?rlkey=q7ae7l5prfnb1scgf5763a5x9&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>-->
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">30</th>
                                                            <td>12월 09일(화)</td>
                                                            <td>
                                                                - 18. Attention and Transformer
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">16주차</th>
                                                            <th scope="row">31</th>
                                                            <td>12월 15일(월)</td>
                                                            <td>
                                                                - 18. Attention and Transformer
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