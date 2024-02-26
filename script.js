function checknow(){
    let str = document.getElementById("text-input").value;
    if(str.length === 0){
        alert("Please input a value");
    }else{
        let resultdata = evaluate(str);
        if(resultdata == true){
           document.getElementById("result").innerHTML =  str+" is a palindrome";
        }else{
            document.getElementById("result").innerHTML = str+" is not a palindrome";
        }
    }
}

function evaluate(str){
    let checkingstr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i = 0 ; i < Math.floor(checkingstr.length/2);i++){
        var value = checkingstr.length - (i+1);
        if(checkingstr[i] != checkingstr[value]){
                return false;
        }
    }
    return true;
}