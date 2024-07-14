---
layout: page
permalink: /lectures/2023/1/data_science
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
                                                        Data Science (데이터과학 [240178], Spring Semester, 2023) </h2>
                                                    <p><em><br>“Student-professor relationships are based on trust. Acts, which violate this trust, undermine the educational process. Your classmates and the professor will not tolerate violations of academic integrity.”</em></p><br>
                                                    <h3 class="title-level-3">1. Course Schedule &amp; Lecture Notes</h3>
                                                    <br/>
<!--
                                                    <div>
                                                        <h3>[공지사항]</h3>
                                                        <i class="fas fa-bullhorn"></i> [2022.02.13] 본 수업을 추가적으로 신청하고자 하는 학생(또는 이미 수강신청을 완료한 학생)들에게 공지합니다. 본 수업은 심층강화학습을 뼈대가 되는 주요 내용 및 알고리즘을 15번의 수업에 걸쳐서 학습하는 내용을 담고 있습니다. 모든 학생들은 1) 아래 열거된 핵심 논문의 일부 내용을 공부하고 자료를 구성하여 직접 수업시간에 여러 대학원생들 앞에서 발표를 해야 하며, 2) 수업시간에 소개하는 LINK_RL 프레임워크를 이해하고 이를 기반으로 주요 심층강화학습 알고리즘을 이해하고 이를 기반으로 3번에 걸친 코딩 숙제 및 실험 평가 분석을 하여 리포트를 제출해야 하며, 3) 기말고사를 통하여 수업에서 다룬 심층강화학습 내용 및 알고리즘 전반에 걸친 이해도를 평가받게 됩니다.
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> [2022.02.13] 본 수업을 수강하기 위한 꼭 필요한 선수 지식: 1) 학부과정에서 알고리즘 등의 과목을 통하여 또는 과제/업무 수행을 통하여 컴퓨터 프로그래밍 기반으로 주어진 문제를 해결해본 경험, 2) 파이썬을 통하여 Tensorflow 또는 Pytorch 기반으로 딥러닝 관련 코딩 수행 경험, 3) 파이썬을 통한 가상 환경 구축 및 라이브러리 구축 경험
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> [2022.02.13] 학점은 A+/A, B+/B, C+/C, F 이렇게 총 4개의 그룹으로 나누어 부여할 예정이며, F로 평가될 학생이 없다면 각 3개 그룹당 학점의 분포는 40%, 40%, 20%로 나누어 부여할 예정이지만 강의가 종료된 이후 전반적인 학업성취도를 가늠하여 변경될 수 있습니다.
                                                        <br/>
                                                        <i class="fas fa-bullhorn"></i> [2022.02.11] 강의에서 사용하는 심층강화학습 프레임워크 Github Repository: <a href="https://github.com/linklab/link_rl" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                                                    </div>
                                                    <br/>
-->
                                                    <table class="table table-responsive table-hover">
                                                        <thead class="thead-light">
                                                        <tr>
                                                            <th scope="col" style="width:4%">#</th>
                                                            <th scope="col" style="width:10%">Date</th>
                                                            <th scope="col" style="width:18%">Lecture</th>
                                                            <th scope="col" style="">Presentation</th>
                                                            <th scope="col" style="width:30%">Notice</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">01</th>
                                                            <td>03월 06일(월)</td>
                                                            <td colspan="2">
                                                                - 강의 소개<br/>
                                                                - Introduction to Data Science
                                                                <a href="https://www.dropbox.com/s/jfypqfugo8kms1o/data_science_101.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
<!--
                                                            <td>
                                                                -
                                                            </td>
-->
                                                            <td>
                                                                <span class="font-weight-bold">
                                                                    Homework #1 <span style="font-size: 7px">(기한: 3월 26일 오후 23시 59분)</span>
                                                                </span><br/>
                                                                - <a href="https://learnxinyminutes.com/docs/python/" target="_blank">Learn X in Y minutes</a>에 소개된 코드를 자신만의 jupyter notebook 구성하여 URL 제출 (비전공자)<br/>
                                                                - 딥러닝과 파이토치 소개 (강의 교재 1장) 읽고 간단하게 요약하기<br/>
                                                                - 사전 훈련된 신경망 (강의 교재 2장) jupyter notebook 구성하여 URL 제출
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">02</th>
                                                            <td>03월 13일(월)</td>
                                                            <td colspan="2">
                                                                - Deep Learning #1
                                                                <a href="https://www.dropbox.com/s/szaqgnqjtpkqeio/Deep_leaning.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
