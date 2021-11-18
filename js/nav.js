window.onload = function() {

  let menu = document.querySelector('.menu-btn');
  let menuList = document.querySelector('.menu-wrap');
  let menuClick = document.querySelectorAll('.menu-wrap a');
  let header = document.querySelector('header');

  Array.prototype.forEach.call(menuClick, function(e) {
    e.addEventListener('click',function() {
      menuClose();
    })
  })
  menu.addEventListener('click', function(e) {
    let clName = e.target.className;
    if(clName === 'menu-btn') {
      menuOpen();
    }
    if(clName === 'menu-btn close') {
      menuClose();
    }
  });
  function menuOpen() {
    header.classList.add('open');
    menu.classList.add('close');
    menuList.classList.add('open');
  }
  function menuClose() {
    setTimeout(function() {
      header.classList.remove('open');
    },250);
    menu.classList.remove('close');
    menuList.classList.remove('open');
  }
}