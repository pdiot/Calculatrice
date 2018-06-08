var values = new Array();
var operations = new Array();
var operationDone = false;

function changeResult(value) {
    var result = document.getElementById("results");
    result.value=value;
}

function reset() {
    operationDone = false;
    changeResult("");
    values = new Array();
    operations = new Array();
}


function retour() {
    var result = document.getElementById("results").value;
    var newres = result.substr(0, result.length-1);
    changeResult(newres);
}

function number(evt) {
   
    var number = evt.target.value;
    console.log(result);
    if (operationDone) {
        reset();
    }
    var result = document.getElementById("results").value;
    result = result + number;
    changeResult(result);
}

function ope(evt) {    
    
    if (operationDone) {
        var tmp = document.getElementById("results").value
        reset();
        document.getElementById("results").value = tmp;
    }
    operations.push(evt.target.value);
    values.push(document.getElementById("results").value);
    changeResult("");
}

function calc() {
    values.push(document.getElementById("results").value);
    
    var nbvalues = values.length;
    var nboperations = operations.length;
    
    i = 0; j=0; result = 0;
    if (nbvalues > 0) {
        result = parseInt(values[0]);
    }
    while (j < nboperations) {
        if (operations[j] === "+") {
            result += parseInt(values[i+1]);
        } else if (operations[j] === "-") {
            result -= parseInt(values[i+1]);
        } else if (operations[j] === "*") {
            result *= parseInt(values[i+1]);
        } else if (operations[j] === "/") {
            result /= parseInt(values[i+1]);
        } else if (operations[j] === "%") {
            result *= parseInt(values[i+1]) / 100;
        }
        i++;
        j++;
    }
    
    changeResult(math.round(result, 2));
    operationDone = true;
 
}
