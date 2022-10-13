//Create a mouse object that has four properties and three methods

const mouse = {};

mouse.make = 'Logitech';
mouse.color = 'black';
mouse.type = 'gaming';
mouse.connection = 'wired';
mouse.click = function () {
  alert('CLICK!');
}
mouse.scroll = function () {
  alert('scrolling...');
}
mouse.rightClick = function () {
  alert('RIGHT click!');
}

console.log(mouse);


