var light_mode = false;

function switchTheme(e) {
  var body = document.body;
  var background = document.getElementById("background");
  var overview_heading = document.getElementById("overview_heading");
  var text_white = document.querySelectorAll(".text-white");
  var following = document.querySelectorAll(".following");
  var cards = document.querySelectorAll(".card");
  var theme_button = document.querySelectorAll(".darkmode_button_slider");

  if (e.checked == true) {
    light_mode = true;
    body.style.setProperty("background", "white");
    background.style.setProperty("background", "rgb(247, 249, 255)");

    for (i = 0; i < theme_button.length; i++) {
      theme_button[i].classList.add("light_theme");
    }
    for (i = 0; i < text_white.length; i++) {
      text_white[i].style.setProperty("color", "black", "important");
    }

    for (i = 0; i < following.length; i++) {
      following[i].style.setProperty("color", "black", "important");
    }

    for (i = 0; i < cards.length; i++) {
      cards[i].style.setProperty("background", "rgb(241, 243, 250)");
    }

    overview_heading.style.setProperty(
      "color",
      "rgb(99, 104, 125)",
      "important"
    );
  }

  if (e.checked == false) {
    light_mode = false;
    body.style.setProperty("background", "");
    background.style.setProperty("background", "");

    for (i = 0; i < theme_button.length; i++) {
      theme_button[i].classList.remove("light_theme");
    }

    for (i = 0; i < text_white.length; i++) {
      text_white[i].style.setProperty("color", "");
    }

    for (i = 0; i < following.length; i++) {
      following[i].style.setProperty("color", "");
    }

    for (i = 0; i < cards.length; i++) {
      cards[i].style.setProperty("background", "");
    }

    overview_heading.style.setProperty("color", "");
  }
}

function changeColorOnHover(e) {
  if (light_mode == true) {
    e.classList.add("light_theme_hover");
  } else {
    e.classList.remove("light_theme_hover");
  }
}