<!--
                                                            <td>
                                                                -
                                                            </td>
-->
                                                            <td>
                                                                - jupyter notebook 단축키<br/>
                                                                <ul>
                                                                    <li>ESC, a: 현재 셀 바로 위에 새로운 코드 셀 추가</li>
                                                                    <li>ESC, b: 현재 셀 바로 아래에 새로운 코드 셀 추가</li>
                                                                    <li>ESC, dd: 현재 셀 삭제</li>
                                                                    <li>ESC, m: 현재 셀을 markdown 셀로 변환</li>
                                                                    <li>ESC, y: 현재 셀을 code 셀로 변환</li>
                                                                    <li>ESC, c: 현재 셀 복사</li>
                                                                    <li>ESC, y: 현재 셀 잘라내기</li>
                                                                    <li>ESC, v: 복사하거나 잘라낸 셀을 붙여넣기</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">03</th>
                                                            <td>03월 20일(월)</td>
                                                            <td colspan="2">
                                                                - Deep Learning #2
                                                                <ol>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p0/a_neural_network/a_simple_nn.ipynb" target="_blank">Neural Network</a></li>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p0/b_loss/a_mse.ipynb" target="_blank">MSE Loss</a></li>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p0/b_loss/b_cross_entropy.ipynb" target="_blank">Cross Entropy Loss</a></li>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p0/c_learning/a_learning.ipynb" target="_blank">Learning (Backpropagation)</a></li>
                                                                </ol>
                                                            </td>
<!--
                                                            <td>
                                                                -
                                                            </td>
-->
                                                            <td>
                                                                - Class Github: <a href="https://github.com/linklab/link_pytorch" target="_blank">https://github.com/linklab/link_pytorch</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td>03월 27일(월)</td>
                                                            <td colspan="2">
<!--
                                                                <a href="https://www.dropbox.com/s/va4q2laz194c37y/RL-3_fundamental_2.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
-->
                                                                - [1부] 파이토치 핵심: 3장 텐서 구조체
                                                                <a href="https://training.westdri.ca/materials/torchtensors20220119.pdf" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span></a>
                                                                <ol>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p1ch3/0_tensors_basic.ipynb" target="_blank">Tensor - Basic</a></li>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p1ch3/1_tensors_advanced.ipynb" target="_blank">Tensor - Advanced</a></li>
                                                                    <li><a href="https://nbviewer.org/github/linklab/link_pytorch/blob/main/p1ch3/2_vectorized_operations.ipynb" target="_blank">Tensor - Advanced II</a></li>
                                                                </ol>
                                                                <br/>
                                                            </td>
<!--
                                                            <td>
                                                                -
                                                            </td>
