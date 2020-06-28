let menuIcons = document.querySelectorAll(`.menu .menu-item`),
    menu = document.querySelector(`.menu`),
    body = document.querySelector(`body`),
    title = document.querySelector(`.title`),
    column = document.querySelectorAll(`.column`),
    ads = document.querySelector(`.adv`),
    promptAnswer = document.querySelector(`#prompt`);

menu.insertBefore(menuIcons[2], menuIcons[1]);

let menuIcon4 = document.createElement(`li`);
menu.appendChild(menuIcon4);
menuIcon4.classList.add(`menu-item`);
menuIcon4.textContent = `Пятый пункт`;

body.style.background = `url('img/apple_true.jpg')`;

title.textContent = `Мы продаем только подлинную технику Apple`;

// column[1].removeChild(ads); // or:
ads.remove();

let attitude = prompt(`What do you think about Apple?`, ``);
promptAnswer.textContent = attitude;