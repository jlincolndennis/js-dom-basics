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

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = 'another SuperCool list item! Woo!';
console.log(newElement);
console.log(li);
getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend, my friend!";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

var andOneMoreListElement = document.createElement('li');
andOneMoreListElement.innerText = "The Prepend Doesn't End!";
getSingleElement.insertBefore(andOneMoreListElement, getSingleElement.firstChild);
console.log(allListItems);
