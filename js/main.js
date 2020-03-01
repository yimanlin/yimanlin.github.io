function askQuestions() {


var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');
var fullName = prompt (firstName + " " + lastName);
	console.log(fullName);


if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
	console.log ('greeting!');
}


var faveColor = prompt ('What is your favourite color? Red, Green, Yellow or Tomato?').toLowerCase();

if (faveColor === 'red' ||
	faveColor === 'green' ||
	faveColor === 'blue' ||
	faveColor === 'tomato'){
	$('h1').css('color', faveColor);

	}

}



//When the pages loaded
$(function (){

	$('img').on('click', askQuestions);

	//when the user clicks an H3
	$('h3').on('click', function(){

		//Toggle the next element
		$(this). next().slideToggle();
	});
})