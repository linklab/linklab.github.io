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
    <span class="title">LINK 연구실 뉴스</span> 
    <span>
        (<a href="/news/">더 많은 뉴스 보기 <i class="fa fa-solid fa-plus"></i></a>)
    </span>
    <table class="table news">
    </table>
    </div>
    <div class="col-md-6">
!
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