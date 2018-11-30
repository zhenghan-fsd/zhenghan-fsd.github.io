const myImage = document.querySelector('img');
// myImage.onclick = function() {
//   const mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/xiao-daner.jpg') {
//     myImage.setAttribute('src', 'images/three-eggs.jpeg');
//   } else {
//     myImage.setAttribute('src', 'images/xiao-daner.jpg');
//   }
// };

myImage.addEventListener('click', function() {
  console.log(this);
  const src = this.getAttribute('src');
  if (src === 'images/xiao-daner.jpg') {
    this.setAttribute('src', 'images/three-eggs.jpeg');
    this.setAttribute('alt', 'three littles');
  } else {
    this.setAttribute('src', 'images/xiao-daner.jpg');
    this.setAttribute('alt', 'one littles');
  }
});

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.addEventListener('click', setUserName);
