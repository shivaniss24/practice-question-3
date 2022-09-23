var inputElement=document.querySelector('#input-text');
var buttonOne=document.querySelector('#button-1');
var buttonTwo=document.querySelector('#button-2');
var buttonThree=document.querySelector('#button-3');
var outputElement=document.querySelector('#output');


function textFirst()
{

    // var heading.innerHTML=`<h1>${inputElement}</h1>`;
    
    outputElement.innerHTML=`<h1>${inputElement.value}</h1>`; 

}

buttonOne.addEventListener('click',textFirst);