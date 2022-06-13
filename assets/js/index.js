document.querySelectorAll('.products-chooser-list li').forEach( filter => {
    filter.addEventListener("click", () => {
        document.querySelector('.products-chooser-list li.active').classList.remove('active')
        filter.classList.add('active');
    })
});


window.onscroll = () =>{
    if((document.body.scrollTop >= 650 ) || (document.documentElement.scrollTop >= 650 )){
        document.querySelector('.header').style.backgroundColor = "rgba(33, 37, 41, 0.4)";
    }
    else {
        document.querySelector('.header').style.backgroundColor = null;
    }
}