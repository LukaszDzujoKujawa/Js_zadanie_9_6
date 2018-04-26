var button = document.getElementById('addElem');

button.addEventListener('click', function () {
  var list = document.getElementById('list');
  var item = document.getElementsByTagName('li');
  var newElem = document.createElement('li');
  newElem.innerHTML = 'item ' + item.length;
  list.appendChild(newElem);
});