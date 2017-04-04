function doSomething() {
  $('body').append('<p>Hello</p>');
}

$(function() {
  $('#pressme').click(doSomething);
});
