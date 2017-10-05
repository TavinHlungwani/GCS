/*Variables declaration*/
var president = "Jacob Zuma";
var degree = 3;
var oldTestament = 39;
var endWorld = "Revelation";
var shortCha = "John Chapter 11 Verse 35";

var mark = 0;//counter
var timer = new Timer(60);

//Use timer as an argument and it will be passed in the index
function play(){

	alert("Please note that the spelling on the following quiz matters\nYou have one minute to complete the quiz");

	//timer.countdown();//eixxxxxxx
	
	
	/*Questions*/
	president = prompt("Who is the president of South Africa?");
	if(president == "Jacob Zuma"){
		alert("You got it right");
		mark++;
	}
	else{
		alert("Ooops! you got it wrong!");
		mark--;
	}
	
	
	degree = prompt("What is the duration of a basic degree at University of Johhannesburg?");
	if(degree == 3){
		alert("Your a star");
		mark++;
	}
	else{
		alert("Ooops! you got it wrong!");
		mark--;
	}
	
	
	oldTestament = prompt("How many books in the old Testament of the Bible?");
	if(oldTestament == 39){
		alert("Your a christian indeed");
		mark++;
	}
	else{
		alert("Ooops! you got it wrong!");
		mark--;
	}
	
	
	endWorld = prompt("Which bible book prophecy the end of the world?");
	if(endWorld == "Revelation"){
		alert("Awesome, shows you are ready");
		mark++;
	}
	else{
		alert("Ooops! you need to be ready!");
		mark--;
	}
	
	
	shortCha = prompt("What is the shortest scripture in the bible?\nExample Answer: Genesis Chapter 1 Verse 1");
	if(shortCha == "John Chapter 11 Verse 35"){
		alert("Your a bible skills are awesome");
		mark++;
	}
	else{
		alert("Ooops, improve your bible knowledge breathren!");
		mark--;
	}
	

	/*Mark allocation*/
	if(mark == 5){
		alert("You got a Gold medal\nThanks for using our quiz, goodbye");
	}
	else if(mark == 4){
		alert("You got a Silver medal\nThanks for using our quiz, goodbye");
	}
	else if(mark == 3){
		alert("You got a Bronze medal\nThanks for using our quiz, goodbye");
	}
	else{
		alert("You have hit a boo boos, try again next time, goodbye");
	}
}