-->
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">05</th>
                                                            <td>04월 03일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [1부] 파이토치 핵심: 4장 실제 데이터를 텐서로 표현해보기<br/><strong>(Team 01. 이재홍, 김동호, 최대준)</strong>
                                                            </td>
                                                            <td>
                                                                <span class="font-weight-bold">
                                                                    Homework #2 <span style="font-size: 7px">(기한: 4월 16일 일요일 오후 23시 59분)</span>
                                                                </span><br/>
                                                                - 4.7 Exercises(연습문제) Problem 1(1번) 풀이<br/>
                                                                - 5.7 Exercises(연습문제) Problem 1(1번) 풀이<br/>
                                                                - 6.5 Exercises(연습문제) Problem 2(2번) 풀이<br/>
                                                                - 위 3개 문제의 풀이를 jupyter notebook으로 구성하여 URL 제출 (notebook viewer 주소 변환 필수)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td>04월 10일(월)</td>
                                                            <td>
                                                                .
                                                            </td>
                                                            <td>
                                                                - [1부] 파이토치 핵심: 5장 학습 기법<br/><strong>(Team 02. 황자영, 윤혜빈, 라티나 아스투티)</strong>
                                                                <br/>
                                                                - [1부] 파이토치 핵심: 6장 신경망을 활용한 데이터 적합<br/><strong>(Team 03. 권준형, 남태민, 김세진)</strong>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">07</th>
                                                            <td>04월 17일(월)</td>
                                                            <td>
                                                                - Entropy, Cross Entropy, KL Divergence
                                                                <a href="https://www.dropbox.com/s/rta7jkzbpp89pkg/entropy.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - [1부] 파이토치 핵심: 7장 새와 비행기 구별하기: 이미지 학습<br/><strong>(Team 04. 김현재, 김경민, 박채호)</strong>
                                                                <br/>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td>04월 24일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [1부] 파이토치 핵심: 8장 컨볼루션을 활용한 일반화<br/><strong>(Team 05. 조든솔, 신길종, 김성준)</strong>
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
                                                            <th scope="row">09</th>
                                                            <td>05월 01일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [2부] 실전 이미지 학습: 10장 여러 데이터 소스를 통합 데이터셋으로 합치기<br/><strong>(Team 06. 권진우, 강동우, 조재민)</strong>
                                                            </td>
                                                            <td>
                                                                - pip install SimpleITK==2.2.1<br/>
                                                                - pip install diskcache==4.1.0<br/>
                                                                - wget https://zenodo.org/record/3723295/files/subset0.zip<br/>
                                                                - wget https://zenodo.org/record/3723295/files/subset1.zip<br/>
                                                                - ...
                                                                - wget https://zenodo.org/record/3723295/files/subset5.zip<br/>
                                                                - wget https://zenodo.org/record/3723295/files/subset6.zip<br/>
                                                                - wget https://zenodo.org/record/4121926/files/subset7.zip<br/>
                                                                - wget https://zenodo.org/record/4121926/files/subset8.zip<br/>
                                                                - wget https://zenodo.org/record/4121926/files/subset9.zip<br/>
                                                                - 7z x subset0.zip<br/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>05월 08일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [2부] 실전 이미지 학습: 11장 종양 탐지를 위한 분류 모델 훈련<br/><strong>(Team 07. Hafiz Shakeel Ahmad, Sana Munir Khan, Ahmed Maaz)</strong>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">11</th>
                                                            <td>05월 15일(월)</td>
                                                            <td>
                                                                - Evaluation
                                                                <a href="https://www.dropbox.com/s/gzbwpwwcwr9g6u3/evaluation_2.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - [2부] 실전 이미지 학습: 12장 메트릭과 증강을 활용한 훈련 개선<br/><strong>(Team 08. 지창훈, 석영준, 차민혁)</strong>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">12</th>
                                                            <td>05월 22일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [2부] 실전 이미지 학습: 13장 세그멘테이션을 활용한 의심 결절 탐색<br/><strong>(Team 09. 깅봉현, 쿠람 아슈파크, 김동근)</strong>
                                                            </td>
                                                            <td>
                                                                - <a href="/assets/pdfs/transposed_conv.pdf" target="_blank">Why is the word "Transposed" used in the term "Transposed Convolution"?</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">13</th>
                                                            <td>05월 29일(월)</td>
                                                            <td colspan="3">
                                                                - 대체 공휴일
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>06월 05일(월)</td>
                                                            <td>
                                                                -
                                                            </td>
                                                            <td>
                                                                - [2부] 실전 이미지 학습: 14장 엔드투엔드 결절 분석, 그리고 남겨진 과제<br/><strong>(Team 10. 황현서, 임상훈, 정승운)</strong>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">14</th>
                                                            <td>06월 12일(월)</td>
                                                            <td>
                                                                - Terminology, Python Coroutines, JIT
                                                                <a href="https://www.dropbox.com/s/0vrbhkp3b79ozla/deployment.pdf?dl=0" target="_blank">
                                                                    <span class="badge badge-warning">강의 노트</span>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                - [3부] 드디어, 배포: 15장 제품으로 배포하기<br/><strong>(Team 11. 김영우, 김지우, 박회종, 박재웅)</strong><br/>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">15</th>
                                                            <td>06월 12일(월)</td>
                                                            <td COLSPAN="2">기말 고사</td>
                                                            <td>
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
                                                            - Classes: 월요일 (16:00 ~ 18:50)
                                                        </li>
                                                        <li>
                                                            - Lecture Room: 317호
                                                        </li>
