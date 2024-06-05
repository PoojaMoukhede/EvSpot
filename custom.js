
$(document).ready(function () {

  $("button.navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
  });
  $(".dropdown-toggle").click(function () {
    $(".nav-item.dropdown").toggleClass("show-dropdown");


  });
});

function selectSubMenuResponsive(hoveredMenu){
  if($(window).width() < 992){
    if(hoveredMenu.querySelector('.sub-dropdown-menu').classList.contains("show-sub-menu")){

          hoveredMenu.querySelector('.sub-dropdown-menu').classList.remove("show-sub-menu");
          $(".sub-dropdown-menu").removeClass("show-sub-menu");

          $(".products-type > svg").css("transform","rotate(90deg)");
          hoveredMenu.querySelector('svg').style.transform = "rotate(90deg)";
    }
    else{
          $(".sub-dropdown-menu").removeClass("show-sub-menu");
          hoveredMenu.querySelector('.sub-dropdown-menu').classList.add("show-sub-menu");
          
          $(".products-type > svg").css("transform","rotate(90deg)");
          hoveredMenu.querySelector('svg').style.transform = "rotate(270deg)";
    }
  }
}
