function doSomething() {
  $('.results').append('<p>Hello</p>');
}

$(function() {
  $('#pressme').click(doSomething);
});
