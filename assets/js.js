  var score = 0;
  var fruitsArr = ["assets/img/apple.jpg", "assets/img/cherry.jpg", "assets/img/orange.jpg", "assets/img/pear.jpg", "assets/img/pineapple.jpg", "assets/img/strawberry.jpg", "assets/img/watermelon.jpg"];

  var namesArr = ["Apple", "Cherry", "Orange", "Pear", "Pineapple", "Strawberry", "Watermelon"];

  $(document).ready(function() {

    shuffle(fruitsArr);
    $.each(fruitsArr, function(index, value) {

      var fruit = value.slice(11, -4);

      // $("#fruits").append("<div><img src=" + value + " /></div>");

      // I used appendTo because I just wanted to chain the draggable with the append
      $("<div><img src=" + value + " /></div>").appendTo("#fruits").draggable({
        revert: true,
        scope: fruit
      });


    });

    shuffle(namesArr);
    $.each(namesArr, function(index, value) {
      // $("#fruits").append("<div><img src=" + value + " /></div>");

      // I used appendTo because I just wanted to chain the draggable with the append
      $("<div>" + value + "</div>").appendTo("#droparea").droppable({
        scope: value.toLowerCase(),
        drop: function(event, ui) {
          $(ui.draggable).append($(this).text());
          score++;
          $(this).hide("puff", "fast");

          if (score == namesArr.length){
            $("<div><p>You won!! Do you want to play again?</p></div>").dialog({modal:true,
              buttons:[{text:"Yes", click:function(){
              window.location.reload();
            }}, {text:"No", click:function(){
              $(this).dialog("close")
            }}]
          });
        }
      }
    });


    });


  });

  function shuffle(arr) {
    return arr.sort(function() {
      return .5 - Math.random();
    });
  };
