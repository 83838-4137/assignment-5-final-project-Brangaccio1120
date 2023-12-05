const nav = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.hamburgerMenu');

hamburgerMenu.addEventListener('click', () => {nav.classList.toggle('nav--toggle');
hamburgerMenu.classList.toggle('hamburgerMenu--toggle');
});


const resultsList = document.getElementById('forum-post')
new URLSearchParams(window.location.search).forEach((value,name) => {
  resultsList.append(`${name}: ${value}`)
  resultsList.append(document.createElement('br'))
})
