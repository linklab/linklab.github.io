---
layout: page
permalink: /courses/2023/2/dl
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
                                                        Deep Learning and Practice (딥러닝및실습) - CSE533, Fall Semester, 2023 </h2>
                                                    <p><em><br>“Student-professor relationships are based on trust. Acts, which violate this trust, undermine the educational process. Your classmates and the professor will not tolerate violations of academic integrity.”</em></p><br>
                                                    <h3 class="title-level-3">1. Course Schedule &amp; Lecture Notes</h3>
                                                    <br/>
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
                                                            <td>08월 28일(월)</td>
                                                            <td>
                                                                - 00. 강의 소개<br/>
                                                                - 00. 딥러닝 소개
                                                                <a href="https://www.dropbox.com/s/b5s2ivsjopsweu8/00.dl_101.pdf" target="_blank">
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
                                                            <td>08월 30일(수)</td>
                                                            <td>
                                                                - 00. 딥러닝 소개<br/>
                                                                - 01. 개발 환경 구축
                                                                <a href="https://www.dropbox.com/scl/fi/5niar65s3xz10kmht8v1u/01.development_environment.pdf?rlkey=a8v2kng25r29zyfepp5lqd3jy&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span> (개정: 2023.09.03)
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - windows에서 cuda 호환 torch 설치 방법<br/>
                                                                : <strong>pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118</strong><br/>
                                                                : https://pytorch.org/ 참고 <br/>
                                                                - 이미 torch가 설치되어 있는 경우 아래와 같이 먼저 설치된 torch 제거 필요<br/>
                                                                : <strong>pip uninstall torch torchvision</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">2주차</th>
                                                            <th scope="row">03</th>
                                                            <td>09월 04일(월)</td>
                                                            <td>
                                                                - 01. 개발 환경 구축<br/>
                                                                - 02. 텐서 구조체
                                                                <a href="https://www.dropbox.com/scl/fi/72fgim0fbmvjhunv6z0vm/02.tensors.pdf?rlkey=jhblgbsyz4eewti8juyfkeszr&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - Tensor Shape, Dimension, and Rank
                                                                <a href="https://www.dropbox.com/scl/fi/zyaxraee2a8gdomr3hpbm/02-1.tensors_addition.pdf?rlkey=fuz3tot7tizx2u6ise4o4w4tg&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트 (추가)</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td>09월 06일(수)</td>
                                                            <td>
                                                                - 02. 텐서 구조체
                                                            </td>
                                                            <td>
                                                                - Homework #1 (기한: 9월 19일)
                                                                <a href="https://www.dropbox.com/scl/fi/byzi3ohacvw1nsm8f4rlh/HW_1.pdf?rlkey=jtrqgo7nbb2wb3q9a3zhe8wua&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">3주차</th>
                                                            <th scope="row">05</th>
                                                            <td>09월 11일(월)</td>
                                                            <td>
                                                                - 03. 다양한 데이터의 텐서 표현 및 다루기
                                                                <a href="https://www.dropbox.com/scl/fi/904hepgjv795hm4xqslhx/03.real_world_data_to_tensors.pdf?rlkey=65ogxa409dkn7w6d5017kwzuo&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - 데이터 (zip 파일)
                                                                <a href="https://drive.google.com/file/d/11Wp9q99jTBUG7zx4rgAl0rRZ9wKK99Bb/view?usp=sharing" target="_blank">
                                                                    <span class="badge badge-info">다운 로드</span>
                                                                </a><br/>
                                                                - zip 파일을 해제하여 _00_data 폴더 얻음 --> link_dl 폴더 하위에 _00_data 폴더 위치 시킴
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td>09월 13일(수)</td>
                                                            <td>
                                                                - 03. 다양한 데이터의 텐서 표현 및 다루기
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">4주차</th>
                                                            <th scope="row">07</th>
                                                            <td>09월 18일(월)</td>
                                                            <td>
                                                                - 04. 학습과 자동미분
                                                                <a href="https://www.dropbox.com/scl/fi/zseoyran89bax3x8phe3e/04.learning_and_autograd.pdf?rlkey=jtuec3j2dnls2i4y8uoubq00f&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td>09월 20일(수)</td>
                                                            <td>
                                                                - 04. 학습과 자동미분
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">5주차</th>
                                                            <th scope="row">09</th>
                                                            <td>09월 25일(월)</td>
                                                            <td>
                                                                - 04. 학습과 자동미분
                                                            </td>
                                                            <td>
                                                                - Homework #2 (기한: 10월 15일)
                                                                <a href="https://www.dropbox.com/scl/fi/e7kdyuuxknmnxim4q2zrb/HW_2.pdf?rlkey=ylw5btfmsseheshhqnrstz30p&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>09월 27일(수)</td>
                                                            <td>
                                                                - 05. 심층 신경망 모델과 학습
                                                                <a href="https://www.dropbox.com/scl/fi/nfhu8uva0lazzunl8r98u/05.fcn_and_training.pdf?rlkey=3md01x2y6a84msiadmrc0zlxf&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">6주차</th>
                                                            <th scope="row">11</th>
                                                            <td>10월 02일(월)</td>
                                                            <td class="centred" colspan="2">
                                                                대체 공휴일
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">12</th>
                                                            <td>10월 04일(수)</td>
                                                            <td>
                                                                - 05. 심층 신경망 모델과 학습
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">7주차</th>
                                                            <th scope="row">13</th>
                                                            <td>10월 09일(월)</td>
                                                            <td class="centred" colspan="2">
                                                                한글날 (공휴일)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>10월 11일(수)</td>
                                                            <td>
                                                                - 05. 심층 신경망 모델과 학습
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">8주차</th>
                                                            <th scope="row">15</th>
                                                            <td>10월 16일(월)</td>
                                                            <td>
                                                                - 06. 심층 신경망 학습 - Best Practice
                                                                <a href="https://www.dropbox.com/scl/fi/8046i4gedjb6as55xjog3/06.fcn_best_practice.pdf?rlkey=18rn1uty02kw42f5xt865cn5m&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">16</th>
                                                            <td>10월 18일(수)</td>
                                                            <td>
                                                                - 06. 심층 신경망 학습 - Best Practice
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">9주차</th>
                                                            <th scope="row">17</th>
                                                            <td>10월 23일(월)</td>
                                                            <td>
                                                                - 07. 합성곱 신경망 (CNN)
                                                                <a href="https://www.dropbox.com/scl/fi/7n9vyireqx22ionc10i1x/07.cnn_1.pdf?rlkey=zj5kf88ztbupb2rely8ap5k0w&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">18</th>
                                                            <td>10월 25일(수)</td>
                                                            <td>
                                                                - 07. 합성곱 신경망 (CNN)
                                                                <a href="https://www.dropbox.com/scl/fi/kmgmk8usmkwy8h4p55aqd/07.cnn_2.pdf?rlkey=4zopud98hv9s5ri59kn85r0mq&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">10주차</th>
                                                            <th scope="row">19</th>
                                                            <td>10월 30일(월)</td>
                                                            <td class="centred" colspan="2">
                                                                <strong>중간 고사</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">20</th>
                                                            <td>11월 01일(수)</td>
                                                            <td>
                                                                - 08. 다양한 최적화 및 정규화 기법
                                                                <a href="https://www.dropbox.com/scl/fi/hovcupyt9581m1k9l0hgv/08.diverse_techniques_1.pdf?rlkey=1vinvoq7gsf3bs1zv31nzlvj6&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">11주차</th>
                                                            <th scope="row">21</th>
                                                            <td>11월 06일(월)</td>
                                                            <td>
                                                                - 08. 다양한 최적화 및 정규화 기법
                                                            </td>
                                                            <td>
                                                                - Homework #3 (기한: 11월 18일 (일))
                                                                <a href="https://www.dropbox.com/scl/fi/1o7w3qa3ge0odvydko1px/HW_3.pdf?rlkey=kf40ihpelh8zoaa28kpx96b05&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">22</th>
                                                            <td>11월 08일(수)</td>
                                                            <td>
                                                                - 08. 다양한 최적화 및 정규화 기법
                                                                <a href="https://www.dropbox.com/scl/fi/icalz2s9l3ljlt765nnfv/08.diverse_techniques_2.pdf?rlkey=gxa04s2mbjhc1otx9iazqlvze&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">12주차</th>
                                                            <th scope="row">23</th>
                                                            <td>11월 13일(월)</td>
                                                            <td>
                                                                - 09. 다양한 CNN 모델
                                                                <a href="https://www.dropbox.com/scl/fi/h3eofzqo25uc0uquly4q6/09.modern_cnns.pdf?rlkey=5a4shn95edxw90k2jnfij6vri&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">24</th>
                                                            <td>11월 15일(수)</td>
                                                            <td>
                                                                - 09. 다양한 CNN 모델
                                                            </td>
                                                            <td>
