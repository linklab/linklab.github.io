---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<style>
    .page-content {
        padding: 0px 0;
        flex: 1;
    }

    @media (max-width: 767px) {
      .lab_title, .lab_sub_title{
          font-family: 'NotoSansKR-Regular', sans-serif;
          color: black;
          font-size: 1.0em;
          font-weight: bold;
          padding-bottom: 0.0em;
      }
      .lab_sub_title {
          margin-top: 0.0em;
          font-size: 0.65em
      }
      .lab_member {
          margin-top: 2.0em;          
      }
    }

    @media (min-width: 768px) {
      .lab_title, .lab_sub_title {
          font-family: 'NotoSansKR-Regular', sans-serif;
          color: black;
          font-size: 2.0em;
          font-weight: bold;
          padding-bottom: 0.5em;
      }
      .lab_sub_title {
          margin-top: 0.5em;
          font-size: 1.5em;
          margin-bottom: 0.7em;
      }
    }

    .title {
        font-family: 'NotoSansKR-Regular', sans-serif;
        color: black;
        font-size: 1.2em;
        font-weight: bold;
    }

    .news {
        font-size: 1em;
        font-weight: bold;
        font-family: 'NotoSansKR-Regular', sans-serif;
        word-break: keep-all;
    }

    .solid_border {
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        padding: 0.1em
    }

    .recruit {
        font-size: 1em;
        font-weight: bold;
        font-family: 'NotoSansKR-Regular', sans-serif;
        word-break: keep-all;
        color: black;
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        padding: 1em
    }

    .date {
        color: darkorange;
        text-align: right;
        width: 20%;
    }

    .desc {
        color: darkslategray;
        width: 80%;
    }

    @media (max-width: 767px) {
        .right_padding {
            padding: 0;
            padding-right: 1.0em !important;
            padding-left: 1.0em !important;
            margin: 0 !important;
        }

        .left_padding {
            padding: 0;
            padding-right: 1.0em !important;
            padding-left: 1.0em !important;
            margin: 0 !important;
        }

        .youtube_div {
            margin-left: -1.1em !important;            
        }

        .third_image {
            margin-bottom: 0.6em !important;
        }
    }

    @media (min-width: 768px) {
        .right_padding {
            padding: 0;
            padding-right: 1.0em !important;
            margin: 0 !important;
        }
    
        .left_padding {
            padding: 0;
            padding-left: 1.0em !important;
            margin: 0 !important;
        }

        .second_label_photos {
            margin-top: -0.6em;
        }
    }
</style>
<div class="row">
    <div class="col-md-12 text-center lab_title">
      한국기술교육대학교 지능형네트워크 연구실
    </div>
    <div class="col-md-12 text-center lab_sub_title">
      - Laboratory of Intelligent Networks (LINK) at KOREATECH - 
    </div>
