var events = [
  {'Date': new Date(2019, 10, 30), 'Title': 'Kerelihaste treening 18:00-20:00'},
  {'Date': new Date(2019, 10, 28), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 11, 1), 'Title': 'Kangitreening 16:30-17:30'},
  {'Date': new Date(2019, 11, 5), 'Title': 'Kangitreening 16:30-17:30'},
  {'Date': new Date(2019, 11, 9), 'Title': 'Kangitreening 16:30-17:30'},
  {'Date': new Date(2019, 11, 13), 'Title': 'Kangitreening 16:30-17:30'},
  {'Date': new Date(2019, 11, 19), 'Title': 'Kangitreening 16:30-17:30'},
  {'Date': new Date(2019, 11, 2), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 11, 8), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 11, 13), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 11, 28), 'Title': 'Ringtreening 16:00-17:30'},
  {'Date': new Date(2019, 11, 3), 'Title': 'Kerelihaste treening 18:00-20:00'},
  {'Date': new Date(2019, 11, 10), 'Title': 'Kerelihaste treening 18:00-20:00'},
  {'Date': new Date(2019, 11, 12), 'Title': 'Kerelihaste treening 18:00-20:00'},
  {'Date': new Date(2019, 11, 21), 'Title': 'Kerelihaste treening 18:00-20:00'},

];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);