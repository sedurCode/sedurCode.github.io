google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    ['AVARPaper', 'AVAR Paper Submission','Conference',
    null, new Date(2022, 4, 1), daysToMilliseconds(30), 5, null],
    ['AVARPoster', 'AVAR Poster Generation','Conference',
    null, null, daysToMilliseconds(10), 20, 'AVARPaper'],
    ['AVAR', 'AVAR Conference','Conference',
    new Date(2022, 8, 15), null, daysToMilliseconds(4), 0, 'AVARPaper,AVARPoster'],
    ['NDSP', 'Trip To Finland (tentative)','Excursion',
    new Date(2022, 4, 13), null, daysToMilliseconds(4), 0, null],
    ['experiment2', 'Experiment2','Data',
    new Date(2022, 3, 1), null, daysToMilliseconds(60),  50,  null],
    ['experiment3', 'Experiment3','Data',
    new Date(2022, 4, 1), null,daysToMilliseconds(60),  30,  null],
    ['experiment4', 'Experiment4','Data',
    null, null, daysToMilliseconds(60),  10, 'experiment3'],
    ['Chapter1Write', 'Chapter1: Write (Introduction)','Introduction',
    new Date(2022, 3, 1), null, daysToMilliseconds(30), 0, null],
    ['Chapter1Edit', 'Chapter1: Edit','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter1Write'],
    ['Chapter2Write', 'Chapter2: Write (Soundscape Evaluation)','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter1Write'],
    ['Chapter2Edit', 'Chapter2: Edit','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter2Write'],
    ['Chapter3Write', 'Chapter3: Write (Spatialization & Auralization)','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter2Write'],
    ['Chapter3Edit', 'Chapter3: Edit','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter3Write'],
    ['Chapter4Write', 'Chapter4: Write (VR Technologies)','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter3Write'],
    ['Chapter4Edit', 'Chapter4: Edit','Introduction',
    null, null, daysToMilliseconds(30), 0, 'Chapter4Write'],
    ['Chapter5Write', 'Chapter5: Write (experiment 1)','Experiment',
    null, null, daysToMilliseconds(30), 0, 'Chapter4Write,experiment2'],
    ['Chapter5Edit', 'Chapter5: Edit','Experiment',
    null, null, daysToMilliseconds(30), 0, 'Chapter5Write,experiment2'],
    ['Chapter6Write', 'Chapter6: Write (experiment 2)','Experiment',
    null, null, daysToMilliseconds(30), 0, 'Chapter5Write,experiment3'],
    ['Chapter6Edit', 'Chapter6: Edit','Experiment',
    null, null, daysToMilliseconds(30), 0, 'Chapter6Write,experiment3'],
    ['Chapter7Write', 'Chapter7: Write (experiment 3 (/ 4))','Experiment',
    null, null, daysToMilliseconds(30), 0, 'Chapter6Write,experiment4'],
    ['Chapter7Edit', 'Chapter7: Edit','Experiment',
    null,null, daysToMilliseconds(30), 0, 'Chapter7Write,experiment4'],
    ['Backmatter', 'Backmatter','Thesis',
    null, null, daysToMilliseconds(30), 0, 'Chapter5Edit,Chapter6Edit,Chapter7Edit'],
    ['Frontmatter', 'Frontmatter','Thesis',
    null, null, daysToMilliseconds(30), 0, 'Chapter1Edit,Chapter2Edit,Chapter3Edit,Chapter4Edit'],
    ['Graphics', 'Graphics','Thesis',
    null, null, daysToMilliseconds(30), 0, 'Frontmatter,Backmatter,Matlab'],
    ['References', 'References','Thesis',
    null, null, daysToMilliseconds(30), 0, 'Frontmatter,Backmatter'],
    ['Review', 'Review','Thesis',
    null, null, daysToMilliseconds(30), 0, 'References,Graphics'],
    ['Matlab', 'Matlab Scripts','Software',
    null, null, daysToMilliseconds(30), 0, 'experiment4,experiment3,experiment2'],
    ['Python', 'Python Scripts','Software',
    null, null, daysToMilliseconds(30), 0, 'experiment4,experiment3,experiment2'],
    ['Unity', 'Unity Package','Software',
    null, null, daysToMilliseconds(30), 0, 'experiment4,experiment3'],
    ['Software', 'Package Software & Other Resources','Software',
    null, null, daysToMilliseconds(30), 0, 'Matlab,Python,Unity,Backmatter'],
    ['Submission', 'Submission','Thesis',
    null, new Date(2023, 3, 1), daysToMilliseconds(30), 0, 'Software,Review']
  ]);

  var options = {
    height: 2048,
        gantt: {
          criticalPathEnabled: true,
          criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 5
          }
        }
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}