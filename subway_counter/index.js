//document.getElementById('count-el').innerText=5
//  let count = 0
//  console.log(count);

let lap1 = 0
let lap2 = 33
let lap3 = 36
// let sum = lap1 + lap2 + lap3
// console.log(sum);

// function sum() {
//     const total = lap1 + lap2 + lap3
//     console.log(total);
// }
//  function increment(){
//    lap1 = lap1 + 1
//  }
//  increment()
//  increment()
//  console.log(lap1);


let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl);


function increment(){
     count = count+1
     countEl.innerText = count
    // console.log(count);
}



let name1  = document.getElementById('naming')
let fullName = 'My name is  '
let name2 = 'Kamola'

name1.innerHTML = fullName + name2 +  "😍";

let saveEl = document.getElementById('save-el')

function save(){
    let saveElement = count + " - "
    saveEl.textContent += saveElement
    countEl.textContent = 0
    // count = 0

}


let myPoints = 2

function addPoints() {
    myPoints += 3
}
addPoints()
addPoints()
addPoints()

console.log(myPoints); 

 


