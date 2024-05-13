$(document).ready(function () {
  var containerWidth = $("#container").width();
  var basketWidth = $("#basket").width();
  var containerOffset = $("#container").offset().left;

  $("#container").on("mousemove", function (e) {
    var mouseX = e.pageX - containerOffset;
    var basketX = mouseX - basketWidth / 2;

    // Begrenzen Sie die Bewegung des Korbs innerhalb des Containers
    if (basketX < 0) {
      basketX = 0;
    } else if (basketX + basketWidth > containerWidth) {
      basketX = containerWidth - basketWidth;
    }

    $("#basket").css("left", basketX);
  });
});

function egg_down(egg) {
  var egg_current_position = parseInt(egg.css("top"));
  var new_position = egg_current_position + speed; // Ändern Sie hier die Höhe je nach Bedarf
  egg.css("top", new_position);
}

function check_egg_hits_floor(egg) {
  if (collision(egg, floor)) {
    show_bulls_eye(egg);
    decrement_life();
    return true;
  }
  return false;
}

function set_egg_to_initial_position(egg) {
  var randomTopPercentage = Math.floor(Math.random() * 40); // Zufällige Zahl zwischen 0 und 30
  egg.css("top", randomTopPercentage + "%");
}

function show_bulls_eye(egg) {
  bullseye_num = egg.attr("data-bullseye");
  $("#bullseye" + bullseye_num).show();
  hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
  setTimeout(function () {
    $("#bullseye" + bullseye_num).hide();
  }, 800);
}

function decrement_life() {
  life--;
  life_span.text(life);
}

function check_egg_hits_basket(egg) {
  if (collision(egg, basket)) {
    egg_top = parseInt(egg.css("top"));
    if (egg_top < basket_top) {
      update_score();
      return true;
    }
  }
  return false;
}

function update_score() {
  score++;
  if (score % 10 === 0 && speed <= max_speed) {
    speed++;
  }
  score_span.text(score);
  score_1.text(score);

  // Überprüfen, ob der Score 20 erreicht hat
  if (score === 20) {
    stop_the_game();
    var newPage = "../winGameCatch01.html";
    window.location.href = newPage;
  }
}

function stop_the_game() {
  cancelAnimationFrame(anim_id);
  restart.slideDown();
}

restart.click(function () {
  location.reload();
});
