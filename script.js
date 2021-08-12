// Computes interest using user fields
function compute()
{

    // validatePrincipal first
    if(!validatePrincipal()){
        return;
    }

    // Compute Interest
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = "\<br\>\<br\>" + 
        "If you deposit <mark>" + principal + "</mark>,\<br\>" + 
        "at an interest rate of <mark>" + rate + "%</mark>.\<br\>" + 
        "You will receive an amount of <mark>" + interest + "</mark>,\<br\>" + 
        "in the year <mark>" + year + "</mark>\<br\>"

}

// Show rate whenever slider is updated
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

// Check whether Principal amount > 0, alert user otherwise
function validatePrincipal()
{
    var principalField = document.getElementById("principal");

    if(principalField.value <= 0){
        alert("Enter a positive number")
        principalField.focus()
        return false;
    }

    return true;
}
        