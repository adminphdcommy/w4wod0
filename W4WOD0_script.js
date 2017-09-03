
function selectStudent() {
//Store the name in an Array
var studentsArray = ["Wai Choon", "Christopher", "Jerry", "Brenda", "YK", "KK", "Abdulatif", "Poju"]

//Create a randomness - between 0 to 7
var randomNumber = Math.floor(Math.random() * studentsArray.length)


//Choose a person
document.getElementById("output001").innerHTML = studentsArray[randomNumber] + " has been chosen to do the following exercise. "
}


function sentence() {
	var sentence = document.getElementById("input002").value;
	var counter = 0
	var str = sentence.split
	for(i=0; i<sentence.length; i++){
		if (sentence[i] =='a' || sentence[i] =='e' || sentence[i] =='i' || sentence[i] =='o' || sentence[i] =='u'  ){
			counter ++
		}
	}
	
	
	
	
	document.getElementById("output002").innerHTML = counter + ' vowels in ' + sentence;
	
	
}


