$(document).ready(function () {
  var letters = $('h1').text();
  var nHTML = '';
  for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
    var letter = letters_1[_i];
    nHTML += "<span class='a'>" + letter + '</span>';
  }
  $('h1').html(nHTML);
});
