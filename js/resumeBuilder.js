/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*function appendName(){	
	$("#main").append("Adrian Heydecker");
}
*/

var appendToMain = function(myString){  
  $("#main").append("<p>"+myString+"</p>");
};

appendToMain("Adrian Heydecker");

var awesomeThoughts = "I am Adrian and I am super AWESOME again";

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

appendToMain(funThoughts);

