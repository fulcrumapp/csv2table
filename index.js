var csv = require('csv-parse');
var $ = require('jquery');
var dt = require( 'datatables.net' )(window, $);
var htmlTable = require('helper-html-table');
var styletag = require('style-tag');

styletag('html, body { padding: 0; margin: 0; font-family: sans-serif; font-size: 13px; }');
styletag('table { border-collapse: collapse; margin-top: 5px; }');
styletag('td, th { border: 1px solid #d8d8d8; padding: 3px; font-size: 13px; }');
styletag('th { background-color: #f1f1f1; cursor: pointer; }');
styletag('.dataTables_filter { padding: 8px; }');

var content = document.getElementsByTagName('pre')[0].firstChild.data.replace(/\t+$/, '');

csv(content, (err, data) => {
  document.body.style.fontFamily = 'sans-serif';
  document.body.innerHTML = htmlTable({attr: 'cellspacing="0"', thead: [data[0]], tbody: data.slice(1)});
  $('table').DataTable({paging: false});
});
