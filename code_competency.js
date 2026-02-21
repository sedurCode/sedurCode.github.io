// code_competency.js – Google Charts bubble chart
// Works without jQuery; loaded after DOM is ready via defer attribute.
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {
  var data = google.visualization.arrayToDataTable([
    ['ID',         'Complexity', 'Confidence', 'Language Type', 'Experience'],
    ['Python',      1.1,          1.0,          'Scripted',       0.6],
    ['Matlab',      1.5,          1.4,          'Scripted',       1.4],
    ['Java',        0.4,          0.4,          'Scripted',       0.2],
    ['Web',         0.2,          0.4,          'Scripted',       0.2],
    ['Assembler',   0.8,          0.8,          'Compiled',       0.6],
    ['C++',         1.4,          1.4,          'Compiled',       1.0],
  ]);

  var options = {
    title: 'Language Complexity vs Confidence',
    titleTextStyle: { color: '#e6edf3', fontSize: 15, bold: false },
    backgroundColor: '#ffffff',
    hAxis: {
      title: 'Complexity',
      titleTextStyle: { color: '#555' },
      textStyle: { color: '#555' },
      gridlines: { color: '#e0e0e0' },
    },
    vAxis: {
      title: 'Confidence',
      titleTextStyle: { color: '#555' },
      textStyle: { color: '#555' },
      gridlines: { color: '#e0e0e0' },
    },
    bubble: {
      textStyle: { fontSize: 12, color: '#333' },
    },
    legend: {
      textStyle: { color: '#555' },
    },
    chartArea: { left: 60, top: 40, width: '85%', height: '75%' },
  };

  var el = document.getElementById('series_chart_div');
  if (!el) return;
  var chart = new google.visualization.BubbleChart(el);
  chart.draw(data, options);
}
