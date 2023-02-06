// grab a reference to the element that we will be attaching events to
const elBox = document.getElementById('box');

// grab a reference to the 'history' panel
const elHistory = document.getElementById('history');

// attach a series of mouse events to this element
// each of these events will update the 'history' panel
elBox.onclick = function() {
  elHistory.innerHTML += 'clicked<br>';
}
elBox.ondblclick = function() {
  elHistory.innerHTML += 'double clicked<br>';
}
elBox.onmousedown = function() {
  elHistory.innerHTML += 'mouse down<br>';
}
elBox.onmouseup = function() {
  elHistory.innerHTML += 'mouse up<br>';
}
elBox.onmouseover = function() {
  elHistory.innerHTML += 'mouse over<br>';
}
elBox.onmouseout = function() {
  elHistory.innerHTML += 'mouse out<br>';
}
