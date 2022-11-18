const searchBarContrainerEl = document.querySelector('.search-bar-container');
const magnifierEl = document.querySelector('.magnifier')

magnifierEl.addEventListener('click', ()=>{
    searchBarContrainerEl.classList.toggle('active')
});