// Checks if only one input field is filled
function isSingleInput(inputsArray){
    var count = 0;
    for (i=0; i<inputsArray.length; i++){
        if (inputsArray[i] != ""){
            count++;
        }
    }
    if (count == 1){
        return true;
    }
    else if (count == 0){
        alert("Please fill in one input field")
        return false;
    }
    else{
        alert("Too many inputs. Please fill only one field.");
        return false;
    }
}

function integerCheck(inputsArray){
    for (i=0; i<inputsArray.length; i++){
        if (inputsArray[i] != ""){
            
        }
    }
}

function startConversion(dec, bin, oct, one, two){
    var decimal = document.getElementById(dec).value;
    var binary = document.getElementById(bin).value;
    var octal = document.getElementById(oct).value;
    var ones = document.getElementById(one).value;
    var twos = document.getElementById(two).value;

    var inputs = [decimal, binary, octal, ones, twos];
    
    if(isSingleInput(inputs)){
        alert("Success");
    }else{
        return;
    }
}