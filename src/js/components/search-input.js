const btnSearch = document.querySelector('.btn--search');
const formSearch = document.querySelector('.form--header');
const inputSearch = document.querySelector('#form-search');

document.addEventListener('click', (e) => {
    if (e.target !== btnSearch && e.target.closest('#form-search') == null) {
        formSearch.classList.remove('form--header-open')
        btnSearch.classList.remove('btn--search-open');
        inputSearch.value = ''
    }
    if (e.target == btnSearch) {
        btnSearch.classList.toggle('btn--search-open');
        formSearch.classList.toggle('form--header-open');
    }
});

