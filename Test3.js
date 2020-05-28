//Following MMTuts example. 

function calc(){
var a = parseInt(document.querySelector('#value1').value);
    
var b = parseInt(document.querySelector('#value2').value);
    
var op = document.querySelector("#operator").value; 
    
var calculate; 
    
if (op =="add"){
calculate = a + b; 
}

else if (op =="min"){

calculate = a - b;
}
    
else if (op == "div"){
    
calculate = a / b;
}
    
else if (op == "mul"){
    
calculate = a * b; 
}
    

let results = document.querySelector('#Results');

results.innerHTML = calculate;

};

let button1 = document.querySelector('#Calculate');

button1.addEventListener('click', calc, false);

//If I wanted to display the document in the result to the webpage, I would grab the web