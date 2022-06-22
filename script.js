//fetch data from sheet
fetch('https://opensheet.elk.sh/1wSTeIDhRgsU7gP3tjsz0bNV_6vIqYTPzhHTKkY-Coe0/links')
  .then(response => response.json())
  .then(entries => {
    entries.forEach(entry => {
        if('title' in entry) {
            addLinkRow(entry.title, entry.url);
        }
    });
  });

function newLinkRow(text, url) {
    var row = document.createElement('a');
    row.setAttribute('href', url);

    var rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'link-row');
    rowDiv.innerText = text;

    row.appendChild(rowDiv);

    return row;
}
function addLinkRow(text, url) {
    document.body.appendChild(newLinkRow(text, url));
}