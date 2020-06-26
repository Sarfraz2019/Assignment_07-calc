


// calculator 



function getNum(num){
   
    var result = document.getElementById("result")
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = "";
}

function back(){
    var result = document.getElementById("result")
    var len = result.value.length ;
    result.value = "";
}


function getResult(){
    var result = document.getElementById("result")
    // console.log(result.value)
    result.value = eval(result.value)
    
}