</div>
<div class="row">
    <div class="col-md-6">
        <span class="title">■ LINK 연구실 뉴스</span> 
        <span>
            (<a href="/news/">더 많은 뉴스 보기 <i class="fa fa-solid fa-plus"></i></a>)
        </span>
        <div class="solid_border">
            <table class="table news" style="margin-bottom: 0em">
            </table>
        </div>
    </div>
    <div class="col-md-6 lab_member">
        <span class="title">■ LINK 연구원</span>
        <div class="solid_border">
            <div class="row">
                <div class="col-md-6 left_padding">
                    <img src="/assets/images/members/link_lab_member_2021.jpg" width="100%" height="96%"/>
                </div>
                <div class="col-md-6 right_padding">
                    <img src="/assets/images/members/link_lab_member_2008.jpg" width="100%" height="96%"/>
                </div>
            </div>
            <div class="row second_label_photos">
                <div class="col-md-6 left_padding third_image">
                    <img src="/assets/images/members/link_lab_member_2017.jpg" width="100%" height="99%"/>
                </div>
                <div class="col-md-6 right_padding">
                    <img src="/assets/images/members/link_lab_member_2016.jpg" width="100%" height="99%"/>
                </div>
            </div>
        </div>
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <span class="title">■ 컴퓨터공학부 LINK 연구실 대학원생/예비 대학원생(학부연구생) 모집</span>
        <div class="recruit">
            <div>
                한국기술교육대학교 컴퓨터공학부 Link 연구실에서는 다음과 같은 연구 분야에서 함께 연구할 열정적이고 유능한 대학원생을 모집하고 있습니다.
                <br>
                <li>인공지능 및 강화학습</li>
                <ul>
                    <li>- 딥러닝 (Deep Learning)</li>
                    <li>- 강화학습 (Reinforcement Learning)</li>
                    <li>- 양자 기계학습 (Quantum Machine Learning)</li>
                    <li>- 양자 강화학습 (Quantum Reinforcement Learning)</li>
                </ul>
                <li>강화학습 기반 지능형 네트워킹 및 조합 최적화</li>
                <ul> 
                    <li>- 5G/6G 네트워크 자원 최적화 (Resource Optimization)</li>
                    <li>- 조합 최적화 (Combinatorial Optimization)</li>
                    <li>- 양자 네트워크 (Quantum Network) 자원 최적화</li>
                </ul>
                <li>강화학습 기반 자율 시스템 제어</li>
                <ul>
                    <li>- 무인기 제어 (Unmanned Ground/Aerial Vehicle Control)</li>
                    <li>- 로봇 제어 (Robotics Control)</li>
                    <li>- 금융 에이전트 제어 (Financial Agent Control)</li>
                </ul>
            </div>
            <div>    
                한국기술교육대학교 컴퓨터공학부 Link 연구실에서는 강화 학습의 이론적 연구를 통해 학습 방법을 개선하는 새로운 기법을 개발하고, 이를 실용적인 응용 연구에 결합하여 다양한 실제 문제에 대하여 혁신적인 최적화 성과를 얻는 연구를 수행합니다.
            </div>
            <br/>
            <div>
                지원자격: 학부 3학년 및 4학년
                <ul>
                    <li>- LINK Lab. 대학원 진학 희망자</li>
                    <li>- 새로운 기술과 지식을 배우고자 하는 열망이 강한 학생</li>
                    <li>- 연구에 대한 열정과 끈기를 가지고 있으며, 어려운 문제에 도전하고 해결하는 것을 즐길 수 있는 학생</li>
                    <li>- 스스로 동기 부여가 가능하며, 목표 달성을 위해 꾸준히 노력하는 학생</li>
                </ul>
            </div>
            <div>
              연구지원:
                <ul>
                    <li>- 100% 모든 대학원생에 대한 등록금 전액 및 조교 장학금 지급</li>
                    <li>- 일정 수준의 생활비 지원</li>
                    <li>- 고성능 GPU 컴퓨터 지원</li>
                    <li>- 개인 노트북 (Mac Book)</li>
                    <li>- 국내/해외 컨퍼런스 논문 발표 지원</li>
                    <li>- 정부 출연 국책 연구소 과제 참여</li>
                </ul>
            </div>
            <div>
                상담 문의:
                <ul>
                    <li>- 담당교수: 한연희 (yhhan@학교메일) 2공학관 423호</li>
                    <li>- LINK 연구실 대표학생: 지창훈 (koir5660@학교메일) 2공학관 433호</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <span class="title">■ Highlighted Research Outcome Videos</span>
        <div class="recruit">
          <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/ijdO3UNL4Bs"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          LINK 연구실 제작 MARL (Multi-Agent RL) 라이브러리로 훈련시킨 SMAC (StarCraft Multi-Agent Challenge) 미니 게임 제어
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/MIi-kOs5SK4"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          LINK 연구실 제작 다중 AGV 이동 및 충돌 제어 및 비교 시물레이션
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/V1UmPAgLx6U"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          한국기술교육대학교 30주년 미래기술전시회 행사에서 한연희 교수님 기술 발표 영상 (2021년 11월)
                      </div>
                  </div>
              </div>
             <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/7kGorLGhEJY"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          LINK 연구실 제작 MARL (Multi-Agent RL) 라이브러리로 훈련시킨 공장 자동화: 물류 분류 최적 경로 제어
                      </div>
                  </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/1XD9OipE9c8"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          회전형 2단 도립 진자(Rotary Double Inverted Pendulum)에 대한 심층강화학습 기반 Swing Up & Balancing 제어
                      </div>
                  </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="youtube_div">
                      <iframe src="https://www.youtube.com/embed/c_rCl-1RVCs"
                              style="width:90%;height:15.0em;margin: 1.7em"
                              allow="autoplay; encrypted-media" allowfullscreen="">
                      </iframe>
                      <div style="margin-top:-1.5em;margin-bottom: 1.0em; color: #000000" class="text-center">
                          회전형 도립 진자(Rotary Inverted Pendulum) 3대를 활용한 엽합(Federated) 심층강화학습 기반 Swing Up & Balancing 제어 가속화
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
</div>
<script type="text/javascript">
fetch('https://linklab.github.io/news/')
  .then(response => response.text())
  .then(data => {
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    
    // Select all <tr> elements
    const rows = doc.querySelectorAll('tr');
    
    // Extract the latest 5 <tr> elements
    let latestFiveRows = Array.from(rows).slice(0, 6);
    
    // Select the table in the current page where the data will be inserted
    const table = document.querySelector('table');
    
    latestFiveRows.forEach(row => {
      // Extract the year, month, and day attributes from the <tr>
      const year = row.getAttribute('year');
      const month = row.getAttribute('month');
      const day = row.getAttribute('day');
      
      // Create a new <tr> element
      const newRow = document.createElement('tr');
      
      // Create and populate the date <td> element
      const dateCell = document.createElement('td');
      dateCell.className = 'date text-center';
      dateCell.textContent = `${year}-${month}-${day}`;
      newRow.appendChild(dateCell);
      
      // Select the description <td> element within the <tr>
      const descCell = row.querySelector('.desc');
      
      // Create and populate the description <td> element in the new row
      const newDescCell = document.createElement('td');
      newDescCell.className = 'desc';
      newDescCell.innerHTML = descCell.innerHTML; // Copy the HTML content
      newRow.appendChild(newDescCell);
      
      // Append the new row to the table
      table.appendChild(newRow);
    });
  })
  .catch(error => console.error('Error fetching the webpage:', error));
</script>