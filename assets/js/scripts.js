var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; //O html que ta dentro dele que inicia como zero, vai receber o valor da soma acima//
    
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; //O html que ta dentro dele que inicia como zero, vai receber o valor da soma acima//

}