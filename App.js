

function calculateContribution(){
    var amount = parseInt(document.getElementById("amount").value);
    var people = document.getElementById("people").value;
    var tip = parseInt(document.getElementById("tip").value);
    var total = (amount+tip);
    var result = total/people;

    document.getElementById("contribution").innerHTML="Rs. "+result;
}
