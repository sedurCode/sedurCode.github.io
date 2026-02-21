google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

var data = google.visualization.arrayToDataTable([
  ['ID',        'Complexity', 'Confidence', 'LanguageType', 'Experience'],
  ['Python',    1.1,          1.0,          'Scripted',       0.6],
  ['Matlab',    1.5,          1.4,           'Scripted',      1.4],
  ['Java',      0.4,          0.4,           'Scripted',      0.2],
  ['Web',       0.2,          0.4,           'Scripted',      0.2],
  ['Assembler', 0.8,          0.8,           'Compiled',      0.6],
  ['C++',       1.4,          1.4,           'Compiled',      1.0],
  ['Google Charts inflexibility to define axis limits.', 2.0, 2.0, 'Scripted', 0.1]]);

var options = {
  title: 'The Relationship Between the Languages I Have Programmed in, ' +
         'the languanges Complexity and How Confident I Feel About Programming in That Language.',
  hAxis: {title: 'Complexity'},
  vAxis: {title: 'Confidence'},
  bubble: {textStyle: {fontSize: 11},
  hAxis: {}}
};

var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
chart.draw(data, options);
}
