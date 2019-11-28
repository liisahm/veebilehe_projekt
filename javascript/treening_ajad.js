var events = [
  {'Date': new Date(2019, 10, 30), 'Title': 'Kerelihaste treening 18:00-20:00'},
  {'Date': new Date(2019, 10, 29), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 10, 28), 'Title': 'Kangitreening 16:30-17:30'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);