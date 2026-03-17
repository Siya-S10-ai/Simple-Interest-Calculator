function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementByIdmentById("result");
}

//Create a function to display the value of the 'Rate' slider
function updateRate() {
    //create a vaiable that gets the value from the 'Rate' slider.
    var rateval = document.getElementById("rate").value;

    //modify the <span id="rate_val"> value to display the rateval
    document.getElementById("rate_val").innerText = rateval;
}
        