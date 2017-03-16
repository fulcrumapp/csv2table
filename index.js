var csv = require('csv-parse');
var $ = require('jquery');
var dt = require('datatables.net')(window, $);
require('datatables.net-bs')(window, $);
require('datatables.net-fixedheader')(window, $);
var htmlTable = require('helper-html-table');

var content = document.getElementsByTagName('pre')[0].firstChild.data.replace(/\t+$/, '');

csv(content, (err, data) => {
  document.body.style.fontFamily = 'sans-serif';
  document.body.innerHTML = htmlTable({attr: 'cellspacing="0" class="table table-striped table-bordered"', thead: [data[0]], tbody: data.slice(1)});
  $('table').DataTable({paging: false, fixedHeader: true});
});
