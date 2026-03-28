let button = document.querySelector('.change-lang')
let listlang = document.querySelector('.lang-dropdown')
let langs = document.querySelectorAll('ul.lang-dropdown li')

/*Смена языка */
button.onclick = function() {
    if (listlang.style.display == 'none') {
        listlang.style.display = 'flex'
    } else {
        listlang.style.display = 'none'
    }
};

function changeLanguage(currect_lang) {
    let elements = document.querySelectorAll('[data-ru][data-en]')
    for (let el of elements) {
        if (currect_lang === 'Ru') {
            el.textContent = el.dataset.ru
        } else if (currect_lang === 'En') {
            el.textContent = el.dataset.en
        }
        if (el.tagName === "IMG") {
            el.alt = el.dataset[currect_lang === "Ru" ? 'ru' : 'en']
        }
    }
};

for (let lang of langs) {
    lang.onclick = function() {
        for (let item of langs) {
            item.classList.remove('activelang')
        }
        let currect_lang = lang.textContent
        lang.classList.add('activelang')
        button.textContent = currect_lang
        listlang.style.display = 'none'

        changeLanguage(currect_lang)
    }
};
/*Конец скрипта на смену языка */

/*Кнопка прокрутки вверх страницы */
let buttonScrollTo = document.querySelector('.to-top')
if (!buttonScrollTo) {
    console.log('Кнопка не найдена')
}

window.onscroll = function() {
    if (window.scrollY >= 250) {
        buttonScrollTo.style.opacity = 1
        buttonScrollTo.style.visibility = 'visible'
    } else {
        buttonScrollTo.style.opacity = 0
        buttonScrollTo.style.visibility = 'hidden'
    }
};

buttonScrollTo.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}
/*Конец скрипта кнопки */