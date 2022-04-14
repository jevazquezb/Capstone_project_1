const menuBtn = document.querySelector('.menu-btn');
const dynMenu = document.querySelector('.dynamic-menu');
const menuItems = document.querySelectorAll('.dynamic-menu > *');

function displayMenu() {
  dynMenu.style.right = '0%';
}

function hideMenu(item) {
  item.addEventListener('click', () => {
    dynMenu.style.right = '100%';
  });
}

menuBtn.addEventListener('click', displayMenu);
menuItems.forEach(hideMenu);