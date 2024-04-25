let result = document.getElementById("display")
function inputToDisplay(input){
     result.value += input
}
function clearDisplay(){
    result.value = " ";
}
function calculate(){
    result.value = eval(result.value)
}