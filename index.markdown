---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<style>
    .title {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        color: black;
        font-size: 1.2em;
        font-weight: bold;
    }

    .news {
        font-size: 1em;
        font-weight: bold;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        word-break: keep-all;
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
</style>

<div class="row">
    <div class="col-md-6">
      <span class="title">■ LINK 연구실 뉴스</span> 
      <span>
          (<a href="/news/">더 많은 뉴스 보기 <i class="fa fa-solid fa-plus"></i></a>)
      </span>
      <table class="table news">
      </table>
    </div>
    <div class="col-md-6">
      <span class="title">■ 컴퓨터공학부 LINK Lab. 대학원생/예비 대학원생(학부연구생) 모집</span> 
      <div>
          저희 랩실에서는 다음과 같은 연구 분야에서 함께 연구할 열정적이고 유능한 대학원생을 모집하고 있습니다:
          <br>
            <li>인공지능 및 강화학습 (Artificial Intelligence and Reinforcement Learning)</li>
            <div>
             - 딥러닝 (Deep Learning)
             - 강화학습 (Reinforcement Learning)
             - 양자 강화학습 (Quantum Reinforcement Learning)
             - 금융 강화학습 (Financial Reinforcement Learning)
            </div>
            </br>
            <li>지능형 네트워크 (Intelligent Networks)</li>
            <div> 
             - 지능형 네트워킹 (Intelligent Networking)
             - 양자 네트워크 (Quantum Network)
            </div>
            </br>
            <li>로봇 및 자율 시스템 (Robotics and Autonomous Systems)</li>
            <div>
                - 드론 및 로봇 제어 (Drone and Robotics Control)
            </div>
            <li>조합 최적화 (Combinatorial Optimization)</li>
            <div>
             - 차량 경로 문제 (Vehicle Routing Problem)
             - 외판원 문제 (Traveling Salesman Problem)
            </div>
          </ol>

          저희 연구실(LINK Lab.)에서는 최신의 이론적 연구와 실용적인 응용 연구를 결합하여 혁신적인 성과를 이루고자 합니다.
          연구의 주요 목표는 강화 학습의 학습 방법을 개선하는 새로운 기법 개발 및 다양한 실제 문제에 적용하여 최적화 성능을 높히는 것입니다.
          
          지원자격:
          - 학부 3학년 이상
            - LINK Lab. 대학원 진학 희망자
            - 새로운 기술과 지식을 배우고자 하는 열망이 강한 사람
            - 연구에 대한 열정과 끈기를 가지고 있으며, 어려운 문제에 도전하고 해결하는 것을 즐기는 사람
            - 스스로 동기 부여가 가능하며, 목표 달성을 위해 꾸준히 노력하는 사람
          
          연구지원:
          - 고성능 GPU 컴퓨터
            - 개인 노트북 (Mac Book)
            - 해외 컨퍼런스 논문 발표 지원
            - 국책 연구소 과제 참여
          
          상담 문의:
          - 담당교수: 한연희 (yhhan@학교메일) 2공학관 423호
            - 랩 대학원생: 최요한 (yoweif@학교메일) 2공학과 433호
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
    let latestFiveRows = Array.from(rows).slice(0, 5);
    
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
      dateCell.className = 'date';
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