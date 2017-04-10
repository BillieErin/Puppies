function doSomething() {
  $('.results').append('<p>Hello</p>');
}

$(function() {
  $('#pressme').click(doSomething);
});

var Puppies = ['Labrador', 'Retriever','Pug','Spaniel','Huskie']

for (var i = 0; i < Puppies.length; i++) {
  console.log(Puppies[i]);