<!--
                                                                <span class="font-weight-bold">
                                                                    Homework #2 <span style="font-size: 7px">(기한: 4월 30일 오후 23시 59분)</span>
                                                                </span><br/>
                                                                - 암과 싸워 이기기 위한 파이토치 활용 (강의 교재 9장 및 10장~14장) 요약 보고서 제출<br/>
-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">13주차</th>
                                                            <th scope="row">25</th>
                                                            <td>11월 20일(월)</td>
                                                            <td>
                                                                - 10. 순환 신경망 (RNN)
                                                                <a href="https://www.dropbox.com/scl/fi/86aoo11wyr66ux1wv2y2p/10.rnn.pdf?rlkey=2nn4s6ncifpcoiidxq2bcmizz&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">26</th>
                                                            <td>11월 22일(수)</td>
                                                            <td class="centred" colspan="2">
                                                                학교 공식 휴강 (논술고사)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">14주차</th>
                                                            <th scope="row">27</th>
                                                            <td>11월 27일(월)</td>
                                                            <td>
                                                                - 10. 순환 신경망 (RNN)
                                                            </td>
                                                            <td>
                                                                - Time Series Data
                                                                <a href="https://www.dropbox.com/scl/fi/gt2c3xkl6r3hjhc6gnh3i/03-1.real_world_data_to_tensors.pdf?rlkey=4samhl3r996fdzduux3xins3o&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트 (추가)</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">28</th>
                                                            <td>11월 29일(수)</td>
                                                            <td>
                                                                - 11. LSTM과 시계열 데이터 예측
                                                                <a href="https://www.dropbox.com/scl/fi/mpyxzics43ejtcrnn56sa/11.lstm_and_applications.pdf?rlkey=9yqrfh54cwcw8yz4ry84kgwk8&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - Homework #4 (기한: 12월 15일 (금))
                                                                <a href="https://www.dropbox.com/scl/fi/u56oozhiikfc2ptsx1jr0/HW_4.pdf?rlkey=ufn8ntdiq00wewp3bdi4owrfq&dl=0" target="_blank">
                                                                    <span class="badge badge-primary">숙제 설명</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">15주차</th>
                                                            <th scope="row">29</th>
                                                            <td>12월 04일(월)</td>
                                                            <td>
                                                                - 11. LSTM과 시계열 데이터 예측
                                                            </td>
                                                            <td>
                                                                - 비트코인 가격 데이터 (일봉: 2014.9.17 ~ 2023.10.31)
                                                                <a href="https://drive.google.com/file/d/1s0Tfx79rHsp5P5BLSU8Fqxlpz9Zy0JNd/view?usp=sharing" target="_blank">
                                                                    <span class="badge badge-info">다운 로드</span>
                                                                </a><br/>
                                                                &nbsp;&nbsp;: _00_data/k_cryptocurrency 폴더 내에 BTC_KRW.csv 파일 저장
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">30</th>
                                                            <td>12월 06일(수)</td>
                                                            <td>
                                                                - 12. 전이 학습
                                                                <a href="https://www.dropbox.com/scl/fi/amfrooqswgq8bikmowsyz/12.transfer_learning.pdf?rlkey=xxjeyhgos6mruzsyzhput80iq&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" rowspan="2" style="vertical-align: middle">16주차</th>
                                                            <th scope="row">31</th>
                                                            <td>12월 11일(월)</td>
                                                            <td>
                                                                - 13. 오토인코더
                                                                <a href="https://www.dropbox.com/scl/fi/i2d5u3i9w2jhe0xi2n6dc/13.autoencoders.pdf?rlkey=7z10sj6cmmw0ty3bcu3piu3f5&dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">32</th>
                                                            <td>12월 13일(수)</td>
                                                            <td class="centred" colspan="2">
                                                                <strong>기말 고사</strong> <br/>장소: 2공학관 313/314, 시간: 11시 ~ 12시 50분
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
                                                            - Classes: 월요일 (8, 9교시 - 16:00 ~ 18:50), 수요일 (3, 4교시 - 11:00 ~ 12:50)
                                                        </li>
                                                        <li>
                                                            - Lecture Room: 2공학관 408호
                                                        </li>
<!--
                                                        <li>
                                                            - Prerequisites: PyTorch/Tensorflow 기본 코딩 경험
                                                        </li>
-->
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
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>[강의 노트]</h4>
                                                            <ul>
                                                                <li>
                                                                    - 수업 시간 PDF로 제공
                                                                    <ul>
                                                                        <li>강의 노트 철하기
                                                                            <a href="https://shopping.interpark.com/product/productInfo.do?prdNo=5239338152" target="_blank">
                                                                                <i class="fa fa-link" aria-hidden="true"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <h4>[참고 교재]</h4>
                                                            <ul>
                                                                <li>
                                                                    - 텐초의 파이토치 딥러닝 특강
                                                                    <a href="https://product.kyobobook.co.kr/detail/S000061550445" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - <span class="badge badge-info">Recommended</span> Deep Learning with PyTorch
                                                                    <a href="https://www.manning.com/books/deep-learning-with-pytorch" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    - <span class="badge badge-info">Recommended</span> Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville. (Free electronic copy available at that website)
                                                                    <a href="https://www.deeplearningbook.org/" target="_blank">
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