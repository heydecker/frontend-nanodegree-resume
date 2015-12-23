/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var appendTo = function(myElement,myHTML){  
//  myElement.append("<p>"+myString+"</p>");
  $(myElement).append(myHTML);
};
*/

/*
var appendToMain = function(myString){  
  $("#main").append("<p>"+myString+"</p>");
};

appendToMain("Adrian Heydecker");

var awesomeThoughts = "I am Adrian and I am super AWESOME again";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

appendToMain(funThoughts);
*/
var name = "Adrian Heydecker";
var role = "UX Architect";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var myInitialString = "audacity";
var myFinalString1 = myInitialString.replace("a","");
var myFinalString2 = myInitialString.slice(1);

console.log(myFinalString1);
console.log(myFinalString2);




