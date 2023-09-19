// Question1
const btn = document.querySelectorAll('button');
function clickEvent(){
    alert('Button clicked!');
}

btn[0].addEventListener('click', clickEvent);

// Question2
function submitEvent() {
    let inputValue = document.getElementById('myInput').value;
    alert(inputValue);
}

btn[1].addEventListener('click', submitEvent)

// Question3
function calculateSum(num1, num2) {
    const sum = num1 + num2;
    const pEl = document.getElementById('sum');
    pEl.textContent = sum;
    return sum;
}
const sumButn = document.getElementById('sumButn'); 
sumButn.addEventListener('click', calculateSum)

// function calculateSum() {const sum = calculateSum('first'.valueOf, 'second'.valueOf);
// sum.textContent = sum
// }

// Question4
function myFav() {
    const myFavE = document.querySelector('.myFav');
    myFavE.textContent = 'New text here!';
}
document.getElementById('changeTextButton').addEventListener('click', myFav );
