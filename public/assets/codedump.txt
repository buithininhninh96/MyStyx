█████████████████████████████████████████
▐█ To test:
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//simiar function to an if/else statement ¬
condition ? thenPerformThis : elsePerformThis;
	//e.g: ¬
	age < 15 ? console.log("you're below 15") : console.log("You're 15 or above") 

█████████████████████████████████████████
▐█ Mimic values & toggle color:
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

var userinput = document.getElementById(inputID);
var resultoutput = document.getElementById(outputID);
var activecolor = "#ff3333";

console.log(userinput.value);
console.log(resultoutput.value);

resultoutput.value = userinput.value;

if (resultoutput.value == "1"){
  resultoutput.style.backgroundColor = activecolor;
}else{
  resultoutput.style.backgroundColor = "";
};

console.log(resultoutput.value);


█████████████████████████████████████████
▐█ Adding values and check if odd/even:
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

var inputsquarevalue = document.getElementById("i1").value;
var effectsquarevalue = document.getElementById("1s1").value;

var inputsnum = parseInt(inputsquarevalue, 10);
var effectsnum = parseInt(effectsquarevalue, 10);

var totalnum = inputsnum + effectsnum;

if(totalnum%2 == 0) {
  document.getElementById("r1").value = 0;
  document.getElementById("r1").style.backgroundColor = "";
  console.log("the number is even and will not affect the result square's value of 0");
} else {
  document.getElementById("r1").value = 1;
  document.getElementById("r1").style.backgroundColor = "#ff3333";
  console.log("the number is odd and will effect the result square's value to 1");
};


__________________

//possible break down for flexibility:

var num;
var test = "r"+ num;
num = 1;
console.log(test + " is the logged result");

console.log(document.getElementById(test).value); // does return the valur of r1 square
