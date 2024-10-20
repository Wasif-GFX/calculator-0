function btn(num1){
    var input = document.getElementById("display")
    input.value +=num1
}
function asDel(){
    var input = document.getElementById("display")
    input.value = ""
}
function  del(){
    var input = document.getElementById("display")
    input.value = input.value.slice(0,-1)
}
function equal(){
    var input = document.getElementById("display")
    if(!input.value){
        input.value = "Error";
    }
    else{
        input.value = eval(input.value);
        
    }
}


