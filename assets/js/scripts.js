var currentNumberWrapper = document.getElementById("currentNumber"); //modifica apenas o elemento span 0 do html, pq o currentNumber sem o wrapper seria o elemento todo//
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; //O html que ta dentro dele que inicia como zero, vai receber o valor da soma acima//
    
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; //O html que ta dentro dele que inicia como zero, vai receber o valor da soma acima//

}