---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<style>
    .title {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .date {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        color: darkorange;
        text-align: right;
        width: 20%;
    }

    .desc {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        color: darkslategray;
        width: 80%;
    }
</style>

<div class="row">
    <div class="col-md-6">
    <span class="title">LINK 연구실 뉴스</span>
    <table class="table">
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
    
    // Get the latest 5 <tr> elements
    const latestFiveRows = Array.from(rows).slice(-5);
    
    // Select the table in the current page where the data will be inserted
    const table = document.querySelector('table');
    
    latestFiveRows.forEach(row => {
      // Select all <td> elements within the <tr>
      const cells = row.querySelectorAll('td');
      
      // Create a new <tr> element
      const newRow = document.createElement('tr');
      
      // Create and populate the date <td> element
      const dateCell = document.createElement('td');
      dateCell.className = 'date';
      dateCell.textContent = cells[0].textContent;
      newRow.appendChild(dateCell);
      
      // Create and populate the description <td> element
      const descCell = document.createElement('td');
      descCell.className = 'desc';
      descCell.textContent = cells[1].textContent;
      newRow.appendChild(descCell);
      
      // Append the new row to the table
      table.appendChild(newRow);
    });
  })
  .catch(error => console.error('Error fetching the webpage:', error));
</script>