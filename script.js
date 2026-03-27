let button = document.querySelector('.change-lang')
let listlang = document.querySelector('.lang-dropdown')
let langs = document.querySelectorAll('ul.lang-dropdown li')

button.onclick = function() {
    if (listlang.style.display == 'none') {
        listlang.style.display = 'flex'
    } else {
        listlang.style.display = 'none'
    }
}

function changeLanguage(currect_lang) {
    let elements = document.querySelectorAll('[data-ru][data-en]')
    for (let el of elements) {
        console.log(el)
        if (currect_lang === 'Ru') {
            el.textContent = el.dataset.ru
        } else if (currect_lang === 'En') {
            el.textContent = el.dataset.en
        }
    }
}

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
}
