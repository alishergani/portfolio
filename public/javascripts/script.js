import '../sass/style.scss';

// console.log(location.pathname);

document.querySelectorAll('.menu-item').forEach(item => {
    if(location.pathname == ("/" + item.dataset.label)) {
        item.classList.add('active')
    }    
})
