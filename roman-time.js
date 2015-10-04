var hours = process.argv[2];
var minutes = process.argv[3];

if(hours < 0 || hours > 24 || minutes < 0 || minutes > 59) {
	console.log('Time is incorrect');
} else {
	var h1 = hours % 10;
	var h2 = hours - h1;
  var m1 = minutes % 10;
  var m2 = minutes - m1;

  var arrayt1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var arrayt2 = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

  if(hours == 0) {
    	h = '00';
  } else {
    	var h = arrayt2[h2/10] + arrayt1[h1];
  }

  if(minutes == 0) {
    	m = '00';
  } else {
    	 var m = arrayt2[m2/10] + arrayt1[m1];
  } 

    console.log(h + ':' + m);
}
