//Globals
var stored = ''; // stores the calculation as a string
var subtotal = 0; // sums previous num + new number on the display
var reset = 0; // checks if user is typing a new number: 0 = same number | 1 = new number
var noDouble = 0 // prevents user to double click action and repeat the last action

function calc(operator, opt){


	if(operator === 'num' && reset == 0) { //btn pressed is a number
		document.getElementById('result').value += opt; //keeps concatenating numbers on display 
	
	} else if (operator === 'num'){
		document.getElementById('result').value = parseFloat(0 + opt); //next number's first digit
		reset = 0;
		noDouble = 0;
	}	


	if (operator == 'act') { //btn pressed is an action
	
		if ((opt == '+' || opt == '-') && noDouble == 0) {
			stored += document.getElementById('result').value + opt;			
			subtotal = eval(stored + 0)
			document.getElementById('result').value = subtotal
			stored = subtotal + opt
		}

		if ((opt == '*' || opt == '/') && noDouble == 0) {
			stored += document.getElementById('result').value + opt;
			subtotal = eval(stored + 1)
			document.getElementById('result').value = subtotal
			stored = subtotal + opt
		}
		if ((opt == '=') && noDouble == 0) {
			stored += document.getElementById('result').value
			document.getElementById('result').value = eval(stored)
			subtotal = 0;
		}

		noDouble = 1; //user can freely press action button without triggering it again
		reset = 1; // user can now press a new number					
	}		


	if(opt == 'c') { //clears the display
		document.getElementById('result').value = '';			
		stored = '';
		subtotal = 0;
		reset = 0;
		noDouble = 0;
	}		
} //func calc ends


// + | - => display +(op) next + 0 = subtotal
// * | / => display *(op) next ? = subtotal