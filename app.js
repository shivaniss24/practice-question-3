var inputElement=document.querySelector('#input-text');
var buttonOne=document.querySelector('#button-1');
var buttonTwo=document.querySelector('#button-2');
var buttonThree=document.querySelector('#button-3');
var outputElement=document.querySelector('.output');

//function for text-1
function textFirst()
{

    // var heading.innerHTML=`<h1>${inputElement}</h1>`;
    outputElement.innerHTML=`<h1>${inputElement.value}</h1>`; 

}
function textSecond()
{
    outputElement.innerHTML=`<h2>${inputElement.value}</h2>`;
}
function textThird()
{
    outputElement.innerHTML=`<h3>${inputElement.value}</h3>`;
}

buttonOne.addEventListener('click',textFirst);
buttonTwo.addEventListener('click',textSecond);
buttonThree.addEventListener('click',textThird);