/*
    This file calculates the cost of theme park tickets when
    the user clicks the calculate button.
    Author: Stewart Lovell
    File: tickets.js
    Date: 1/14/2022
*/

//Create a function that executes when the user clicks the "Calculate!" button
//This function will calculate the total cost of all theme park tickets
//when given the amount of adult & child tickets, as well as the prices for each
let button = document.querySelector("button");
button.onclick = function(event) {
    //prevent the form from submitting
    event.preventDefault();

    //select the adult cost text input box, extract the value given, convert it to a float
    let adultPrice = document.getElementById("adult");
    let adultPriceGiven = parseFloat(adultPrice.value);

    //select the child cost text input box, extract the value given, convert it to a float
    let childPrice = document.getElementById("child");
    let childPriceGiven = parseFloat(childPrice.value);

    //select the adult ticket selection box, extract the value given, convert it to an integer
    let adultTickets = document.getElementById("adult-tickets");
    let adultTicketsGiven = parseInt(adultTickets.value);

    //select the child ticket selection box, extract the value given, convert it to an integer
    let childTickets = document.getElementById("child-tickets");
    let childTicketsGiven = parseInt(childTickets.value);

    //calculate the total cost of all adult and child tickets, store the result in a variable
    let totalTicketCost = (adultPriceGiven * adultTicketsGiven) + (childPriceGiven * childTicketsGiven);

    //select the output paragraph and display the results of the calculation
    let output = document.getElementById("output-para");
    output.innerText = "Total cost for tickets: $" + totalTicketCost;


    /*

    console.log("Value in box - " + adultPriceGiven);

    //select the output paragraph and show the results
    let outputPara = document.getElementById("output");
    outputPara.innerText = "Here is the result: " + adultPriceGiven; */
}