<!--
                                                        <li>
                                                            - Prerequisites: PyTorch/Tensorflow 기본 코딩 경험
                                                        </li>
-->
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">3. Book Presentation</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - 팀발표: 팀당 3명 (모든 팀원이 발표 내용을 나누어 발표를 해야됨, 13장을 발표하는 팀만 4명)
                                                        </li>
                                                        <li>
                                                            - 팀구성 원칙: 1개 팀에는 반드시 두 개 이상의 학과 학생들로 구성되어야 함
                                                        </li>
                                                        <li>
                                                            - 팀구성 알림: 팀장이 모든 팀원들의 학과, 학번, 이름과 함께 발표하고자 하는 '장(Chapter)'를 1순위 및 2순위 선정하여 3월 27일(월요일)까지 yhhan@koreatech.ac.kr로 알림. 이 기한까지 알림을 주지 못한 팀은 3월 27일(월요일) 수업시간에 임의 배정 및 팀 구성 점수 10% 감점.
                                                        </li>
                                                        <li>
                                                            - Evaluation: 내용 이해도 (40%), 발표 자료 충실도 (30%), 발표 역량 (20%), 팀 구성 (10^%)
                                                        </li>
                                                        <li>
                                                            - 발표 자료 제출 사이트: <a href="http://el2.koreatech.ac.kr" target="_blank">http://el2.koreatech.ac.kr</a> 의 자유게시판 활용 (게시물 제목에 팀 명, 팀 원 이름 제시)
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <div>
                                                                <h4>[숙제 준비 방법]</h4>
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
                                                                                <ol>
                                                                                    <li>따라서, 숙제 등록 URL은 반드시 http://nbviewer.jupyter.org/ 로 시작해야 함. </li>
                                                                                    <li>숙제 등록 URL 예: http://nbviewer.jupyter.org/urls/dl.dropbox.com/s/t9nmklgjkp7w4ok/kmeans.ipynb</li>
                                                                                </ol>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">4. Homework Guide</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            - PyTorch 기반 GNN 코딩 결과 리포트 제출
                                                        </li>
                                                        <li>
                                                            - 추후 구체적인 숙제 내용 제시
                                                        </li>
                                                        <li>
                                                            - 숙제 제출 사이트: <a href="http://el2.koreatech.ac.kr" target="_blank">http://el2.koreatech.ac.kr</a> 의 자유게시판 활용
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                    <h3 class="title-level-3">5. References</h3>
                                                    <br/>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>[강의 노트]</h4>
                                                            <ul>
                                                                <li>- 수업 시간 PDF로 제공</li>
                                                            </ul>
                                                            <h4>[발표 교재]</h4>
                                                            <ul>
                                                                <li>
                                                                    - 파이토치 딥러닝 마스터
                                                                    <a href="https://www.onlybook.co.kr/entry/pytorch" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>,
                                                                    Deep Learning with PyTorch
                                                                    <a href="https://www.manning.com/books/deep-learning-with-pytorch" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                    <br/>
                                                                    - 파이토치 딥러닝 마스터 Github
                                                                    <a href="https://github.com/onlybooks/pytorch" target="_blank">
                                                                        <i class="fa fa-link" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <h4>[보조 교재]</h4>
                                                            <ul>
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
                                                    <h3 class="title-level-3">6. Logistics</h3>
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
                                                    <h3 class="title-level-3">7. Lecture Evaluation</h3>
                                                    <br/>
                                                    <ul>
                                                        <li>Attendance (10%), Book Presentation (35%), Homework #1 & #2 Reports (20%), Final Exam. (35%)</li>
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
