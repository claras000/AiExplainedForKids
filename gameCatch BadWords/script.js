$(function () {
  the_game = function () {
    if (check_egg_hits_floor(letter01) || check_egg_hits_basket(letter01)) {
      set_egg_to_initial_position(letter01);
    } else {
      egg_down(letter01);
    }

    if (check_egg_hits_floor(letter02) || check_egg_hits_basket(letter02)) {
      set_egg_to_initial_position(letter02);
    } else {
      egg_down(letter02);
    }

    if (check_egg_hits_floor(letter03) || check_egg_hits_basket(letter03)) {
      set_egg_to_initial_position(letter03);
    } else {
      egg_down(letter03);
    }

    if (life > 0) {
      anim_id = requestAnimationFrame(the_game);
    } else {
      stop_the_game();
    }
  };

  anim_id = requestAnimationFrame(the_game);
});
