console.log('Sanity Check!');
 var firstParagraph = document.getElementById('main');
 console.log(firstParagraph);

 var getAllElements = document.getElementsByTagName('ul');
 console.log(getAllElements);

 var getSingleElement = document.getElementsByTagName('ul')[0];
 console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

var main = document.querySelector('#main');
console.log(main);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

document.getElementById('main').style.backgroundColor = "goldenrod";


for (var i = 0; i < oddElements.length; i++) {
  document.getElementsByClassName("odd")[i].style.backgroundColor = "yellow";
};

for (var i = 0; i < evenElements.length; i++) {
  document.getElementsByClassName("even")[i].style.backgroundColor = "green";
};

var propertyTest = document.getElementById('main');
propertyTest.style.fontFamily = 'monospace';
propertyTest.style.fontSize = "200%";
