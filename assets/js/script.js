const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

document.getElementById('tgForm').addEventListener('click', function() {

  const name = document.getElementById('fio').value;
  const date = document.getElementById('date').value;
  const phone = document.getElementById('phone').value;

  const token = '7290942417:AAHa0KnQyDBaElA6zWBvi6_vHBZh9BRmVjY';
  const chatId = '@ona_bola_clinic_lids';

  const message = `📥 Yangi bron:\n👤 Ism: ${name}\n📅 Sana: ${date}\n📞 Tel: ${phone}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message
  })
})
.then(response => response.json())
.then(data => {
  console.log('Message sent:', data);
})
.catch(error => {
  console.error('Error:', error);
});
});
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-type-${lang}`);
  });
}
changeLanguage('uz');