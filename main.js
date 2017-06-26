
function main() {

var multiples=[]
var sum = 0;


	function compute() {

		for(var i=1;i<1000;i++) {

			if( i%3==0 || i%5==0 ) {

				multiples.push(i);
			}
		}

		for(var i=0;i<multiples.length;i++) {

			sum = sum + multiples[i];
		}
       
       return sum;

	
	}

    
	$('#compute').on('click', function() {

		console.log(multiples);
		
		$('#answer').text(compute());
		$('.output').slideToggle(400);
		console.log(sum);
	} );




}

$(document).ready(main);