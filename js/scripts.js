$(function(){
  $("#formOne").submit(function(event) {
    var animal = $("input#animal").val();
    var color = $("input#color").val();
    var cheese = $("input#cheese").val();
    var tv = $("input#tv").val();
    var book =$("input#book").val();
    var favorites = [animal, color, cheese, tv, book]
    var text = [];

    text.push(favorites[3], favorites[0], favorites[4]);
    $("ul").prepend("<li>" + text[0] + "</li>");
    $("ul").prepend("<li>" + text[1] + "</li>");
    $("ul").prepend("<li>" + text[2] + "</li>");



    $(".favoriteThings").text(text);


      event.preventDefault();

  });





});
