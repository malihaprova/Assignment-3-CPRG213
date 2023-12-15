/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var noOfDays = 0;
var addedCost = 0;
var totalCost = document.getElementById("calculated-cost"); 
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");
var clearDays = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that 
// element, and update any other relevant variables. Then, we can recalculate 
// the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more 
// than once. hint: .classList.contains() might be helpful here!


function chooseMon(){
    if (monday.classList.contains("clicked")){
        monday.classList.remove("clicked");
        noOfDays -= 1;
    }
    else{
        monday.classList.add("clicked");
        noOfDays += 1;
    }
    recalculate();
}
monday.addEventListener("click", chooseMon);
function chooseTues(){
    if (tuesday.classList.contains("clicked")){
        tuesday.classList.remove("clicked");
        noOfDays -= 1;
    }
    else{
        tuesday.classList.add("clicked");
        noOfDays += 1;
    }
    recalculate();
}
tuesday.addEventListener("click", chooseTues);
function chooseWednes(){
    if (wednesday.classList.contains("clicked")){
        wednesday.classList.remove("clicked");
        noOfDays -= 1;
    }
    else{
    wednesday.classList.add("clicked");
    noOfDays += 1;
    }
    recalculate();
}
wednesday.addEventListener("click", chooseWednes);
function chooseThurs(){
    if (thursday.classList.contains("clicked")){
        thursday.classList.remove("clicked");
        noOfDays -= 1;
    }
    else{
    thursday.classList.add("clicked");
    noOfDays += 1;
    }
    recalculate();
}
thursday.addEventListener("click", chooseThurs);
function chooseFri(){
    if (friday.classList.contains("clicked")){
        friday.classList.remove("clicked");
        noOfDays -= 1;
    }
    else{
    friday.classList.add("clicked");
    noOfDays += 1;
    }
    recalculate();
}
friday.addEventListener("click", chooseFri);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
//any other relevant variables are reset, and the calculated cost is set to 0.

function resetAll(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    halfDay.classList.remove("clicked");
    fullDay.classList.add("clicked");
    noOfDays = 0;
    recalculate();
}
clearDays.addEventListener("click", resetAll);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" 
// class to the "half" element, remove it from the "full" element, and recalculate the 
// total cost.

function chooseHalf(){
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    costPerDay = 20;
    recalculate();
}
halfDay.addEventListener("click", chooseHalf);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked 
//class is added to "full" and removed from "half", and the total cost is recalculated.

function chooseFull(){
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    costPerDay = 35;
    recalculate();
}
fullDay.addEventListener("click", chooseFull);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the 
// appropriate value

function recalculate(){
    addedCost = noOfDays*costPerDay;
    totalCost.innerHTML = addedCost;
}
