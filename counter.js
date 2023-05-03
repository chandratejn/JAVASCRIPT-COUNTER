let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let counterClearElem = document.querySelector('.counter-clear');
let alertText=document.getElementById('error-text');
let count = 0;

updateDisplay();
 alertText.innerHTML='';
counterPlusElem.addEventListener("click",()=>{
     alertText.innerHTML='';
     count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    if(count<0||count==0){
        alertText.innerHTML='Error : Cannot go below 0';
        
    }
   else if(count>0){
   
count--;
    }
    updateDisplay();
});
counterClearElem.addEventListener("click",()=>{
    count = 0;
    alertText.innerHTML='Caution : No decrement can be done below 0';
    updateDisplay();
});
function updateDisplay(){
    counterDisplayElem.innerHTML = count;
   
}; 
