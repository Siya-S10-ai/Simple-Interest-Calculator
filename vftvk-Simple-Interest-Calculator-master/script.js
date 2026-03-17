function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementByIdmentById("result");

    //logic to convert the "No. of Years" int actual year in the future.
    // This can be done by adding the number of years "years" to the current
    // year

    var year = new Date().getFullYear() + parseInt(years);

    // add validation for the "principal" input box. 
    // If a user enters zero or a negative value, 
    // show an alert which says "Enter a positive number"
    if (principal <= 0) {
        alert("Please enter a positive number!");
        /* Once the user click on the alert "OK" button, 
        take the user back to the "Principal" input box, by
        setting the focus on this box using the (focus) method in the code
        for principal input validation: */
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
}

//Create a function to display the value of the 'Rate' slider
function updateRate() {
    //create a vaiable that gets the value from the 'Rate' slider.
    var rateval = document.getElementById("rate").value;

    //modify the <span id="rate_val"> value to display the rateval
    document.getElementById("rate_val").innerText = rateval;
}
        